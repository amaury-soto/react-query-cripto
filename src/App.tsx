import { useEffect } from "react";

import "./App.css";
import { getRandomNumberFromApi, useRandom } from "./hooks/useRandom";



export const App = () => {
 
const query = useRandom()
  useEffect(() => {
    getRandomNumberFromApi();
  }, []);

  return (
    <>
      <div className="App App-header">
        {query.isFetching ? (
          <h3>Cargando...</h3>
        ) : (
          <h1>Random number:{query.data}</h1>
        )}
        {!query.isLoading && query.isError && <h3> {`${query.error}`}</h3>}

        <button onClick={() => query.refetch()} disabled={query.isFetching}>
          {query.isFetching ? "..." : "New number"}
        </button>
      </div>
    </>
  );
};
