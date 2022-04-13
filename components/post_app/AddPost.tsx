import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, TextField, Box, MenuItem} from "@mui/material";

import {selectUserAll} from "./users.Slice";
import {addNewPost, addReactions} from "./postsSlice";

let id = 100;

const AddPost = () => {
    const dispatch = useDispatch();

    const users = useSelector(selectUserAll);

    const [title, setTitle] = useState("");
    const [userId, setUserId] = useState("");
    const [body, setBody] = useState("");

    const onChangeTitle = (e) => setTitle(e.target.value);
    const onChangeAuthor = (e) => setUserId(e.target.value);
    const onChangeBody = (e) => setBody(e.target.value);

    const usersOption = users.map((user) => (
        <MenuItem key={user.id} value={user.id} onChange={() => setUserId("")}>
            {user.name}
        </MenuItem>
    ));

    const canSave = () => {
        return [title, userId, body].every(Boolean);
    };
    let reaction: {
        thumbsUp: number;
        heart: number;
        hooray: number;
        rocket: number;
        eyes: number;
    } = {
        thumbsUp: 0,
        heart: 0,
        hooray: 0,
        rocket: 0,
        eyes: 0,
    };
    const onSave = () => {
        const data: string = JSON.stringify(new Date());

        id++;
        dispatch(addNewPost({id, userId, title, body}));
        dispatch(addReactions({id, reaction, data}));
        setTitle("");
        setUserId("");
        setBody("");
    };

    return (
        <section className="md:mr-52 ml-4 sm:mr-4 my-10 px-10 text-gray-600">
            <h2 className="text-4xl font-bold mx-auto ">Add a New Post</h2>
            <Box>
                <TextField
                    fullWidth
                    id="postTitle" label="Post Title"
                    variant="standard"
                    onChange={onChangeTitle}
                    value={title} name="postTitle"
                />
                <TextField
                    className="my-10"
                    fullWidth
                    id="postAuthor"
                    select
                    focused
                    label="select author"
                    helperText="Please select an author"
                    variant="standard"
                    value={userId}
                    onChange={onChangeAuthor}

                >
                    <MenuItem disabled>Please select an author</MenuItem>
                    {usersOption}
                </TextField>
                <TextField
                    fullWidth
                    id="postContent"
                    label="What's on your Content?"
                    multiline
                    rows={4}
                    name="postContent"
                    value={body}
                    onChange={onChangeBody}
                />
                <Button
                    variant="contained"
                    className="bg-sky-900 font-bold ml-2 my-10"
                    disabled={!canSave()}
                    onClick={onSave}
                >
                    Save post
                </Button>
            </Box>
        </section>
    );
};

export default AddPost;
