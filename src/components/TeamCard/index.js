import './index.css'
import {Link} from 'react-router-dom'

const TeamCard = props => {
  const {
    team: {id, teamImageUrl, name},
  } = props

  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="team-container">
        <img src={teamImageUrl} alt={id} className="team-logo" />
        <h1 className="team-name">{name}</h1>
      </li>
    </Link>
  )
}

export default TeamCard
