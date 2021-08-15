import React, {useState} from 'react'

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
        )

    const handleSubmit = (event){
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
    }
}