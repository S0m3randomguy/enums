
/**
 * Adds JavaScript enums to blocks
 */
//% color=#0e823f weight=0 icon="\uf0cb" block="Enums"
namespace enums {

    //% shim=ENUM_GET
    //% blockId=color_enum_shim
    //% block="$arg"
    //% enumName="Enum"
    //% enumMemberName="member"
    //% enumInitialMembers="myMember"
    //% enumPromptHint="Enter your member name here..."
    //% blockSetVariable="myMember"
    /**
     * Method that returns enum member
     */
    export function _colorEnumShim(arg: number) {
        return arg;
    }
}