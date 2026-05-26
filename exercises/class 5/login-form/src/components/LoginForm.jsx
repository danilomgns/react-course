import { useState } from 'react';
import './LoginForm.css';

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  function holdPassward() {
    if (showPassword) {
      setShowPassword(false);  
    } else {
      setShowPassword(true);
    }
  }

  return (
    <>  
      <div>
        <input className="login-input" placeholder="Email" />
      </div>
      <div>
        <input 
          className="login-input" 
          placeholder="Password" 
          type={showPassword ? "text" : "password"}
        />
        <button 
          className="password-button"
          onClick={holdPassward}
        >
          {showPassword ? 'Hide' : 'Show'}
        </button>
      </div>
      <div>
        <button className="login-button">Login</button>
        <button className="login-button">Sign up</button>  
      </div>
    </>
  );
}