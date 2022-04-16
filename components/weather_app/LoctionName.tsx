import moment from "moment";

const LoctionName = ({city}) => {
    return (
        <div className="ml-4 mt-5">
            <div className="text-sky-700">{moment(parseInt(city.dt + "000")).format('MMMM Do YYYY, h:mm:ss a')}</div>
            <h2 className="text-2xl font-bold mt-1">{city.name} , {city.sys.country}</h2>
        </div>
    )
}

export default LoctionName;