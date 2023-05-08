import { createSlice } from '@reduxjs/toolkit';

interface MarvelState {
    name: string;
    description: string;
    comics_appeared_in: string;
    super_power: string;
    date_created: string,
    user_token: string;
    character: string;
}

const initialState: MarvelState = {
    name: 'El Diablo',
    description: '',
    comics_appeared_in: '',
    super_power: '',
    date_created: '',
    user_token: '',
    character: '',
}

const rootSlice = createSlice({
    name: 'root',
    initialState,
    reducers: {
        chooseName: (state, action) => { state.name = action.payload },
        chooseDescription: (state, action) => { state.description = action.payload },
        chooseComicsAppearedIn: (state, action) => { state.comics_appeared_in = action.payload },
        chooseSuperPower: (state, action) => { state.super_power = action.payload },
        chooseDateCreated: (state, action) => { state.date_created = action.payload },
        chooseUserToken: (state, action) => { state.user_token = action.payload },
        chooseCharacter: (state, action) => { state.character = action.payload }
    },
})

//export reducer
export const reducer = rootSlice.reducer
export const {
    chooseName,
    chooseDescription,
    chooseComicsAppearedIn,
    chooseSuperPower,
    chooseDateCreated,
    chooseUserToken,
    chooseCharacter
} = rootSlice.actions 