import mainImage from "../assets/shoes.jpg";

export default function ImageContainer() {
  return (
    <div className="pr-10">
      <img
        src={mainImage}
        className="rounded-xl w-full  h-[20rem] lg:h-[25rem] bg-slate-200  object-cover mb-1 "
      />
      <div className="grid grid-cols-4 gap-2 [&>*]:bg-slate-200">
        <img
          src={mainImage}
          className="w-full rounded-md h-[100px]  object-cover "
        />
        <img
          src={mainImage}
          className="w-full rounded-md h-[100px] object-cover "
        />
        <img
          src={mainImage}
          className="w-full rounded-md h-[100px]  object-cover "
        />
        <img
          src={mainImage}
          className="w-full rounded-md h-[100px]  object-cover "
        />
      </div>
    </div>
  );
}
