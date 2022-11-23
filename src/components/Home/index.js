import './index.css'

import Loader from 'react-loader-spinner'

import {Component} from 'react'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    teamsList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const responsePromise = await fetch('https://apis.ccbp.in/ipl')
    const data = await responsePromise.json()

    const updateTeams = data.teams.map(each => ({
      id: each.id,
      name: each.name,
      teamImageUrl: each.team_image_url,
    }))
    // console.log(updateTeams)
    this.setState({
      isLoading: false,
      teamsList: updateTeams,
    })
  }

  render() {
    const {isLoading, teamsList} = this.state

    return (
      <div className="home-container">
        <h1 className="heading">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="logo"
          />
          IPL Dashboard
        </h1>
        {isLoading ? (
          <Loader type="Oval" color="#ffffff" height={50} width={50} />
        ) : (
          <ul className="teams-container">
            {teamsList.map(each => (
              <TeamCard team={each} key={each.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
