export type MyOtherChipProps = {
  label: string;
};

const MyOtherChip = (props: MyOtherChipProps) => {
  return <div>{props.label}</div>;
};

export default MyOtherChip;
