import { Label } from "../ui/label"
import { Input } from "../ui/input"

type PriceInputProps = {
  defaultValue?: number
}

const PriceInput = ({defaultValue = 100}:PriceInputProps) => {
  const name = 'price'
  return (
    <div className="mb-2">
      <Label htmlFor={name}>
        Price ($)
      </Label>
      <Input id={name} type="number" name={name} min={0} defaultValue={defaultValue} required />
      </div>
  )
}

export default PriceInput