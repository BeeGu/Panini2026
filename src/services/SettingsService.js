import SettingsRepository from "../database/repositories/SettingsRepository";

const DEVELOPER_KEY = "developer_mode";

const SettingsService = {

    isDeveloperMode() {
        return SettingsRepository.getBoolean(
            DEVELOPER_KEY
        );
    },

    setDeveloperMode(enabled) {
        SettingsRepository.setBoolean(
            DEVELOPER_KEY,
            enabled
        );
    },

    toggleDeveloperMode() {
        const enabled = !this.isDeveloperMode();
        this.setDeveloperMode(enabled);

        return enabled;
    },

};

export default SettingsService;