import { Color } from "three";
import type { ParasolSettings } from "../types/ParasolSettings";

export const parasols: Array<ParasolSettings> = [
    {
        sizes: ['M', 'L', 'XL'],
        colors: [
            new Color().setHex(0xFFFFFF),
            new Color().setHex(0xFFCC00),
            new Color().setHex(0x008844),
            new Color().setHex(0x0CAB83),
            new Color().setHex(0x445599),
            new Color().setHex(0xCC3366),
        ],
        modelpath: "./src/assets/parasol-all",
        footsizeMin: 30,
        footsizeMax: 60
    }
]