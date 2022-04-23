import Head from "next/head";
import {Nav, Navbar_weatherApp} from "../../components/siteMe";
import {WeatherList} from "../../components/weather_app";

const myFunc1 = () => {
    const x = document.getElementById("mynav");
    if (x.classList.item(2) === "XsBlock") {
        x.classList.remove("XsBlock");
        x.classList.add("XsHidden");
    }
};

const WeatherApp = () => {
    return (
        <>
            <Head>
                <title>Weather App</title>
            </Head>
            <Nav
                app="active"
                nav={undefined}
                about={undefined}
                resume={undefined}
                blog={undefined}
                conteact={undefined}
            />
            <div className="mr-200 min-h-screen"  onClick={myFunc1}>
                <Navbar_weatherApp/>
                <section className="bg-white min-w-min min-h-screen text-gray-600 ltr">
                    <WeatherList/>
                </section>
            </div>
        </>
    );
};

export default WeatherApp;
