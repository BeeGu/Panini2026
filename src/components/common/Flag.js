import flags from "../../constants/flags";
import countryCodes from "../../constants/countryCodes";
import { Ionicons } from "@expo/vector-icons";

export default function Flag({
    iso2,
    size = 24,
}) {

    if (!iso2 || iso2 === "xx") {

        return (
            <Ionicons
                name="flag-outline"
                size={size}
                color="#999"
            />
        );

    }

    const SvgFlag = flags[iso2.toLowerCase()];

    if (!SvgFlag) {

        return (
            <Ionicons
                name="flag-outline"
                size={size}
                color="#999"
            />
        );

    }

    return (

        <SvgFlag
            width={size}
            height={size * 0.75}
        />

    );

}