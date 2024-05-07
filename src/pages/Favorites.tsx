import { useSelector } from "react-redux";
import SpellCard from "../components/SpellCard";
import Section, { SectionTitle } from "../components/Section";
import Container from "../components/Container/Container";
import SpellsGrid from "../components/SpellsGrid";
import { selectAllFavorites } from "../store/slices/favoritesSlice";
import { RootState } from "../store/store";
import pathConstants from "../routes/pathConstants";
import { Link } from "react-router-dom";

const Favorites = () => {
    const favorites = useSelector((state: RootState) =>
        selectAllFavorites(state)
    );

    return (
        <div className="pt-navHeight">
            <Section>
                <Container>
                    <SectionTitle>Favorites</SectionTitle>
                    {favorites.length > 0 ? (
                        <SpellsGrid>
                            {favorites.map((spell) => (
                                <SpellCard key={spell.index} spell={spell} />
                            ))}
                        </SpellsGrid>
                    ) : (
                        <p className="rounded-0.5 p-1 bg-white">
                            No favorites added yet, start by adding some from{" "}
                            <Link
                                to={pathConstants.SPELLS}
                                className="underline text-primary">
                                spells
                            </Link>
                        </p>
                    )}
                </Container>
            </Section>
        </div>
    );
};

export default Favorites;
