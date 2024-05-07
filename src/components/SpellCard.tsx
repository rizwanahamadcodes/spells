import { Link } from "react-router-dom";
import { Spell } from "../hooks/useSpells";
import pathConstants from "../routes/pathConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoHeart, GoHeartFill } from "react-icons/go";
import {
    addFavorite,
    isFavorite,
    removeFavorite,
} from "../store/slices/favoritesSlice";
import { RootState } from "../store/store";

type SpellCardProps = {
    spell: Spell;
};

const SpellCard = (props: SpellCardProps) => {
    const { spell } = props;
    const dispatch = useDispatch();
    const isSpellFavorite = useSelector((state: RootState) =>
        isFavorite(state, spell.index)
    );

    const handleToggleFavorite = () => {
        if (isSpellFavorite) {
            dispatch(removeFavorite(spell.index));
        } else {
            dispatch(addFavorite(spell));
        }
    };

    return (
        <div className="shadow rounded-0.5 bg-white p-1 flex flex-col">
            <div className="flex items-center justify-between">
                <Link
                    to={`${pathConstants.SPELLS}/${spell.index}`}
                    className="borders">
                    <h2 className="text-1.25">{spell.name}</h2>
                </Link>
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
            <h3>
                <span className="text-gray-600">Level:{` `}</span>
                {spell.level}
            </h3>
        </div>
    );
};

export default SpellCard;
