import SettingsRepository from "../database/repositories/SettingsRepository";
import AlbumService from "./AlbumService";
import { rebuildAppDatabase } from "../database/DatabaseManager";

const DEVELOPER_KEY = "developer_mode";
const TRADE_USER_NAME_KEY = "trade_user_name";

const SettingsService = {
  isDeveloperMode() {
    return SettingsRepository.getBoolean(DEVELOPER_KEY);
  },

  setDeveloperMode(enabled) {
    SettingsRepository.setBoolean(DEVELOPER_KEY, enabled);
  },

  toggleDeveloperMode() {
    const enabled = !this.isDeveloperMode();
    this.setDeveloperMode(enabled);

    return enabled;
  },

  // getTradeUserName() {
  //   return SettingsRepository.getString(TRADE_USER_NAME_KEY);
  // },

  // setTradeUserName(name) {
  //   SettingsRepository.setString(TRADE_USER_NAME_KEY, name?.trim() || "");
  // },

  getTradeUserName() {
    return SettingsRepository.get(TRADE_USER_NAME_KEY) || "";
  },

  setTradeUserName(name) {
    SettingsRepository.set(TRADE_USER_NAME_KEY, name?.trim() || "");
  },

  resetCollection() {
    AlbumService.resetCollection();
  },

  rebuildDatabase() {
    rebuildAppDatabase();
  },
};

export default SettingsService;
