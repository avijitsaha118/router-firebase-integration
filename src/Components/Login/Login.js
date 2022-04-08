import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin: '20px'}}>
            <button onClick={signInWithGoogle}>Google signin</button>
            </div>
            <form>
             <input type="email" placeholder='your email'>
             </input>
            <br/>
            <input type="password" placeholder='your password'></input>
            <br/>
            <input type="submit" value="Login"></input>
            </form>
        </div>
    );
};

export default Login;