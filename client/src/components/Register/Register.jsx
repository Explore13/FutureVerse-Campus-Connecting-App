// import React from 'react';
// import "./Register.css"

// function Register() {
//     return (
//         <div className="main-container">
//             <div className="form-container">
//                 <p className="title">Welcome to FutureVerse</p>
//                 <form className="form" action="/register" method="post">
//                     <input type="text" className="input" name="Name" placeholder="Your Full Name" required />
//                     <input
//                         type="text"
//                         className="input"
//                         name="CollegeID"
//                         placeholder="Class Roll No (e.g., 22ece009)"
//                         pattern="[0-9]{2}[a-zA-Z]{2,4}[0-9]{3}"
//                         required
//                     />
//                     <input type="email" className="input" name="Email" placeholder="Enter your email" required />

//                     {/* Dropdown menu for department selection */}
//                     <select className="input" name="Department" required>
//                         <option value="" disabled selected>Select Department</option>
//                         <option value="CSE">CSE</option>
//                         <option value="IT">IT</option>
//                         <option value="ECE">ECE</option>
//                         <option value="CSDS">CSDS</option>
//                         <option value="EE">EE</option>
//                         <option value="ME">ME</option>
//                         {/* Add more departments as needed */}
//                     </select>

//                     <input type="text" className="input" name="MobileNumber" placeholder="Mobile Number" required />
//                     <input
//                         type="password"
//                         className="input"
//                         name="Password"
//                         placeholder="Password"
//                         pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
//                         title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
//                         required
//                     />
//                     <input type="number" className="input" name="GraduationYear" placeholder="Graduation Year" required />

//                     <p id="passwordMismatch" className="popup"></p>

//                     <button className="form-btn" type="submit">Sign up</button>
//                 </form>
//                 <p className="sign-up-label">
//                     Have an account?<a href="/login"><span className="sign-up-link">Sign in</span></a>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default Register;


import {useState} from 'react';
import "./Register.css";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {register} from "../../redux/slices/AuthSlice.js";

const Register = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [userId, setUserId] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [graduationYear, setGraduationYear] = useState('');
    const [error, setError] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault();

        dispatch(register({
            userId,
            name,
            email,
            password,
            department,
            phNo: mobileNumber,
            graduationYear,
        }))
            .then(() => {
                navigate('/login');
            })
            .catch((error) => {
                console.error('SignUp failed:', error);
                setError(error.message)
            });

    };

    return (
        <div className="main-container">
            <div className="form-container">
                <p className="title">Welcome to FutureVerse</p>
                {error && <div className="error">{error}</div>}
                <form className="form" onSubmit={handleSubmit}>
                    <input type="text" className="input" name="Name" placeholder="Your Full Name" required
                           value={name} onChange={(e) => setName(e.target.value)}/>
                    <input type="text" className="input" name="collegeid" placeholder="Class Roll No (e.g., 22ece009)"
                           pattern="[0-9]{2}[a-zA-Z]{2,4}[0-9]{3}" required
                           value={userId} onChange={(e) => setUserId(e.target.value)}/>
                    <input type="email" className="input" name="email" placeholder="Enter your email" required
                           value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <select className="input" name="department" required
                            value={department} onChange={(e) => setDepartment(e.target.value)}>
                        <option value="" disabled>Select Department</option>
                        <option value="CSE">CSE</option>
                        <option value="IT">IT</option>
                        <option value="ECE">ECE</option>
                        <option value="CSDS">CSDS</option>
                        <option value="EE">EE</option>
                        <option value="ME">ME</option>
                        {/* Add more departments as needed */}
                    </select>
                    <input type="text" className="input" name="mobilenumber" placeholder="Mobile Number" required
                           value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)}/>
                    <input type="password" className="input" name="password" placeholder="Password"
                           pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                           title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                           required value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <input type="number" className="input" name="graduationyear" placeholder="Graduation Year" required
                           value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)}/>
                    <button className="form-btn" type="submit">Sign up</button>
                </form>
                <p className="sign-up-label">Have an account?
                    <a href="/login"><span className="sign-up-link">Sign in</span></a>
                </p>
            </div>
        </div>
    );
};

export default Register;
