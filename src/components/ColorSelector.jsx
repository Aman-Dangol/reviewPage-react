import { useState } from "react";
import image from "../assets/shoes.jpg";
const colors = ["red", "white", "black"];

export default function ColorSelector() {
  const [choose, setChoose] = useState(0);

  return (
    <>
      <span>currenr color = {colors[choose]}</span>
      <div className="flex w-40 [&>*]:pr-2 mb-12">
        {colors.map((color, index) => {
          let border = "border-2   ";

          {
            if (choose == index) {
              border = " border-2 border-blue-500";
            }
          }
          return (
            <label htmlFor="color" key={index}>
              <p>{color}</p>
              <input type="radio" name="color" id={index} hidden />
              <img
                src={image}
                alt=""
                onClick={() => {
                  document.getElementById(index).checked = "true";
                  setChoose(index);
                }}
                className={`${border} rounded-md  `}
              />
              {console.log(colors[choose])}
            </label>
          );
        })}
      </div>
    </>
  );
}
