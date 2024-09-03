import { useState } from "react";
import image from "../assets/shoes.jpg";

export default function ColorSelector({ colors, imageLink }) {
  const [choose, setChoose] = useState(0);

  return (
    <>
      <div className="flex w-40 [&>*]:pr-2  mb-6">
        {colors.map((color, index) => {
          let border = "border-2   ";
          let textBold = "font-normal";
          {
            if (choose == index) {
              border = " border-2 border-blue-500";
              textBold = "font-bold";
            }
          }
          return (
            <label htmlFor="color" key={index}>
              <p className={`${textBold} capitalize`}>{color}</p>
              <input type="radio" name="color" id={index} hidden />
              <img
                src={imageLink}
                alt=""
                onClick={() => {
                  document.getElementById(index).checked = "true";
                  setChoose(index);
                }}
                className={`${border} rounded-md h-[60%] cursor-pointer   `}
              />
            </label>
          );
        })}
      </div>
    </>
  );
}
