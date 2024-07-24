import { create } from "zustand";
//create makes the useAuthStore a store

const useAuthStore = (set) => ({
  //defines the initial states
  user: null,
  token: null,
  isAuthenticated: false,
  setUser: (user) => set({ user }),
  updateUser: (user) => set({user}),
  setToken: (token) => set({ token, isAuthenticated: true }),
  logout: () => set({ user: null, token: null , isAuthenticated: false }),
});

const authStore = create(useAuthStore);
export default authStore;

// export const userStore = create((set) => ({
//   user: {},
//   setUser: (userData) => set({ user: userData }),
//   updateUser: (updatedData) =>
//     set((state) => ({
//       user: { ...state.user, ...updatedData },
//     })),
// }));
