
type Props = {
    completedCount: number;
    tasksCount: number;
}

const ProgressBar = (props: Props) => {
    const percent = props.tasksCount === 0 
        ? 0 
        : Math.round((props.completedCount / props.tasksCount) * 100);

    return (
        <div className="w-full mt-5">
            
            <div className="flex justify-between text-sm text-gray-500 mb-1">
                <span>0%</span>
                <span>100%</span>
            </div>

            {/* сам прогресбар */}
            <div className="w-full bg-gray-200 h-4 relative">
                <div 
                    className="bg-green-500 h-4 transition-all duration-300 flex items-center justify-center text-xs text-white"
                    style={{ width: `${percent}%` }}
                >
                    {percent > 10 ? `${percent}%` : ""}
                </div>
            </div>

        </div>
    )
}

export default ProgressBar;