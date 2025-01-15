import { useState } from "react";
// import "./App.css";

interface CardProps {
  contents: string;
  className: string;
}

function AnimationTest() {
  const tempCardContents = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString()
  );

  return (
    <>
      <div className="absolute mx-auto px-8 text-center w-full ">
        <div className="h-[1500px] bg-yellow-500 w-full">
          <div className="bg-nijiirozamurai-zuma-sub bg-red-700 h-[20px] w-full animate-bgAnimLeltToRight"></div>
          <div className="flex relative group justify-center">
            <div className="bg-nijiirozamurai-zuma bg-red-700 h-[1500px] w-[30px] animate-bgAnimLeft border-r-[1px] border-r-black"></div>
            <div
              className="w-0 overflow-hidden group-hover:w-64 transition-all duration-500 ease-in-out bg-gray-200 rounded shadow-md"
              id="center"
            >
              <TestComponent />
            </div>
            <div className="bg-nijiirozamurai-zuma bg-red-700 h-[1500px] w-[30px] animate-bgAnimRight border-l-[1px] border-l-black"></div>
          </div>
        </div>
        {/* <hr className="w-full"></hr> */}

        <div className="bg-teal-200 h-[1500px] w-full grid content-center justify-center">
          <div className="border-[1px] w-[300px] bg-red-500 border-red-500 relative group">
            <div>title</div>
            <div className="h-0 overflow-hidden group-hover:h-64 transition-all duration-500 ease-in-out shadow-md">
              <TestComponent />
            </div>
            <div>subtitle</div>
          </div>
          <div className="border-[1px] w-[300px] bg-green-500 border-green-500 group">
            <div>title</div>
            <div className="h-0 overflow-hidden group-hover:h-64 transition-all duration-500 ease-in-out shadow-md">
              <TestComponent />
            </div>
            <div>subtitle</div>
          </div>
          <div className="border-[1px] w-[300px] bg-pink-500 border-pink-500 group">
            <div>title</div>
            <div className="h-0 overflow-hidden group-hover:h-64 transition-all duration-500 ease-in-out shadow-md">
              <TestComponent />
            </div>
            <div>subtitle</div>
          </div>
        </div>
        {/* <hr className="w-screen"></hr> */}
        <div className="w-full h-[300px] grid content-center justify-center bg-fuchsia-400">
          <div className="group relative inline-block overflow-hidden border-2 border-black text-black bg-white rounded px-4 py-2 cursor-pointer transition-all duration-400">
            <span className="relative z-10 group-hover:text-white">
              Hover Me
            </span>
            <div className="absolute inset-0 bg-black translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          </div>
        </div>
        <div className="min-h-[600px] parallax bg-fixed bg-center bg-no-repeat bg-cover ">
          <div className="bg-parallax-1 min-h-[600px] parallax bg-fixed bg-center bg-no-repeat bg-cover">
            <div className="absolute grid grid-cols-2 gap-10 left-1/2 transform -translate-x-1/2">
              {tempCardContents.map((item) => (
                <Card
                  key={item}
                  className="w-[200px] h-[150px] border-2 border-white bg-white text-black mt-20"
                  contents={item}
                />
              ))}
            </div>
          </div>
          <div className="bg-parallax-2 min-h-[600px] parallax bg-fixed bg-center bg-no-repeat bg-cover "></div>
          <div className="bg-parallax-3 min-h-[600px] parallax bg-fixed bg-center bg-no-repeat bg-cover"></div>
        </div>
      </div>
    </>
  );
}

export default AnimationTest;

const TestComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
};

const Card = ({ contents, className }: CardProps) => {
  return (
    <>
      <div className={className}>card{contents}</div>
    </>
  );
};