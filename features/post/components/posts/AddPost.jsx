import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectUserAll } from "../users/users.Slice";
import { addNewPost } from "./postsSlice";

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
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const canSave = () => {
    return [title, userId, body].every(Boolean);
  };

  const onSave = () => {
    id++;
    dispatch(addNewPost({ id, userId, title, body }));
    setTitle("");
    setUserId("");
    setBody("");
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onChangeTitle}
          placeholder="What's on your mind?"
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onChangeAuthor}>
          <option value="" onChange={(e) => setUserId("")}></option>
          {usersOption}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          value={body}
          onChange={onChangeBody}
          name="postContent"
          placeholder="What's on your Content?"
        ></textarea>
        <button type="button" disabled={!canSave()} onClick={onSave}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPost;
