import React from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate('/');
      console.log('You are logged out');
    } catch (e) {
      console.error(e.message);
    }
  };

  if (!user) {
    // This can be a loading spinner or a redirect
    // For now, we'll just show a message, but AuthContext handles the redirect logic.
    return <div className="min-h-screen flex items-center justify-center bg-slate-900 text-white">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900 pt-24 pb-12">
        <div className="max-w-md w-full mx-auto p-8 rounded-2xl bg-slate-800/50 border border-slate-700">
            <h1 className="text-4xl font-bold text-white text-center mb-4">Account</h1>
            <p className="text-center text-slate-300 mb-1">User Email: {user && user.email}</p>
            <p className="text-center text-slate-400 text-sm mb-8">
                Email Verified: {user.emailVerified ? <span className="text-green-400">Yes</span> : <span className="text-red-400">No</span>}
            </p>
            
            {!user.emailVerified && (
                <div className="bg-yellow-500/20 border border-yellow-500 text-yellow-300 p-3 my-4 rounded-md text-center">
                    Please check your inbox to verify your email address.
                </div>
            )}

            <button onClick={handleLogout} className="w-full mt-4 p-3 bg-red-600 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                Logout
            </button>
        </div>
    </div>
  );
};

export default Account;