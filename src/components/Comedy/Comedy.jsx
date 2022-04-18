import { Empty } from "antd";
import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";
import MoviesFilter from "../MoviesFilter/MoviesFilter";
import ProductCard from "../ProductCard/ProductCard";

const Comedy = () => {
  const { getMovie, movies } = useContext(contextsMovie);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    getMovie();
  }, []);
  useEffect(() => {
    setSearchParams({
      type: "comedy",
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
        src="https://imdb-video.media-imdb.com/vi1884338201/1434659607842-pgv4ql-1524490207015.mp4?Expires=1650349684&Signature=dK2Da985u1H6acYGk48QYzQsXv7jcZo0yNRyORFGg2sgvnw7MehAcvx~6XxHq1SnDtnnrLSinJZKZ-rrXP0ZnxMWn4JV87Rsl4JrQEOQhlqD6zN8YzGfDpxkwTJmJUI6Grg2XlpsmjD2-zmJcQ5SbRZWlAFgJy5N7dpZ7doQb4Fevkv4HnngastKUkro5MUqZytPaDeBDYn9iHqUEevx5W528~UShzS8BMnPi6b1kLZBwe8JoIwACIqytghn~ewVoC7Jpp9M~btLHSaPfofCZ-vIFMV8fBXCPQcIN5qMdrGRJYHp14uKhZ7LCBN5hR8lumAmX0ok8~3qGN3bG3wecA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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

export default Comedy;
