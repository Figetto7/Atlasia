import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { parseFirebaseError } from "../Helpers/Utils/firebaseErrors";
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import { FaGoogle } from "react-icons/fa";
import GeneralAlert from "@/Components/GeneralAltert";
import { MdOutlineErrorOutline } from "react-icons/md";

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
    <Card className="w-11/12 mt-10 ml-auto mr-auto md:w-2/3 lg:w-1/3">
      <CardHeader>
        <CardTitle className="text-xl text-center pb-3 font-bold">Login to your account</CardTitle>
        <CardDescription className="text-sm font-medium text-center"> Enter your email below to login to your account </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit} className="grid gap-4">
          {err && <GeneralAlert title="Error" description={err} icon={<MdOutlineErrorOutline className="h-8 w-8" />} />}
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="m@example.com" required />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password <span className="text-red-600">*</span> </Label>
              </div>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <a onClick={() => {navigate("/reset")}} className="text-sm -mt-3" > Forgot your <span className="text-blue-600 hover:underline font-semibold">password</span>? </a>
          </div>
          <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full"> Login </Button>
        <Button onClick={handleGoogleAccess} variant="neutral" className="w-full">
          <FaGoogle className="mr-1 mb-0.5 inline-block" /> Login with Google
        </Button>
        <div className="mt-5 text-center text-sm">
          Don&apos;t have an account?{" "}
          <a onClick={() => {navigate("/register")}} className="text-blue-600 hover:underline font-semibold"> Sign up </a>
        </div>
      </CardFooter>
        </form>
      </CardContent>
    </Card>
  )
}