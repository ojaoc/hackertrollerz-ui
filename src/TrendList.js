import React from "react";

export default class TrendList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasClickedOpinion: false
        }
    }
    handleClickAgree = (lobby) => {
        this.props.opinion(true);
        this.props.lobby(lobby);
        this.setState({
            hasClickedOpinion: true
        })
    }
    handleClickDisagree = (lobby) => {
        this.props.opinion(true);
        this.props.lobby(lobby);
        this.setState({
            hasClickedOpinion: true
        })
    }
  render() {
    const { trends, username } = this.props;
    const trendList = trends.map((trend) => {
      return (
        <div className="trendContainer my-5" key={trend.id}>
          <div>
            <h3>{trend.name}</h3>
            {trend.tweet_volume ? <h6>{trend.tweet_volume} tweets</h6> : null}
          </div>
          <div className="buttonContainer">
            <button className="btn btn-success m-2" onClick={() => {this.handleClickAgree(trend.name)}}>Agree</button>
            <button className="btn btn-danger  m-2" onClick={() => {this.handleClickDisagree(trend.name)}}>Disagree</button>
          </div>
        </div>
      );
    });
    return username.trim() && !this.state.hasClickedOpinion ? (
      <div>
        <h3 className="text-center">Welcome, {username}!</h3>
        {trendList}
      </div>
    ) : null;
  }
}
