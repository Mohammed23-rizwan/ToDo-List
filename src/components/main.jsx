import InputForm from "./InputForm";

const Main = () => {
  return (
    <div className="w-screen h-screen bg-blue-600 grid place-content-center">
      <div className="min-w-[450px] max-w-[450px] min-h-80 bg-white rounded-[10px] shadow-[0_3px_10px_rgb(0,0,0,0.2)]z">
        <InputForm />
      </div>
    </div>
  );
};

export default Main;
