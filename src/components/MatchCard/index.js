import './index.css'

const MatchCard = props => {
  const {details} = props
  const {matchStatus, id, competingTeam, competingTeamLogo, result} = details
  const resultColor = matchStatus === 'Won' ? 'won' : ''

  return (
    <li className="result-card">
      <img src={competingTeamLogo} alt={id} className="opp-team-logo" />
      <h1 className="opp-team-name">{competingTeam}</h1>
      <p className="match-result">{result}</p>
      <p className={`match-status ${resultColor}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
