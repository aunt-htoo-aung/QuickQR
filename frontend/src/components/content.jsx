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
      <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer">
        Generate QR Code
      </button>
      <AdvancedOptions />
    </div>
  );
};

const OutputContainer = () => {
  return (
    <div className="shadow p-4 rounded-md w-full">
      <p>Output</p>
    </div>
  );
};

const AdvancedOptions = () => {
  return (
    <div className="mt-4">
      <h2 className="text-lg font-semibold mb-2">Advanced Options</h2>
      <div className="flex flex-col gap-2">
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox" />
          Include Logo
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" className="form-checkbox" />
          Customize Colors
        </label>
      </div>
    </div>
  );
};
