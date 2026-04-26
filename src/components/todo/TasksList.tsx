import TaskItem from "./TaskItem";
import type { Filter, Task } from "./Todo";

type Props = {
    tasks: Task[];
    onDelete: (id:number) => void;
    editableTaskId: number;
    setEditableTaskId: (id: number)=>void;
    editTask: (id:number, newValue: string)=>void;
    cancelEditionTask: ()=>void;
    toggleTask:(id:number)=>void;
    filter: Filter;
};


const TasksList = (props: Props)=>{
    
    if (props.tasks.length===0) {
        const messages = {
        all: "No tasks yet",
        active: "No active tasks",
        completed: "No completed tasks",
        };
        const message = messages[props.filter]
        
        return <div className="text-center p-3 mt-5 bg-gray-700 text-gray-300 rounded">{message}</div>
    }

    return (
        <div className="mt-5">
            {props.tasks.map((task)=>(
                <TaskItem key={task.id} id={task.id} value={task.title} isCompleted={task.isCompleted} onDelete={props.onDelete} editableTaskId={props.editableTaskId} setEditableTaskId={props.setEditableTaskId} editTask={props.editTask} cancelEditionTask={props.cancelEditionTask} toggleTask={props.toggleTask} />
            ))}
            
        </div>
    )
}

export default TasksList;