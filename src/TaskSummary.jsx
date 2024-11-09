import { useState } from "react";

function TaskSummary({done, notDone, setDone, setNotDone}) {
    function clearAll() {
        setDone([]);
        setNotDone([]);
    }
    return (<div className="lower-box">
                <h2 className="summary-heading">Week Summary</h2>
                <button className="clear-all" onClick={() => clearAll()}>Clear All</button>
                <div className="summary-box">
                    <div className="left-box">
                        <h4>Completed tasks</h4>
                        <div className="completed">
                            <ol>
                                <div className="out">
                                    {done.map((task, index) =>
                                    <li key={index} className="done-list">
                                        {done}
                                    </li>)}
                                </div>
                            </ol>
                        </div>
                    </div>
                    <div className="right-box">
                        <h4>Uncompleted tasks</h4>
                        <div className="deleted">
                            <ol>
                                {notDone.map((task, index) =>
                                <li key={index} className="undone-list">
                                    {notDone}
                                </li>)}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>);
}
export default TaskSummary