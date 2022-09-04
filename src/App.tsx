import { useEffect, useState } from "react";

const App = () => {
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setFade(true);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div
      className={`h-screen w-screen flex flex-col justify-center items-center text-center px-10 transition-opacity duration-500 ${
        fade ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-7xl font-bold">Joshua Borseth</h1>
        <p className="text-2xl max-w-md">A Frontend Developer with a passion for finding practical solutions to everyday problems.</p>
        <div className="flex flex-col md:flex-row justify-center gap-5">
          <a className="btn-secondary btn-lg btn" href="https://github.com/joshborseth">
            Github
          </a>
          <a className="btn-accent btn-lg btn" href="https://jbmovies.joshborseth.com/">
            Movie DB Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
