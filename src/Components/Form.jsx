import React, { useState } from "react";

const Form = ({ close }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  return (
    <>
      <div className="max-w-screen-md mx-auto shadow-lg mt-2 rounded-lg bg-white  p-2">
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="Title"
            className="w-full p-2 outline-none bg-white"
          />
          <input
            type="text"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
            placeholder="Take a Note..."
            className="w-full p-2 outline-none bg-white"
          />
        </div>
        <div>
          <button
            className="hover:bg-zinc-100 p-2 px-8 rounded-lg ml-[86%] "
            onClick={() => {
              close(title, note);
            }}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
