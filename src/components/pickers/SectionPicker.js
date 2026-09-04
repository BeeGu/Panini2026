import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import PickerField from "../common/PickerField";
import SectionRepository from "../../database/repositories/SectionRepository";

export default function SectionPicker({ value, onChange, disabled = false }) {
  const { t } = useTranslation();

  const items = useMemo(
    () =>
      SectionRepository.findAll().map((section) => ({
        value: section.id,
        label: section.name,
      })),
    [],
  );

  return (
    <PickerField
      label={t("sticker.section")}
      value={value}
      items={items}
      onValueChange={onChange}
      enabled={!disabled}
      searchable
    />
  );
}
