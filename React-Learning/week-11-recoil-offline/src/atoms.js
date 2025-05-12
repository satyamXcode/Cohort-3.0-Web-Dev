import { atomFamily  } from "recoil";
import { TODOS } from "./todos";

export const todosAtomFamily = atomFamily({
    key: 'todosAtomFamily',
    dafault: id => {
        return TODOS.find(x => s.id === id)
    },
});