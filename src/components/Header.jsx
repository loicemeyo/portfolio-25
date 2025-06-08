import profileImage from "/meyo.jpeg";
const Header = () => {
  return (
    <div className="flex flex-col-reverse sm:flex-row items-start justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-nowrap tracking-tighter">
          Hi, I'm{"      "}
          <span className=" bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
            Loice {"  "}
          </span>
          👋🏾
        </h1>
        <p className="text-sm max-w-[500px]">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
      <img
        src={profileImage}
        alt="profile image"
        className="w-32 rounded-full mt-3 "
      />
    </div>
  );
};

export default Header;
