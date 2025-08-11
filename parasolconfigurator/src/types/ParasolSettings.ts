import type { Color } from "three"
import type { ParasolSize } from "./Size"

export type ParasolSettings = {
    sizes: Array<ParasolSize>
    colors: Array<Color>
    parasolModelPath: string
    footModelPath: string
    footSizeMin: number
    footSizeMax: number
}