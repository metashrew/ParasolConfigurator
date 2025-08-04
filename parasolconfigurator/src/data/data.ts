import { Color } from "three";
import type { ParasolSettings } from "../types/ParasolSettings";

export const parasols: Array<ParasolSettings> = [
    {
        sizes: ['M', 'L', 'XL'],
        colors: [
            new Color().setHex(0xFFFFFF),
            new Color().setHex(0xFFCC00),
            new Color().setHex(0x008844),
            new Color().setHex(0x0CABAA),
            new Color().setHex(0x445599),
            new Color().setHex(0xCC3366),
        ],
        modelpath: "public/parasol-all.glb",
        footsizeMin: 30,
        footsizeMax: 60
    },
    {
        sizes: ['L', 'M'],
        colors: [
            new Color().setHex(0x000000),
            new Color().setHex(0xFFFF00),
            new Color().setHex(0x008844),
        ],
        modelpath: "public/parasol-all.glb",
        footsizeMin: 20,
        footsizeMax: 90
    }
]