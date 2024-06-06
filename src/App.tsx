import { useState, useEffect } from "react";

import "./App.css";

export const App = () => {
  const [number, setNumber] = useState<number>();
  const getRandomNumberFromApi = async (): Promise<number> => {
    const res = await fetch(
      `https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new`
    );
    const numberToString = await res.text();
    return +numberToString;
  };

  useEffect(() => {
    getRandomNumberFromApi().then((n) => setNumber(n));
  }, []);

  return (
    <>
      <div className="App App-header">
        <h1>Random number:{number}</h1>
      </div>
    </>
  );
};
