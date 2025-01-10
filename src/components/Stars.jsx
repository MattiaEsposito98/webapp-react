import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

export default function Stars({ avg_vote }) {
  const arraystar = []
  const vote = avg_vote.vote || avg_vote;
  for (let index = 0; index < vote; index++) {
    arraystar.push(<FontAwesomeIcon icon={faStar} style={{ color: "gold" }} key={index} />)
  }

  return (
    <div className="mb-2 mt-n2">
      {arraystar}
    </div>
  )
}
