import React from 'react';
import { useEffect, useState } from 'react';

const UsersForm = ({
    addUsers,
    updateUser,
    deselectUser,
    userSelected,
    openModal,
    onClose
}) => {
    if (!openModal) return null



    const [firstName, setFirtsName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPasword] = useState("");
    const [birthday, setBirthday] = useState("");

    useEffect(() => {
        if (userSelected !== null) {
            setFirtsName(userSelected.first_name)
            setLastName(userSelected.last_name)
            setEmail(userSelected.email)
            setPasword(userSelected.password)
            setBirthday(userSelected.birthday)

        } else {
            reset();
        }
    }, [userSelected]);

    const submit = (e) => {
        e.preventDefault();
        // alert("hice submit")

        const userForm = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            birthday: birthday
        };


        if (userSelected !== null) {
            userForm.id = userSelected?.id
            updateUser(userForm);
            deselectUser();
        } else {
            addUsers(userForm);
            reset();

        }
    }

    const reset = () => {
        setFirtsName("")
        setLastName("")
        setEmail("")
        setPasword("")
        setBirthday("")

    }
const clear =()=>{
    reset();
}

    return (

        <form onSubmit={submit}>
            <div className='container-form'>
                <p onClick={onClose} className="closeBtn"><i class="fa-solid fa-circle-xmark"></i></p>

                <div className='input-container'>
                    <label htmlFor="firstName">First Name</label>
                    <br />
                    <input type="text"
                        id='firstName'
                        onChange={(e) => setFirtsName(e.target.value)}
                        value={firstName}
                    />
                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <br />
                    <input type="text"
                        id='lastName'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input type="text"
                        id='email'
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <br />
                    <input type="password"
                        id='password'
                        onChange={(e) => setPasword(e.target.value)}
                        value={password}
                    />
                </div>

                <div>
                    <label htmlFor="birthday">Birthday</label>
                    <br />
                    <input type="date"
                        id='birthday'
                        onChange={(e) => setBirthday(e.target.value)}
                        value={birthday}
                    />
                </div>

                <button className='created '> <i class="fa-solid fa-user-pen"></i> {userSelected !== null ? "Update" : "Create"}</button>
                {userSelected !== null && (
                    <button className='clean' onClick={clear} type="button"> <i class="fa-solid fa-user-xmark"></i> Clear
                    </button>
                )}
            </div>
        </form>

    );

};
export default UsersForm;