import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Navigation Hook

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};
  
    // Validate email
    if (!email) {
      formErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formErrors.email = "Please enter a valid email.";
    }
  
    // Validate password
    if (!password) {
      formErrors.password = "Password is required.";
    } else if (password.length < 8) {
      formErrors.password = "Password must be at least 8 characters.";
    }
  
    // Validate confirm password
    if (!confirmPassword) {
      formErrors.confirmPassword = "Please confirm your password.";
    } else if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
    }
  
    // If there are errors, don't submit the form
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
  
    console.log("Registration Successful!");
  
    // Redirect to Login Page
    navigate("/login");
  };
  

  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat background-img">
      <div className="absolute top-0 left-0 w-full h-full bg-gray bg-opacity-50 !backdrop-blur-sm"></div>
      <div className="flex items-center justify-center h-screen relative z-10 ">
        <div className="bg-white p-5 rounded-lg shadow-md w-115 mx-4 sm:mx-8 md:mx-16 lg:mx-24 xl:mx-32">
          <div className="flex justify-center">
            <section className="sidebar-title flex justify-center items-center pb-3">
              <svg fill="none" height="42" viewBox="0 0 32 32" width="42" xmlns="http://www.w3.org/2000/svg">
                  <rect height="100%" rx="16" width="100%"></rect>
                  <path clipRule="evenodd" d="M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
              <div className="flex flex-col">
                  <span>Acme</span>
                  <span className="text-xs font-normal text-content2">Team Plan</span>
              </div>
            </section>
          </div>
          {/* <h2 className="text-[20px] font-bold mb-6 text-center">Register Now</h2> */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <p className="py-3 text-md">
                Useremail <span className="text-red-600">*</span>
              </p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full py-[10px] px-[8px] border border-gray-300 rounded-lg"
              />
              {errors.email && <p className="text-red-600 text-sm">{errors.email}</p>}
            </div>
            <div className="mb-3">
              <p className="py-3">
                Password <span className="text-red-600">*</span>
              </p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                className="w-full py-[10px] px-[8px] border border-gray-300 rounded-lg"
              />
              {errors.password && <p className="text-red-600 text-sm">{errors.password}</p>}
            </div>
            <div className="mb-3">
              <p className="py-3">
                Confirm your Password <span className="text-red-600">*</span>
              </p>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                className="w-full py-[10px] px-[8px] border border-gray-300 rounded-lg"
              />
              {errors.confirmPassword && <p className="text-red-600 text-sm">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              className="w-full py-3  py-[8px] my-[10px] text-white rounded-lg bg-[blue] hover:bg-[#000099] mt-5"
            >
              Register Now
            </button>
          </form>

          {/* Login Link */}
          <p className="text-center !mt-4 text-sm">
            Already have an account?{" "}
            <Link to="/" className="!text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
