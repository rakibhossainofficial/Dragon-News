import React from "react";
import { useNavigate } from "react-router";
import { FaAngleLeft } from "react-icons/fa";

const NewsDetailsCard = ({ news }) => {
  const Nevigate = useNavigate();
  const { image_url, title, details } = news;

  return (
    <div className="flex flex-col items-start gap-5 p-6 rounded-sm border border-gray-200">
      <button onClick={() => Nevigate(-1)} className="btn">
        <span>
          <FaAngleLeft />
        </span>{" "}
        Back
      </button>
      <img
        className="w-full rounded-sm object-cover bg-center"
        src={image_url}
        alt=""
      />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <h4 className="text-gray-500">{details}</h4>
    </div>
  );
};

export default NewsDetailsCard;
