import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Auth Provider/AuthPovider";
import useToken from "../../../hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn, providerLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)
  const location = useLocation();
  const navigate = useNavigate();


  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });

  }
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleLogin = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };



  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setLoginUserEmail(data.email)
        toast.success("User Login Successfully");

      })
      .catch((error) => {
        console.log(error.message);
        setLoginError(error.message);
      });
  };

  return (
    <div className=" h-[800px] flex justify-center items-center">
      <div className="border-4 border-red-600 w-96 p-7">
        <h2 className="text-xl text-center text-red-600">Login</h2>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email Address is required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <h2 className="text-red-600">{errors.email?.message} </h2>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters or longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {" "}
              <span className="label-text">Forget Password?</span>
            </label>
            {errors.password && (
              <h2 className="text-red-600">{errors.password?.message} </h2>
            )}
          </div>
          <input
            className="btn btn-accent w-full"
            value="Login"
            type="submit"
          />
          <div>
            {loginError && <h2 className="text-red-600">{loginError} </h2>}
          </div>
        </form>
        <h2 className="text-center mt-4">
          New to Car Zone :{" "}
          <Link className="text-secondary" to="/signup">
            Create new Account
          </Link>
        </h2>

        <div className="divider">OR</div>
        <Link
          to="/"
          onClick={handleGoogleLogin}
          className="btn btn-outline btn-secondary w-full"
        >
          Continue With Google{" "}
        </Link>
      </div>
    </div>
  );
};

export default Login;
