import useData from "./useData";

export interface Spell {
    index: string;
    level: number;
    name: string;
    url: string;
}
const useSpell = (spellName: string) => {
    return useData<any>(`/spells/${spellName}`);
};
export default useSpell;
