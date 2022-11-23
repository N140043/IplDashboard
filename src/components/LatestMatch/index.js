import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    id,
    manOfTheMatch,
    matchStatus,
    result,
    secondInnings,
    umpires,
    venue,
  } = matchDetails
  console.log(matchStatus)
  return (
    <div className="latest-match">
      <div className="match-overview">
        <div className="match-top">
          <h1 className="opp-team-heading">{competingTeam}</h1>
          <p className="team-para1">{date}</p>
          <p className="team-para1">{venue}</p>
          <p className="team-para1">{result}</p>
        </div>
        <img src={competingTeamLogo} alt={id} className="opp-team" />
      </div>
      <div className="latest-match-bottom">
        <h1 className="team-bottom-headings">First Innings</h1>
        <p className="team-para">{firstInnings}</p>
        <h1 className="team-bottom-headings">Second Innings</h1>
        <p className="team-para">{secondInnings}</p>
        <h1 className="team-bottom-headings">Man Of The Match</h1>
        <p className="team-para">{manOfTheMatch}</p>
        <h1 className="team-bottom-headings">Umpires</h1>
        <p className="team-para">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
