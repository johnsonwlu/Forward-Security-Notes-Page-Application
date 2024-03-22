import { createSlice } from '@reduxjs/toolkit';
import { getNotesAsync, addNoteAsync, removeNoteAsync, getSpecificNoteAsync} from './thunks';
import { REQUEST_STATE } from '../utils';

const INITIAL_STATE = {
    list: [],
    getNotes: REQUEST_STATE.IDLE,
    addNote: REQUEST_STATE.IDLE,
    removeNote: REQUEST_STATE.IDLE,
    getSpecificNote: REQUEST_STATE.IDLE
};

const notesTracker = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    extraReducers: (builder) => {
        builder
        .addCase(getNotesAsync.fulfilled, (state, action) => {
            state.getNotes = REQUEST_STATE.FULFILLED;
            state.list = action.payload;
        })
        .addCase(addNoteAsync.fulfilled, (state, action) => {
            console.log(action.payload);
            state.addNote = REQUEST_STATE.FULFILLED;
            state.list = [...state.list, action.payload[0]];
        })
        .addCase(removeNoteAsync.fulfilled, (state, action) => {
            state.removeNote = REQUEST_STATE.FULFILLED;
            state.list = state.list.filter((note) => note.id !== action.payload);
        } )
    }
});

export default notesTracker.reducer;