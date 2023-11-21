import { useState, useRef } from "react";

const DebounceEx = () => {
  const [inputValue, setInputValue] = useState("");
  const debounceTextRef = useRef<HTMLSpanElement>(null);

  function handleInputChange(event: any) {
    setInputValue(event.target.value);
    console.log(debounceTextRef);
    if (debounceTextRef != null && debounceTextRef.current != null) {
      debounceTextRef.current.innerHTML = event.target.value;
    }
  }
  return (
    <div>
      <input onChange={handleInputChange} />
      <div>
        <span>Default: </span>
        <span>{inputValue}</span>
      </div>
      <div>
        <span>Debounce: </span>
        <span ref={debounceTextRef}></span>
      </div>
      <div>
        <span>Throttle: </span>
        <span></span>
      </div>
    </div>
  );
};

export default DebounceEx;
