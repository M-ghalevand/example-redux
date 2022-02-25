import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import moment from "moment";

const TimeAge = ({ data }) => {
  const momentData = moment(data);

  return (
    <span title={momentData.toString()}>
      &nbsp; &nbsp;
      <FontAwesomeIcon icon={faClock} />
      &nbsp; <i>{momentData.fromNow()}</i>
    </span>
  );
};

export default TimeAge;
