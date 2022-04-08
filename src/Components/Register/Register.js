import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>please register now</h3>
            <form>
             <input type="text" placeholder='Your Name'></input>
             <br/>
             <input type="email" placeholder='your email'>
             </input>
            <br/>
            <input type="password" placeholder='your password'></input>
            <br/>
            <input type="submit" value="Register"></input>
            </form>
        </div>
    );
};

export default Register;