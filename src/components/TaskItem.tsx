
import { FaRegTrashAlt } from "react-icons/fa";

type Props = {
    id:number;
    value: string;
    onDelete:(id:number) => void;
};

const TaskItem = (props: Props) => {
    return (
        <div className="flex justify-between items-stretch bg-gray-700 rounded group mt-4">
            <div className="text-white flex items-center px-4 py-3">{props.value}</div>
            <button onClick={()=>{props.onDelete(props.id)}} className="bg-red-500 text-white px-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transition hover:bg-red-600 rounded-r"><FaRegTrashAlt /></button>
        </div>
    )
}

export default TaskItem;