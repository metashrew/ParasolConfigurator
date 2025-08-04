import type { Color } from "three"
import type { ParasolSize } from "./Size"

export type ParasolSettings = {
    sizes: Array<ParasolSize>
    colors: Array<Color>
    modelpath: string
    footsizeMin: number
    footsizeMax: number
}