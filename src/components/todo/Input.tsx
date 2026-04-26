type Props = {
  value: string;
  setValue: (value: string) => void;
  onEnter?: () => void;
};

const Input = (props: Props) => {
    

    return (
        <input value={props.value} onKeyDown={(e)=>{if (e.key==="Enter") props.onEnter?.()}} onChange={(e)=>{props.setValue(e.target.value)}} placeholder="Add your new task" className="placeholder-gray-400 text-white placeholder-white border border-gray-500 rounded px-3 py-2 w-full outline-none focus:border-gray-300 bg-gray-600 "/>
    )
}

export default Input;