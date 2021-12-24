import React, { useState } from "react";
import * as styles from "./App.module.scss";
import axios from "axios";

const App = () => {
  const [cityName, setcityName] = useState("");
  const [name, setname] = useState("");
  const [temperature, settemperature] = useState("");
  const [pressure, setpressure] = useState("");
  const [humidity, sethumidity] = useState("");
  const [feels_like, setfeels_like] = useState("");
  const [coordinates, setcoordinates] = useState("");
  const [temp_min, settemp_min] = useState("");
  const [temp_max, settemp_max] = useState("");

  const inputHandler = (event) => {
    const value = event.target.value;
    // this.setState({ ...this.state, cityName: value });
    setcityName(value);
    console.log(value);
  };

  const weatherFinder = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=2ed352864e3fb8455799d5183ebb4822`
      )
      .then((response) => {
        console.log(response.data);
        const res = response.data;

        setname(res.name);
        settemperature(res.main.temp);
        setpressure(res.main.pressure);
        sethumidity(res.main.humidity);
        setfeels_like(res.main.feels_like);
        setcoordinates(res.coord);
        settemp_min(res.main.temp_min);
        settemp_max(res.main.temp_min);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.App}>
      <h1>Use Open weather Api and the data for any city input</h1>
      <section className={styles.form}>
        <form>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">City Name</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter City Name"
              onChange={(e) => inputHandler(e)}
            />
            <small id="emailHelp" className="form-text text-muted">
              Enter the city name you want to search weather of.
            </small>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => weatherFinder()}
          >
            Search Weather
          </button>
        </form>
      </section>
      <section className="weather">
        <p>
          Name of City: <span>{name}</span>
        </p>
        <p>
          Temp: <span>{temperature}</span>
        </p>
        <p>
          Feels_like: <span>{feels_like}</span>
        </p>

        <p>
          Temp_min:
          <span>{temp_min}</span>
        </p>
        <p>
          Temp_max: <span>{temp_max}</span>
        </p>
        <p>
          Pressure: <span>{pressure}</span>
        </p>
        <p>
          Humidity: <span>{humidity}</span>
        </p>
      </section>
    </div>
  );
};

export default App;
