// ⭐️ Refactored
import flags from "../../constants/flags";
import { Ionicons } from "@expo/vector-icons";

import useTheme from "../../hooks/useTheme";

export default function Flag({ iso2, size = 24 }) {
  const { colors } = useTheme();

  if (!iso2 || iso2 === "xx") {
    return (
      <Ionicons name="flag-outline" size={size} color={colors.textMuted} />
    );
  }

  const SvgFlag = flags[iso2.toLowerCase()];

  if (!SvgFlag) {
    return (
      <Ionicons name="flag-outline" size={size} color={colors.textMuted} />
    );
  }

  return <SvgFlag width={size} height={size * 0.75} />;
}
