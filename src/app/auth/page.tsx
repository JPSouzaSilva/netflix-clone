'use client';

import Input from '@/components/input';
import { useCallback, useState } from 'react';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [variant, setVariant] = useState('login');

  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === 'login' ? 'register' : 'login'
    );
  }, []);

  return (
    <div className="h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === 'login' ? 'Sign In' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === 'register' && (
                <Input
                  id="name"
                  onChange={(event: any) => setUsername(event.target.value)}
                  label="Username"
                  value={username}
                  type="text"
                />
              )}
              <Input
                id="email"
                onChange={(event: any) => setEmail(event.target.value)}
                label="Email"
                value={email}
                type="email"
              />
              <Input
                id="password"
                onChange={(event: any) => setPassword(event.target.value)}
                label="Password"
                value={password}
                type="password"
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-6 hover:bg-red-700 transition">
              {variant === 'login' ? 'Login' : 'Sign Up'}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === 'login'
                ? 'First time using Netflix ?'
                : 'Already have an account ?'}
              <span
                onClick={toggleVariant}
                className="text-white ml-1 hover:underline cursor-pointer"
              >
                {variant === 'login' ? 'Create an account' : 'Login'}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
