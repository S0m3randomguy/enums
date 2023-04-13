
/**
 * Adds JavaScript enums to blocks
 */
//% color=#0e823f weight=0 icon="\uf0cb" block="Enums"
namespace enums {

    //% shim=ENUM_GET
    //% blockId=color_enum_shim
    //% block="Color $arg"
    //% enumName="Colors"
    //% enumMemberName="color"
    //% enumPromptHint="e.g. Green, Orange, ..."
    //% enumInitialMembers="Red, Blue, Yellow"
    export function _colorEnumShim(arg: number) {
        return arg;
    }


    //% shim=ENUM_GET
    //% blockId=flag_enum_shim
    //% block="Flag $arg"
    //% enumName="Flags"
    //% enumMemberName="flag"
    //% enumPromptHint="e.g. B, C, ..."
    //% enumInitialMembers="A"
    //% enumIsBitMask=true
    export function _flagEnumShim(arg: number) {
        // This function should do nothing, but must take in a single
        // argument of type number and return a number value.
        return arg;
    }


    /**
     * In a function that uses an enum shadow block, the argument it takes in
     * should be of type "number" (not the enum type)
     */
    //% blockId=show_color
    //% block="show $color"
    //% color.shadow="color_enum_shim"
    export function showColor(color: number) {
        
    }
}