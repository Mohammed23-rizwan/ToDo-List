import { useState } from "react";
import DisplayData from "./DisplayData";

const InputForm = () => {
  const [Value, setValue] = useState("");
  const [dis, setDis] = useState([]);

  const handleadded = () => {
    setDis([...dis, Value]);
    console.log(dis);
  };

  return (
    <div className="w-full h-full mt-4 flex items-center flex-col">
      <div className="w-[90%] h-[30px] flex justify-center gap-3">
        <input
          type="text"
          name=""
          id=""
          className="w-3/4 outline-none border-none px-4 py-2 bg-[#3a3a3a3f] rounded-[2px]"
          placeholder="Add into ToDo List"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          value={Value}
        />
        <button
          type="button"
          className="w-1/4 border border-blue-600"
          onClick={() => handleadded()}
        >
          button
        </button>
      </div>
      <DisplayData />
    </div>
  );
};

export default InputForm;
