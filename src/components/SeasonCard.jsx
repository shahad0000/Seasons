import React from "react";
import { Link } from "react-router";

const SeasonCard = (props) => {
  return (
    <div className=' bg-[rgba(7,7,7,0.5)] rounded-2xl p-2 lg:p-9 xlg:p-11 flex justify-center'>
      <Link className="" to={props.season}>
        <img className="" src={`${props.img}`} alt="season icon" />{" "}
      </Link>
    </div>
  );
};

export default SeasonCard;
