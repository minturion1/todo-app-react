import type { Filter } from "./Todo";

type Props = {
    filter: Filter;
    setFilter: (filter:Filter)=>void;
}

const FilterButtons = (props: Props) => {
    const isActive = props.filter;
    const className = "flex-1 text-gray-400 p-4 hover:bg-gray-700 hover:text-white transition"
    const activeClass = "flex-1 p-4 text-white bg-gray-600 border-b border-white"
    return (
        <div className="flex justify-between mt-5 border-b border-gray-600">
            <button onClick={()=>props.setFilter("all")} className={isActive==="all"?activeClass:className}>All</button>
            <button onClick={()=>props.setFilter("active")} className={isActive==="active"?activeClass:className}>Active</button>
            <button onClick={()=>props.setFilter("completed")} className={isActive==="completed"?activeClass:className}>Completed</button>
        </div>
    )
}

export default FilterButtons;