import { createAsyncThunk } from '@reduxjs/toolkit';
import UserService from './service';
import {actionTypes} from './actionTypes';
export const getNotesAsync = createAsyncThunk(
    actionTypes.GET_NOTES,
    async () => {
        return await UserService.getNotes();
    }
);

export const addNoteAsync = createAsyncThunk(
    actionTypes.ADD_NOTE,
    
    async (note) => {
        console.log(note);
        return await UserService.addNote(note);
    }
);

export const removeNoteAsync = createAsyncThunk(
    actionTypes.REMOVE_NOTE,
    async (id, {fulfillWithValue}) => {
        return fulfillWithValue(await UserService.removeNote(id));
    }
)