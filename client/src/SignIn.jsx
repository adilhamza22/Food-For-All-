
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const history = useHistory();

//   const handleSignIn = () => {
//     // Check if user exists in local storage
//     const users = JSON.parse(localStorage.getItem('users')) || [];
//     const user = users.find((u) => u.email === email && u.password === password);
//     if (!user) {
//       alert('Invalid email or password');
//       return;
//     }

//     // Store user type in local storage
//     localStorage.setItem('userType', user.userType);

//     // Redirect user to dashboard
//     history.push(user.userType === 'ngo' ? '/dashboardngo' : '/dashboardrestaurant');
//   };

//   return (
//     <div className="container">
//       <div className="row justify-content-center mt-5">
//         <div className="col-md-6">
//           <div className="card">
//             <div className="card-body">
//               <h3 className="card-title text-center mb-4">Sign In</h3>
//               <div className="form-group">
//                 <label>Email address</label>
//                 <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
//               </div>
//               <div className="form-group">
//                 <label>Password</label>
//                 <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
//               </div>
//               <button className="btn btn-primary btn-block" onClick={handleSignIn}>Sign In</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default SignIn;

import { useState,useEffect } from 'react';
import logo from './ffa.png';

function SigninForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // useEffect(() => {
  //   // Retrieve user data from session storage
  //   const userData = JSON.parse(sessionStorage.getItem('userData'));
  //   // Use the user data for signin logic

  //   // Clean up session storage after retrieving user data
  //   sessionStorage.removeItem('userData');
  // }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    const userType = localStorage.getItem('userType');
    const users = JSON.parse(localStorage.getItem(userType));
    
    const currentUser = users.find(user => user.email === email && user.password === password);

    if (currentUser) {
      if (userType === 'ngos') {
        window.location.href = '/homengo';
      } else {
        window.location.href = '/home';
      }
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={logo} alt="FoodForAll" className="img-fluid" />
        </div>

        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

            <div className="form-floating">
              <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                value={email} onChange={handleEmailChange} required />
              <label htmlFor="floatingInput">Email address</label>
            </div>

            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                value={password} onChange={handlePasswordChange} required />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <button className="w-100 btn btn-lg btn-primary mt-3" type="submit">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SigninForm;
