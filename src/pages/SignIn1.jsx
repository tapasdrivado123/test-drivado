
import React, {useState} from 'react';
import LoginImg from '../assets/login-img.png'
// import {  } from "@heroicons/react/solid"
import {faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from '../components/InputField';
import axios from 'axios';

const initialState = {
    email: '',
    password: '',
    err: '',
    success: ''
}

const SignIn100 = () => {
    const [user, setUser] = useState(initialState)
    const [email, password, err, success] = user
    const handleChangeInput = event => {
        const {name, value} = event.target
        setUser({...user, [name]:value, err: '', success: ''})
    }


    const handleSubmit = async event => {
        event.preventDefault()
        try {
            const res = await axios.post('/user/login', {email, password})
            console.log(res)
        } catch (err) {
            err.response.data.msg &&
            setUser({...user, err: err.response.data.msg, success: ''})
        }
    }


    return (
        <>
        <div className="flex h-screen place-content-center xl:container">
            <div className='w-full m-auto mx-auto'><img src={LoginImg} alt="Login" className='text-center' /></div>
            <div className="items-center w-full pt-40 ml-5 bg-slate-900">
                <div><h2 className="mt-6 text-6xl font-medium text-center text-white">Sign In</h2></div>

                <form onSubmit={handleSubmit} className="w-full px-10 mt-8" action="#" method="POST">
                    {/* <input type="hidden" name="remember" value="true" /> */}
                    <div>
                        <div>
                            {/* <input id="email-address" name="email" type="email" placeholder="Email address" autocomplete="email" className="w-full px-4 py-2 text-lg font-normal text-white bg-gray-600 rounded focus:outline-none" /> */}
                            <InputField isFontawesome={true} fontawesomeIcon={faEnvelope} placeholder="Email address" id="email-address" name="email" type="email" value={email} onChange="handleChangeInput" />
                        </div>
                        <div className='mt-3'>
                            <InputField isFontawesome={true} fontawesomeIcon={faKey} placeholder="Password" id="pw" name="password" type="password" value={password} onChange="handleChangeInput" />
                        </div>
                    </div>

                    <div className="flex w-full my-2">
                        <div className="flex w-full">
                            <input id="remember-me" name="remember-me" type="checkbox" className="w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                            <label  className="block ml-2 text-sm text-gray-500 line">Remember me</label>
                        </div>

                        <div className="w-full text-right">
                            <a href="https://www.google.com" className='text-sm text-gray-500'>Forgot your password?</a>
                        </div>
                    </div>

                    <div className='w-full mt-10'>
                        <button type="submit" className="bg-[#FB4156] text-white text-xl font-regular w-full justify-center py-2.5 rounded">
                            SIGN IN
                        </button>
                    </div>
                </form>
            </div>
        </div>

</>
        
)}


export default SignIn100;