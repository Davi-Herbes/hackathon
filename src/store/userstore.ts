import { create } from "zustand";
import { StateType } from "./type";
import { createJSONStorage, persist } from "zustand/middleware";

export const useUserStore = create<StateType>()(
  persist(
    (set) => ({
      username: "",
      setUsername: (newName: string) => set(() => ({ username: newName })),

      phone: "",
      setPhone: (newPhone: string) => set(() => ({ phone: newPhone })),

      addr: "",
      setAddr: (newAddr: string) => set(() => ({ addr: newAddr })),

      urgence: false,
      setUrgence: (value: boolean) => set(() => ({ urgence: value })),

      description: "",
      setDescription: (newDescription: string) =>
        set(() => ({ description: newDescription })),
    }),
    { name: "user-storage", storage: createJSONStorage(() => sessionStorage) }
  )
);
