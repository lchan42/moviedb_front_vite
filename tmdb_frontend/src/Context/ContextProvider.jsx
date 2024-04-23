import { createContext, useContext, useEffect, useState } from "react";
import GlobalApi from "../Services/GlobalApi";

const StoreContext = createContext();

export const useStoreCtx = () => useContext(StoreContext);

export const CtxProvider = ({ children }) => {
  const [movieGenresList, setMovieGenresList] = useState([
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 36,
          "name": "History"
        },
        {
          "id": 27,
          "name": "Horror"
        },
        {
          "id": 10402,
          "name": "Music"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10749,
          "name": "Romance"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 10770,
          "name": "TV Movie"
        },
        {
          "id": 53,
          "name": "Thriller"
        },
        {
          "id": 10752,
          "name": "War"
        },
        {
          "id": 37,
          "name": "Western"
        }
  ]);
  const [tvShowGenresList, setTvShowGenresList] = useState(
    [
      {
        "id": 10759,
        "name": "Action & Adventure"
      },
      {
        "id": 16,
        "name": "Animation"
      },
      {
        "id": 35,
        "name": "Comedy"
      },
      {
        "id": 80,
        "name": "Crime"
      },
      {
        "id": 99,
        "name": "Documentary"
      },
      {
        "id": 18,
        "name": "Drama"
      },
      {
        "id": 10751,
        "name": "Family"
      },
      {
        "id": 10762,
        "name": "Kids"
      },
      {
        "id": 9648,
        "name": "Mystery"
      },
      {
        "id": 10763,
        "name": "News"
      },
      {
        "id": 10764,
        "name": "Reality"
      },
      {
        "id": 10765,
        "name": "Sci-Fi & Fantasy"
      },
      {
        "id": 10766,
        "name": "Soap"
      },
      {
        "id": 10767,
        "name": "Talk"
      },
      {
        "id": 10768,
        "name": "War & Politics"
      },
      {
        "id": 37,
        "name": "Western"
      }
  ]);
  const [isLoading, setIsLoading] = useState(true)
	const [openModal, setOpenModal] = useState(true)
  const [modalContent, setModalContent] = useState(
    {			"adult": false,
    "backdrop_path": "/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
    "genre_ids": [
      878,
      12
    ],
    "id": 438631,
    "original_language": "en",
    "original_title": "Dune",
    "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    "popularity": 542.962,
    "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "release_date": "2021-09-15",
    "title": "Dune",
    "video": false,
    "vote_average": 7.791,
    "vote_count": 11356}
  )


  // useEffect(() => {
  //   const promise1 = GlobalApi.getMovieGenreList.then((res) => {
  //     setMovieGenresList(res.data.genres);
  //   });
  //   const promise2 =GlobalApi.getTvShowGenreList.then((res) => {
  //     setTvShowGenresList(res.data.genres);
  //   });

  //   Promise.all([promise1, promise2]).then(() => setIsLoading(false)).catch(reason => console.log(reason))
  // }, []);

  const ctx = {
    // isLoading,
    movieGenresList,
    tvShowGenresList,
    openModal,
    modalContent,
    setOpenModal,
    setModalContent,
  };

  return <StoreContext.Provider value={ctx}>{children}</StoreContext.Provider>;
};
