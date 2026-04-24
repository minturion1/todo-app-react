import TaskItem from "./TaskItem";
import type { Task } from "./Todo";

type Props = {
    tasks: Task[];
    onDelete: (id:number) => void;
    editableTaskId: number;
    setEditableTaskId: (id: number)=>void;
    editTask: (id:number, newValue: string)=>void;
    cancelEditionTask: ()=>void;
    toggleTask:(id:number)=>void;
};

const TasksList = (props: Props)=>{
    return (
        <div className="mt-5">
            {props.tasks.map((task)=>(
                <TaskItem key={task.id} id={task.id} value={task.title} isCompleted={task.isCompleted} onDelete={props.onDelete} editableTaskId={props.editableTaskId} setEditableTaskId={props.setEditableTaskId} editTask={props.editTask} cancelEditionTask={props.cancelEditionTask} toggleTask={props.toggleTask} />
            ))}
            
        </div>
    )
}

export default TasksList;