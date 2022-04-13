import Head from "next/head";
import { Nav, Navbar_weatherApp } from "../../components/siteMe";
import { WeatherList } from "../../components/weather_app";

const WeatherApp = () => {
  return (
    <>
      <Head>
        <title>Todo App</title>
      </Head>
      <Nav
        app="active"
        nav={undefined}
        about={undefined}
        resume={undefined}
        blog={undefined}
        conteact={undefined}
      />
      <div className="mr-200 full-height">
        <Navbar_weatherApp />
        <div className="full-image img">
          <WeatherList />
        </div>
      </div>
    </>
  );
};

export default WeatherApp;
