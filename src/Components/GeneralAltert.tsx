
import { Alert, AlertDescription, AlertTitle } from "@/Components/ui/alert"


export default function GeneralAlert ({ title, description, icon }: { title: string; description?: string; icon?: React.ReactNode }) {
  return (
    <Alert className="mb-4">
      {icon}
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{description}</AlertDescription>
    </Alert>
  )
}