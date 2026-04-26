import { useEffect, useState } from "react"
import AddInput from "./AddInput"
import TasksList from "./TasksList"
import ProgressBar from "./ProgressBar";
import BottomButtons from "./BottomButtons";
import Modal from "../ui/Modal";
import Toast from "../ui/Toast";
import FilterButtons from "./FilterButtons";

type ToastType = "success" | "error" | "info";

export type ToastState = {
  message: string;
  type: ToastType;
  isVisible: boolean;
};

export type Task = {
    id: number;
    title: string;
    isCompleted: boolean;
};

export type Filter = "all" | "active" | "completed";


const Todo = () => {
    const [tasks,setTasks] = useState<Task[]>(()=>{
        return JSON.parse(localStorage.getItem("tasks") || "[]")
    })
    const [editableTaskId, setEditableTaskId] = useState<number>(-1);
    const [completedCount, setCompletedCount] = useState<number>(0);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [filter, setFilter] = useState<Filter>("all")

    const [toast, setToast] = useState<ToastState>({
        message: "",
        type: "info",
        isVisible: false,
    });

    const showToast = (message: string, type: ToastType = "info") => {
    setToast({
        message,
        type,
        isVisible: true,
    });

    setTimeout(() => {
        setToast(prev => ({ ...prev, isVisible: false }));
    }, 2000);
    };

    useEffect (()=> {
        const completed = tasks.filter(task => task.isCompleted).length;
        setCompletedCount(completed)
    }, [tasks]);

    const  addTask = (title:string) => {
        const newTask = {
            id: Date.now(),
            title:title,
            isCompleted:false,
        };
        
        setTasks((prev) => [newTask, ...prev]);
        showToast("New task added!", "success")
    };

    const deleteTask = (id: number) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
        showToast("Task deleted!", "error")

    };

    const editTask = (id:number, newValue:string) => {
        setTasks((prev) => prev.map((task) => (task.id === id ? {...task, title: newValue} : task)));
        setEditableTaskId(-1);
        showToast("Task changed!", "info")
    };
    const cancelEditionTask = () => {
        setEditableTaskId(-1);
    };

    const toggleTask = (id:number) => {
        setTasks((prev)=>
            prev.map((task)=> {
                if (task.id === id) {
                const updated = {
                    ...task,
                    isCompleted: !task.isCompleted
                };

                showToast(
                    updated.isCompleted 
                        ? "Task completed!" 
                        : "Task marked as active",
                    updated.isCompleted 
                        ? "success" 
                        : "info"
                );

                return updated;
                }
                return task;
            }
        ))
    };

    const resetCompleted = () => {
        setTasks((prev)=>
            prev.map((task)=> ({...task, isCompleted:false}))
        );
        showToast("All completed tasks reset!", "info")
    };

    const deleteCompleted = () => {
        setTasks((prev)=>(
            prev.filter(task=>!task.isCompleted)
        ));
        showToast("All completed tasks deleted!", "error")
    };


    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const filteredTasks = tasks.filter((task)=> {
        if (filter === "active") return !task.isCompleted;
        if (filter === "completed") return task.isCompleted;
        return true;
    })
    return (
        <div>
            
            <AddInput onAdd={addTask} />
            <FilterButtons filter={filter} setFilter={setFilter}/>
            <ProgressBar completedCount={completedCount} tasksCount={tasks.length} />
            <TasksList filter={filter} tasks={filteredTasks} onDelete={deleteTask} editableTaskId={editableTaskId} setEditableTaskId={setEditableTaskId} editTask={editTask} cancelEditionTask={cancelEditionTask} toggleTask={toggleTask}/>
            <BottomButtons setIsOpen={setIsOpen} resetCompleted={resetCompleted} deleteCompleted={deleteCompleted} />
            
            <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div className="text-center">Do you really want to delete all tasks?</div>
                <div className="flex gap-3 mt-5">
                    <button onClick={()=>{deleteCompleted(); setIsOpen(false);}} className="flex-1 p-4 bg-red-600 hover:bg-red-700 text-white rounded transition">Delete all</button>
                    <button onClick={()=>setIsOpen(false)} className="flex-1 p-4 bg-gray-200 text-black hover:bg-gray-300 rounded transition">Cancel</button>
                </div>
                
            </Modal>
            <Toast toast={toast}/>
        </div>
    )
}

export default Todo;