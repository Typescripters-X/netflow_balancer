import { create } from "zustand";
import { persist } from "zustand/middleware";
import createSessionStorage from "@/utils/createSessionStorage";
import { userSchemaType } from "@/types/userSchema";


type State = {
    access_token: string,
    user: userSchemaType,
};

type Action = {
    store_access_token: (store_access_token: State['access_token']) => void,
    store_user: (store_user: State['user']) => void,
    clearSession: () => void,
}

export const useAuthStore = create<State & Action>()(
    persist(
      (set) => ({
        access_token: "",
        user: {
          id: "",
          isAdmin: false,
          mail: "",
          name: "",
        },
        store_access_token: (access_token) => set(() => ({ access_token: access_token })),
        store_user: (user) => set(() => ({ user: user })),
        clearSession: () => {
          sessionStorage.removeItem("auth");
          set(() => ({
            access_token: "",
            user: {
              id: "",
              isAdmin: false,
              mail: "",
              name: "",
            },
          }))
        }
      }),
      {
        name: "auth",
        storage: createSessionStorage(),
      }
    )
  );
  