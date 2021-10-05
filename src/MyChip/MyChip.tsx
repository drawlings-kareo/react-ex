import MuiChip from "@material-ui/core/Chip";

export type MyChipProps = {
  label: string;
  x: number;
};

const MyChip = (props: MyChipProps) => {
  console.log(props.x);
  return <MuiChip {...props} />;
};

export default MyChip;

// export { default } from "@material-ui/core/Chip";
// export * from "@material-ui/core/Chip";
