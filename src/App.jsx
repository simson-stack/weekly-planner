import { useState } from "react";

import Header from "./Header";
import ToDoList from "./ToDoList";
import TaskSummary from "./TaskSummary.jsx"

function App() {

    const [completedTasks, setCompleted] = useState([]);
    const [uncompletedTasks, setUncompletedTasks] = useState([]);
    const [tasks, setTasks] = useState([]);

    function handleAddNote() {
        const newTask = document.getElementById('task-input').value;
        document.getElementById('task-input').value = '';
        if(newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
        }
    }

    function handleCompletedTasks(index) {
        const completedTask = tasks[index];
        
        // Remove the completed task from tasks and uncompletedTasks lists
        const updatedTasks = tasks.filter((_, i) => i !== index);
        
        setTasks(updatedTasks);
        setCompleted([...completedTasks, completedTask]); // Add to completedTasks
    }
    
    function handleUncompletedTasks(index) {
        const uncompletedTask = tasks[index];

        const updatedTasks = tasks.filter((_, i) => i !== index);

        setTasks(updatedTasks);
        setUncompletedTasks([...uncompletedTasks, uncompletedTask]);
    }
    return(
        <>
            <Header/>
            <ToDoList
                completedTasks = {handleCompletedTasks}
                tasks = {tasks}
                handleAddNote = {handleAddNote}
                uncompletedTasks = {handleUncompletedTasks}
            />
            <TaskSummary
                done = {completedTasks}
                notDone = {uncompletedTasks}
                setDone = {setCompleted}
                setNotDone = {setUncompletedTasks}
            />
        </>
    );
}

export default App
