import { getAuth } from 'firebase/auth';
import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth =getAuth(app);
const Login = () => {
     const [signInWithGoogle, user] = useSignInWithGoogle(auth);

    // const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h3>Please login</h3>
            <div style={{margin: '20px'}}>
            <button onClick={()=>signInWithGoogle()}>Google signin</button>
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