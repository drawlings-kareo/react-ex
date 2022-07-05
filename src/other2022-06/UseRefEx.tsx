import { useState, useRef, useEffect, forwardRef } from "react";

const UseRefEx = () => {
  const ref = useRef<HTMLButtonElement>(null);
  const refB = useRef<HTMLButtonElement>(null);
  const refC = useRef<HTMLInputElement>(null);
  const refD = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState(0);
  const [valueB, setValueB] = useState(5);

  console.log("rendering... value:", value, ", ref:", ref, ", valueB:", valueB, ", refB:", refB);

  useEffect(() => {
    console.log("this will only run once");
  }, []);

  useEffect(() => {
    console.log("this will run if value changes");
    // ref.current.text = "yo";
  }, [value]);

  return (
    <>
      <button
        ref={ref}
        onClick={() => {
          setValue(value + 1);
          refD.current?.focus();
        }}
      >
        Update State
      </button>
      <button
        ref={refB}
        onClick={() => {
          refC.current?.focus();
        }}
      >
        Update Ref
      </button>
      <input ref={refC} />
      <MyInputForwardRef ref={refD} />
    </>
  );
};

function MyInput(props: any) {
  return <input ref={props.ref} />;
}

const MyInputForwardRef = forwardRef(MyInput);

export default UseRefEx;
