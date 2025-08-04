import React, { useState, type ChangeEvent, type CSSProperties, type Dispatch, type SetStateAction } from 'react'
import './ValueInput.css'

type Props = {
  value: number
  setter: Dispatch<SetStateAction<number>>
  postfix: string
  min?: number
  max?: number
}

export default function ValueInput({value, setter, postfix, min = 0, max = 100}: Props) {

  const [isValid, setIsValid] = useState(true)
  const [errormsg, setErrormsg] = useState("")

  const errorStyle: CSSProperties = {
    backgroundColor: "#ec3131ff",
    borderColor: "#ec3131ff",
    textOverflow: "clip"
  }
  
  const handleSetValue = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.validity.valid) {
      setter(Number(e.target.value))
      setIsValid(true)
    }
    else {
      setErrormsg(e.currentTarget.validationMessage)
      setIsValid(false)
    }
  }

  const validateValue = (e: React.FocusEvent<HTMLInputElement>) => {
    const validation = e.currentTarget.validity
    if(!validation.valid) {
      if(validation.rangeUnderflow) {
        e.currentTarget.value = e.currentTarget.min
      }
      if(validation.rangeOverflow) {
        e.currentTarget.value = e.currentTarget.max
      }
      if(validation.valueMissing) {
        e.currentTarget.value = value.toString()
      }
      setter(Number(e.target.value))
      setIsValid(true)
    }
  }

  return (
    <div className='metric-input' style={isValid ? undefined : errorStyle}>
        {isValid ? null : <div className='error'>{errormsg}</div>}
        <input type="number" name="footsize" id="footsize" required min={min} max={max} defaultValue={value} maxLength={6} 
            onChange={handleSetValue} 
            onBlur={validateValue}
            onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
        />
        <div style={isValid ? undefined : errorStyle}>{postfix}</div>
    </div>
  )
}