import React, { type PropsWithChildren } from 'react'

type Props<T> = {
    option: T
    stateValue: T
    stateSetter: Function
}

export default function RadioSelectItem<T>({ option, stateValue, stateSetter, children}: PropsWithChildren<Props<T>>) {
  
  return (
    <button className={stateValue == option ? "selected" : undefined} onClick={e => stateSetter()}> 
        {children ? children : <span>{option as string}</span>}
    </button>
  )
}