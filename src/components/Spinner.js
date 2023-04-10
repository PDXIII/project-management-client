import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="m-auto flex flex-column min-h-full justify-center">
      <div className="lds-ripple inline-block relative w-32 h-32 mx-auto">
        <div className="absolute border-4 border-white rounded-full opacity-100 "></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
