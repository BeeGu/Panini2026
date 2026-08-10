
import { useMemo } from "react";

import PickerField from "../common/PickerField";
import SectionRepository from "../../database/repositories/SectionRepository";

export default function SectionPicker({
    value,
    onChange,
    disabled = false,
}) {

    const items = useMemo(() =>
        SectionRepository
            .findAll()
            .map(section => ({
                value: section.id,
                label: section.name,
            })),
        []
    );

    return (
        <PickerField
            label="Section"
            value={value}
            items={items}
            onValueChange={onChange}
            enabled={!disabled}
            searchable
        />
    );
}