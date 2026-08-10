import { useState } from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../common/Card";
import Row from "../common/Row";
import ProgressBar from "../common/ProgressBar";

import useTheme from "../../hooks/useTheme";

import TradeTeamAccordion from "./TradeTeamAccordion";

export default function TradeSectionAccordion({ section, type }) {
  const { colors } = useTheme();
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <Pressable
        style={[
          styles.header,
          {
            backgroundColor: colors.surface,
            borderColor: colors.border,
          },
        ]}
        onPress={() => setExpanded(!expanded)}
      >
        <Card>
          <Row>
            <Text
              style={[
                styles.title,
                {
                  color: colors.text,
                },
              ]}
            >
              {section.name}
            </Text>

            <Ionicons
              name={expanded ? "chevron-up" : "chevron-down"}
              size={24}
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
              ? `${section.duplicates} duplicates`
              : `${section.missing} missing`}
          </Text>
        </Card>
      </Pressable>

      {expanded &&
        section.teams.map((team) => (
          <TradeTeamAccordion key={team.id} team={team} type={type} />
        ))}
    </>
  );
}

const styles = StyleSheet.create({
  header: {},

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  subtitle: {
    marginTop: 8,
  },
});
