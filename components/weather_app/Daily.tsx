import moment from "moment";
import Icon from "./Icon";

const Daily = ({data}) => {
    return (
        <div className='hover:border-4 px-5 pt-5 pb-10 rounded-3xl min-w-min max-w-max'>
            <span className="text-sky-700 ml-20"
                  title={moment(parseInt(data.dt + "000")).format('dddd')}>
                {moment(parseInt(data.dt + "000")).format('dddd MMM Do')}
            </span>
            <div className="flex flex-row mt-4">
                <Icon air={data.weather[0].icon}/>
                <div className=" flex flex-row">
                    <div className="ml-16 flex flex-col">
                       <span className="flex flex-row">
                         <span className="text-sky-700 font-bold" title="Day">{Math.round(data.temp.day)}°C</span>
                         <span className="text-xl pb-1 font-bold text-black">&nbsp;/&nbsp;</span>
                         <span className="text-sky-700 font-bold" title="Night"> {Math.round(data.temp.night)}°C</span>
                           <span className="text-base ml-5 font-bold">{data.weather[0].main}</span>
                        <span className="text-sm  ml-5 ">{data.weather[0].description}</span>
                       </span>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daily;