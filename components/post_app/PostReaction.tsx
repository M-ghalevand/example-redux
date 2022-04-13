import moment from "moment";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";

import {addReactions} from "./postsSlice";


const reactionIcons = {
    thumbsUp: "👍",
    heart: "❤️",
    hooray: "🎉",
    rocket: "🚀",
    eyes: "👀",
};
const PostReaction = ({postId, reaction}) => {
    const dispatch = useDispatch();

    const data = JSON.stringify(new Date());
    const newData = JSON.parse(data);
    const momentData = moment(newData);

    const [reactionNumber, setReactionNumber] = useState(reaction);

    const handlClick = async (target, numberTarget) => {
        setReactionNumber({...reactionNumber, [target]: (numberTarget += 1)});
        dispatch(
            addReactions({
                id: postId,
                reaction: {
                    ...reactionNumber,
                    [target]: numberTarget,
                },
                data,
            })
        );
    };

    const reactionBtn = Object.keys(reactionIcons).map((reaction) => (
        <Button
            key={reaction}
            variant="outlined"
            className="font-bold mr-2 mt-4 text-gray-600"
            onClick={() => handlClick(reaction, reactionNumber[reaction])}
        >
            {reactionIcons[reaction]} {reactionNumber[reaction]}
        </Button>
    ));

    return <div>{reactionBtn}</div>;
};
export default PostReaction;
