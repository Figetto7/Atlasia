import Icon from "./Logos/Icon"
import FullNameSymbol from "./Logos/FullNameSymbol"
import type { JSX } from "react"

export default function Background({children}: {children: JSX.Element}): JSX.Element {
  return (
    <div>
      <Icon size={200} className="mt-5 ml-auto mr-auto" primaryColor="var(--title-color)" secondaryColor="var(--subtitle-color)" />
      <FullNameSymbol size={250} className="ml-auto mr-auto" color="var(--title-color)" />
      {children}
    </div>
  )
}