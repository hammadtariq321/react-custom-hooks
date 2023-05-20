import React, { useState } from 'react'

const useLocalStorage = () => {
    const [data, setData] = useState({});

    const addData = (key, value) => {
        setData((prevData)=> {
            const newData = {...prevData, [key]: value};
            localStorage.setItem('myData', JSON.stringify(newData));
            return newData
        })
    }

    const deleteData = (key) => {
        setData((prevData) => {
            const newData = {...prevData}
            delete newData[key];
            localStorage.setItem('myData', JSON.stringify(newData));
            return newData;
        })
    }

    const updateData = (key, value) => {
        setData((prevData)=> {
            const newData = {...prevData, [key]: value};
            localStorage.setItem('myData', JSON.stringify(newData));
            return newData
        })
    }

    return {data, updateData, deleteData, addData}
}

export default useLocalStorage