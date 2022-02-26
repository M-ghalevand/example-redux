import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import moment from "moment";

import { addTime } from "./postsSlice";

const TimeAge = ({ postId }) => {
  const dispatch = useDispatch();

  const data = JSON.stringify(new Date());

  const newData = JSON.parse(data);

  const momentData = moment(newData);

  useEffect(() => {
    dispatch(addTime(postId, data));
  }, [postId]);

  return (
    <span title={momentData.toString()}>
      &nbsp; &nbsp;
      <FontAwesomeIcon icon={faClock} />
      &nbsp; <i>{momentData.fromNow()}</i>
    </span>
  );
};

export default TimeAge;
