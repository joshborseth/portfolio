const App = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center p-10">
      <div className="flex flex-col justify-center items-center gap-10">
        <h1 className="text-7xl font-bold">Joshua Borseth</h1>
        <p className="text-2xl max-w-md">A Frontend Developer with a passion for finding practical solutions to everyday problems.</p>
        <div className="flex justify-center gap-5">
          <a className="btn-secondary btn-lg btn" href="https://github.com/joshborseth">
            Github
          </a>
          <a className="btn-accent btn-lg btn" href="https://jbmovies.joshborseth.com/">
            Movie DB Project
          </a>
          <a className="btn-accent btn-lg btn" href="https://questions.joshborseth.com/">
            Questions App
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
