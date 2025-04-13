import { Calendar } from "lucide-react";

function MobileDateInputUI({ dateState, setDateState }) {
  const handleChange = (e) => {
    setDateState(e.target.value);
  };

  return (
    <div className="relative">
      <label htmlFor="date" className="block mb-2 text-white font-medium">
        Select a date:
      </label>

      <div className="relative">
        {/* Input with custom styling */}
        <input
          type="date"
          id="date"
          value={dateState}
          onChange={handleChange}
          className="bg-black h-[50px] w-full border border-[rgb(51,54,57)] text-white px-2 py-2 outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
        />

        {/* Custom Lucide Calendar Icon, positioned over the default calendar icon */}
        {/* <Calendar
          size={20}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white pointer-events-auto"
        /> */}
      </div>

      {dateState && <p className="mt-4 text-white">You picked: {dateState}</p>}
    </div>
  );
}

export default MobileDateInputUI;
