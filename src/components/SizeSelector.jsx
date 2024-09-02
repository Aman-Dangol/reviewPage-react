import { useState } from "react";

const sizes = [44, 45, 46, 40, 41, 42, 43].sort((a, b) => a - b);

export default function SizeSelector() {
  const [choose, setChoose] = useState(0);
  return (
    <>
      <div className="flex [&>*]:pr-2 mb-4  gap-2 flex-wrap">
        {sizes.map((size, index) => {
          let border = "border-2   ";

          {
            if (choose == index) {
              border = " border-2 bg-black text-white rounded-md";
            }
          }
          return (
            <label htmlFor="color" key={index}>
              <input type="radio" name="color" id={index} hidden />
              <span
                onClick={() => {
                  document.getElementById(index).checked = "true";
                  setChoose(index);
                }}
                className={`${border}  p-2 px-4 cursor-pointer outline-none`}
              >
                {size}
              </span>
            </label>
          );
        })}
      </div>
    </>
  );
}
