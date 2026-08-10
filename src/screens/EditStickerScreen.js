/*
import { useEffect, useState } from "react";
import {
    ScrollView,
    Switch,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import useTheme from "../hooks/useTheme";
import useDeveloperMode from "../hooks/useDeveloperMode";

import FormField from "../components/common/FormField";
import NumberField from "../components/common/NumberField";
import TextAreaField from "../components/common/TextAreaField";
import SectionPicker from "../components/pickers/SectionPicker";
import TeamPicker from "../components/pickers/TeamPicker";
import SwitchField from "../components/common/SwitchField";
import DateField from "../components/common/DateField";
import PrimaryButton from "../components/common/PrimaryButton";
import Button from "../components/common/Button";
import Card from "../components/common/Card";
import Row from "../components/common/Row";

import StickerRepository from "../database/repositories/StickerRepository";

import Spacing from "../theme/spacing";

export default function EditStickerScreen({
    route,
    navigation,
}) {
    const { colors } = useTheme();
    const { stickerId } = route.params;

    const [sticker, setSticker] = useState(null);
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [sectionId, setSectionId] = useState("");
    const [teamId, setTeamId] = useState("");
    const [owned, setOwned] = useState(false);
    const [duplicates, setDuplicates] = useState("0");
    const [notes, setNotes] = useState("");
  
    const [performedDate, setPerformedDate] = useState(new Date());

    const { enabled } = useDeveloperMode();

    useEffect(() => {
        if (!enabled) {
            navigation.goBack();
        }
    }, [enabled]);
  
    useEffect(() => {
        const s = StickerRepository.getById(stickerId);

        setSticker(s);
        setNumber(String(s.number));
        setName(s.name ?? "");
        setSectionId(s.section_id ?? "");
        setTeamId(s.team_id ?? "");
        setOwned(!!s.owned);
        setDuplicates(String(s.duplicates ?? 0));
        setNotes(s.notes ?? "");
    }, [stickerId]);

    function handleSave() {

        StickerRepository.update({
            id: sticker.id,
            number: Number(number),
            name,
            owned,
            duplicates: Number(duplicates),
            notes,
            team_id: sticker.team_id,
        });

        navigation.goBack();

    }

    if (!sticker)
        return null;

    return (

        <SafeAreaView
            style={[
                styles.container,
                {
                    backgroundColor: colors.background,
                },
            ]}
        >

            <ScrollView
                contentContainerStyle={styles.content}
            >

                <Card>

                    <FormField
                        label="Sticker Number"
                        value={number}
                        onChange={setNumber}
                        keyboardType="numeric"
                    />

                    <FormField
                        label="Sticker Name"
                        value={name}
                        onChange={setName}
                    />

                    <SectionPicker
                        value={sectionId}
                        onChange={setSectionId}
                    />

                    <TeamPicker
                        sectionId={sectionId}
                        value={teamId}
                        onChange={setTeamId}
                    />

                  *<FormField
                        label="Duplicates"
                        value={duplicates}
                        onChange={setDuplicates}
                        keyboardType="numeric"
                    /> *
                    <NumberField
                        label="Duplicates"
                        value={duplicates}
                        onChange={setDuplicates}
                    />

                  * <FormField
                        label="Notes"
                        value={notes}
                        onChange={setNotes}
                        multiline
                    /> *
                    <TextAreaField
                        label="Notes"
                        value={notes}
                        onChange={setNotes}
                    />

                    <SwitchField
                        label="Owned"
                        value={owned}
                        onChange={setOwned}
                    />

                  * TEST *
                  <DateField
                      label="Performed Date"
                      value={performedDate}
                      onChange={setPerformedDate}
                  />

                </Card>

              <PrimaryButton
                    title="💾 Save Changes"
                    onPress={handleSave}
                />
                <Button
                    title="Save Changes"
                    // loading={saving}
                    onPress={handleSave}
                />

            </ScrollView>

        </SafeAreaView>

    );

}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    content: {
        padding: Spacing.lg,
        gap: Spacing.lg,
    },

});

*/


import { useEffect, useState } from "react";

import {
    ScrollView,
    StyleSheet,
    View,
} from "react-native";

import {
    SafeAreaView,
} from "react-native-safe-area-context";

import useTheme from "../hooks/useTheme";
import useDeveloperMode from "../hooks/useDeveloperMode";

import FormField from "../components/common/FormField";
import NumberField from "../components/common/NumberField";
import TextAreaField from "../components/common/TextAreaField";

import SectionPicker from "../components/pickers/SectionPicker";
import TeamPicker from "../components/pickers/TeamPicker";

import SwitchField from "../components/common/SwitchField";
import DateField from "../components/common/DateField";

import Button from "../components/common/Button";
import Card from "../components/common/Card";

