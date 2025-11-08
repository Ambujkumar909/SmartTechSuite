import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isNewUser, setIsNewUser] = useState(false);
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();
    const { signIn, googleSignIn, createUser, verifyEmail } = UserAuth();

    const handleAuthAction = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');
        try {
            if (isNewUser) {
                // Sign up logic
                const userCredential = await createUser(email, password);
                await verifyEmail(userCredential.user);
                setMessage('Verification email sent! Please check your inbox and then log in.');
            } else {
                // Sign in logic
                await signIn(email, password);
                navigate('/account');
            }
        } catch (e) {
            setError(e.message);
            console.error(e.message);
        }
    };

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            navigate('/account');
        } catch (error) {
            console.error(error);
            setError(error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-900 pt-24 pb-12">
            <div className="max-w-md w-full mx-auto p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
                <h1 className="text-4xl font-bold text-white text-center mb-2">{isNewUser ? 'Create Account' : 'Sign In'}</h1>
                <p className="text-center text-slate-400 mb-8">to continue to YourBrand</p>
                
                {error && <p className="bg-red-500/80 border border-red-700 text-white p-3 my-4 rounded-md text-sm">{error}</p>}
                {message && <p className="bg-green-500/80 border border-green-700 text-white p-3 my-4 rounded-md text-sm">{message}</p>}

                <button onClick={handleGoogleSignIn} className="w-full p-3 mb-4 bg-slate-700 rounded-lg font-semibold hover:bg-slate-600 transition-colors flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" viewBox="0 0 48 48"><path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.222,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C41.38,36.128,44,30.638,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path></svg>
                    Continue with Google
                </button>

                <div className="my-6 flex items-center">
                    <hr className="w-full border-slate-600" /><p className="px-4 text-slate-400 text-sm">OR</p><hr className="w-full border-slate-600" />
                </div>

                <form onSubmit={handleAuthAction}>
                    <div className="mb-4">
                        <label className="block text-slate-400 mb-2 text-sm">Email Address</label>
                        <input onChange={(e) => setEmail(e.target.value)} className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="email" required />
                    </div>
                    <div className="mb-6">
                        <label className="block text-slate-400 mb-2 text-sm">Password</label>
                        <input onChange={(e) => setPassword(e.target.value)} className="w-full p-3 rounded-lg bg-slate-700 text-white border border-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500" type="password" required minLength="6" />
                    </div>
                    <button className="w-full p-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-700 transition-colors">
                        Continue
                    </button>
                </form>

                <p className="mt-8 text-center text-slate-400 text-sm">
                    {isNewUser ? 'Already have an account? ' : "Don't have an account? "}
                    <button onClick={() => setIsNewUser(!isNewUser)} className="font-semibold text-indigo-400 hover:underline bg-transparent border-none">
                        {isNewUser ? 'Sign In' : 'Create account'}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
