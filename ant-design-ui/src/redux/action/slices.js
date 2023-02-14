import { createSlice } from '@reduxjs/toolkit';

export const formSlice = createSlice({
    name: 'form',
    initialState: [],
    reducers: {
        addformData: (state, action) => {
            state.push(action.payload);
        },
        deleteformData: (state, action) => {
            state.push(action.payload);
        }
    }
});

///////// export reducers /////////
export default formSlice.reducer;

//////// export actions ///////////
export const { addformData } = formSlice.actions;