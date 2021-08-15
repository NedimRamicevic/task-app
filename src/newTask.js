import React, {useState} from 'react';

export function NewTask(handleChange, handleSubmit,newTask){

    const [showBtn, setShowBtn] = useState(false);
    const showBtnFun = () => {
        setShowBtn(!showBtn)
    }
    return(
        <div>
            <input type="text" placeholder="New Task" onChange={showBtnFun}></input>
            {showBtn ? (
                <button onClick={handleSubmit} >Add Task</button>
            ) : null 
            }
        </div>
    )
}