import React from 'react'
import { FaTrashAlt, FaCheck } from "react-icons/fa";

const TodoCard = ({ data, handleCompleted, handleDelete }) => {
    return (
        <>
            <li className="w-100 d-flex align-items-center justify-content-between my-2 p-3 border border-success" style={{ borderRadius: '1rem' }}>
                <div className={data.isComplete ? 'completed' : ''}>{data.text} </div>
                <div className="ms-2 btn-group flex-1 d-flex justify-content-between" style={{ width: '4rem' }}>
                    <button title="Completed" onClick={() => handleCompleted(data.id)} style={noBtn}><FaCheck style={{ color: 'red' }} /></button>
                    <button title="Delete" onClick={() => handleDelete(data.id)} style={noBtn}><FaTrashAlt /></button>
                </div>
            </li>
        </>
    )
}

const noBtn = {
    margin: 'atuo',
    backgroundColor: 'none',
    outline: 'none',
    offset: 'none',
    border: 'none',
}

export default TodoCard