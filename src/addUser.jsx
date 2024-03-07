import { useState } from "react"
import axios from "axios"


const AddUser = () => {
    const [user, setUser] = useState({
        first_name : '',
        email : '',
        password : ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        try{
            const newUser = axios.post('http://localhost:3080/users', user)
            console.log(newUser)
        }
        catch(err){
            console.log(err.message)            
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="first name" value={user.first_name} onChange={e => setUser({...user, first_name : e.target.value})} />
                <br />
                <input type="text" placeholder="email" value={user.email}  onChange={e => setUser({...user, email : e.target.value})} />
                <br/>
                <input type="password" placeholder="password" value={user.password}  onChange={e => setUser({...user, password: e.target.value})} />
                <br />
                <button type="submit">Add User</button>
            </form>
        </>
    )
}

export default AddUser