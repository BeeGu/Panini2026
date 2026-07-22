import { useEffect, useState } from "react";

import SettingsContext from "./SettingsContext";

import SettingsService from "../services/SettingsService";

export default function SettingsProvider({
    children,
}) {

    const [developerMode, setDeveloperMode] = useState(false);

    useEffect(() => {
        reload();
    }, []);

    function reload() {
        setDeveloperMode(
            SettingsService.isDeveloperMode()
        );
    }

    function toggleDeveloperMode() {
        SettingsService.toggleDeveloperMode();

        reload();
    }

    return (
        <SettingsContext.Provider
            value={{
                developerMode,
                toggleDeveloperMode,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );

}