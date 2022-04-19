import { Empty, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";
import MoviesFilter from "../MoviesFilter/MoviesFilter";
import ProductCard from "../ProductCard/ProductCard";

const Fantasy = () => {
  const { getMovie, movies, movieCount } = useContext(contextsMovie);
  const [searchParams, setSearchParams] = useSearchParams();
  const [limit, setLimit] = useState(16);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );

  useEffect(() => {
    setSearchParams({ _page: page, _limit: limit });
  }, [page, limit]);
  useEffect(() => {
    getMovie();
  }, [searchParams]);

  useEffect(() => {
    getMovie();
  }, []);
  useEffect(() => {
    setSearchParams({
      type: "fantasy",
    });
  }, []);
  useEffect(() => {
    getMovie();
  }, [searchParams]);
  console.log(movies);
  return (
    <>
      <MoviesFilter />
      {/* added video 2 */}
      <video
        style={{ marginTop: "15px" }}
        autoPlay
        muted
        loop
        width="100%"
        src="https://imdb-video.media-imdb.com/vi1337786649/1434659607842-pgv4ql-1564489085859.mp4?Expires=1650349425&Signature=KwqFjMWQlz8Bq47lr3L7ctTpF7IojIJ8pFL1O3GOyMk7Mk6BUnunR7HrxIpfwvId1CTPLPzKM~AmymCc2bwrJSiQZcnYl9Vj5VGpUiEgX44pI9UGgMLepueNusdbyjdQk3Z2xa8xWMiJuDSS7b9Lu3tF6Zeegzwcz~26gLqXyA3Ug8zXELc01IFVqWkm3OpEAdJZqOE3JTYcK~PKLHb5ToLeJ-81ARBbFiDPP4YHeRXQ9r~YuYfCpTcONedZATKchkagkfzLXRLbRPsc1oP1i7WB-myeS8yy~6IhRRNBlYi40lLSD-abOQwo6ETcgkN6nEOeR-2MhwhtmtIhj-h5Bw__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
      ></video>

      <div
        // hey
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

export default Fantasy;
