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
            new Color().setHex(0x330088),
            new Color().setHex(0xDD1144),
        ],
        modelpath: "./src/assets/parasol"
    }
]