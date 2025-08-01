import type { CSSProperties, SVGProps } from "react"

type Props = {
  style?: React.CSSProperties
  className?: string
}

export default function ArrowSVG({style, className} : Props) {
  
  const defaultStyle: CSSProperties = {
    strokeWidth: 0.264583
  }
  
  return (
    <svg
      style={style}
      className={className}
      width="16"
      height="16"
      viewBox="0 0 4.2333332 4.2333333"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg">
      <defs id="defs1" />
      <g id="layer1">
        <path
          style={defaultStyle}
          d="M 0,0 4.2333333,2.1166667 0,4.2333333 Z"
          id="path1" />
      </g>
    </svg>
    )
}