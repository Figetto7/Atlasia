import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { parseFirebaseError } from "../Helpers/Utils/firebaseErrors";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const { signInWithEmail, signInWithGoogle } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await signInWithEmail(email, password);
      navigate("/home");
    } catch (err) {
      setErr(parseFirebaseError(err));

    }
  }

  async function handleGoogleAccess() {
  try {
    await signInWithGoogle();
    navigate("/home");
  } catch (err) {
    setErr(parseFirebaseError(err));
  }
}


  return (
      <form onSubmit={handleFormSubmit} className="mt-24 flex flex-col gap-5 thinBorder w-5/6 md:!w-1/2 ml-auto mr-auto">
        <h1 className="text-4xl text-center font-semibold mt-5" style={{ color: "var(--section-title-color)" }}>Login</h1>
        <input type="email" placeholder="Email" className="button md:!w-1/2" value={email} onChange={(e) => setEmail(e.target.value)} name="email" autoComplete="email" required/>
        <input type="password" placeholder="Password" className="button md:!w-1/2" value={password} onChange={(e) => setPassword(e.target.value)} name="password" required/>
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <div className="flex flex-col gap-3">
        <button type="submit" className="button md:!w-1/2 importantButton text-2xl"> Login </button>
        <button type="button" className="button md:!w-1/2 md:text-2xl cursor-pointer !mt-2" onClick={handleGoogleAccess}><span><FcGoogle className="inline-block mr-1" size={30}/></span> Continue with Google </button>
        </div>
        <div className="flex flex-col gap-2 text-center justify-between p-2">
          <h1 className="text-xl"> New User?</h1>
          <Link to="/register" className="text-2xl p-3 md:!w-1/2 text-center thinBorder block font-semibold secondaryButton">Register</Link>
          <Link to="/reset" className="cursor-pointer text-sm mt-10">Forgot <span style={{ color: "var(--section-title-color)" }}>password?</span></Link>
        </div>
      </form>
  );
}