import Todo from "../components/todo/Todo";
import Ticker from "../components/ui/Ticker";


const HomePage = () => {
    return (
        <div className="min-h-screen bg-gray-900 flex items-start justify-center pt-12">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md w-full max-w-md">
            
            <h1 className="font-orbitron text-4xl font-bold text-white mb-4 text-center">
            Todo App
            </h1>
            <Ticker />
            <Todo />

        </div>
        </div>
    )
}

export default HomePage;