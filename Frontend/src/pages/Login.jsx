import React, { useState } from 'react';

const Login = () => {
  const [state, setState] = useState('sign up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
  };

  return (
    <form
      className="min-h-[80vh] flex items-center justify-center bg-gray-100 transition-all duration-500 ease-in-out"
      onSubmit={onSubmitHandler}
    >
      <div className="flex flex-col gap-2 items-start p-4 min-w-[300px] sm:min-w-[350px] rounded-xl text-zinc-600 text-sm shadow-2xl bg-white">
        <div className="flex flex-col gap-3 w-full bg-white p-3 rounded-lg shadow-inner">
          <p className="text-xl font-semibold text-gray-700 mb-1">
            {state === 'sign up' ? 'Create Account' : 'Login'}
          </p>
          <p className="text-gray-500 mb-3">
            Please {state === 'sign up' ? 'sign up' : 'log in'} to book an appointment
          </p>

          {state === 'sign up' && (
            <div className="w-full">
              <p className="font-medium text-gray-600">Full Name</p>
              <input
                className="border border-zinc-300 rounded w-full p-1 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                required
              />
            </div>
          )}

          <div className="w-full">
            <p className="font-medium text-gray-600">Email</p>
            <input
              className="border border-zinc-300 rounded w-full p-1 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
          </div>

          <div className="w-full">
            <p className="font-medium text-gray-600">Password</p>
            <input
              className="border border-zinc-300 rounded w-full p-1 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
          </div>

          {state === 'sign up' && (
            <div className="w-full">
              <p className="font-medium text-gray-600">Confirm Password</p>
              <input
                className="border border-zinc-300 rounded w-full p-1 mt-1 focus:outline-none focus:ring-1 focus:ring-blue-400"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
                required
              />
            </div>
          )}

          <button className="w-full py-1 mt-3 bg-blue-500 text-white font-semibold rounded-lg transition-transform transform hover:scale-105 shadow-md">
            {state === 'sign up' ? 'Create Account' : 'Login'}
          </button>

          {state === 'sign up' ? (
            <p className="mt-2 text-gray-600">
              Already have an account?{' '}
              <span
                onClick={() => setState('login')}
                className="text-blue-500 underline cursor-pointer hover:text-blue-700"
              >
                Login here
              </span>
            </p>
          ) : (
            <p className="mt-2 text-gray-600">
              Create a new account?{' '}
              <span
                onClick={() => setState('sign up')}
                className="text-blue-500 underline cursor-pointer hover:text-blue-700"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default Login;
