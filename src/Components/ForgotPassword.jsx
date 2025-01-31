import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    // Simulate sending reset link (Replace with API call)
    setMessage("A reset link has been sent to your email.");
  };

  return (
    <section className="flex flex-col bg-gray-50 dark:bg-gray-900 min-h-screen items-center justify-center px-6">
      <div className="max-w-md w-full bg-white rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
        <div className="p-6 space-y-4 sm:p-8">
          <h1 className="text-xl text-gray-600 font-bold md:text-2xl dark:text-blue-600">
            Forgot Password?
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-300">
            Enter your email address to receive a password reset link.
          </p>
          <form className="space-y-4" onSubmit={handleReset}>
            <div>
              <label htmlFor="email" className="text-gray-600 mb-2 text-sm font-medium block">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="name@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            {message && <p className="text-sm text-green-600 dark:text-green-400">{message}</p>}
            <button
              type="submit"
              className="w-full text-primary-600 border-1 rounded-lg border-gray-600 font-medium px-2.5 py-1.5 hover:text-blue-600 hover:border-blue-600 dark:text-white"
            >
              Send Reset Link
            </button>
          </form>
          <p className="text-sm font-light text-gray-500 dark:text-gray-400">
            Remember your password?{" "}
            <a
              href="#"
              onClick={() => navigate("/login")}
              className="font-medium text-primary-600 hover:underline hover:text-blue-600 dark:text-primary-500"
            >
              Login here
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
