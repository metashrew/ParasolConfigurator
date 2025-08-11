import './RadioSelector.css'
import RadioSelectItem from './RadioSelectItem'

type Props<T> = {
    className?: string
    stateSetter: (index: number) => void
    stateValue: T
    items: Array<T>
    children?: (item: T, index: number) => React.ReactNode
}

export default function RadioSelectList<T>({className = 'radio-list', stateSetter, stateValue, items, children}: Props<T>) {
  return (
    <div className={className}>
        {items.map((option, i) => 
            <RadioSelectItem<T> key={i} itemValue={option} stateValue={stateValue} stateSetter={() => stateSetter(i)}>
              {typeof children === 'function'
              ? children(option, i)
              : children
              }
            </RadioSelectItem>
        )}
    </div>
  )
}