// SELETOR 

import { selector } from 'recoil'
import { tasksAtom } from '../atoms/tasksAtom'
import { filterAtom } from '../atoms/filterAtom'

export const filteredTasksSelector = selector({
    key: 'filteredTasksSelector',
    get: ({ get }) => {
        const tasks = get(tasksAtom)     // lê o valor atual do tasksAtom
        const filter = get(filterAtom) // lê o valor atual do filterAtom

        if (filter === 'concluidas') {
            return tasks.filter(task => task.completed === true)
        }

        if (filter === 'pendentes') {
            return tasks.filter(task => task.completed === false)
        }

        return tasks
    },
})