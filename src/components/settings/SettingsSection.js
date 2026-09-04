import Card from "../common/Card";
import SectionTitle from "../common/SectionTitle";

export default function SettingsSection({ title, children }) {
  return (
    <>
      <SectionTitle
        title={title}
        // icon=""
        // right=""
      ></SectionTitle>

      <Card>{children}</Card>
    </>
  );
}
