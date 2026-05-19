// LISTA DE TAREFAS

import { atom } from "recoil";

export const tasksAtom = atom({
    key: 'tasksAtom', // identificador único dentro do átomo dentro do recoil
    default: [],     // valor inicial
})