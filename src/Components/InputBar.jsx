import React, { useState } from "react";

const InputBar = () => {
  const [showAddNotes, setShowAddNotes] = useState(false);
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [data, setData] = useState([]);
  const showNotes = () => {
    setShowAddNotes(true);
  };
  const Close = () => {
    setShowAddNotes(false);
    setData([...data, { title, note }]);
    setTitle("");
    setNote("");
  };
  console.log(data);
  console.log(showAddNotes);
  return (
    <div className=" ">
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
        <div className="max-w-screen-md mx-auto shadow-lg mt-2 rounded-lg  p-2">
          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              placeholder="Title"
              className="w-full p-2 outline-none"
            />
            <input
              type="text"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
              placeholder="Take a Note..."
              className="w-full p-2 outline-none"
            />
          </div>
          <div>
            <button
              className="hover:bg-zinc-100 p-2 px-8 rounded-lg ml-[86%] "
              onClick={Close}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div className="Card max-w-screen-lg  mx-auto mt-10 flex gap-4 flex-wrap    ">
        <div className="w-[23%] p-2 mx-[4.17px] flex  flex-col gap-5 hover:shadow-xl border-2 border-zinc-300 rounded-lg ">
          <p className="text-lg">Heading</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum
            tempore velit sapiente minima voluptatem itaque qui, modi repellat
            dignissimos fugiat beatae omnis consequatur assumenda!
          </p>
        </div>
        <div className="w-[23%] p-2 mx-[4.17px] flex flex-col gap-5  hover:shadow-xl rounded-lg border-2 border-zinc-300">
          <p className="text-lg">Heading</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum
            tempore velit sapiente minima voluptatem itaque qui, modi repellat
            dignissimos fugiat beatae omnis consequatur assumenda!
          </p>
        </div>
        <div className="w-[23%] p-2 mx-[4.17px] flex flex-col gap-5 border-2 border-zinc-300 hover:shadow-xl rounded-lg ">
          <p className="text-lg">Heading</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum
            tempore velit sapiente minima voluptatem itaque qui, modi repellat
            dignissimos fugiat beatae omnis consequatur assumenda!
          </p>
        </div>
        <div className="w-[23%] p-2 mx-[4.17px] flex flex-col gap-5 border-2 border-zinc-300 hover:shadow-xl rounded-lg ">
          <p className="text-lg">Heading</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum
            tempore velit sapiente minima voluptatem itaque qui, modi repellat
            dignissimos fugiat beatae omnis consequatur assumenda!
          </p>
        </div>
        <div className="w-[23%] p-2 mx-[4.17px] flex flex-col gap-5 border-2 border-zinc-300 hover:shadow-xl rounded-lg ">
          <p className="text-lg">Heading</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum
            tempore velit sapiente minima voluptatem itaque qui, modi repellat
            dignissimos fugiat beatae omnis consequatur assumenda!
          </p>
        </div>
        <div className="w-[23%] p-2 mx-[4.17px] flex flex-col gap-5 border-2 border-zinc-300 hover:shadow-xl rounded-lg ">
          <p className="text-lg">Heading</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad earum
            tempore velit sapiente minima voluptatem itaque qui, modi repellat
            dignissimos fugiat beatae omnis consequatur assumenda!
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBar;
