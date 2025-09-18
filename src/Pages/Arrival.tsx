import type { JSX } from "react"
import { Link } from "react-router-dom"
import FullNameSymbol from "../Components/Logos/FullNameSymbol"
import Icon from "../Components/Logos/Icon"

export default function Arrival(): JSX.Element {
  return (
    <section className="p-2 flex flex-col gap-4 min-h-screen">
      <div className="flex flex-col gap-4  justify-center">
        <Icon size={250} className="mt-5 ml-auto mr-auto" primaryColor="var(--title-color)" secondaryColor="var(--subtitle-color)" />
        <FullNameSymbol size={250} className="ml-auto mr-auto" color="var(--title-color)" />
        <p className="text-3xl text-center" style={{ color: "var(--subtitle-color)" }}>Travel made simple.</p>
      </div>
      <div className="mt-6 w-2/3 ml-auto flex flex-col gap-8 mr-auto">
        <Link to="/login" className="text-2xl md:text-4xl p-3 md:!w-2/3 text-center thinBorder block font-semibold importantButton">Get Started</Link>
        <Link to="/dashboard" className="text-2xl md:text-4xl p-3 md:!w-2/3 text-center thinBorder block font-semibold secondaryButton">Watch a Demo</Link>
      </div>
    </section>
  )
}