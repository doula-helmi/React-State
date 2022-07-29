import "./App.css";
import image from "./helmi.png";
import React, { Component } from "react";

const containerStyle = {
  backgroundColor: "#231E39",
  borderRdius: "5px",
  boxShadow: "0px 10px 20px -10px rgba(0,0,0,0.75)",
  color: "#B3B8CD",
  paddingTop: "30px",
  paddingBottom: "10px",
  position: "relative",
  width: "350px",
  maxWidth: "100%",
  textAlign: "center",
  animation: "scale-display--reversed 3s",
};

const ButtonStyle = {
  cursor: "pointer",
  backgroundColor: "#03BFCB",
  border: "1px solid #03BFCB",
  borderRadius: "3px",
  color: "#231E39",
  fontFamily: "Montserrat, sans-serif",
  fontWeight: "500",
  padding: "10px 25px",
};

class App extends Component {
  state = {
    Person: {
      fullName: "Doula Helmi",
      bio: "Ce profile est la preuve que j'aime pas prendre des photos ...",
      imgSrc: { image },
      profession: "Fullstack JS",
    },
    Shows: false,
    time: 0,
  };
  handleShows = () => this.setState({ Shows: !this.state.Shows ,time: 0 });

  componentWillUnmount() {
    this.setState({ time: 0 });
  }
  componentDidMount() {
    const interval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
    return () => clearInterval(interval);
  }

  render() {
    return (
      <>
        {this.state.Shows && (
          <div style={containerStyle}>
            <img
              style={{ width: "11rem", height: "11rem" }}
              src={this.state.Person.imgSrc.image}
              alt="User logo"
            />
            <h1 style={{ margin: "10px 0" }}>{this.state.Person.fullName}</h1>
            <h4>{this.state.Person.profession}</h4>
            <p style={{ fontSize: "14px", lineHeight: "21px" }}>
              {this.state.Person.bio}
            </p>
          </div>
        )}
        <div style={containerStyle}>
          <div className="buttons">
            <button style={ButtonStyle} onClick={this.handleShows}>
              {!this.state.Shows ? "Show Profile" : "Hide Profile"}
            </button>
            <h5 style={{ padding: "1rem" }}>
              The time interval since the last component was mounted
              <b style={{ margin: "10px", fontSize: "16px", color: "#3eff67" }}>
                {this.state.time}
              </b>
              secondes
            </h5>
          </div>
        </div>
      </>
    );
  }
}

export default App;
