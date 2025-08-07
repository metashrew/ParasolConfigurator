import { Color } from "three";
import type { ParasolSettings } from "../types/ParasolSettings";

//this file contains the data that the configurator will use to display the parasol and the available settings
//only the first one is used, but in theory you could have multiple parasols and load whichever one you like
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
        parasolModelPath: "/parasol-all.glb",
        footModelPath: "/foot.glb",
        footSizeMin: 30,
        footSizeMax: 60
    },
    {
        sizes: ['L', 'M'],
        colors: [
            new Color().setHex(0x000000),
            new Color().setHex(0xFFFF00),
            new Color().setHex(0x008899),
        ],
        parasolModelPath: "/parasol-all.glb",
        footModelPath: "/foot.glb",
        footSizeMin: 20,
        footSizeMax: 90
    }
]