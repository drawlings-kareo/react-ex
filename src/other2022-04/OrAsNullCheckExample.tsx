export default function OrAsNullCheckExample() {
  return (
    <div>
      <div>a</div>
      {true || <div>b</div>} {false || <div>c</div>}
    </div>
  );
}
