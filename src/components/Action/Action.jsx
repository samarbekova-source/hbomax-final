import { Empty } from "antd";
import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";
import MoviesFilter from "../MoviesFilter/MoviesFilter";
import ProductCard from "../ProductCard/ProductCard";

const Action = () => {
  const { getMovie, movies } = useContext(contextsMovie);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getMovie();
  }, []);
  useEffect(() => {
    setSearchParams({
      type: "action",
    });
  }, []);
  useEffect(() => {
    getMovie();
  }, [searchParams]);
  console.log(movies);
  return (
    <>
      <MoviesFilter />
      <video
        style={{ marginTop: "15px" }}
        autoPlay
        muted
        loop
        width="100%"
        src="https://imdb-video.media-imdb.com/vi1943978777/1434659607842-pgv4ql-1638810372114.mp4?Expires=1650033258&Signature=po03MObJvq9pUNnbkzfu-N0F7nN0TegSSqgyrd00FO5tgVtIqmcLYIautpJstFO0jefupwkaO8PZcnNgau21JTqUdXS2CM7jyXQYDRy1k3-6WyPurderq2U~TfGTDmlVBQJaML-29H9xNHoLBAZjOvJ3H5-pDlC39OlMp0vt40E3VlSCckZJIAnGqksJ8fz-zbStuWwW6Obsb2hLyLheHAKjEyqRTsQ8igLxKJhioA1-9KeEnVzK0lUcQ61IbXXaWgQ0hcFamUrOwuIL0bqctc3DnQpPVrsX5o0Dj8nT~3zxjf4ag~unHo3d5DWNNkmJejQ8RRon~1Zgkd1-N2tYPw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
      ></video>
      <div
        className="products-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "100%",
          margin: "40px auto",
        }}
      >
        {movies.length > 0 ? (
          movies.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <Empty />
        )}
      </div>
    </>
  );
};

export default Action;
