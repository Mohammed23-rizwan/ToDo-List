import { MdDelete } from "react-icons/md";

const DisplayData = () => {
  return (
    <div className="w-[90%] mt-8 flex">
      <ul className="w-full">
        <li className="flex justify-between w-full border border-blue-600 py-4 rounded-sm px-3 bg-blue-300 h-full">
          <p className="text-lg">Rizwans.................</p>
          <button
            type="button"
            className="w-[25px] h-[95%] grid place-content-center"
          >
            <MdDelete className="text-center text-white text-lg" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DisplayData;
