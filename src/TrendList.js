import React from "react";

export default class TrendList extends React.Component {
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
            <button className="btn btn-success m-2">Agree</button>
            <button className="btn btn-danger  m-2">Disagree</button>
          </div>
        </div>
      );
    });
    return username.trim() ? (
      <div>
        <h3 className="text-center">Welcome, {username}!</h3>
        {trendList}
      </div>
    ) : null;
  }
}
