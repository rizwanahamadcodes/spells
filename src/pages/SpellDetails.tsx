import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section";
import { paramConstants } from "../routes/pathConstants";
import SpellDetailsSkeleton from "./SpellDetailsSkeleton";
import { formatName } from "../utilities/formatName";

const SpellDetails = () => {
    const spellIndex = useParams()[paramConstants.SPELLID];
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [spellData, setSpellData] = useState<>();

    useEffect(() => {
        const fetchSpellData = async () => {
            try {
                const response = await axios.get(
                    `https://www.dnd5eapi.co/api/spells/${spellIndex}`
                );
                setSpellData(response.data);
            } catch (error: any) {
                setError(error.message as string);
            } finally {
                setLoading(false);
            }
        };

        fetchSpellData();

        return () => {};
    }, [spellIndex]);

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
                        <div className="max-w-3xl rounded-0.5 p-1 bg-white shadow">
                            <h1 className="sm:text-1.5 text-1.75 font-medium text-primary-900">
                                {spellData.name}
                            </h1>
                            <div className="flex gap-1">
                                <p className=" text-0.875">
                                    {formatName(spellData.school.index)}
                                </p>
                                <p>-</p>
                                <p className="text-0.875">
                                    {spellData.components.join(", ")}
                                </p>
                            </div>
                            <p className="mb-1">{spellData.desc}</p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1">
                                {
                                    <>
                                        <Detail
                                            title="Level"
                                            value={spellData.level}
                                        />
                                        <Detail
                                            title="Casting Time"
                                            value={spellData.casting_time}
                                        />
                                        <Detail
                                            title="Range"
                                            value={spellData.range}
                                        />
                                        <Detail
                                            title="Components"
                                            value={spellData.components.join(
                                                ", "
                                            )}
                                        />
                                        <Detail
                                            title="Duration"
                                            value={spellData.duration}
                                        />
                                        <Detail
                                            title="School"
                                            value={spellData.school.index}
                                        />
                                        <Detail
                                            title="Damage/Effect"
                                            value={
                                                spellData.damage?.damage_type
                                                    .index
                                            }
                                        />
                                    </>
                                }
                            </div>
                        </div>
                    )}
                </Container>
            </Section>
        </div>
    );
};

export default SpellDetails;

type DetailProps = {
    title: string;
    value: string;
};

export const Detail = (props: DetailProps) => {
    const { title, value } = props;

    return (
        <div>
            <p>
                <span className="text-gray-500">{`${title.toUpperCase()}: `}</span>
                <span className="text-black">{value}</span>
            </p>
        </div>
    );
};