import StickerRepository from "../database/repositories/StickerRepository";

import Spacing from "../theme/spacing";

export default function EditStickerScreen({
    route,
    navigation,
}) {

    const { colors } = useTheme();

    const { stickerId } = route.params;

    const { enabled } = useDeveloperMode();

    const [sticker, setSticker] = useState(null);

    const [number, setNumber] = useState("");
    const [name, setName] = useState("");

    const [sectionId, setSectionId] = useState(null);
    const [teamId, setTeamId] = useState(null);

    const [owned, setOwned] = useState(false);
    const [duplicates, setDuplicates] = useState("0");
    const [notes, setNotes] = useState("");

    const [performedDate, setPerformedDate] = useState(
        new Date()
    );

    const [saving, setSaving] = useState(false);

    /*
     * Developer Mode protection
     */
    useEffect(() => {

        if (!enabled) {
            navigation.goBack();
        }

    }, [
        enabled,
        navigation,
    ]);


    /*
     * Load sticker
     */
    useEffect(() => {

        const s = StickerRepository.getById(stickerId);

        if (!s) {
            navigation.goBack();
            return;
        }

        setSticker(s);
        setNumber(String(s.number ?? ""));
        setName(s.name ?? "");
        setSectionId(s.section_id ?? null);
        setTeamId(s.team_id ?? null);
        setOwned(!!s.owned);
        setDuplicates(String(s.duplicates ?? 0));
        setNotes(s.notes ?? "");
    }, [stickerId,navigation,]);

    /*
     * Save
     */
    async function handleSave() {

        if (saving)
            return;

        try {
            setSaving(true);

            StickerRepository.update({
                id: sticker.id,
                number: Number(number),
                name: name.trim(),
                // section_id: sectionId ? Number(sectionId) : null,
                section_id: sectionId,
                // team_id: teamId ? Number(teamId) : null,
                team_id: teamId,
                owned,
                duplicates: Number(duplicates),
                notes: notes.trim(),
            });

            /*
             * Permitem UI-ului să afișeze
             * loading înainte de navigare.
             */
            await Promise.resolve();

            navigation.goBack();

        } catch (error) {
            console.error("Failed updating sticker:", error);
        } finally {
            setSaving(false);
        }
    }

    function handleSectionChange(value) {
    
        setSectionId(value);
    
        setTeamId(null);
    }
  
    /*
     * Cancel
     */
    function handleCancel() {

        if (saving)
            return;

        navigation.goBack();

    }


    if (!sticker)
        return null;


    return (

        <SafeAreaView
            edges={["bottom"]}
            style={[
                styles.container,
                {
                    backgroundColor: colors.background,
                },
            ]}
        >

            <ScrollView
                contentContainerStyle={styles.content}
                keyboardShouldPersistTaps="handled"
            >

                <Card>

                    <FormField
                        label="Sticker Number"
                        value={number}
                        onChangeText={setNumber}
                        keyboardType="numeric"
                        editable={!saving}
                    />

                    <FormField
                        label="Sticker Name"
                        value={name}
                        onChangeText={setName}
                        editable={!saving}
                    />

                    <SectionPicker
                        value={sectionId}
                        onChange={handleSectionChange}
                        disabled={saving}
                    />

                    <TeamPicker
                        sectionId={sectionId}
                        value={teamId}
                        onChange={setTeamId}
                        disabled={saving}
                    />

                    <NumberField
                        label="Duplicates"
                        value={duplicates}
                        onChange={setDuplicates}
                        disabled={saving}
                    />

                    <TextAreaField
                        label="Notes"
                        value={notes}
                        onChange={setNotes}
                        editable={!saving}
                    />

                    <SwitchField
                        label="Owned"
                        value={owned}
                        onChange={setOwned}
                        disabled={saving}
                    />

                    {/* TEST / DEBUG */}
                    <DateField
                        label="Performed Date"
                        value={performedDate}
                        onChange={setPerformedDate}
                        disabled={saving}
                    />

                </Card>


                {/* Actions */}

                <View
                    style={styles.actions}
                >

                    <View style={styles.buttonWrapper}>

                        <Button
                            title="Cancel"
                            icon="close-outline"
                            variant="secondary"
                            onPress={handleCancel}
                            disabled={saving}
                        />

                    </View>


                    <View style={styles.buttonWrapper}>

                        <Button
                            title="Save"
                            icon="checkmark-outline"
                            variant="primary"
                            onPress={handleSave}
                            loading={saving}
                        />

                    </View>

                </View>

            </ScrollView>

        </SafeAreaView>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    content: {
        padding: Spacing.lg,
        paddingBottom: 32,
    },

    actions: {
        flexDirection: "row",
        gap: 12,

        marginTop: Spacing.md,
    },

    buttonWrapper: {
        flex: 1,
    },

});