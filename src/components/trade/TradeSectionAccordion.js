import { useState } from "react";
import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Card from "../common/Card";
import Row from "../common/Row";
import ProgressBar from "../common/ProgressBar";

import TradeTeamAccordion from "./TradeTeamAccordion";

export default function TradeSectionAccordion({
    section,
    type,
}) {

    const [expanded, setExpanded] = useState(false);

    return (

        <>
            <Pressable
                onPress={() => setExpanded(!expanded)}
            >
                <Card>
                    <Row>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "700",
                            }}
                        >
                            {section.name}
                        </Text>

                        <Ionicons
                            name={
                                expanded
                                    ? "chevron-up"
                                    : "chevron-down"
                            }
                            size={24}
                        />

                    </Row>

                  {/* <ProgressBar
                        value={section.owned}
                        max={section.total}
                    /> */}

                    <Text
                        style={{
                            marginTop: 8,
                        }}
                    >
                        {type === "duplicate"
                            ? `${section.duplicates} duplicates`
                            : `${section.missing} missing`
                        }
                    </Text>

                </Card>

            </Pressable>

            {expanded &&
                section.teams.map(team => (
                    <TradeTeamAccordion
                        key={team.id}
                        team={team}
                        type={type}
                    />
                ))
            }

        </>

    );

}