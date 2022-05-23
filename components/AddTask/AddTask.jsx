import React,{useState} from "react";
import styles from "./addTask.module.css";

const AddTask = () => {

  const[task,setTask]=useState("")
  const[list,setList]=useState([])
  const handleChange=(task)=>{
    console.log(task.target.value)
    setTask(task.target.value)
  }


  const remove=(id)=>{
    let newarr=list.filter((item)=>item.id==id)
    setList(newarr)
  }

  const handleClick=()=>{
    if(task==""){
      return
    }
    const playload={
      id:Date.now(),
      title:task,
      sattus:false
    }
    console.log("task,task");

    setList([...list,playload])
  }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text" />
      <button data-cy="add-task-button"></button>
    </div>
  );
};

export default AddTask;
