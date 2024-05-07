import { Link } from "react-router-dom";
import { Spell } from "../hooks/useSpells";
import pathConstants from "../routes/pathConstants";
import { GoHeart } from "react-icons/go";
import { GoHeartFill } from "react-icons/go";

type SpellCardProps = {
    spell: Spell;
};

const SpellCard = (props: SpellCardProps) => {
    const { spell } = props;

    return (
        <div className="shadow rounded-0.5 bg-white p-1 flex flex-col">
            <div className="flex items-center justify-between">
                <Link
                    to={`${pathConstants.SPELLS}/${spell.index}`}
                    className="borders">
                    <h2 className="text-1.25">{spell.name}</h2>
                </Link>
                <GoHeart className="cursor-pointer text-gray-700 text-1.25 transition-alll hover:text-[red]" />
            </div>
            <h3>
                <span className="text-gray-600">Level:{` `}</span>
                {spell.level}
            </h3>
        </div>
    );
};

export default SpellCard;
