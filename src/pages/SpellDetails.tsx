import { useParams } from "react-router-dom";
import Container from "../components/Container/Container";
import Section from "../components/Section";
import { paramConstants } from "../routes/pathConstants";
import useSpell from "../hooks/useSpell";

const SpellDetails = () => {
    const spellIndex = useParams()[paramConstants.SPELLID];

    const { error, loading, data } = useSpell(spellIndex as string);
    console.log(data);

    if (error) {
        return (
            <div className="pt-navHeight">
                <Section>
                    <Container>
                        <div className="rounded-0.5 p-1 bg-white">{`Spell with the name: ${spellIndex} was not found`}</div>
                    </Container>
                </Section>
            </div>
        );
    }

    return (
        <div className="pt-navHeight">
            <Section>
                <Container>{loading ? "loading" : "done"}</Container>
            </Section>
        </div>
    );
};

export default SpellDetails;
