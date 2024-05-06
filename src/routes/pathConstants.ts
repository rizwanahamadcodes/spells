export const paramConstants = {
    SPELLID: "id",
};

const pathConstants = {
    HOME: "/",
    SPELLS: "/spells",
    SPELL_DETAILS: `/spells/:${paramConstants.SPELLID}`,
    FAVORITES: "/favorites",
};

export default pathConstants;
