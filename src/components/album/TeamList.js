import { FlatList } from "react-native";
import { useState } from "react";

import TeamCard from "./TeamCard";
import TeamAccordion from "./TeamAccordion";

export default function TeamList({
    teams,
    onToggle,
}) {

    const [expandedId, setExpandedId] = useState(null);

    return (

        <FlatList

            data={teams}

            keyExtractor={(item) => item.team.id.toString()}

            renderItem={({ item }) => (

                <TeamCard

                    team={item.team}

                    owned={item.owned}

                    total={item.total}

                    expanded={expandedId === item.team.id}

                    onPress={() =>
                        setExpandedId(
                            expandedId === item.team.id
                                ? null
                                : item.team.id
                        )
                    }

                >

                    <TeamAccordion
                        stickers={item.stickers}
                        onToggle={onToggle}
                    />

                </TeamCard>

            )}

        />

    );

}