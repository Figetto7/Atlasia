import { useState } from "react";
import type { FormEvent } from "react";
import { useAuth } from "../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { Button } from "@/Components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, } from "@/Components/ui/card"
import { Input } from "@/Components/ui/input"
import { Label } from "@/Components/ui/label"
import GeneralAlert from "@/Components/GeneralAltert";
import { MdOutlineErrorOutline } from "react-icons/md";
import { CheckCircle2Icon } from "lucide-react"

export default function ResetPassword() {
  const navigate = useNavigate();
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
    <Card className="w-11/12 mt-10 ml-auto mr-auto md:w-2/3 lg:w-1/3">
      <CardHeader>
        <CardTitle className="text-xl text-center pb-3 font-bold">Reset your password</CardTitle>
        <CardDescription className="text-sm font-medium text-center"> Enter your email below to reset your password </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleFormSubmit} className="grid gap-4">
          {err && <GeneralAlert title="Error" description={err} icon={<MdOutlineErrorOutline className="h-8 w-8" />} />}
          {msg && <GeneralAlert title="Success" description={msg} icon={<CheckCircle2Icon className="h-8 w-8" />} />}
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email <span className="text-red-600">*</span></Label>
              <Input id="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="m@example.com" required />
            </div>
          </div>
          <CardFooter className="flex-col gap-2">
            <Button type="submit" className="w-full"> Reset Password </Button>
            <div className="mt-5 text-center text-sm">
              Did you remember your password?{" "}
              <a onClick={() => {navigate("/login")}} className="text-blue-600 hover:underline font-semibold"> Login </a>
            </div>
          </CardFooter>
        </form>
      </CardContent>
    </Card>
  );
}