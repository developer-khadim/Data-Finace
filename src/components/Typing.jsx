import { ReactTyped } from "react-typed";

const Typing = () => {
  return (
    <>
      <div>
        <ReactTyped
        className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500 md:pl-4 pl-2 "
          strings={[
            "BTB "," BTC","SASS"
          ]}
          typeSpeed={120}
          backSpeed={140}
          loop
        >
        </ReactTyped>
      </div>
    </>
  );
};

export default Typing;
