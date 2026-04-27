type Props = {
  value: string;
  setValue: (value: string) => void;
  onEnter?: () => void;
};

const Input = (props: Props) => {
    

    return (
        <input value={props.value} onKeyDown={(e)=>{if (e.key==="Enter") props.onEnter?.()}} onChange={(e)=>{props.setValue(e.target.value)}} placeholder="Add your new task" className="placeholder-gray-500 text-lg text-white placeholder-gray-500 border-b-2 border-gray-500 rounded px-3 py-2 w-full outline-none focus:border-gray-300 bg-transparent "/>
    )
}

export default Input;