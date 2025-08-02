import React, { useRef, useState, type CSSProperties, type PropsWithChildren } from 'react'
import './Collapsable.css'
import { Transition, type TransitionStatus } from 'react-transition-group'
import Background from 'three/src/renderers/common/Background.js'
import ArrowSVG from './ArrowSVG'
import { Grid } from '@react-three/drei'

type Props = {
  title: string
}

export default function Collapsable({title, children}: PropsWithChildren<Props>) {

  const [isOpen, setIsOpen] = useState(true)
  const contentRef = useRef(null);
  const iconRef = useRef(null)

  const duration = 200;

  const defaultStyle: CSSProperties = {
    display: 'grid',
    gridTemplateRows: '0fr',
    transition: `grid-template-rows ${duration}ms ease-out`
  }

  const transitionStyles = {
    entering: { gridTemplateRows: '1fr' },
    entered:  { gridTemplateRows: '1fr' },
    exiting:  { gridTemplateRows: '0fr'},
    exited:   { gridTemplateRows: '0fr'},
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
            <div style={{overflowY: 'hidden'}}>
              {children}
            </div>
          </div>
        )}
      </Transition>
    </div>
  )
}