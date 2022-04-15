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
        src="https://imdb-video.media-imdb.com/vi1921171737/1434659607842-pgv4ql-1601907409795.mp4?Expires=1650032940&Signature=pKMJK7VV~ua8N2YJMJDtJr5KInrHtDMe92FbrcVS~0zjfbCx98yf7fae0hLM0XGMB3dFm~sHoWSd-2JQ-EJd5yaW1Sf47JoCgd5osRtBn4Cph~aVYe2pQMAKCt~k6Ug1fDbjQqBCE7PCPDLOFoa3u3dNLq45uWZjhHlFiAAhudBgVS3ZnJztz4Y85b9P05YMLNEJJJmkoKpQg2JjrU9dWTZxNuia3kItMsJXo~vlZPsvS7RDGD8SUsEW0NjvI~EWJVmn-nTI0AYMGy69vs2tmf6xVWIJ9xvkVm7e7Qb0q61oeTc6LYbjyeVYUA21bDQ8OQ4usPsg2q5y9qvNiiCy3g__&Key-Pair-Id=APKAIFLZBVQZ24NQH3KA"
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
