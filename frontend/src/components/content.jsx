import { useState, useEffect } from "react";

export default function Content() {
  return (
    <div className="p-5 flex gap-10">
      <div className="w-1/2">
        <InputContainer />
      </div>
      <div className="w-1/2">
        <OutputContainer />
      </div>
    </div>
  );
}

const InputContainer = () => {
  return (
    <div className="shadow p-4 rounded-md w-full">
      <textarea
        name="input"
        id="input"
        className="w-full border border-gray-400 rounded-md h-50"
      ></textarea>
      <Button name="Generate QR Code" onClick={() => {}} />
      <AdvanvedOptions />
    </div>
  );
};

const OutputContainer = ({ src }) => {
  return (
    <div className="shadow p-4 rounded-md w-full">
      <img src={src} alt="" className="justify-self-center mb-2" />
      <Button name="Download" />
    </div>
  );
};

const AdvanvedOptions = () => {
  const options = (
    <div className="flex flex-col gap-5 mt-5">
      <div className="flex gap-4 items-center">
        <label htmlFor="size">Size : </label>
        <select name="size" id="size" className="border p-1">
          <option value="200">200x200</option>
          <option value="400">400x400</option>
          <option value="600">600x600</option>
        </select>
      </div>
      <div className="flex gap-4">
        <label htmlFor="erlevl">Error Correcption Level : </label>
        <select name="erlevl" id="erlevl" className="border">
          <option value="L">Low</option>
          <option value="M">Medium</option>
          <option value="Q">Quartile</option>
          <option value="H">High</option>
        </select>
      </div>
      <div className="flex gap-4">
        <label htmlFor="margin">Margin : </label>
        <select name="margin" id="margin" className="border">
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div className="flex gap-4">
        <label htmlFor="type">Type : </label>
        <select name="type" id="type" className="border">
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
      </div>
    </div>
  );
  return <Collapsible title="Advanced Options" child={options} />;
};

const Button = ({ name, onClick }) => {
  return (
    <button
      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

const Collapsible = ({ title, child }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-5">
      <div
        className="text-lg w-fit cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title} {isOpen ? " ▲" : " ▼"}
      </div>
      {isOpen && <div className="m-2 px-4">{child}</div>}
    </div>
  );
};
