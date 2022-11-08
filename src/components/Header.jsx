import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
// import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { logout, reset } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <header className="header">
      {/* <div className='logo'>
            <Link to='/'>Drivado</Link>
        </div> */}
      <ul className="flex space-x-5 justify-center">
        {user ? (
          <li>
            <button onClick={onLogout}>
              <div className="text-sm text-[#fb4156] hover:text-black">
                Logout
              </div>
            </button>
            {/* <Link to='/signin'>
                    <FontAwesomeIcon icon={faUser} /> SignIn
                </Link> */}
          </li>
        ) : (
          <>
            <li>
              <Link to="/signin">
                <div className="text-sm text-[#fb4156] hover:text-black">
                  SignIn
                </div>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <div className="text-sm text-[#fb4156] hover:text-black">
                  Register
                </div>
              </Link>
            </li>
            <li>
              <Link to="/userManagement">
                <div className="text-sm text-[#fb4156] hover:text-black">
                  UserManagement
                </div>
              </Link>
            </li>
            <li>
              <Link to="/region">
                <div className="text-sm text-[#fb4156] hover:text-black">
                  RegionSec
                </div>
              </Link>
            </li>
            <li>
              <Link to="/vehicle">
                <div className="text-sm text-[#fb4156] hover:text-black">
                VehicleSec
                </div>
              </Link>
            </li>
            <li>
              <Link to="/lazy">
                <div className="text-sm text-[#fb4156] hover:text-black">
                Lazy
                </div>
              </Link>
            </li>
            <li>
              <Link to="/count">
                <div className="text-sm text-[#fb4156] hover:text-black">
                Count
                </div>
              </Link>
            </li>
            <li>
              <Link to="/Event">
                <div className="text-sm text-[#fb4156] hover:text-black">
                Event
                </div>
              </Link>
            </li>
            <li>
              <Link to="/PickTime">
                <div className="text-sm text-[#fb4156] hover:text-black">
                PickTime
                </div>
              </Link>
            </li>
            <li>
              <Link to="/EventNew">
                <div className="text-sm text-[#fb4156] hover:text-black">
                EventNew
                </div>
              </Link>
            </li>
            <li>
              <Link to="/EventNew2">
                <div className="text-sm text-[#fb4156] hover:text-black">
                EventNew2
                </div>
              </Link>
            </li>
            <li>
              <Link to="/EmailInvoice">
                <div className="text-sm text-[#fb4156] hover:text-black">
                Email Invoice
                </div>
              </Link>
            </li>
            <li>
              <Link to="/DropDown">
                <div className="text-sm text-[#fb4156] hover:text-black">
                Drop Down
                </div>
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
};

export default Header;
