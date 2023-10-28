import { TypeAnimation } from "react-type-animation";

const AnimationTyping = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        " Hosam Sharaf",
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        " React.Js Developer",
        1000,
        " 3D Visualizer",
        1000,
        " Designer",
        1000,
      ]}
      wrapper="span"
      speed={20}
      style={{ fontSize: "2em", display: "inline-block" }}
      repeat={Infinity}
    />
  );
};
export default AnimationTyping;
