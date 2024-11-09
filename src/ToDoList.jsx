import { useState } from "react";

function ToDoList({completedTasks, uncompletedTasks, tasks, handleAddNote}) {

    return (
        <div className="main">
            <h2>Weekly planner</h2>
            <div className="list-notes">
                <div className="to-do-list">
                    <h4>To-Do List</h4>
                    <div className="add-a-task">
                        <input
                            type="text"
                            id="task-input"
                            maxLength={160}
                        />
                        <button className="add-button" onClick={handleAddNote}>Add a task</button>
                    </div>
                    <div className="list-area">
                        <ol>
                            {tasks.map((task, index) => 
                            <li className="list-items" key={index}>
                                {task}
                                <div className="action-buttons">
                                    <button id="done-button" onClick={() => completedTasks(index)}>Completed</button>
                                    <button id="delete-button" onClick={() => uncompletedTasks(index)}>Next time...</button>
                                </div>
                            </li>)}
                        </ol>
                    </div>
                </div>
                <div className="notes">
                    <h4>Notes</h4>
                    <textarea name="notes" id="notes"></textarea>
                </div>
            </div>
        </div>
    );
}

export default ToDoList;