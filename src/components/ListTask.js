import { useState } from "react";
import { useDispatch } from "react-redux";
import { completeTask, deleteTask } from "../Js/action";
import EditTask from "./EditTask";

const ListTask = ({ listItem }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [id, setId] = useState("");
  return (
    <div>
      {listItem.map((item) => (
        <div className="main">
          <span className={item.isDone ? "lineTh" : "text"}>{item.task}</span>
          <button onClick={() => dispatch(deleteTask(item.id))}>Delete</button>
          <button onClick={() => dispatch(completeTask(item.id))}>
            {item.isDone ? "undo" : "Complete"}
          </button>
          <button
            onClick={() => {
              handleShow();
              setId(item.id);
            }}
          >
            Edit
          </button>
          <EditTask handleClose={handleClose} show={show} item={item} id={id} />
        </div>
      ))}
    </div>
  );
};

export default ListTask;
