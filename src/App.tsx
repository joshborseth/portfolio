import { useRef } from "react";
import Circle from "./Circle";

const App = () => {
  const pageRef = useRef(null);
  if (!pageRef) return;
  return (
    <div className="h-screen w-screen flex flex-col gap-5 justify-start items-center text-center p-20">
      <div className="h-full w-full m-32" ref={pageRef}>
        <h1 className="font-bold text-5xl">Joshua Borseth</h1>
        <h2 className="font-semibold text-2xl">Check out my Projects:</h2>
        <ul>
          <li className="text-xl">
            <a className="hover:underline" href="https://jbmovies.joshborseth.com/">
              Movie Database with T3 Stack and TMDB API
            </a>
          </li>
        </ul>
        <Circle pageRef={pageRef} />
      </div>
    </div>
  );
};

export default App;
