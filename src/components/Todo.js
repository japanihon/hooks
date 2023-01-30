import React, { useState } from 'react';
    
import CreateTask from './CreateTask';

    function Task({ task }) {
        return (
            <div
                className="task"
                style={{ textDecoration: task.completed ? "line-through" : "" }}
            >
                {task.title}
            </div>
        );
    }


    function Todo() {
        const [tasks, setTasks] = useState([
            {
                title: "Grab some Pizza",
                completed: true
            },
            {
                title: "Do your workout",
                completed: true
            },
            {
                title: "Hangout with friends",
                completed: false
            }
        ]);


        const addTask = title => {
            const newTasks = [...tasks, { title, completed: false }];
            setTasks(newTasks);
        };


        return (
            <div className="todo-container">
                <div className="header">TODO - ITEMS</div>
                <div className="tasks">
                    {tasks.map((task, index) => (
                        <Task
                            task={task}
                            index={index}
                            key={index}
                        />
                    ))}
                </div>
                <div className="create-task" >
                    <CreateTask addTask={addTask} />
                </div>
            </div>
        );
    }
    
    export default Todo;