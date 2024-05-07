import CardSkeleton from "../components/CardSkeleton";
import Container from "../components/Container/Container";
import Section, { SectionTitle } from "../components/Section";
import SpellCard from "../components/SpellCard";
import SpellsGrid from "../components/SpellsGrid";
import useSpells from "../hooks/useSpells";

const Spells = () => {
    const { data, error, loading } = useSpells();

    if (error) return <h2>{error}</h2>;
    console.log(data);
    const cardSkeletons = new Array(38).fill(null);

    return (
        <div className="pt-navHeight">
            <Section className="">
                <Container>
                    <SectionTitle defaultBottomMargin>All Spells</SectionTitle>
                </Container>
                <Container>
                    {loading ? (
                        <SpellsGrid>
                            {cardSkeletons.map((_, index) => (
                                <CardSkeleton key={index} />
                            ))}
                        </SpellsGrid>
                    ) : (
                        <SpellsGrid>
                            {data.map((spell) => (
                                <SpellCard spell={spell}></SpellCard>
                            ))}
                        </SpellsGrid>
                    )}
                </Container>
            </Section>
        </div>
    );
};

export default Spells;
