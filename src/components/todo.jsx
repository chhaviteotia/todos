import React, { useState } from "react";
import './todo.css'
const Todo = ()=>{
    console.log(search);
    const [input,setInput]=useState("")
    const [task,setTask]=useState([])
    const [isEdit,setEdit]=useState({bool:false,indx:""})
    const[search, setSearch]=useState('')
    const handleClick = ()=>{
        if(input.length){
            setTask([...task,input])
            setInput("")
        }
    }
    const handleDelete=(e)=>{
        let index= task.indexOf(e)
        const new_task = task.filter((item,id)=>{
            return id!==index;
        })
        setTask(new_task)
        console.log(task)
   
    }
    const handleEdit=(inp) =>{
        let indx=task.indexOf(inp);
        setEdit({...isEdit,bool:true,indx:indx})
        setInput(inp);

    }
    const handleOk=()=>{
        const new_task = task.map((item,id)=>{
            if(id==isEdit.indx){
                return input;
            }else{
                return item;
            }
        })
        setTask(new_task)
        setEdit({...isEdit,bool:false})
        setInput("")
    }
    return(
        <div className="container">
            <div className="todo">
                <h1>TO-DO LIST</h1>
                <div>
                    <input placeholder='search' type='text' onChange={(e)=>setSearch(e.target.value)}/>
                </div>
            <div className="inputs">
                <textarea placeholder='add items here' id="task" rows="2" cols="30" onChange={(event)=>{setInput(event.target.value)}} value={input}></textarea>
                {isEdit.bool==false && <button id="btn" onClick={()=>{handleClick()}}>Add</button>}
                {isEdit.bool &&< button id="btn" onClick={()=>{handleOk()}}>Ok</button>}
            </div>
            <div className="myTask">
                    {task.filter(items=>items.toLowerCase().includes(search)).map((list,id)=>{
                            return (
                                <div className="list" key={id}>
                                    <div className="left">
                                    <div>{list}</div>
                                    </div>
                                    <div className="right">
                                    <button onClick={()=>{handleDelete(list)}} id="del">Delete</button>
                                    <button onClick={()=>{handleEdit(list)}} id="edit">Edit</button>
                                    </div>
                                </div>
                            )
                    })}
            </div>
        </div>
        </div>
    )
}
export default Todo;