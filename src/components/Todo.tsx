import { useState } from "react"
import AddInput from "./AddInput"
import TasksList from "./TasksList"

export type Task = {
    id: number;
    title: string;
};


const Todo = () => {
    const [tasks,setTasks] = useState<Task[]>([])

    const  addTask = (title:string) => {
        const newTask = {
            id: Date.now(),
            title:title,
        };

        setTasks((prev) => [...prev, newTask]);
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };
    return (
        <div>
            <AddInput onAdd={addTask} />
            <TasksList tasks={tasks} onDelete={deleteTask} />
        </div>
    )
}

export default Todo;