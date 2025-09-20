import type { JSX } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "../Components/Logos/Icon"
import FullNameSymbol from "../Components/Logos/FullNameSymbol"
import { useIsMobile } from "@/Hooks/useIsMobile"

import { Button } from "@/Components/ui/button"

export default function Arrival(): JSX.Element {
  const navigate = useNavigate()
  const isMobile = useIsMobile()
  const size = isMobile ? 200 : 270
  
  return (
    <section className="p-2 flex flex-col gap-4 min-h-screen">
      <div className="mt-6 w-2/3 ml-auto flex flex-col gap-8 mr-auto">
      <Icon size={size} className="m-auto"/>
      <FullNameSymbol size={size + 80}  className="m-auto"/>
      <div className="flex flex-col md:flex-row gap-8 lg:gap-14 m-auto">
      <Button className="h-20 text-3xl lg:pl-10 lg:pr-10" onClick={() => {navigate("/login")}} >Login</Button>
       <Button className="h-20 text-3xl lg:pl-10 lg:pr-10" onClick={() => {navigate("/register")}} >Register</Button>
      </div>

      </div>
    </section>
  )
}