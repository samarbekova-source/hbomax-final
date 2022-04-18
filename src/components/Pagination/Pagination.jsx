import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { contextsMovie } from "../../context/contextsMovie";
import "./Pagination.css";

const Pagination = () => {
  const { movieCount, getMovie } = useContext(contextsMovie);
  const [limit, setLimit] = useState(16);
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchParams.get("_page") ? searchParams.get("_page") : 1
  );

  useEffect(() => {
    setSearchParams({ _page: page, _limit: limit });
  }, [page, limit]);
  useEffect(() => {
    getMovie();
  }, [searchParams]);

  //
  //
  //
  return (
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
  );
};

export default Pagination;
