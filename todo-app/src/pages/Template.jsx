import React, { useState } from 'react'
import Leftmenu from './Leftmenu'
import { Outlet } from 'react-router'
import "./page.css"
import Footer from './Footer'
import { useToggle } from '../component/useToggle'
import {useDispatch, useSelector} from "react-redux"
import { addTask, searchTaskItem } from '../redux/taskSlice'
import { v4 as uuidv4 } from 'uuid'; // Import uuid
const Template = () => {
 
  const {toggle, isToggleOpen, isToggleClose} = useToggle(false);
  const [task, setTask] = useState({id:"",title: "", description: "",isCompleted: false})
  const [data, setData] = useState([])
  const [search, setSearch]= useState("");

  const dispatch = useDispatch();
  const handleAddNew=()=>{
    isToggleOpen();
  }
  const handleInput=(event)=>{
    const {name, value} = event.target;
    setTask({...task, [name]: value})
  }
  const handleAddTaskDetail=()=>{
    const newTask = {...task, id:uuidv4()}
    isToggleClose()
    setData([...data, task])
    dispatch(addTask(newTask))
    setTask({id:"",title: "", description: ""})
  }

  const handleSeachInput=(event)=>{
    setSearch(event.target.value)
    dispatch(searchTaskItem(event.target.value))
  }
  const handleSearch=()=>{
    dispatch(searchTaskItem(search))
  }
  return (
    <div className="template">
      <div className='template-container'>
      <Leftmenu/>
      <div className="main-container">
        <div className="header-container">
          <h2 className='header-title'>My Task</h2>
          <div className="search-new-container">
            <form>
            <svg onClick={handleSearch} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search search-icon" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
              <input className='search-input' type="text" placeholder='Search...' name='search' onChange={handleSeachInput}/>
            </form>
            <button className='addnew-button' onClick={handleAddNew}>+ Add new</button>
          </div>
        </div>
        {toggle && (
          <div className="dialog-container">
            <div className="addnewtask-container">
            <div className="dialog-header">
              <h2 className='dialog-title'>Add Task</h2>
              <button className='cross-button' onClick={()=> {isToggleClose()}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle cross-icon" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
              </svg>
              </button>
            </div>
            <div className="dialog-form">
              <form>
                <input className='dialog-input' type="text" placeholder='Task title' value={task.title} name='title' onChange={handleInput}/><br />
                <textarea className='dialog-input' rows={10} cols={10} value={task.description} name='description' onChange={handleInput}></textarea><br />
                <button className='dialog-addtask-button' onClick={handleAddTaskDetail} disabled={!task.title.trim() || !task.description.trim()}>Add Task</button>
              </form>
            </div>

          </div>
          </div>
        )}
        <div className="content-container">
        <Outlet/>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  )
}

export default Template
