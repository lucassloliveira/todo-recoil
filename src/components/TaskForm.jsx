// FORMULÁRIO DE NOVA TAREFA

import { useState } from "react";
import { useRecoilState } from 'recoil'
import { tasksAtom } from '../atoms/tasksAtom'

function TaskForm() {
    const [inputValue, setInputValue] = useState('')  // estado LOCAL   
    const [task, setTask] = useRecoilState(tasksAtom) // estado GLOBAL

    function handleAddTask() {
        const trimmed = inputValue.trim()

        if (!trimmed) return // impede tarefa com texto vazio ou só com espaços

        const newTask = {
            id: Date.now(), // timestamp como ID único
            text: trimmed,
            completed: false,
        }

        setTask([...task, newTask])
        setInputValue('')
    }

    function handleKeyDown(e) {
        if (e.key === 'Enter') handleAddTask()
    }

    return(
        <div className="task-form">
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite uma nova tarefa..."
            />
            <button className="btn-add" onClick={handleAddTask}>Adicionar</button>    
        </div>
    )
}

export default TaskForm
