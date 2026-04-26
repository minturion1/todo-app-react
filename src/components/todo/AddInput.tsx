import { useState } from "react";
import Input from "./Input";

type Props = {
    onAdd: (value: string)=>void;
}

const AddInput = (props: Props) => {
    const [value,setValue] = useState<string>('');

    const handleAdd = () => {
        if(!value.trim()) return;
        
        props.onAdd(value);
        setValue("");
    };

    return (
        <div className="flex gap-5">
            <Input value={value} setValue={setValue} onEnter={handleAdd}/>
            <button onClick={handleAdd} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" >
                Add
            </button>
        </div>
    )
}

export default AddInput;