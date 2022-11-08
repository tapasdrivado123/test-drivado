import React, {useState, useEffect} from "react"
import RegisterImg from '../assets/register-img.png'
import InputField from '../components/InputField';
import {faUser, faEnvelope, faBuilding, faPhone, faAddressCard, faLock} from "@fortawesome/free-solid-svg-icons"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {register, reset} from '../features/auth/authSlice'
import Spinner from "../components/Spinner";
import axios from "axios";

const Register = () => {

  const [formData, setFormData] = useState({
    fname:'',
    lname:'',
    email:'',
    email2:'',
    comname:'',
    contact:'',
    address:'',
    password:''
  })


  const {fname, lname, email, email2, comname,password, contact, address} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector(
    (
      state) => state.auth
    )

    useEffect(() => {
      if(isError) {
        toast.error(message)
      }

      if(isSuccess || user) {
        navigate('/')
      }

      dispatch(reset())

    }, [user, isError, isSuccess, message, navigate, dispatch])
  
  // const onChange = (event) => {
  //   setFormData((prevState) => ({
  //     ...prevState,
  //     [event.target.name]: event.target.value,
  //   }))
  // }

  const fnameChangeHandler = (e) => {
    setFormData({
      ...formData,
      fname: e.target.value
    })
  }

  const lnameChangeHandler = (e) => {
    setFormData({
      ...formData,
      lname: e.target.value
    })

  }

  const email2ChangeHandler = (e) => {
    setFormData({
      ...formData,
      email2: e.target.value
    })
  }
  const emailChangeHandler = (e) => {
    setFormData({
      ...formData,
      email: e.target.value
    })
  }
  const companyHandler = (e) => {
    setFormData({
      ...formData,
      comname: e.target.value
    })
  }

  const contactHandler = (e) => {
    setFormData({
      ...formData,
      contact: e.target.value
    })
  }
  const addressHandler = (e) => {
    setFormData({
      ...formData,
      address: e.target.value
    })
  }

  const passHandler = (e) => {
    setFormData({
      ...formData,
      password: e.target.value
    })
  }



  const onSubmit = (event) => {
    event.preventDefault()

    if(email !== email2) {
      toast.error('Email do not match')
    } else {
      const userData = {
        fname,
        lname,
        email: email,
        company: comname,
        phnumber: contact,
        address,
        password : password
      }

      console.log(userData);
      dispatch(register(userData))

      // axios.post("http://localhost:5000/api/users/",userData).then(data=>console.log(data)).catch(err=>console.log(err))
    }
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <div className="justify-center h-screen md:flex sm:flex-none">
        <div className='hidden w-full m-auto md:block'><img src={RegisterImg} alt="Login" className="object-cover xl:ml-20" /></div>
        <div className="items-center w-full py-36 lg:py-40 md:py-30 bg-slate-900">
          <div><h2 className="mt-6 text-2xl font-medium text-center text-white lg:text-4xl">CLIENT REGISTRATION</h2></div>

          <form className="px-10 mt-8" action="#" method="POST" onSubmit={onSubmit}>
              {/* <input type="hidden" name="remember" value="true" /> */}
              <div>
                  <div className="justify-center space-y-2 md:flex sm:flex-none md:space-x-3 md:space-y-0 sm:space-x-0">
                    <div className="basis-full"><InputField isFontawesome={true} fontawesomeIcon={faUser} placeholder="First Name" id="fname" name="fname" type="text" value={fname} onChange={fnameChangeHandler} /></div>
                    <div className="basis-full"><InputField isFontawesome={true} fontawesomeIcon={faUser} placeholder="Last Name" id="lname" name="lname" type="text" value={lname} onChange={lnameChangeHandler} /></div>
                  </div>
                  <div className="justify-center mt-2 space-y-2 md:flex sm:flex-none md:space-x-3 md:space-y-0 sm:space-x-0">
                    <div className="basis-full"><InputField isFontawesome={true} fontawesomeIcon={faEnvelope} placeholder="Email Address" id="email-address" name="email" type="email" value={email} onChange={emailChangeHandler} /></div>
                    <div className="basis-full"><InputField isFontawesome={true} fontawesomeIcon={faEnvelope} placeholder="Confirm Email Address" id="email-address" name="email" type="email" value={email} onChange={email2ChangeHandler} /></div>
                  </div>
                  <div className="justify-center mt-2 space-y-2 md:flex sm:flex-none md:space-x-3 md:space-y-0 sm:space-x-0">
                    <div className="basis-full"><InputField isFontawesome={true} fontawesomeIcon={faBuilding} placeholder="Company Name" id="comname" name="comname" type="text" value={comname} onChange={companyHandler} /></div>
                    <div className="basis-full"><InputField isFontawesome={true} fontawesomeIcon={faPhone} placeholder="Contact Number" id="contact" name="contact" type="number" value={contact} onChange={contactHandler} /></div>
                  </div>
                  <div className='mt-2'>
                      <InputField isFontawesome={true} fontawesomeIcon={faAddressCard} placeholder="Address" id="address" name="address" type="textarea" value={address} onChange={addressHandler} />
                  </div>
                  <InputField isFontawesome={true} fontawesomeIcon={faLock} placeholder="Password" id="Password" name="Password" type="text" value={password} onChange={passHandler} />
              </div>

              <div className='w-full mx-auto mt-6 md:w-3/4'>
                  <button type="submit" className="bg-[#FB4156]  text-black text-xl font-regular w-full justify-center py-2 rounded">
                      SIGN UP
                  </button>
              </div>
              <div className="w-full mt-2 text-sm text-center text-gray-500">Already Registered? 
                  <a href="./signin" className='hover:text-[#FB4156]'> Login.</a>
              </div>
          </form>
        </div>
    </div>
    </>
  )
}

export default Register