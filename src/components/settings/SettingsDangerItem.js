import SettingsActionItem from "./SettingsActionItem";

import Colors from "../../theme/colors";

export default function SettingsDangerItem(props) {

    return (

        <SettingsActionItem
            {...props}
            color={Colors.danger}
        />

    );

}