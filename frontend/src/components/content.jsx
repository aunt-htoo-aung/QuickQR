import { useState, useEffect } from "react";

export default function Content() {
  const [src, setSrc] = useState(
    "data:image/webp;base64,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"
  );
  return (
    <div className="p-5 flex gap-10 flex-wrap">
      <div className="w-full sm:flex-1">
        <InputContainer />
      </div>
      <div className="w-full sm:flex-1">
        <OutputContainer src={src} />
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
      <AdvancedOptions />
    </div>
  );
};

const OutputContainer = ({ src }) => {
  return (
    <div className="shadow p-4 rounded-md w-full">
      <img src={src} alt="" className="justify-self-center mb-2" />
      <Button name="Download" onClick={() => downloadHandler(src)} />
    </div>
  );
};

const AdvancedOptions = () => {
  const options = (
    <div className="flex flex-col gap-5 mt-4">
      <div className="flex items-center justify-between">
        <label htmlFor="size">Size : </label>
        <select
          name="size"
          id="size"
          className="border rounded-md px-3 py-1.5 min-w-[120px] cursor-pointer"
        >
          <option value="200">200x200</option>
          <option value="400">400x400</option>
          <option value="600">600x600</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="erlevl">Error Correcption Level : </label>
        <select
          name="erlevl"
          id="erlevl"
          className="border rounded-md px-3 py-1.5 min-w-[120px] cursor-pointer"
        >
          <option value="L">Low</option>
          <option value="M">Medium</option>
          <option value="Q">Quartile</option>
          <option value="H">High</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="margin">Margin : </label>
        <select
          name="margin"
          id="margin"
          className="border rounded-md px-3 py-1.5 min-w-[120px] cursor-pointer"
        >
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
      </div>
      <div className="flex items-center justify-between">
        <label htmlFor="type">Type : </label>
        <select
          name="type"
          id="type"
          className="border rounded-md px-3 py-1.5 min-w-[120px] cursor-pointer"
        >
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
      </div>
    </div>
  );
  return (
    <Collapsible
      title="Advanced Options"
      className="w-2/3  mt-4"
      child={options}
    />
  );
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

const Collapsible = ({ title, child, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className}>
      <div
        className="text-lg flex justify-between border-b pb-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span> {isOpen ? " ▲" : " ▼"}</span>
      </div>
      {isOpen && <div className="m-2">{child}</div>}
    </div>
  );
};

const downloadHandler = (src) => {
  const link = document.createElement("a");
  link.href = src;
  link.download = "qr.jpg"; // file name
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
