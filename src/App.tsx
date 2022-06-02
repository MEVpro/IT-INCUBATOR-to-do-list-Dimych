import React, {useState} from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";


export type FilterValuesType = 'all' | 'active' | 'completed'

function App() {
    let [tasks, setTasks]  = useState<Array<TasksType>> ([
        {id: 1, title: "Sport", isDone: false},
        {id: 2, title: "Shopping", isDone: true},
        {id: 3, title: "Reading", isDone: false},
        {id: 4, title: "Training", isDone: true}
    ]);

    let tasksForTodoList = tasks
    let [filter, setFilter] = useState<FilterValuesType>("all")
    if (filter === 'all') {
        tasksForTodoList = tasks.filter(t => tasks)
    }
    if (filter === 'active') {
        tasksForTodoList = tasks.filter(t => t.isDone === false)
    }
    if (filter === 'completed') {
        tasksForTodoList = tasks.filter(t => t.isDone === true)
    }

    function changeFilter(value: FilterValuesType) {
        setFilter(value)
    }

    function removeTask(id: number) {
    //     let resultTasks = tasks.filter((t) => {
    //         if (t.id !== id) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     })
    // }
    /////////////////REFACTOR
    //     let resultTasks = tasks.filter((t) => {
    //         return t.id !== id
    //     })
    // }
    /////////////////REFACTOR
        let filteredTasks = tasks.filter(t => t.id !== id)
        setTasks(filteredTasks);
}

    return (
        <div className="App">
            <Todolist
                title={"What to do"}
                tasks={tasksForTodoList}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />
        </div>
    );
}

export default App;
