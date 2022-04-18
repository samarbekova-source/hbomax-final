import React from "react";
import { Rate } from "antd";
const StartRating = (newRating) => {
  const changeRaiting = newRating;
  console.log(newRating);

  // function saveRaiting(newRating) {
  //   let raitings = {
  //     raiting: newRaiting,
  //     name: name,
  //   };
  // }

  return (
    <div>
      <Rate allowHalf defaultValue={2.5} onChange={() => changeRaiting()} />
    </div>
  );
};

export default StartRating;
