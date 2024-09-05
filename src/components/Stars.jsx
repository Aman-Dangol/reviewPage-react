import { StarFilledIcon } from "@radix-ui/react-icons";

export default function Stars({ number, width, height }) {
  return (
    <div className={`flex  py-3 `}>
      {Array.from({ length: 5 }).map((a, index) => {
        let color = "gray";
        if (index <= number - 1) {
          color = "yellow";
        }
        return (
          <StarFilledIcon
            width={"24px"}
            height={"24px"}
            key={index}
            color={color}
          />
        );
      })}
    </div>
  );
}
