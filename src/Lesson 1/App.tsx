import React from 'react';
import './App.css';
import {TasksType, Todolist} from "./Todolist";


function App() {

  const task_1: Array<TasksType> = [
    { id: 1, title: "Sport", isDone: false},
    { id: 2, title: "Shopping", isDone: true},
    { id: 3, title: "Reading", isDone: true}
  ]
  const task_2: Array<TasksType> = [
    { id: 1, title: "CSS", isDone: true},
    { id: 2, title: "HTML", isDone: true},
    { id: 3, title: "JS", isDone: false}
  ]
  const task_3: Array<TasksType> = [
    { id: 1, title: "Bread", isDone: true},
    { id: 2, title: "Eggs", isDone: true},
    { id: 3, title: "Beer", isDone: true}
  ]

  return (
      <div className="App">
        <Todolist title={"What to do"} tasks={task_1}/>
        <Todolist title={"What to learn"} tasks={task_2}/>
        <Todolist title={"What to by"} tasks={task_3}/>
      </div>
  );
}

export default App;
