import {useState, useEffect} from 'react';
import LoginImg from '../assets/login-img.png'
import {faEnvelope, faKey} from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import InputField from '../components/InputField';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import {reset, signin} from '../features/auth/authSlice'
import Spinner from "../components/Spinner";

const SignIn = () => {

  const [formData, setFormData] = useState({
    email:'',
    password:''
  })

  const {email, password} = formData

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

  const emailChangeHandler = (e) => {
    setFormData ({
      ...formData,
      email:e.target.value
    })
  }

  const passwordChangeHandler = (e) => {
    setFormData ({
      ...formData,
      password:e.target.value
    })
  }

  const onSubmit = (event) => {
    event.preventDefault()

    const userData = {
      email,
      password,
    }

    dispatch(signin(userData))
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
    <div className="h-screen md:flex sm:flex-none place-content-center">
        <div className='flex-wrap justify-center hidden w-full m-auto md:block'><img src={LoginImg} alt="Login" className='xl:ml-[30%] md:ml-[20%] sm:max-w-sm md:max-w-md h-auto' /></div>
            <div className="items-center py-20 pt-40 lg:py-40 md:py-30 xl:w-1/2 lg:w-2/3 md:w-1/2 bg-slate-900">
                <div><h2 className="mt-6 text-6xl font-medium text-center text-white">Sign In</h2></div>

                <form onSubmit={onSubmit} className="w-full px-10 mt-8" action="#" method="POST">
                    <div>
                        <div className='basis-full'>
                            <InputField isFontawesome={true} fontawesomeIcon={faEnvelope} placeholder="Email address" id="email-address" name="email" type="email" value={email} onChange={emailChangeHandler} />
                        </div>
                        <div className='mt-2 basis-full'>
                            <InputField isFontawesome={true} fontawesomeIcon={faKey} placeholder="Password" id="pw" name="password" type="password" value={password} onChange={passwordChangeHandler} />
                        </div>
                    </div>

                    <div className="flex items-center w-full my-2">
                        <div className="flex w-1/2">
                            <input id="remember-me" name="remember-me" type="checkbox" className="w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500" />
                            <label className="block ml-2 text-xs text-gray-500 md:text-sm">Remember&nbsp;me</label>
                        </div>

                        <div className="w-1/2 text-right sm:space-y-2">
                            <a href="www.google.in" className='mt-1 text-xs text-gray-500 md:text-sm'>Forgot your password?</a>
                        </div>
                    </div>

                    <div className='w-full mt-10'>
                        <button type="submit" className="bg-[#FB4156] text-white text-xl font-regular w-full justify-center py-2 rounded">
                            SIGN IN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignIn