
import { useEffect, useRef, useState } from "react";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

type Props = {
    id:number;
    value: string;
    isCompleted: boolean;
    onDelete:(id:number) => void;
    editableTaskId: number;
    setEditableTaskId: (id: number)=>void;
    editTask: (id:number, newValue: string)=>void;
    cancelEditionTask: ()=>void;
    toggleTask: (id:number)=>void;

};

const TaskItem = (props: Props) => {
    const [newValue, setNewValue]= useState<string>(props.value);
    const inputRef = useRef<HTMLInputElement>(null);
    
    const onEdit = () => {
        if(!newValue.trim()) return;

        props.editTask(props.id, newValue)
    }

    useEffect(() => {
        if(props.id === props.editableTaskId) {
            setNewValue(props.value);
            inputRef.current?.focus();
        }
    }, [props.editableTaskId, props.value]);

    return (
        <div className={"flex justify-between items-stretch rounded group mt-4  " + (props.isCompleted ? "bg-green-900" : "bg-gray-700")}>
            {props.id === props.editableTaskId 
            ? <input value={newValue} onChange={(e)=>{setNewValue(e.target.value)}} ref={inputRef} className={"w-full text-white flex px-4 py-3  rounded-l focus:outline-none bg-gray-600"} />
            : <div className="text-white flex items-center px-4 py-3">{props.value}</div>}
            <div className="flex">
                <button onClick={()=>{props.toggleTask(props.id)}} className={" text-white px-4 flex items-center justify-center  transition " + " " +(props.id === props.editableTaskId ? "hidden" : "opacity-70 group-hover:opacity-100 " + (props.isCompleted ? "bg-gray-500 hover:bg-gray-600" : "bg-green-500 hover:bg-green-600"))}>{props.isCompleted ? <RxCross1 /> : <MdDone />}</button>
                {!props.isCompleted &&
                <>
                <button onClick={() => {props.id === props.editableTaskId ? onEdit() : props.setEditableTaskId(props.id)}} className={"text-white px-4 flex items-center justify-center opacity-70 group-hover:opacity-100 transition " + " " + (props.id === props.editableTaskId ? "bg-green-500 hover:bg-green-600 opacity-100 " : "hover:bg-blue-600 bg-blue-500 opacity-70 group-hover:opacity-100")}>{props.id===props.editableTaskId ? <MdDone /> : <FaRegEdit />}</button>
                <button onClick={()=>{props.id===props.editableTaskId ? props.cancelEditionTask() : props.onDelete(props.id)}} className={"bg-red-500 text-white px-4 flex items-center justify-center opacity-70 group-hover:opacity-100 transition hover:bg-red-600 rounded-r" + " " + (props.id === props.editableTaskId ? "opacity-100" : "opacity-70 group-hover:opacity-100")}>{props.id===props.editableTaskId ? <RxCross1 /> : <FaRegTrashAlt />}</button>
            
                </>
                }
                
            </ div>
            

            
            
        </div>
    )
}

export default TaskItem;