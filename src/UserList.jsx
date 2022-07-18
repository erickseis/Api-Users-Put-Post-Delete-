import React from 'react';

const UserList = ({ users, deleteUser, selectUser }) => {
    return (
        <div className='contenedor-padre'>
       
        <ul className='card-container' > 
     
            {
                users.map(user => (
                    <li className='card' key={user.id}>
                           <h1 className='h1'>Card User <i class="fa-solid fa-address-card"></i></h1>
                        <h1>{user.first_name} {user.last_name}</h1>
                        <h3>{user.email}</h3>
                        <p>{user.password}</p>
                        <q>{user.birthday}</q>
                        <br />
                        <button className='button-list clear' onClick={() => deleteUser(user.id)}><i class="fa-solid fa-trash-can"></i> Eliminar</button>
                        <button className='button-list edit' onClick={()=>selectUser(user)}>Editar <i class="fa-solid fa-pencil"></i></button>
                    </li>

                ))
            }
        </ul>
        </div>
    );
};

export default UserList;