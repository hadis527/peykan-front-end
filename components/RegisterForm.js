import React, {useState} from 'react';
import { signUp } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const RegisterForm = () => {
  const router = useRouter();
  const [user, setUser] = useState({ email: "", password: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signUp('credentials', {
      redirect: false,
      email: user.email,
      password: user.password,
    });
    if (result.error) {

    } else {
      router.push("/");

    }
  };
  const onchangeHandler = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setUser({
      ...user,
      [name]: value,
    })
  }

  return (
    <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
      <form className="max-w-md mx-auto  w-2/4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input type="text" id="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            name='email'
            placeholder='email'
            value={user.email}
            onChange={(e) => onchangeHandler(e)}
            type="email"
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2">Password</label>
          <input
            name='password'
            placeholder='password'
            value={user.password}
            onChange={(e) => onchangeHandler(e)}
            type="password"
            id="password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full">Register</button>
        <div>Already have an account? <span><Link href="/login">login</Link></span></div>
      </form>
    </div>
  );
};

export default RegisterForm;