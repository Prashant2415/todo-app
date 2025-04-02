import React, { useState } from 'react'
import { useToggle } from "../component/useToggle"
import { useDispatch, useSelector } from 'react-redux';
import Card from '../component/Card';
import { updateTask } from '../redux/taskSlice';
const InProgress = () => {

  const { toggle, isToggleOpen, isToggleClose } = useToggle(false);
  const [task, setTask] = useState({ id: "", title: "", description: "" });
  const dispatch = useDispatch();
  const dataValue = useSelector((state)=> state.taskSlice.data)
  console.log(dataValue)
  const searchValue = useSelector((state)=> state.taskSlice.searchItem)
  console.log(searchValue)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateTask(task)); // Dispatch update action
    isToggleClose();
    setTask({ id: "", title: "", description: "" }); // Reset form
  };

  const handleRemoveItem = (item) => {
    dispatch(removeTask(item));
  };

  const handleUpdateItem = (item) => {
    isToggleOpen();
    setTask(item); // Set selected task for update
  };
  const handletaskCompleted = (item) => {
    console.log(item)
    dispatch(isCompletedTask(item))
  }
  const filterData = dataValue?.filter((item)=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
  return (
    <div className='inprogress-container'>
      {toggle && (
        <div className="dialog-container">
          <div className="addnewtask-container">
            <div className="dialog-header">
              <h2 className="dialog-title">Update Task</h2>
              <button className="cross-button" onClick={isToggleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle cross-icon" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                </svg>
              </button>
            </div>
            <div className="dialog-form">
              <form onSubmit={handleUpdate}>
                <input
                  className="dialog-input"
                  type="text"
                  placeholder="Task title"
                  name="title"
                  value={task.title}
                  onChange={handleInputChange}
                />
                <br />
                <textarea
                  className="dialog-input"
                  rows={5}
                  cols={10}
                  name="description"
                  placeholder="Task description"
                  value={task.description}
                  onChange={handleInputChange}
                ></textarea>
                <br />
                <button className="dialog-addtask-button" type="submit" disabled={!task.title.trim() || !task.description.trim()}>
                  Update Task
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      <h2 className="page-subheading">InProgress Tasks</h2>

      {filterData?.length > 0 ? (
        <div className="card-container">
          {filterData.map((d) => (
            <Card key={d.id} data={d} onClickRemove={handleRemoveItem} onClickUpdate={handleUpdateItem} onClickCompleted={handletaskCompleted} />
          ))}
        </div>
      ) : (
        <div className="empty-container">
          <h2 className="empty-text">No task created</h2>
        </div>
      )}
    </div>

  )
}

export default InProgress
