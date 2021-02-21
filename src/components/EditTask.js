import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { editTask } from "../Js/action";

const EditTask = ({ handleClose, show, item, id }) => {
  const dispatch = useDispatch();
  const [taskModified, setTaskModified] = useState("");

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Control
            type="text"
            placeholder="Edit Your Task"
            //defaultValue={item.task}
            onChange={(e) => setTaskModified(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleClose();
              dispatch(editTask({ taskModified, id }));
            }}
          >
            {" "}
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditTask;
