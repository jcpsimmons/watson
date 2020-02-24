import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";

export default class MainForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      clickCount: 0,
      responseData: ""
    };
  }

  clickHandler = () => {
    const myHeaders = new Headers();
    myHeaders.append("origin", "https://google.com");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow"
    };

    const requestUrl = "https://cors-anywhere.herokuapp.com/" + this.state.url;
    console.log(requestUrl);

    fetch(requestUrl, requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data);
      })
      .catch(err => console.error(err));
  };

  render() {
    return (
      <div id="MainForm">
        <TextField
          onChange={e => {
            this.setState({ url: e.target.value });
          }}
          id="standard-basic"
          label="Standard"
          style={{ paddingBottom: "1rem" }}
        />
        <Button
          onClick={() => {
            this.clickHandler();
          }}
          variant="contained"
          color="primary"
        >
          Primary
        </Button>
      </div>
    );
  }
}
