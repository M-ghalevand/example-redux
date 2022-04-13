import React, {useState, useEffect} from "react";
import axios from "axios";
import {TextField, Box,Button} from "@mui/material/";
import {deepPurple} from '@mui/material/colors';
const a=deepPurple[900]


interface IData {
    coord: {};
    weather: [{ main: string }];
    base: string;
    main: { main: number };
    visibility: number;
    wind: {};
    clouds: {};
    dt: number;
    sys: {};
    timezone: number;
    id: number;
    name: string;
    code: number;
}

const WeatherList = () => {
    const [lat, setLat] = useState<number>();
    const [lon, setLon] = useState<number>();
    const [data, setData] = useState<IData>({});
    const [location, setLocation] = useState("");
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=5&appid=91c6b2b94bd67f6acd5580b6546b9a88`;
    const locationData = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=91c6b2b94bd67f6acd5580b6546b9a88`;

    const searchLocation = async (event) => {
        event.preventDefault()
        await axios.get(url).then((response) => {
            setLat(response.data[0].lat);
            setLon(response.data[0].lon);
        });
        setLocation("");
        await axios.get(locationData).then((response) => {
            setData(response.data);
        });

    };

    return (
        <div className="app">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
                onSubmit={searchLocation}
            >

                <TextField id="filled-basic"  label="Enter Location" variant="filled" value={location}
                           onChange={(event) => setLocation(event.target.value)}/>
                <TextField fullWidth label="fullWidth" id="fullWidth" />

                <Button variant="contained" type="submit" style={{backgroundColor: deepPurple[800]}}>Outlined</Button>

            </Box>

            <div className="container">
                <div className="top">
                    <div className="location">
                        <p>{data.name}</p>
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp.toFixed()}°F</h1> : null}
                    </div>
                    <div className="description">
                        {data.weather ? <p>{data.weather[0].main}</p> : null}
                    </div>
                </div>

                {data.name !== undefined && (
                    <div className="bottom">
                        <div className="feels">
                            {data.main ? (
                                <p className="bold">{data.main.feels_like.toFixed()}°F</p>
                            ) : null}
                            <p>Feels Like</p>
                        </div>
                        <div className="humidity">
                            {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
                            <p>Humidity</p>
                        </div>
                        <div className="wind">
                            {data.wind ? (
                                <p className="bold">{data.wind.speed.toFixed()} MPH</p>
                            ) : null}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default WeatherList;
