import FormField from "./FormField";

export default function NumberField(props) {
  function handleChange(text) {
    const value = text.replace(/[^0-9]/g, "");

    props.onChange?.(value);
  }

  return (
    <FormField {...props} keyboardType="numeric" onChange={handleChange} />
  );
}
