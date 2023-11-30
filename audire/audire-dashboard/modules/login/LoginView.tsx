import Image from 'next/image';
const LoginView = () => {
  const handleLogin = () => {
    console.log('Login button clicked');
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form className="mt-4 p-6">
        <Image
          src="/images/audire.png"
          alt="Logo"
          width={100}
          height={100}
          className="object-contain mb-4 mx-auto"
        />
        <span className="block  font-medium text-slate-700">
          Welcome to AUDIRE 👋🏻
        </span>
        <span className="block text-xs text-slate-700">
          Please sign in to your account and start the adventure
        </span>

        <label className="block  mt-6">
          <span className="block text-lg font-medium text-slate-700">
            Username
          </span>
          <input
            type="text"
            placeholder="Username"
            className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg text-black shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>

        <label className="block mt-6">
          <span className="block text-lg font-medium text-slate-700">
            Password
          </span>
          <input
            type="password"
            placeholder="Enter your password"
            className="mt-2 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-lg text-black shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
          />
        </label>

        <button
          type="button"
          className="mt-6 w-full text-white font-bold py-1 px-3 rounded hover:bg-white"
          style={{
            backgroundColor: '#86198f',
          }}
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginView;
