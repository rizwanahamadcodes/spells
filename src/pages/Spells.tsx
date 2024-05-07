import Container from "../components/Container/Container";
import Section from "../components/Section";
import useSpells from "../hooks/useSpells";

const Spells = () => {
    const { data, error, loading } = useSpells();

    if (error) return <h2>{error}</h2>;

    return (
        <div className="min-h-screen relative pt-navHeight pb-2">
            <Section>
                <Container>
                    {loading ? (
                        <></>
                    ) : (
                        data.map((spell) => <h2>{spell.index}</h2>)
                    )}
                </Container>
            </Section>
        </div>
    );
};

export default Spells;
