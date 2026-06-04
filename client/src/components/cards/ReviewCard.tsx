import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review }: any) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg h-full">

      <div className="flex items-center justify-between">

        <h3 className="text-xl font-semibold text-gray-800">
          {review.name}
        </h3>

        <div className="flex gap-1">
          {[...Array(review.rating)].map((_, index) => (
            <FaStar
              key={index}
              className="text-yellow-500"
            />
          ))}
        </div>

      </div>

      <p className="mt-6 text-gray-600 leading-relaxed">
        "{review.review}"
      </p>

    </div>
  );
};

export default ReviewCard;