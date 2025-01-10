export default function ReviewsCard({ review }) {

  return (
    <div className="card mb-3">
      <div className="card-header">
        <strong>{review.name}</strong>
      </div>
      <div className="card-body">

        <p className="card-text">{review.text}</p>
        <p className="card-text"><strong>Voto:</strong> {review.vote}</p>
      </div>
    </div>
  );
}
