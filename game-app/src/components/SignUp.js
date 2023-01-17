import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState(null);

  const signUp = () => {};

  return (
    <div className='signUp'>
      <label>Sign Up</label>
      <input
        placeHolder='First Name'
        onChange={(e) => setUser({ ...user, firstName: e.target.value })}
      />
      <input
        placeHolder='Last Name'
        onChange={(e) => setUser({ ...user, lastName: e.target.value })}
      />
      <input
        placeHolder='Username'
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
      />
      <input
        placeHolder='Password'
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <button onClick={signUp}></button>
    </div>
  );
};

export default SignUp;
