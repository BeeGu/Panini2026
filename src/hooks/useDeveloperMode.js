import useSettings from "./useSettings";

export default function useDeveloperMode() {
  const { developerMode } = useSettings();

  return {
    enabled: developerMode,
  };
}
