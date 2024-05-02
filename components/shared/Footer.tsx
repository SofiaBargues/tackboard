const Footer = () => {
  return (
    <div className="flex w-full justify-center align-baseline items-center  h-20 bg-black">
      <h1 className=" text-white ">Sofi 🌼 -</h1>
      <a
        href={"https://github.com/SofiaBargues"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="text-white hover:border-2 border-2 border-black hover:rounded-lg ml-2 hover:underline hover:text-yellow-300">
          GitHub
        </button>
      </a>
    </div>
  );
};

export default Footer;
