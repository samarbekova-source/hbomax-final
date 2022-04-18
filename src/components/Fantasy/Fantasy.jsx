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
        src="https://imdb-video.media-imdb.com/vi762102553/1434659607842-pgv4ql-1646060888113.mp4?Expires=1650033181&Signature=BKIHOQbB8WSidsHXYMuGyPOr9C380zg4nJeNQdCvesGWj2ZWVAgseiKzPsFEGtq0akpGu91P5Y5YhGmhTnrPX2oEa2EQjRenXB5CcnnJzDQ92W-qDCSdo5O5UDIDpaSKoUBe6nK0q7igHGk92egX6skdis4ASfeou-R30b3E6Qw~5jN1V9lVwidJx9nEfBsDqTnUqekqEkXokp57QRy4K30mpq-idMrR-cmarA3RFHsCC-w9XDdym18bqf24VKDRSEtG5tYU3evapafXBrXcyxAOOzXF-3AwcgVhWMSusmF86ViWmPUQpZOtYLqdNyJmjNhT8MuyzsAda3R211zvwA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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
