import { FlatList } from "react-native";

import SectionAccordion from "./SectionAccordion";

export default function SectionList({
    sections,
    onToggle,
}) {

    return (

        <FlatList

            data={sections}

            keyExtractor={(item) => item.id.toString()}

            renderItem={({ item }) => (

                <SectionAccordion

                    section={item}

                    onToggle={onToggle}

                />

            )}

            contentContainerStyle={{
                paddingBottom: 24,
            }}

        />

    );

}