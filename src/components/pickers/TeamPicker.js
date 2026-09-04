import { useMemo } from "react";
import { useTranslation } from "react-i18next";

import PickerField from "../common/PickerField";
import TeamRepository from "../../database/repositories/TeamRepository";

export default function TeamPicker({
  sectionId,
  value,
  onChange,
  disabled = false,
}) {
  const { t } = useTranslation();

  const items = useMemo(
    () =>
      TeamRepository.findBySection(sectionId).map((team) => ({
        value: team.id,
        label: team.name,
      })),
    [sectionId],
  );

  return (
    <PickerField
      label={t("sticker.team")}
      value={value}
      items={items}
      onValueChange={onChange}
      enabled={!disabled}
      searchable
    />
  );
}
