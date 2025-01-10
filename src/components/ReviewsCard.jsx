import Stars from "./Stars";

export default function ReviewsCard({ review }) {

  return (
    <div className="card mb-3">
      <div className="card-header">
        <strong>{review.name}</strong>
      </div>
      <div className="card-body">

        <p className="card-text">{review.text}</p>
        <Stars avg_vote={review.vote} />
      </div>
    </div>
  );
}
