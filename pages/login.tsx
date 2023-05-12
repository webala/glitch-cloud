/** @format */

import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signIn } from "next-auth/react";
import { Spinner } from "@chakra-ui/react";
import { authActions } from "../store/auth-slice";

function Login() {
   const [username, setUsername] = useState<string>();
   const [password, setPassword] = useState<string>();
   const [errorMessage, setErrorMessage] = useState<string>("");
   const [loading, setLoading] = useState<boolean>(false);

   const dispatch = useDispatch();
   const router = useRouter();

   const handleLogin = async (e: React.SyntheticEvent) => {
      e.preventDefault();
      setLoading(true);
      setErrorMessage("");
      const res = await signIn("credentials", {
         username,
         password,
         redirect: false,
      });

      if (res?.status === 401) {
         setErrorMessage("Invalid username or password");
         setLoading(false);
      } else if (res?.status === 200) {
         console.log()
         router.push("/");
      } else if (res?.status === 404) {
         setErrorMessage("User does not exist");
         setLoading(false);
      } else if (res?.status === 500) {
         setErrorMessage(
            "There was an error logging in. Please try again later."
         );
         setLoading(false);
      }
   };
   return (
      <div className="login">
         <form onSubmit={handleLogin}>
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
               <label htmlFor="password">Password</label>
               <input
                  type="password"
                  placeholder="mysuperstrongpassword"
                  onChange={(e) => setPassword(e.target.value)}
               />
            </div>
            <div className="actions">
               <button className="submit" type="submit">
                  Sign in
               </button>
            </div>
         </form>
      </div>
   );
}

export default Login;
