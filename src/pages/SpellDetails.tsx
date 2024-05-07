import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section";
import useSingleSpell, { SpellDetailType } from "../hooks/useSingleSpell";
import { paramConstants } from "../routes/pathConstants";
import { formatName } from "../utilities/formatName";
import SpellDetailsSkeleton from "./SpellDetailsSkeleton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
    Spell,
    addFavorite,
    isFavorite,
    removeFavorite,
} from "../store/slices/favoritesSlice";
import { GoHeart, GoHeartFill } from "react-icons/go";

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

const SpellDetailsContent = ({ spellData }: { spellData: SpellDetailType }) => {
    const dispatch = useDispatch();

    const isSpellFavorite = useSelector((state: RootState) =>
        isFavorite(state, spellData.index)
    );

    const handleToggleFavorite = () => {
        const spell: Spell = {
            index: spellData.index,
            level: spellData.level,
            name: spellData.name,
            url: spellData.url,
        };

        if (isSpellFavorite) {
            dispatch(removeFavorite(spell.index));
        } else {
            dispatch(addFavorite(spell));
        }
    };
    return (
        <div className="max-w-3xl rounded-0.5 p-1 bg-white shadow">
            <div className="flex items-center justify-between">
                <h1 className="sm:text-1.5 text-1.75 font-medium text-primary-900">
                    {spellData.name}
                </h1>
                {isSpellFavorite ? (
                    <GoHeartFill
                        className="cursor-pointer text-[red] text-1.375 transition-all hover:text-[red]"
                        onClick={handleToggleFavorite}
                    />
                ) : (
                    <GoHeart
                        className="cursor-pointer text-gray-700 text-1.375 transition-all hover:text-[red]"
                        onClick={handleToggleFavorite}
                    />
                )}
            </div>
            <div className="flex gap-1">
                <p className=" text-0.875">
                    {formatName(spellData.school.index)}
                </p>
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
};

type DetailProps = {
    title: string;
    value: string | number;
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
