import { type PropsWithChildren } from 'react'

type Props<T> = {
    itemValue: T
    stateValue: T
    stateSetter: Function
}

export default function RadioSelectItem<T>({ itemValue: option, stateValue, stateSetter, children}: PropsWithChildren<Props<T>>) {
  
  return (
    <button className={stateValue == option ? "selected" : undefined} onClick={() => stateSetter()}> 
        {children ? children : <span>{option as string}</span>}
    </button>
  )
}