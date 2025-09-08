import { FaEye, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md rounded-2xl overflow-hidden my-3">
      {/* Author Info */}
      <div className="flex items-center justify-between p-4 border-b border-gray-300">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <button className="btn btn-ghost btn-sm ">•••</button>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold px-4 pt-4">
        {title}
      </h3>

      {/* Thumbnail */}
      <figure className="px-4 py-2">
        <img src={thumbnail_url} alt={title} className="rounded-xl w-full" />
      </figure>

      {/* Details */}
      <Link to={`/newsdetails/${id}`}  className="px-4 pb-4 text-gray-700">
        {details.length > 150 ? (
          <p>
            {details.slice(0, 150)}...
            <span className="text-orange-500 cursor-pointer"> Read More</span>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </Link>

      {/* Footer: Rating + Views */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-300 text-sm">
        <div className="flex items-center gap-2 text-orange-500">
          <FaStar />
          <span>{rating.number}</span>
          <span className="badge badge-outline badge-sm">{rating.badge}</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
