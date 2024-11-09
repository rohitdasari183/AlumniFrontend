import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login submission logic here
    console.log({ email, password, checked });
  };

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email Input */}
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input 
            type="email" 
            className="form-control" 
            id="exampleInputEmail1" 
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Checkbox */}
        <div className="mb-3 form-check">
          <input 
            type="checkbox" 
            className="form-check-input" 
            id="exampleCheck1"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
