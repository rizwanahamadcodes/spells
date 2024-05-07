import { Link } from "react-router-dom";
import { Spell } from "../hooks/useSpells";
import pathConstants from "../routes/pathConstants";

type SpellCardProps = {
    spell: Spell;
};

const SpellCard = (props: SpellCardProps) => {
    const { spell } = props;

    return (
        <div className="shadow rounded-0.5 bg-white p-1">
            <Link to={`${pathConstants.SPELLS}/${spell.index}`}>
                <h2 className="text-1.25">{spell.name}</h2>
                <h3>
                    <span className="text-gray-600">Level:{` `}</span>
                    {spell.level}
                </h3>
            </Link>
        </div>
    );
};

export default SpellCard;
