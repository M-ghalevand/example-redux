import Icon from "./Icon";
import Head from "next/head";

const Current = ({data}) => {

    return (
        <div className="ml-5 my-5 ">
            <Head>
                <title>{`Weather App ${data.weather[0].main}`}</title>
            </Head>
                <Icon air={data.weather[0].icon}/>
                <p className="ml-16">
                    <span className="text-4xl ">{Math.round(data.temp)}°C</span>
                    <span className="text-2xl ml-5 font-bold">{data.weather[0].main}</span>
                    <span className="text-l  ml-5 ">{data.weather[0].description}</span>
                </p>
        </div>
    )
}

export default Current;