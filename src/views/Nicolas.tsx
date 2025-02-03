import { useState } from "react"

interface Nicolas {
  name: string
  age: number
}

function Nicolas() {

const [nicolas, setNicolas] = useState<Nicolas>({
  age: 90,
  name: "Nicolas"
});


  return (
    <div>
      <h1>{JSON.stringify(nicolas)}</h1>    
    </div>
  )
}

export default Nicolas
