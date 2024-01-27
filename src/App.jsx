import { useState } from 'react'
import './App.css'
import TodoCard from './components/TodoCard'

function App() {
  const [singleData, addSingleData] = useState('')
  const [todos, getTodos] = useState([])

  //FUNCTION TO ADD TEXT IN INPUT FIELD
  const handleAddTodo = (e) => {
    addSingleData(e.target.value)
  }

  // FUNCTION THAT HANDLE THE INPUTED DATA
  const handleSubmit = (e) => {
    e.preventDefault();

    //CHECK IF DATA IS EMPTY
    if (singleData.trim() === '') return;

    //ADD DATA IN ARRAY OF OBJECT
    getTodos([...todos, {
      id: generateUniqueId(),
      text: singleData,
      isComplete: false
    }])

    //MAKE INPUT FIELD EMPTY AFTER ADDING DATA
    addSingleData('')
  }

  //FINCTION TO DELETE DATA 
  const handleDelete = (id) => {
    getTodos(todos.filter(data => {
      return data.id != id
    }))
  }

  const handleCompleted = (id) => {
    // const show = todos.map((data) => {
    //   return data.id == id ? { ...data, isComplete: !data.isComplete } : data
    // })
    // console.log(show)
    getTodos(todos.map((data) => {
      return data.id == id ? { ...data, isComplete: !data.isComplete } : data
    }))
  }

  //FUNCTION TO GENERATE UNIQUE ID
  function generateUniqueId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  return (
    <>
      <div className="mt-5 h-100 w-100 d-flex justify-content-center align-tems-center" >
        <div className="todo-card w-50">
          <center className="h1 text-success" style={{ fontSize: '5rem' }}>Todos</center>
          <div className="text-center">
            <div className="form-group">
              <form onSubmit={handleSubmit}>
                <div className="w-100  p-3 d-flex">
                  <input
                    type="text"
                    className="form-control text-white mx-3"
                    onChange={handleAddTodo}
                    value={singleData}
                  />
                  <button type='submit' className="btn btn-outline-success">Add</button>
                </div>
              </form>
            </div>
          </div>
          <div className="display-todos">
            <ol>
              {todos.map((data, ind) => (
                <TodoCard key={ind} data={data} handleCompleted={handleCompleted} handleDelete={handleDelete} />
              ))}
            </ol>
          </div>
        </div>
      </div>
      <footer className='footer'>
        <p className='text-white'>
          Developed by <a href="http://adhikariabinash.com.np" target="_blank" rel="noopener noreferrer">Er. Abinash Adhikari</a>
        </p>
      </footer>
    </>
  )
}

export default App
