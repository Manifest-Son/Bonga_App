import { create } from "zustand";
//create makes the useAuthStore a store

const useAuthStore = (set) => ({
  //defines the initial states
  user: null,
  token: null,
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  logout: () => set({ user: null, token: null }),
});

const authStore = create(useAuthStore);
export default authStore;

export const userStore = create((set) => ({
  user: {},
  setUser: (userData) => set({ user: userData }),
  updateUser: (updatedData) =>
    set((state) => ({
      user: { ...state.user, ...updatedData },
    })),
}));
