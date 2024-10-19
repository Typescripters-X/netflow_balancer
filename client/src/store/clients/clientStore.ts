import { create } from "zustand";
import { clientSchemaType } from "@/types/clientsSchema";


type State = {
    client: clientSchemaType,
};

type Action = {
    store_client: (store_client: State['client']) => void,
    clearClient: () => void,
}

export const useClientStore = create<State & Action>()(
      (set) => ({
        client: {
            _id: "",
            bw_setByAdmin: 0,
            createdAt: "",
            isAdmin: false,
            mail: "",
            max_bw: "",
            name: "",
            updatedAt: "",
        },
        store_client: (client) => set(() => ({ client: client })),  
        clearClient: () => {
            set(() => ({
              client: {
                _id: "",
                bw_setByAdmin: 0,
                createdAt: "",
                isAdmin: false,
                mail: "",
                max_bw: "",
                name: "",
                updatedAt: "",
              },
            }))
          }
      }),
  );
  