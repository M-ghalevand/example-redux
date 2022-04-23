import React, {useState, useEffect, useRef} from "react";
import axios from "axios";

import {Current, LoctionName, SearchWeather, Daily} from "./index";


interface IData {
    current: { dt: number };
    daily: [{
        dt: number;
        temp: {};
        humidity: number;
        wind_speed: number;
        weather: [{
            id: number;
            main: string;
            description: string;
        }]
        rain: number;
        uvi: number
    }];
}

interface ILocationData {
    name: string,
    local_names: {},
    coord: { lat: number, lon: number },
    sys: { country: number }

}

const Weather = () => {

        const [lat, setLat] = useState<number>();
        const [lon, setLon] = useState<number>();
        const [error, setError] = useState<boolean>(false);
        const [status, setStatus] = useState<boolean>(false);
        const [statusLocationStorage, setStatusLocationData] = useState<boolean>(true);
        const [data, setData] = useState<IData>();
        const [locationData, setLocationData] = useState<ILocationData>();
        const [location, setLocation] = useState("");
        const locationRef = useRef(location);
        const keys = "439d4b804bc8187953eb36d2a8c26a02"

        const getLocalStorage = async () => {
            const urlFindLocationLat = `https://openweathermap.org/data/2.5/find?q=${locationRef.current}&appid=${keys}&units=metric`;
            const fetchFindLoction = await axios.get(urlFindLocationLat)
            if (fetchFindLoction.data.count === 1) {
                setStatusLocationData(false)
                setLocationData(fetchFindLoction.data.list[0])
                setLat(fetchFindLoction.data.list[0].coord.lat);
                setLon(fetchFindLoction.data.list[0].coord.lon);
                localStorage.setItem("location", JSON.stringify(locationRef.current))
                setLocation("");
                setStatus(true)
                setError(false)

            } else {
                setLocation("");
                setError(true)
            }
        }
        const searchLocation = (event) => {
            event.preventDefault()
            if (location === "") {
                setError(true)
                return
            }
            locationRef.current = location
            getLocalStorage()
        };


        useEffect(() => {
            if (statusLocationStorage === true) {
                if (localStorage.getItem("location")) {
                    const locationLocalStorage = JSON.parse(localStorage.getItem("location"))
                    locationRef.current = locationLocalStorage
                    getLocalStorage()
                }
            }
        }, [statusLocationStorage]);
        useEffect(() => {
            if (status === true) {
                if (typeof lat === "number" && typeof lon === "number") {
                    const loctionData = async () => {
                        const urlLocationData = `https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${keys}`;
                        const fetchFindLoction = await axios.get(urlLocationData)
                        setData(fetchFindLoction.data);
                    }
                    loctionData()
                    setStatus(false)
                }

            }

        }, [status, lat, lon]);


        return (
            <div className="bg-white pt-4">
                <div className="sm:w-11/12 md:w-8/12 mx-auto mt-10 "
                >
                    <SearchWeather searchLocation={searchLocation} location={location} setLocation={setLocation}/>
                    {!data &&
                        <div className="mt-10 ml-10">
                            <p className="text-4xl  text-green-700 font-bold">Please enter a place name?</p>
                        </div>
                    }
                    {error &&
                        <div className="mt-10 ml-10">
                            <p className="text-4xl  text-red-800 font-bold">Please enter the loction name correctly!!!</p>
                        </div>
                    }
                    {data &&
                        <>
                            <LoctionName city={locationData}/>

                            <Current data={data.current}/>

                            <div className="flex md:flex-row flex-wrap">
                                {data.daily.map((data, index) => <Daily key={index} data={data}/>)}

                            </div>

                        </>
                    }


                </div>
            </div>
        );
    }
;

export default Weather;
