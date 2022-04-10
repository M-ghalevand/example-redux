import { useEffect, useState } from "react";
import { Box, Button, Modal, Stack, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { editPost } from "./postsSlice";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const EditPost = ({ title, body, id }) => {
  const dispatch = useDispatch();
  const data = JSON.stringify(new Date());
  const [open, setOpen] = useState(false);
  const [editBody, setEditBody] = useState(body);
  const [editTitle, setEditTitle] = useState(title);
  const [status, setStatus] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handelSave = () => {
    dispatch(editPost({ id, editTitle, editBody, data }));
  };
  useEffect(() => {
    if (editTitle !== title || editBody !== body) {
      setStatus(true);
      return;
    }
    setStatus(false);
  }, [editTitle, editBody, title, body]);

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} className="my-2">
        Edit Post
      </Button>

      <Modal
        component="form"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            fullWidth
            id="outlined-multiline-static"
            label="Title"
            multiline
            rows={2}
            defaultValue={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
          />
          <TextField
            fullWidth
            id="outlined-multiline-static1"
            label="Body"
            className="my-3"
            multiline
            rows={4}
            defaultValue={editBody}
            onChange={(e) => setEditBody(e.target.value)}
          />
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              color="success"
              disabled={!status}
              onClick={handelSave}
              className="mx-2"
            >
              Save Post
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};
export default EditPost;
