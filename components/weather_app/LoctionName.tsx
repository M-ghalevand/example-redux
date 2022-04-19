import moment from "moment";

const LoctionName = ({city}) => {
    return (
        <div className="ml-4 mt-5">
            <div className="text-sky-700">{moment(new Date()).format('MMMM Do YYYY, h:mm a')}</div>
            <h1 className="text-3xl font-bold mt-1">{city.name} , {city.sys.country}</h1>
        </div>
    )
}

export default LoctionName;