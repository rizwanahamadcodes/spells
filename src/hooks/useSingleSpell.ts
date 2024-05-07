import { useState, useEffect } from "react";
import axios from "axios";

export type SpellDetailType = {
    name: string;
    index: string;
    school: {
        index: string;
    };
    components: string[];
    desc: string;
    level: number;
    casting_time: string;
    range: string;
    duration: string;
    damage?: {
        damage_type: {
            index: string;
        };
    };
    url: string;
};

type FetchSpellResult = {
    data: SpellDetailType | null;
    error: string;
    loading: boolean;
};

const useSingleSpell = (spellIndex: string): FetchSpellResult => {
    const [data, setData] = useState<SpellDetailType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchSpellData = async () => {
            try {
                const response = await axios.get<SpellDetailType>(
                    `https://www.dnd5eapi.co/api/spells/${spellIndex}`
                );
                setData(response.data);
            } catch (error: any) {
                setError(error.message || "An error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchSpellData();

        return () => {
            // Cleanup function
        };
    }, [spellIndex]);

    return { data, error, loading };
};

export default useSingleSpell;
