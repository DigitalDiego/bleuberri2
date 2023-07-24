import { create } from "zustand";

interface State {
  initialState: boolean;
  handleInitialState: () => void;
}

export const useMenuStore = create<State>((set) => ({
  initialState: false,
  handleInitialState: () =>
    set((state) => ({ initialState: !state.initialState })),
}));
