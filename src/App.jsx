import axios from 'axios'
import './App.css'
import { useState } from 'react'
import AddUser from './addUser.jsx'


function App() {
    const [users, setUsers] = useState([])

  const apiCall = async () => {
    try{
      const response = await axios.get('http://localhost:3080/users')
      setUsers(response.data)
      // console.log(users)
    }
    catch(err){
      console.log(err.message)
    }
  }

  const deleteUser = async () => {
    try{
      const deleteUser = await axios.delete(`http://localhost:3080/users ${users._id}`)
      apiCall()
    }
    catch(err){
      console.log(err.message)
      
    }
  }

  apiCall()
  // setCount

  return (
    <>
        <h1>Hello word</h1>
        {users.map(user => {
          return (
            <>
              <div style={{border : '4px solid black'}}>
                  <p>{user.firt_name}</p>
                  <p>{user.email}</p>
                  <button onClick={deleteUser(user._id)}>Delete User</button>
              </div>
            </>
          )       
        })}
        <AddUser />
    </>
  )
}

export default App
