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
        src="https://imdb-video.media-imdb.com/vi1572603673/1434659607842-pgv4ql-1616202579071.mp4?Expires=1650349749&Signature=UjTBTJ-SqO1fVo~cm036OHntUo~-A7C84NsMm1zNkryvpARA-V7953maJWUgert9wLGadBVoZ7D3JDUUTtTpRXgNY0ms-cfQZF7h6eHDvqwoKyBlynqHCu2n1UECOD3g8FCfiM6P~~G6MYN7b-aWHXBPzvLNuI0qkq31tMIRzMrYBHLS5HFHH-fuykz85vnTUCjGV~BYTPrYl50WnwDTW~MWxmBXtlw5amz6StTdpkvEAzYHjEKSVg3kHKGBOxnIeJNQKXnOjJJSlDwOFo1bA7vC1rxx0TqMKY40TOv6sErYuLW0-UHtTzc5M6wogjze2SnSsVldfSnXYd5MsqVsYA__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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
