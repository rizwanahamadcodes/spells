import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface Spell {
    index: string;
    level: number;
    name: string;
    url: string;
}

type FavoriteState = {
    favorites: Spell[];
};

const loadFavoritesFromLocalStorage = (): Spell[] => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const saveFavoritesToLocalStorage = (favorites: Spell[]) => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: loadFavoritesFromLocalStorage(),
    } as FavoriteState,
    reducers: {
        addFavorite: (state, action: PayloadAction<Spell>) => {
            if (
                !state.favorites.some(
                    (spell) => spell.index === action.payload.index
                )
            ) {
                state.favorites.push(action.payload);
                saveFavoritesToLocalStorage(state.favorites);
            }
        },
        removeFavorite: (state, action: PayloadAction<string>) => {
            state.favorites = state.favorites.filter(
                (spell) => spell.index !== action.payload
            );
            saveFavoritesToLocalStorage(state.favorites);
        },
    },
});

export const favoritesReducer = favoritesSlice.reducer;
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectAllFavorites = (state: RootState) =>
    state.favorites.favorites;
export const isFavorite = (state: RootState, spellIndex: string) =>
    state.favorites.favorites.some((spell) => spell.index === spellIndex);
export const selectNoOfFavorites = (state: RootState) =>
    state.favorites.favorites.length;
