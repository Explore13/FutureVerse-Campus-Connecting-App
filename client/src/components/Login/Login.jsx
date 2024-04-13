// import React from 'react';
// import './login.css'; // Import the CSS file

// function Login() {
//   return (
//     <div className="main-container">
//       <div className="form-container">
//         <p className="title">Welcome back</p>
//         <form className="form" action="/login" method="post">
//           <input type="text" className="input" name="CollegeID" placeholder="Class Roll No" required />
//           <input type="password" className="input" name="Password" placeholder="Password" required />
//           <p id="passwordMismatch" className="popup"></p>
//           <p className="page-link">
//             <span className="page-link-label">Forgot Password?</span>
//           </p>
//           <button className="form-btn">Log in</button>
//         </form>
//         <p className="sign-up-label">
//           Don't have an account?<a href="/register"><span className="sign-up-link">Sign up</span></a>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import {useState} from 'react';
import './login.css';
import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom';
import {login} from "../../redux/slices/AuthSlice.js";


const Login = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(
            login({
                userId,
                password
            })
        )
            .then(() => {
                navigate('/');
            })
            .catch((error) => {
                console.error('Login failed:', error);
            });

    };

    return (
        <div className="main-container">
            <div className="form-container">
                <p className="title">Welcome back</p>
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" className="input" name="CollegeID" placeholder="Class Roll No" required
                           value={userId} onChange={(e) => setUserId(e.target.value)}/>
                    <input type="password" className="input" name="Password" placeholder="Password" required
                           value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <p id="passwordMismatch" className="popup"></p>
                    <p className="page-link">
                        <span className="page-link-label">Forgot Password?</span>
                    </p>
                    <button type="submit" className="form-btn">Log in</button>
                </form>
                <p className="sign-up-label">
                    Don't have an account?<a href="/register"><span className="sign-up-link">Sign up</span></a>
                </p>
            </div>
        </div>
    );
};

export default Login;
