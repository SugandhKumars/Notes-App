import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import { nanoid } from "nanoid";

const InputBar = () => {
  const [showAddNotes, setShowAddNotes] = useState(false);

  const [data, setData] = useState([]);
  const showNotes = () => {
    setShowAddNotes(true);
  };
  const close = (title, note) => {
    setShowAddNotes(false);
    setData([...data, { id: nanoid(), title, note }]);
  };
  console.log(data);

  console.log("1");
  return (
    <div className="relative ">
      {!showAddNotes ? (
        <div
          className="max-w-screen-md mx-auto shadow-lg mt-2 rounded-lg  p-2 flex justify-between "
          onClick={showNotes}
        >
          <p>Take a Note...</p>
          <div className="flex w-[30%] justify-evenly">
            <input type="checkbox" name="" id="" />
            <p>Edit</p>
            <p>Image</p>
          </div>
        </div>
      ) : (
        <Form close={close} />
      )}
      <div className="Card max-w-screen-lg  mx-auto mt-10 flex gap-4 flex-wrap  ">
        {data.map((n, id) => (
          <Card key={id} title={n.title} details={n.note} id={n.id} />
        ))}
      </div>
      {/* <Card /> */}
    </div>
  );
};

export default InputBar;
