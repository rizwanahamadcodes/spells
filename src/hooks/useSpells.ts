import useData from "./useData";

export interface Spell {
    index: string;
    level: number;
    name: string;
    url: string;
}
const useSpells = () => {
    return useData<Spell>(
        "/spells",
        {
            params: {},
        },
        []
    );
};
export default useSpells;
