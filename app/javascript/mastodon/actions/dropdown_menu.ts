import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

interface DropdownMenuState {
  openId: number | null;
  keyboard: boolean;
  scrollKey: string | undefined;
}

const initialState: DropdownMenuState = {
  openId: null,
  keyboard: false,
  scrollKey: undefined,
};

interface OpenDropdown {
  id: number;
  keyboard: boolean;
  scrollKey?: string;
}

interface CloseDropdown {
  id: number;
}

export const { actions, reducer } = createSlice({
  name: 'dropdownMenu',
  initialState,
  reducers: {
    closeDropdownMenu(state, action: PayloadAction<CloseDropdown>) {
      const { id } = action.payload;
      if (state.openId === id) {
        state.openId = null;
        state.scrollKey = undefined;
      }
    },

    openDropdownMenu(state, action: PayloadAction<OpenDropdown>) {
      const { id, keyboard, scrollKey } = action.payload;
      state.openId = id;
      state.keyboard = keyboard;
      state.scrollKey = scrollKey;
    },
  },
});

export const { closeDropdownMenu, openDropdownMenu } = actions;
