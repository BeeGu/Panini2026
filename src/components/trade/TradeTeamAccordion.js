import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../common/Card";
import Row from "../common/Row";
import ProgressBar from "../common/ProgressBar";
import Flag from "../common/Flag";

import TradeStickerList from "./TradeStickerList";

import useTheme from "../../hooks/useTheme";

export default function TradeTeamAccordion({ team, type }) {
  const { colors } = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Pressable onPress={() => setExpanded(!expanded)}>
        <Card>
          <Row>
            <Row justify="flex-start" gap={10}>
              <Flag iso2={team.iso2} size={28} />

              <Text
                style={[
                  styles.title,
                  {
                    color: colors.text,
                  },
                ]}
              >
                {team.name}
              </Text>
            </Row>

            <Ionicons
              name={expanded ? "chevron-up" : "chevron-down"}
              size={22}
              color={colors.icon}
            />
          </Row>

          <Text
            style={[
              styles.subtitle,
              {
                color: colors.textSecondary,
              },
            ]}
          >
            {type === "duplicate"
              ? `${team.duplicates} duplicates`
              : `${team.missing} missing`}
          </Text>
        </Card>
      </Pressable>

      {expanded && <TradeStickerList stickers={team.stickers} type={type} />}
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 17,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,
  },
});
