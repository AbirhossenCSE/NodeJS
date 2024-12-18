import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext/AuthContext';

const SocialLogin = () => {
    const { signInWithGoogle } = useContext(AuthContext);
    const handleGooglesignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='w-10/12 mx-auto'>
            <div className='divider'>OR</div>
            <button onClick={handleGooglesignIn} className='btn w-full mb-4'>Google</button>
        </div>
    );
};

export default SocialLogin;