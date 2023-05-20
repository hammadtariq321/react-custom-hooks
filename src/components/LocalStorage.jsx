import React from 'react'
import useLocalStorage from '../hooks/useLocalStorage';

const LocalStorage = () => {
    const { data, addData } = useLocalStorage();
    const handleAdd = () => {
      addData('userDetail', "Hammad Tariq")
    }
    const handleDelete = () => {
      addData('userDetail')
    }
    const handleUpdate = () => {
      addData('userDetail', "Jawad Tariq")
    }
  return (
    <div>
        <h1>Local Storage</h1>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={handleUpdate}>Update</button>
        <br/>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}

export default LocalStorage