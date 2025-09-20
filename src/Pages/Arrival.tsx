import type { JSX } from "react"
import { useNavigate } from "react-router-dom"

import { Button } from "@/Components/ui/button"

export default function Arrival(): JSX.Element {
  const navigate = useNavigate()
  
  return (
    <section className="p-2 flex flex-col gap-4 min-h-screen">
      <div className="mt-6 w-2/3 ml-auto flex flex-col gap-8 mr-auto">
       <Button color="" className="h-15 text-2xl" onClick={() => {navigate("/login")}} >Login</Button>
       <Button className="h-15 text-2xl" onClick={() => {navigate("/dashboard")}} >See a Demo</Button>
      </div>
    </section>
  )
}