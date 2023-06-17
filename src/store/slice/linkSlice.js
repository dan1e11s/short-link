import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_API } from 'config';

export const createShortLink = createAsyncThunk(
  'links/createShortLink',
  async (url) => {
    const responce = await fetch(BASE_API + url, { method: 'POST' });

    return await responce.json();
  }
);

const initialState = {
  items: [],
  loading: 'idle',
};

const linkSlice = createSlice({
  name: 'links',
  initialState,
  extraReducers: {
    [createShortLink.rejected]: (state) => {
      state.loading = 'rejected';
    },
    [createShortLink.pending]: (state) => {
      state.loading = 'loading';
    },
    [createShortLink.fulfilled]: (state, action) => {
      const { ok, result } = action.payload;

      if (ok) {
        state.items.push(result);
        state.loading = 'idle';
      } else {
        state.loading = 'error';
      }
    },
  },
});

export const selectLoading = (state) => state.links.loading;
export const selectLinks = (state) => state.links.items;

export const linkReducer = linkSlice.reducer;
