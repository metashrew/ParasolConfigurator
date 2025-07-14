import { Color } from "three";
import type { ParasolSettings } from "../types/ParasolSettings";

export const parasols: Array<ParasolSettings> = [
    {
        colors: [
            new Color().setHex(0xFFDD00),
            new Color().setHex(0x00FF00),
            new Color().setHex(0x0000FF),
            new Color().setHex(0x005511),
            new Color().setHex(0x011055),
        ],
        sizes: ['M', 'L', 'XL'],
        parasolpath: "./assets/models/parasol"
    }
]