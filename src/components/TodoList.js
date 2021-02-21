import React, { useState } from "react";
import { useSelector } from "react-redux";
import Addtask from "./Addtask";
import ListTask from "./ListTask";

const TodoList = () => {
  const listItem = useSelector((state) => state.listItem);
  const [filter, setFilter] = useState(false);
  const handleFilter = () => {
    setFilter(!filter);
  };
  return (
    <div>
      <Addtask handleFilter={handleFilter} />
      <ListTask
        listItem={filter ? listItem.filter((item) => item.isDone) : listItem}
      />
    </div>
  );
};

export default TodoList;
