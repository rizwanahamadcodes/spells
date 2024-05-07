import useData from "./useData";

export interface Spell {
    index: string;
    name: string;
    background_image: string;
    metacritic: number;
    rating_top: number;
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
