import React from "react";

const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col gap-5 justify-start items-center p-20">
      <h1 className="font-bold text-5xl">Joshua Borseth</h1>
      <h2 className="font-semibold text-2xl">Check out my Projects:</h2>
      <ul>
        <li className="text-xl">
          <a className="hover:underline" href="https://www.jbmovies.joshborseth.com/">
            Movie Database with T3 Stack and TMDB API
          </a>
        </li>
      </ul>
    </div>
  );
};

export default App;
