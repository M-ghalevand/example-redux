import moment from "moment";
import { useSelector } from "react-redux";
import {AccessTime} from '@mui/icons-material';

import { selectPostById } from "./postsSlice";


const TimeAge = ({ postId }) => {
  const post1: { data: string } = useSelector((state) =>
    selectPostById(state, postId)
  );

  let data: string = JSON.stringify(new Date());
  if (post1) {
    if (typeof post1.data === "string") {
      data = post1.data;
    }
  }
  const newData = JSON.parse(data);
  const momentData = moment(newData);

  return (
    <span title={"Time Post"} className="text-lg">
      &nbsp; &nbsp;

      <AccessTime className="text-1xl"/>
      &nbsp; <i>{momentData.fromNow()}</i>
    </span>
  );
};

export default TimeAge;
