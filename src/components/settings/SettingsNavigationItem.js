// Acesta este aproape identic, dar îl păstrăm separat deoarece în viitor poate naviga spre alte ecrane (Backup, Appearance etc.).
import SettingsActionItem from "./SettingsActionItem";

export default function SettingsNavigationItem(props) {
    return (
        <SettingsActionItem {...props} />
    );
}