import './index.css'

import Loader from 'react-loader-spinner'

import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import NotFound from '../NotFound'

class TeamMatches extends Component {
  state = {
    isLoading: true,
    matchesList: [],
    bannerUrl: '',
    latestMatchDetails: {},
    notFetching: false,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    try {
      const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
      const data = await response.json()
      // console.log(data)
      const updateBannerUrl = data.team_banner_url
      const updateRecentMatches = data.recent_matches.map(each => ({
        competingTeam: each.competing_team,
        competingTeamLogo: each.competing_team_logo,
        date: each.date,
        firstInnings: each.first_innings,
        id: each.id,
        manOfTheMatch: each.man_of_the_match,
        matchStatus: each.match_status,
        result: each.result,
        secondInnings: each.second_innings,
        umpires: each.umpires,
        venue: each.venue,
      }))

      const updateLatestMatch = {
        competingTeam: data.latest_match_details.competing_team,
        competingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        id: data.latest_match_details.id,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        matchStatus: data.latest_match_details.match_status,
        result: data.latest_match_details.result,
        secondInnings: data.latest_match_details.second_innings,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      }
      this.setState({
        isLoading: false,
        matchesList: updateRecentMatches,
        bannerUrl: updateBannerUrl,
        latestMatchDetails: updateLatestMatch,
      })
    } catch {
      this.setState({
        notFetching: true,
        isLoading: false,
      })
    }
  }

  getMatchDetails = () => {
    const {notFetching} = this.state
    const {bannerUrl, latestMatchDetails, matchesList} = this.state
    const {
      match: {
        params: {id},
      },
    } = this.props
    return (
      <>
        {notFetching ? (
          <NotFound />
        ) : (
          <>
            <img src={bannerUrl} alt={id} className="team-image" />
            <h1 className="latest-matches-heading">Latest Matches</h1>
            <LatestMatch matchDetails={latestMatchDetails} />
            <ul className="results-container">
              {matchesList.map(each => (
                <MatchCard details={each} key={each.id} />
              ))}
            </ul>
          </>
        )}
      </>
    )
  }

  render() {
    const {isLoading} = this.state
    const {
      match: {
        params: {id},
      },
    } = this.props

    return (
      <div className={`team-matches-container bg-${id}`}>
        {isLoading ? (
          <Loader type="Oval" height={50} width={50} color="#ffffff" />
        ) : (
          this.getMatchDetails()
        )}
      </div>
    )
  }
}

export default TeamMatches
