import { useState } from "react";
import './style.css';
function TaskManager(){
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");
 function addTask(){
    if(inputValue.length ===0){
        return;
    }
    setTasks([
        ...tasks,
        {
            content:  inputValue,
            isComplete: false,
            isEditing: false
        }
       
    ]);
    setInputValue("");

 }
 
 function deleteTask(taskIndex){
    tasks.splice(taskIndex, 1)
    setTasks([
        ...tasks
    ])
        
    
 }

 function markCompleted(taskIndex){
    tasks[taskIndex].isComplete = !tasks[taskIndex].isComplete;
    setTasks([
        ...tasks
    ])
 }
 function editTask(taskIndex){
    tasks[taskIndex].isEditing = true;
    setTasks(
        [...tasks]
    )
 }
 function updateValue(taskIndex, value){
    tasks[taskIndex].content = value;
    setTasks(
        [...tasks]
    )
 }
 function saveTask(taskIndex){
    tasks[taskIndex].isEditing = false;
    setTasks(
        [...tasks]
    )
 }
    return <div className="task_manager">
        
            <h1>Task Manager</h1>
            <div className="tasks">
            {
                tasks.sort((a)=>a.isComplete ? 1 : -1).map(
                 (task, index)=><div key={index} className={"task "+ (task.isComplete ? "completed": "incomplete")}>
                    <input type="checkbox"checked={task.isComplete}onChange={()=>markCompleted(index)}/>
                    {
                        task.isEditing ?
                        
                            <input value={task.content} onChange={(event)=>updateValue(index, event.target.value)} className="edit_input"/>
                            
                       :
                       <span className="content">
                            {
                        task.isComplete ?
                        <del>{task.content}</del>:
                        task.content
                    }
                            </span>
                        
                    }
                    {
                        task.isEditing ?
                        <button className="save" onClick={()=>saveTask(index)}>Save</button>:
                        <button className="edit" onClick={()=>editTask(index)}>Edit</button> 

                    }
                           
            <button onClick={()=>deleteTask(task)} className="delete">Delete</button>

           </div>
                )
            }
            </div>
            <div className="add_task_container">
            <input value={inputValue} onChange ={(event)=>setInputValue(event.target.value)} placeholder="Enter your task"/>
            <button onClick ={addTask}>Add Task</button>
            </div>
            


        </div>
    
    
}
export default TaskManager;