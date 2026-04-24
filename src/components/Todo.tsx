import { useEffect, useState } from "react"
import AddInput from "./AddInput"
import TasksList from "./TasksList"

export type Task = {
    id: number;
    title: string;
    isCompleted: boolean;
};


const Todo = () => {
    const [tasks,setTasks] = useState<Task[]>(()=>{
        return JSON.parse(localStorage.getItem("tasks") || "[]")
    })
    const [editableTaskId, setEditableTaskId] = useState<number>(-1);

    const  addTask = (title:string) => {
        const newTask = {
            id: Date.now(),
            title:title,
            isCompleted:false,
        };
        
        setTasks((prev) => [newTask, ...prev]);
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    };

    const editTask = (id:number, newValue:string) => {
        setTasks((prev) => prev.map((task) => (task.id === id ? {...task, title: newValue} : task)));
        setEditableTaskId(-1);
    };
    const cancelEditionTask = () => {
        setEditableTaskId(-1);
    };

    const toggleTask = (id:number) => {
        setTasks((prev)=>
            prev.map((task)=>
                task.id===id ? {...task, isCompleted: !task.isCompleted } : task
        ))
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);
    return (
        <div>
            <AddInput onAdd={addTask} />
            <TasksList tasks={tasks} onDelete={deleteTask} editableTaskId={editableTaskId} setEditableTaskId={setEditableTaskId} editTask={editTask} cancelEditionTask={cancelEditionTask} toggleTask={toggleTask}/>
        </div>
    )
}

export default Todo;