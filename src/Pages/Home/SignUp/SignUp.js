import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/Auth Provider/AuthPovider";
import useToken from "../../../hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const [signUpError, setSignUPError] = useState("");
  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();
  if (token) {
    navigate("/");
  }

  const handleSignUp = (data) => {
    console.log(data);
    setSignUPError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully.", {
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
          iconTheme: {
            primary: "#713200",
            secondary: "#FFFAEE",
          },
        });
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        console.log(error);
        setSignUPError(error.message);
      });
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch(
      "https://b612-used-products-resale-server-side-khsultana-khsultana.vercel.app/users",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
        console.log(data);
      });
  };

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="border-red-600 border-4 w-96 p-7">
        <h2 className="text-xl text-center text-red-600">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.name && (
              <h2 className="text-red-500">{errors.name.message} </h2>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <h2 className="text-red-500">{errors.email.message} </h2>
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
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <h2 className="text-red-500">{errors.password.message} </h2>
            )}
          </div>
          <label className="label">
            {" "}
            <span className="label-text">User type</span>
          </label>
          <select className=" select select-bordered w-full max-w-xs">
            <option>Buyer</option>
            <option>Seller</option>
          </select>

          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <h2 className="text-red-600">{signUpError} </h2>}
        </form>
        <h2>
          Already have an account{" "}
          <Link className="text-secondary" to="/login">
            Please Login
          </Link>
        </h2>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default SignUp;
