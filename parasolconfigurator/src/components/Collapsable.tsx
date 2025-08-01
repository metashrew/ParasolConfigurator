import React, { useRef, useState, type CSSProperties, type PropsWithChildren } from 'react'
import './Collapsable.css'
import { Transition, type TransitionStatus } from 'react-transition-group'
import Background from 'three/src/renderers/common/Background.js'
import ArrowSVG from './ArrowSVG'

type Props = {
  title: string
}

export default function Collapsable({title, children}: PropsWithChildren<Props>) {

  const [isOpen, setIsOpen] = useState(true)
  const contentRef = useRef(null);
  const iconRef = useRef(null)

  const duration = 200;

  const defaultStyle: CSSProperties = {
    overflowY: 'hidden',
    transition: `height ${duration}ms ease-out`,
    height: 0,
  }

  const transitionStyles = {
    entering: { height: "auto" },
    entered:  { height: "auto" },
    exiting:  { height: 0 },
    exited:   { height: 0 },
    unmounted: {}
  };

  const iconStyle: CSSProperties = {
    transition: `transform ${duration}ms ease-out`,
    transform: 'rotate(0)'
  }

  const iconTransitions = {
    entering: { transform: "rotate(90deg)" },
    entered:  { transform: "rotate(90deg)" },
    exiting:  { transform: "rotate(0deg)" },
    exited:   { transform: "rotate(0deg)" },
    unmounted: {}
  }

  return (
    <div className='collapsable'>
      <div onClick={() => setIsOpen(!isOpen)} style={{display: 'flex', gap: "10px", cursor: "pointer", alignItems: "center"}}>
        <Transition nodeRef={iconRef} in={isOpen} timeout={400}>
          {state => (
            <ArrowSVG style={{...iconStyle, ...iconTransitions[state]}}/>
          )}
        </Transition>
        <h2 style={{margin: 0}}>{title}</h2>
      </div>
      <Transition nodeRef={contentRef} in={isOpen} timeout={400}>
        {state => (
          <div ref={contentRef} style={{...defaultStyle, ...transitionStyles[state]}}>
            {children}
          </div>
        )}
      </Transition>
    </div>
  )
}