import React, { ChangeEvent, FC, useState } from 'react'

interface Props {
   text: string
}
interface UserData {
   id: number
   name: string
}
const TestComponent: FC<Props> = (props) => {
   const [count, setCount] = useState<number | null>(0);
   const [user, setUser] = useState<UserData>({ id: 0, name: 'test' })
   const [inputData, setInputData] = useState("")
   const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => setInputData(event.target.value)
   return (
      <div>
         <h1>{props.text}</h1>
         <h1>{count}</h1>
         <input type='text' value={inputData} onChange={handleInputChange} />
         <h1>{inputData}</h1>
      </div>
   )
}

export default TestComponent
