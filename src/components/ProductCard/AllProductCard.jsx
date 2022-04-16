import { Empty, Pagination } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";
import MoviesFilter from "../MoviesFilter/MoviesFilter";
import ProductCard from "../ProductCard/ProductCard";
import "./AllProductCard.css";

const AllProductCard = () => {
  const { getMovie, movies, movieCount } = useContext(contextsMovie);
  const [searchParams, setSearchParams] = useSearchParams();

  const [limit, setLimit] = useState(16);
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );

  useEffect(() => {
    setSearchParams({ _page: page, _limit: limit, types: "all" });
  }, [page, limit]);

  useEffect(() => {
    getMovie();
  }, []);

  useEffect(() => {
    getMovie();
  }, [searchParams]);
  console.log(movies);
  return (
    <>
      <MoviesFilter />

      <div
        className="products-list"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          width: "100%",
          margin: "20px auto",
        }}
      >
        {movies.length > 0 ? (
          movies.map((item) => <ProductCard key={item.id} item={item} />)
        ) : (
          <Empty />
        )}
      </div>
      <div className="pog-t">
        <Pagination
          total={+movieCount}
          current={+page}
          pageSize={+limit}
          defaultCurrent={1}
          onChange={(page, limit) => {
            setPage(page);
            setLimit(limit);
          }}
        />
      </div>
    </>
  );
};

export default AllProductCard;
