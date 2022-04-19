const Icon = ({air}) => {
    const icon = `https://openweathermap.org/img/wn/${air}@2x.png`
    return (
        <div className="relative overflow-hidde">
            <img src={icon} className="text-gray-400 iconWeather absolute  min-w-min bottom-16 text-3xl" />
        </div>
    )
}

export default Icon;