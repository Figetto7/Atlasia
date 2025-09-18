import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import { parseFirebaseError } from "../Helpers/Utils/firebaseErrors"

export default function Register() {
  const { signUpWithEmail } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setErr("");
    try {
      await signUpWithEmail(email, password);
      navigate("/dashboard");
    } catch (err) {
      setErr(parseFirebaseError(err));
    }
  }

  return (
      <form onSubmit={handleFormSubmit} className="mt-24 flex flex-col gap-5 thinBorder w-5/6 md:!w-1/2 ml-auto mr-auto">
        <h1 className="text-3xl text-center font-semibold mt-5" style={{ color: "var(--section-title-color)" }}>Register</h1>
        <input name="email" autoComplete="email" type="email" placeholder="Email" className="button md:!w-1/2" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <input name="password" type="password" placeholder="At least 6 characters" className="button md:!w-1/2" value={password} onChange={(e) => setPassword(e.target.value)} minLength={6} required/>
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button type="submit" className="button md:!w-1/2 importantButton">  Create account </button>
        <div className="text-lg text-center mt-10 mb-4">
          Already have an account? <Link to="/login"><span style={{color: "var(--title-color)"}}>Login</span></Link>
        </div>
      </form>
  );
}