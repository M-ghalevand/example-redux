import React, {useState, useEffect} from "react";
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
    sys:{country: number}

}

const Weather = () => {
    const [lat, setLat] = useState<number>();
    const [lon, setLon] = useState<number>();
    const [error, setError] = useState<boolean>(false);
    const [status, setStatus] = useState<boolean>(false);
    const [data, setData] = useState<IData>();
    const [locationData, setLocationData] = useState<ILocationData>();
    const [location, setLocation] = useState("");
    const keys = "439d4b804bc8187953eb36d2a8c26a02"
    const keys1 = "91c6b2b94bd67f6acd5580b6546b9a88"
    const urlFindLocationLat = `https://openweathermap.org/data/2.5/find?q=${location}&appid=${keys}&units=metric`;
    const urlLocationData = `https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${keys}`;


    const searchLocation = async (event) => {
        event.preventDefault()
        const fetchFindLoction = await axios.get(urlFindLocationLat)
        if (fetchFindLoction.data.count === 1) {
            setStatus(true)
            setError(false)

        } else {
            setError(true)
        }

    };


    useEffect(() => {
        if (status === true) {
            const loctionCountry = async () => {
                const fetchFindLoction = await axios.get(urlFindLocationLat)
                setLocationData(fetchFindLoction.data.list[0])
                setLat(fetchFindLoction.data.list[0].coord.lat);
                setLon(fetchFindLoction.data.list[0].coord.lon);
            }
            loctionCountry()

            if (typeof lat === "number" && typeof lon === "number") {
                const loctionData = async () => {
                    setLocation("");
                    const fetchFindLoction = await axios.get(urlLocationData)
                    setData(fetchFindLoction.data);
                }
                loctionData()
                setStatus(false)
                return;
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
};

export default Weather;
