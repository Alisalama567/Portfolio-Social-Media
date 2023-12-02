import React from 'react'
import './Signup.css'
const Signup = () => {
  return (
    <div className="signup">
      <form className="infoform autform">
        <h3>Sign Up</h3>

        <div>
          <input
            type="text"
            placeholder="Frist Name"
            name="FristName"
            className="infoinput"
          />
          <input
            type="text"
            placeholder="Last Name"
            name="LastName"
            className="infoinput"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoinput"
            name="username "
            placeholder="User Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoinput"
            name="password "
            placeholder="password"
          />
           <input
            type="text"
            className="infoinput"
            name="confirmpass "
            placeholder="Confirm password"
          />
        </div>
        <div>
        <span>Already have an account. Login! </span>
        </div>
        <button className="button infoButton" type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default Signup