
import { useMemo } from "react";

import PickerField from "../common/PickerField";
import TeamRepository from "../../database/repositories/TeamRepository";

export default function TeamPicker({
    sectionId,
    value,
    onChange,
    disabled = false,
}) {
    const items = useMemo(() =>
        TeamRepository
            .findBySection(sectionId)
            .map(team => ({
                value: team.id,
                label: team.name,
            })),
        [sectionId]
    );

    return (
        <PickerField
            label="Team"
            value={value}
            items={items}
            onValueChange={onChange}
            enabled={!disabled}
            searchable
        />
    );
}