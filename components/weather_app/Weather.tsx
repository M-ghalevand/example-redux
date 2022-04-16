import React, {useState, useEffect} from "react";
import axios from "axios";

import {Current, LoctionName, SearchWeather, Daily} from "./index";


interface IData {
    current: { dt: number };
    daily: [{
        dt: number;
        temp: { (number) };
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
    list: [{
        id: number;
        name: string;
        coord: {
            lat: number;
            lon: number;
        },
        main: { (number) };
        dt: number;
        sys: {
            country: string;
        };
        clouds: {
            all: number;
        };
        weather: [
            {
                id: number;
                main: string;
                description: string;

            }
        ]
    }]
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
    const url = `https://openweathermap.org/data/2.5/find?q=${location}&appid=${keys}&units=metric`;
    const url1 = `https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${keys}`;

    const searchLocation = async (event) => {
        event.preventDefault()

        const fetchLoction = await axios.get(url)
        if (fetchLoction.data.count === 1) {
            setLocationData(fetchLoction.data.list[0])
            setLat(fetchLoction.data.list[0].coord.lat);
            setLon(fetchLoction.data.list[0].coord.lon);
            setStatus(true)
            setError(false)
        } else {
            setError(true)
        }


    };
    useEffect(() => {

        if (status === true) {
            const loctionData = async () => {
                setLocation("");
                await axios.get(url1).then((response) => {
                    setData(response.data);
                });
            }
            loctionData()
            setStatus(false)
        }

    }, [status]);


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

                        <div className="md:columns-2 sm:columns-1">
                            {data.daily.map((data, index) => <Daily key={index} data={data}/>)}

                        </div>

                    </>
                }



            </div>
        </div>
    );
};

export default Weather;
