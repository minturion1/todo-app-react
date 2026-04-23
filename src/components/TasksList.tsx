import TaskItem from "./TaskItem";
import type { Task } from "./Todo";

type Props = {
    tasks: Task[];
    onDelete: (id:number) => void;
};

const TasksList = (props: Props)=>{
    return (
        <div className="mt-5">
            {props.tasks.map((task)=>(
                <TaskItem key={task.id} id={task.id} value={task.title} onDelete={props.onDelete}/>
            ))}
            
        </div>
    )
}

export default TasksList;