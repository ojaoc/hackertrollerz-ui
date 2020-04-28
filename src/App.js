import React from "react";
import TrendList from "./TrendList";
import LoginScreen from "./LoginScreen";
import ChatRoom from "./ChatRoom";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      error: null,
      isLoaded: false,
      trends: [],
    };
  }
  componentDidMount() {
    let token =
      "AAAAAAAAAAAAAAAAAAAAAC2uDwEAAAAAuUTw%2FQnHL9lqek0ODTp64ROuGBU%3D7fwFkHZVgPMjz3FdOVhZlsE7idVKtyI2kJj6zofXQx8JduNHvh";
    fetch("https://twit-war.herokuapp.com/api/trends?bt=" + token)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            trends: result[0].trends,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  setUser = (username) => {
    this.setState({ username: username });
    console.log(this.state.username);
  };
  render() {
    const { error, isLoaded, trends } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      console.log(this.state.trends);
      return (
        <div className="container">
          <LoginScreen
            setUsername={this.setUser}
            username={this.state.username}
          />
          <TrendList trends={this.state.trends} username={this.state.username} />
          <ChatRoom />
        </div>
      );
    }
  }
  /*return (
      <div className="container">
        <LoginScreen
          setUsername={this.setUser}
          username={this.state.username}
        />
        <TrendList trends={this.state.trends} username={this.state.username} />
      </div>
    );*
    /*return (
        <div className="container">
            <ChatRoom />
        </div>
    )*/
}
