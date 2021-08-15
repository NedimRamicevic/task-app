import React, {useState} from 'react'
import NewTask from './newTask'

export default function Task(){
    const [allTasks, setAllTasks] = useState([])
    const [newTask, setNewTask] = useState({})

    const handleChange = ({target}) => {
        const[name, value] = target
        setNewTask(
            (prev) => {
                return {
                    ...prev, 
                [name] : value,
                id : Date.now() 
                }
            }   
        )}

    const handleSubmit = (event) => {
        if(!newTask.title) return;
        setAllTasks(
            (prev) => {
                return [newTask, ...prev]
            }
        )
        setNewTask(
            {}
        )
    }
    

    return(
        <div className = "task-card">
            <NewTask handleChange = {handleChange} handleSubmit = {handleSubmit} newTask = {newTask}/>
            <ul>
            {
                allTasks.map(
                    (value , id) => {
                        return(
                            <li id = {id}>
                                {value}
                            </li>
                        )
                    }
                )
            }
            </ul>
        </div>
    )
}