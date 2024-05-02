const NavBar = () => {
  return (
    <div className="flex w-full justify-between align-baseline items-center p-10  max-h-20 bg-black">
      <h1 className="text-3xl text-white ">NoteBoard </h1>
      <a
        href={"https://github.com/SofiaBargues"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className=" hover:border-2 hover:rounded-lg p-1 m-1 hover:border-yellow-300">
          <img
            src="https://education.github.com/assets/pack/icon_github-3f2eb02545ca7c3e81beb0a464e85fb5340ec9d689133db563d1869350d6416c.png"
            alt="Github"
            className="w-6 h-6 md:w-9 md:h-9 "
          />
        </button>
      </a>
    </div>
  );
};

export default NavBar;
