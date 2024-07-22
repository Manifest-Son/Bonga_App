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
