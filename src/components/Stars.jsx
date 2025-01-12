import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faStar as faRegularStar } from '@fortawesome/free-regular-svg-icons';


export default function Stars({ avg_vote }) {
  const arraystar = []
  const vote = Math.ceil(avg_vote);

  for (let index = 0; index < vote; index++) {
    arraystar.push(
      <FontAwesomeIcon icon={faStar} style={{ color: "gold" }} key={`full-${index}`} />
    );
  }

  // 2 ciclo per aggiungere stella vuota
  for (let index = vote; index < 5; index++) {
    arraystar.push(
      <FontAwesomeIcon icon={faRegularStar} style={{ color: "gold" }} key={`empty-${index}`} />
    );
  }


  return (
    <div className="mb-2 mt-n2">
      {arraystar}
    </div>
  )
}
