import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section";
import useSingleSpell, { SpellDetailType } from "../hooks/useSingleSpell";
import { paramConstants } from "../routes/pathConstants";
import { formatName } from "../utilities/formatName";
import SpellDetailsSkeleton from "./SpellDetailsSkeleton";

const SpellDetails = () => {
    const spellIndex = useParams()[paramConstants.SPELLID];
    const {
        data: spellData,
        error,
        loading,
    } = useSingleSpell(spellIndex as string);

    if (error) {
        return (
            <div className="pt-navHeight">
                <Section>
                    <Container>
                        <div className="rounded-0.5 p-1 bg-white">{`Error: ${error}`}</div>
                    </Container>
                </Section>
            </div>
        );
    }

    return (
        <div className="pt-navHeight">
            <Section>
                <Container className="flex flex-col items-center">
                    {loading ? (
                        <SpellDetailsSkeleton />
                    ) : (
                        spellData && (
                            <SpellDetailsContent spellData={spellData} />
                        )
                    )}
                </Container>
            </Section>
        </div>
    );
};

const SpellDetailsContent = ({ spellData }: { spellData: SpellDetailType }) => (
    <div className="max-w-3xl rounded-0.5 p-1 bg-white shadow">
        <h1 className="sm:text-1.5 text-1.75 font-medium text-primary-900">
            {spellData.name}
        </h1>
        <div className="flex gap-1">
            <p className=" text-0.875">{formatName(spellData.school.index)}</p>
            <p>-</p>
            <p className="text-0.875">{spellData.components.join(", ")}</p>
        </div>
        <p className="mb-1">{spellData.desc}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
            <Detail title="Level" value={spellData.level} />
            <Detail title="Casting Time" value={spellData.casting_time} />
            <Detail title="Range" value={spellData.range} />
            <Detail
                title="Components"
                value={spellData.components.join(", ")}
            />
            <Detail title="Duration" value={spellData.duration} />
            <Detail title="School" value={spellData.school.index} />
            <Detail
                title="Damage/Effect"
                value={spellData.damage?.damage_type.index || ""}
            />
        </div>
    </div>
);

type DetailProps = {
    title: string;
    value: string;
};

const Detail = ({ title, value }: DetailProps) => (
    <div>
        <p>
            <span className="text-gray-500">{`${title.toUpperCase()}: `}</span>
            <span className="text-black">{value}</span>
        </p>
    </div>
);

export default SpellDetails;
