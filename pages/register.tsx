/** @format */

import { Spinner } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

function Register() {
   const [username, setUsername] = useState<string>();
   const [first_name, setFirst_name] = useState<string>();
   const [last_name, setLast_name] = useState<string>();
   const [email, setEmail] = useState<string>();
   const [password1, setPassword1] = useState<string>();
   const [password2, setPassword2] = useState<string>();
   const [errorMessage, setErrorMessage] = useState<string>();
   const [loading, setLoading] = useState<boolean>();

   const router = useRouter()

   const handleRegister = (e:React.SyntheticEvent) => {
      e.preventDefault();
      setErrorMessage('')
      const userData = {
         first_name,
         last_name,
         username,
         password1,
         password2,
         email,
      };
      if (password1 !== password2) {
         const error = { message: "The two password fields must match" };
         setErrorMessage(error.message);
         return;
      }

      let res;
      setLoading(true)

      axios
         .post("http://localhost:8000/auth/register", userData, {
            headers: {
               "Content-Type": "application/json",
            },
         })
         .then((response) => {
            setLoading(false);
            if (response.status >= 200 && response.status < 300) {
               res = { message: "Success" };
               console.log("registered.");
               router.push("/login");
            }
         })
         .catch((error) => {
            setLoading(false);
            if (error.response.status === 500) {
               res = { message: "Server error. Please try again later" };
               setErrorMessage(res.message);
            } else if (error.response.status === 400) {
               res = { message: "Username or email already in use." };
               setErrorMessage(res.message);
            } else if (
               error.response.status >= 400 &&
               error.response.status < 500
            ) {
               res = {
                  message: "Error. Please check input fields and try again",
               };
               setErrorMessage(res.message);
            }
         });
   };
   return (
      <div className="register">
         <form onSubmit={handleRegister}>
            <div className="feedback">
               {loading ? <Spinner color="red.500" /> : null}
               {errorMessage ? <p className="error">{errorMessage}</p> : null}
            </div>
            <div className="field">
               <label htmlFor="username">Username</label>
               <input
                  type="text"
                  placeholder="Brandon"
                  onChange={(e) => setUsername(e.target.value)}
               />
            </div>
            <div className="field">
               <label htmlFor="username">First named</label>
               <input
                  type="text"
                  placeholder="Brandon"
                  onChange={(e) => setFirst_name(e.target.value)}
               />
            </div>
            <div className="field">
               <label htmlFor="username">Last name</label>
               <input
                  type="text"
                  placeholder="Brandon"
                  onChange={(e) => setLast_name(e.target.value)}
               />
            </div>
            <div className="field">
               <label htmlFor="username">Email</label>
               <input
                  type="text"
                  placeholder="Brandon"
                  onChange={(e) => setEmail(e.target.value)}
               />
            </div>
            <div className="field">
               <label htmlFor="password1">Password</label>
               <input
                  type="password"
                  placeholder="mysuperstrongpassword"
                  onChange={(e) => setPassword1(e.target.value)}
               />
            </div>
            <div className="field">
               <label htmlFor="password1">Confirm password</label>
               <input
                  type="password"
                  placeholder="mysuperstrongpassword"
                  onChange={(e) => setPassword2(e.target.value)}
               />
            </div>
            <div className="actions">
               <button className="submit" type="submit">
                  Register
               </button>
            </div>
         </form>
      </div>
   );
}

export default Register;
