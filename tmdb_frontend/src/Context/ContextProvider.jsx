import { createContext, useContext, useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const StoreContext = createContext();

export const useStoreCtx = () => useContext(StoreContext);

export const CtxProvider = ({ children }) => {
  const [movieGenresList, setMovieGenresList] = useState([]);
  const [tvShowGenresList, setTvShowGenresList] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const promise1 = GlobalApi.getMovieGenreList.then((res) => {
      setMovieGenresList(res.data.genres);
    });
    const promise2 =GlobalApi.getTvShowGenreList.then((res) => {
      setTvShowGenresList(res.data.genres);
    });

    Promise.all([promise1, promise2]).then(setIsLoading(false)).catch(reason => console.log(reason))
  }, []);

  const ctx = {
    isLoading,
    movieGenresList,
    tvShowGenresList,
  };

  return <StoreContext.Provider value={ctx}>{children}</StoreContext.Provider>;
};
