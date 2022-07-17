import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import UserList from './UserList'
import './App.css'
import UsersForm from './UsersForm'

function App() {

  const [users, setUsers] = useState([])
  const [userSelected, setUserSelected] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  
  useEffect(() => { //para llamar los datos que estan en la API
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }, [])
  console.log(users)

  const getUser = () => {
    axios.get('https://users-crud1.herokuapp.com/users/')
      .then(res => setUsers(res.data))
  }

  const addUsers = newUser =>{
    alert('añadiendo')
    axios.post('https://users-crud1.herokuapp.com/users/', newUser)
    .then(() => getUser())
    .catch((error) =>console.log(error.response));

  }
  const deleteUser = (id) => {
    axios.delete(`https://users-crud1.herokuapp.com/users/${id}/`)
    .then(()=> getUser());
  };

  const selectUser = user => {
    setUserSelected(user)
  }

  const deselectUser = () => setUserSelected(null)

  const updateUser = (userUpdate) =>{
    // alert('Actualizando');
    axios.put(`https://users-crud1.herokuapp.com/users/${userUpdate.id}/`, userUpdate)
    .then(() => getUser())
    .catch(error=>console.log(error.response))

  }

console.log(userSelected)


  return (
    <div className="App">

      <button className='modalBtn' onClick={()=> setOpenModal(true)}>Create User</button>
      <UsersForm 
      userSelected={userSelected}
      addUsers={addUsers}
      selectUser={selectUser}
      updateUser={updateUser}
      deselectUser={deselectUser}
      openModal={openModal}
      onClose={()=> setOpenModal(false)}
      />
      
      <UserList 
        users={users} 
        deleteUser={deleteUser}
        selectUser={selectUser}

        />
        
        
    </div>
  )
}

export default App
