import { useState, useEffect } from "react";
import LoginImg from "../assets/car.jpg";
import { faEnvelope, faKey } from "@fortawesome/free-solid-svg-icons";
import InputField from "../components/InputField";

const SignIn3 = () => {
  const initialValues = { email: "", password: "" };
  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validate(formData));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be more than 6 characters";
    } else if (values.password.length > 16) {
      errors.password = "Password cannot exceed more than 16 characters";
    }
    return errors;
  };

  return (
    <>
      <div className="h-screen md:flex sm:flex-none place-content-center">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
            <div className="text-sm text-green-600">Signed in successfully</div>
        ) : (
            <pre>{JSON.stringify(formData, undefined, 1)}</pre>
        )}

        <div className="flex-wrap justify-center hidden w-full m-auto md:block">
          <img
            src={LoginImg}
            alt="Login"
            className="xl:ml-[30%] md:ml-[20%] sm:max-w-sm md:max-w-md h-auto"
          />
        </div>
        <div className="items-center py-20 pt-40 lg:py-40 md:py-30 xl:w-1/2 lg:w-2/3 md:w-1/2 bg-slate-900">
          <div>
            <h2 className="mt-6 text-6xl font-medium text-center text-white">
              Sign In
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full px-10 mt-8"
            action="#"
            method="POST"
          >
            <div>
              <div className="basis-full">
                <InputField
                  isFontawesome={true}
                  fontawesomeIcon={faEnvelope}
                  placeholder="Email address"
                  id="email-address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1 mb-3">{formErrors.email}</p>
              <div className="mt-2 basis-full">
                <InputField
                  isFontawesome={true}
                  fontawesomeIcon={faKey}
                  placeholder="Password"
                  id="pw"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <p className="text-xs text-gray-400 mt-1 mb-3">{formErrors.password}</p>
            </div>

            <div className="flex items-center w-full my-2">
              <div className="flex w-1/2">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="block ml-2 text-xs text-gray-500 md:text-sm">
                  Remember&nbsp;me
                </label>
              </div>

              <div className="w-1/2 text-right sm:space-y-2">
                <a
                  href="www.google.in"
                  className="mt-1 text-xs text-gray-500 md:text-sm"
                >
                  Forgot your password?
                </a>
              </div>
            </div>

            <div className="w-full mt-10">
              <button
                type="submit"
                className="bg-[#FB4156] text-white text-xl font-regular w-full justify-center py-2 rounded"
              >
                SIGN IN
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn3;