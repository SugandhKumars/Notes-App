import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "./Form";

const Card = ({ title, details, id }) => {
  const [edit, setEdit] = useState(false);

  console.log(id);
  const handleClick = () => {
    setEdit(true);
  };
  return (
    <>
      {edit ? (
        <div className="  p-2 mx-[4.17px]  w-[23%]  rounded-lg">
          <div
            className="  flex  flex-col gap-5      relative"
            // onClick={handleClick}
          >
            {/* <input type="checkbox" className="absolute -top-2 -left-2"/> */}
            <p className="text-lg"> </p>
            <p> </p>
          </div>
          <div
            className="absolute w-screen h-screen bg-gray-500 bg-opacity-25  top-0 left-0 pt-32 pr-36 z-20 
        "
          >
            <Form
              close={(title, note) => {
                setEdit(false);
                console.log(title);
                console.log(note);
              }}
            />
          </div>
        </div>
      ) : (
        <div
          className=" w-[23%] p-2 mx-[4.17px] flex  flex-col gap-5 hover:shadow-xl border-2 border-zinc-300 rounded-lg relative"
          onClick={handleClick}
        >
          {/* <input type="checkbox" className="absolute -top-2 -left-2"/> */}
          <p className="text-lg">{title}</p>
          <p>{details}</p>
        </div>
      )}
      {/* </Link> */}
    </>
  );
};

export default Card;
