import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../component/Card'
import { removeTask } from '../redux/taskSlice'

const Completed = () => {

  const data = useSelector((state) => state.taskSlice.completed)
  const dispatch = useDispatch();
  console.log(data)


  const handleRemoveItem=(item)=>{
    console.log(item)
    dispatch(removeTask(item))
  }
  return (
    <div className='completed-container'>
      <h2 className="page-subheading">Completed Task</h2>

      {data?.length > 0 ? (
        <div className="card-container">
          {data.map((d) => (
            <Card key={d.id} data={d} onClickRemove={handleRemoveItem} />
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

export default Completed
