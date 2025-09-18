import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../Hooks/useAuth";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function handleFormSubmit(e: FormEvent) {
    e.preventDefault();
    setErr(""); setMsg("");
    try {
      await resetPassword(email);
      setMsg("Reset email sent (check your spam folder).");
    } catch {
      setErr("Unable to send reset email.");
    }
  }

  return (
      <form onSubmit={handleFormSubmit} className="mt-24 flex flex-col gap-5 thinBorder w-5/6 md:!w-1/2 ml-auto mr-auto">
        <h1 className="text-3xl text-center font-semibold mt-5" style={{ color: "var(--section-title-color)" }}>Reset password</h1>
        <input name="email" autoComplete="email" type="email" placeholder="Email" className="button md:!w-1/2" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        {msg && <p className="text-green-700 text-sm">{msg}</p>}
        {err && <p className="text-red-600 text-sm">{err}</p>}
        <button type="submit" className="button md:!w-1/2 importantButton"> Send email </button>
        <div className="text-lg text-center mt-10 mb-4">
          <Link to="/login" className="text-lg">Back to <span style={{color: "var(--title-color)"}}>Login</span></Link>
        </div>
      </form>
  );
}