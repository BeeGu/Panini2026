import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";

export default function SettingsSection({
    title,
    children,
}) {

    return (
        <>
            <SectionTitle>
                {title}
            </SectionTitle>

            <Card>
                {children}
            </Card>
        </>
    );
}