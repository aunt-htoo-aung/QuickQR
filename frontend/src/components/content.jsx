import { useState, useEffect } from "react";

export default function Content() {
  const [src, setSrc] = useState(
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAYAAAB1PADUAAAAAklEQVR4AewaftIAAATNSURBVO3BQY4bSRAEwfAC//9l3znmqYBGJ0crIczwR6qWnFQtOqladFK16KRq0UnVopOqRSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYs+eQnIb1IzAblRMwF5Q80NkEnNG0B+k5o3TqoWnVQtOqla9MkyNZuA/ElqnlBzA2RS84SaTUA2nVQtOqladFK16JMvA/KEmjfU3Ki5ATIBuVFzA+SbgDyh5ptOqhadVC06qVr0yV9OzQRkUnMD5A0gN2pugExq/mYnVYtOqhadVC365C8HZFIzAblRMwG5UTMBuQFyo+ZfclK16KRq0UnVok++TM03qZmATGomIH+Smk1q/k9OqhadVC06qVr0yTIgvwnIpGYCMqmZgExqJiBPqJmA3ACZ1NwA+T87qVp0UrXopGoR/sg/BMikZgIyqZmAPKHmCSCTmn/JSdWik6pFJ1WLPnkJyKTmBsg3qZmATGqeUDMBmYBsAjKpuQEyqZmAPKHmjZOqRSdVi06qFuGPLAIyqfkmIH+SmhsgN2qeAHKjZgIyqfmmk6pFJ1WLTqoW4Y/8QUAmNROQGzUTkEnNBOQJNROQN9RMQCY1E5BJzQTkRs1vOqladFK16KRq0ScvAZnUbFIzAblRc6PmBsiNmgnIG2pu1ExAJjUTkBsgN2reOKladFK16KRq0ScvqZmA3Kh5Asik5gbINwG5UXMD5EbNBOSb1Gw6qVp0UrXopGoR/sgLQCY13wTkRs0TQDapeQLIpGYC8oaaGyCTmjdOqhadVC06qVr0yTIgk5obIE+omYBMQCY1N2omIJOaCcgbQCY1T6h5Asik5ptOqhadVC06qVr0yZcBmdQ8oWYC8gSQSc2NmifU3AC5AXKj5gbIpOYGyDedVC06qVp0UrUIf+QFIG+ouQEyqZmA3KiZgExqboBMar4JyKTmb3JSteikatFJ1aJPfpmaCciNmgnIE0AmNROQJ4BMam6APKHmCSCTmhsgk5pNJ1WLTqoWnVQt+uSXAblRMwH5TWpugExAJjWTmgnIpGYC8oSaCciNmgnIpOaNk6pFJ1WLTqoWffJlam6A3KiZgExqJiCTmgnIpOYGyG9S8wSQSc0EZAIyqdl0UrXopGrRSdUi/JEXgPxJaiYgN2pugNyomYD8n6i5AXKj5o2TqkUnVYtOqhbhj/zFgExqJiA3am6A3Ki5AfKEmieATGomIE+oeeOkatFJ1aKTqkWfvATkN6l5Qs0EZAIyqXkCyDcBmdTcALlR800nVYtOqhadVC36ZJmaTUCeADKpmdRMQJ5QMwH5JjVvqPlNJ1WLTqoWnVQt+uTLgDyhZhOQGzUTkBsgN2pugNwAeUPNBGRSMwGZ1LxxUrXopGrRSdWiT/4xaiYgk5oJyI2aCcgbam6ATGqeAPInnVQtOqladFK16JO/nJongExqJiATkBs1E5AbNROQSc0NkDeAfNNJ1aKTqkUnVYs++TI1f5KaGyCTmhsgE5BJzRNqnlAzAZnUTEAmNROQTSdVi06qFp1ULfpkGZDfBOQNNTdAbtQ8AeRGzQ2QJ9TcqNl0UrXopGrRSdUi/JGqJSdVi06qFp1ULTqpWnRSteikatFJ1aKTqkUnVYtOqhadVC06qVp0UrXopGrRSdWi/wC3PyxGAEkl/AAAAABJRU5ErkJggg=="
  );
  console.log(src);
  return (
    <div className="p-5 flex gap-10 flex-wrap">
      <div className="w-full sm:flex-1">
        <InputContainer setSrc={setSrc} />
      </div>
      <div className="w-full sm:flex-1">
        <OutputContainer src={src} />
      </div>
    </div>
  );
}

const InputContainer = ({ setSrc }) => {
  const generateQRCode = async () => {
    const textarea = document.getElementById("input");
    setSrc(await dataFetcher(textarea.value));
  };
  return (
    <div className="shadow p-4 rounded-md w-full">
      <textarea
        name="input"
        id="input"
        className="w-full border p-2 border-gray-400 rounded-md h-50"
      ></textarea>
      <Button name="Generate QR Code" onClick={generateQRCode} />
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
const url = "http://localhost:3000/api/v1/generate";
const dataFetcher = async (data) => {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data }),
  });
  const resData = await res.json();
  return resData.qr;
};
