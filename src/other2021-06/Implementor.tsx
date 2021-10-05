import { MyChip, MyOtherChip, MyChipProps, MyOtherChipProps } from "../MyChip";

const myChipProps: MyChipProps = {
  label: "Implementor",
  x: 5,
};

const myOtherChipProps: MyOtherChipProps = {
  label: "OtherImplementer",
};

export default function Implementor() {
  return (
    <div>
      <MyChip {...myChipProps} />
      <MyOtherChip {...myOtherChipProps} />
    </div>
  );
}
