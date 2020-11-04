import React, { useState } from 'react';
import { useAuth } from '../../Contexts/AuthContext';
import './Modal.elements.css';

const Modal = () => {
    const { modal, closeModal, register, error, login } = useAuth();
    const [state, setState] = useState({
        register: true,
        login: false
    });
    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleInput = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        });
    };

    const formsToggle = () => {
        setState({
            ...state,
            register: !state.register,
            login: !state.login
        });
    };

    const closeForm = e => {
        const className = e.target.getAttribute('class');

        if(className === 'modal show') {
            closeModal();
        }
    };

    const registerUser = e => {
        e.preventDefault();

        register(inputs);
        setInputs({username: '', email: '', password: ''});
    };

    const userLogin = e => {
        e.preventDefault();

        login(inputs);
    };


    return (
        <>
        {modal ? (
            <div className={`modal ${modal ? 'show' : ''}`} onClick={closeForm}>
                <div className="modal-container">
                    <div className="modal-logo">
                        <img src="/images/logo.png" alt="Instagram"/>
                    </div>

                    {error && <div className="alert danger">{error}</div>}

                    {state.register ? 
                        <div className="modal-form">
                            <form onSubmit={registerUser}>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="username">User Name</label>
                                    <input type="text" name="username" id="username" className="form-control" placeholder="Username" value={inputs.username} onChange={handleInput} />
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Email" value={inputs.email} onChange={handleInput} />
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={inputs.password} onChange={handleInput} />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-smart">Register</button>
                                </div>
                            </form>

                            <div className="text-center form-text">
                                Already have an account? <span onClick={formsToggle}>Login</span>
                            </div>
                        </div>
                    : 
                        <div className="modal-form">
                            <form onSubmit={userLogin}>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" className="form-control" placeholder="Email" value={inputs.email} onChange={handleInput} />
                                </div>
                                <div className="form-group">
                                    <label className="sr-only" htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password" className="form-control" placeholder="Password" value={inputs.password} onChange={handleInput} />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-smart">Login</button>
                                </div>
                            </form>

                            <div className="text-center form-text">
                                Create a new <span onClick={formsToggle}>Account</span>
                            </div>
                        </div>
                    }
                </div>
            </div>
        ) : ("")}
        </>
    )
}

export default Modal;
