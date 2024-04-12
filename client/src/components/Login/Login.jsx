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

import React, { useState } from 'react';
import axios from 'axios';
import './login.css'; // Import the CSS file

const Login = () => {
  const [collegeid, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', { collegeid, password });
      console.log(response.data); // handle success
      // Redirect to homepage on successful login
      if (response.status === 200) {
        window.location.href = '/'; // Adjust the URL as needed
      }
    } catch (err) {
      console.error(err.response.data); // handle error
      setError(err.response.data.error);
      window.location.href = '/register'; // Redirect to registration page if login fails
    }
  };

  return (
    <div className="main-container">
      <div className="form-container">
        <p className="title">Welcome back</p>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" className="input" name="CollegeID" placeholder="Class Roll No" required value={collegeid} onChange={(e) => setUsername(e.target.value)} />
          <input type="password" className="input" name="Password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
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
