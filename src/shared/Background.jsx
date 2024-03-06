import BackgroundImage from "/assets/brickwall.jpeg";

export const Background = () => {
  return (
    <div className="background">
      <img
        src={BackgroundImage}
        className="background-image"
        alt="brick wall"
      />
      <img
        src={BackgroundImage}
        className="background-image"
        alt="brick wall"
      />
    </div>
  );
};
