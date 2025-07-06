import { useEffect, useState } from "react";
import { BsArrowUp } from "react-icons/bs";
import { IoTrashOutline } from "react-icons/io5";

const LinearGradient = () => {
  const [deg, setdeg] = useState(180);
  const [colors, setColors] = useState(["red", "blue"]);
  const [colorPercent, setcolorPercent] = useState([0, 100]);

  const handleAddColor = (color: string) => {
    setColors([...colors, color]);
    setcolorPercent([...colorPercent, 100 / (colors.length + 1)]);
  };

  const removeColor = (i: number) => {
    if (colors.length <= 2) {
      alert("Minimum 2 colors required");
      return;
    }
    const newColors = [...colors];
    const newColorPercent = [...colorPercent];
    newColors.splice(i, 1);
    newColorPercent.splice(i, 1);
    setColors(newColors);
    setcolorPercent(newColorPercent);
  };

  useEffect(() => {
    const handleSetcolorPercent = () => {
      if (colors.length > 2) {
        const newPercentage = 100 / (colors.length - 1);
        setcolorPercent(
          colors.map((_, i) => Number((i * newPercentage).toFixed(0)))
        );
      }
    };
    handleSetcolorPercent();
  }, [colors]);

  return (
    <div className="min-h-screen bg-purple-100 flex gap-20 sm:gap-0 flex-col sm:flex-row font-primary text-neutral-900 px-4 py-16">
      {/* left */}
      <div className="flex-1 flex flex-col gap-8 items-center justify-center">
        <span className="mt-4 text-center bg-white px-4 py-2 rounded border text-sm w-full max-w-lg ">
          background: linear-gradient({deg}deg,{" "}
          {colors.map((color, i) => `${color} ${colorPercent[i]}%`).join(", ")}
          );
        </span>
        <div
          style={{
            background: `linear-gradient(${deg}deg, ${colors
              .map((color, i) => `${color} ${colorPercent[i]}%`)
              .join(", ")})`,
          }}
          className="border border-neutral-400 w-full max-w-80 h-80 mx-5 rounded-lg"
        />

        <label
          className="inline-flex relative items-center gap-2 mt-5"
          htmlFor="deg"
        >
          <input
            type="range"
            name="deg"
            id="deg"
            min="0"
            max="360"
            value={deg}
            onChange={(e) => setdeg(Number(e.target.value))}
            className="min-w-48"
          />
          <span
            style={{ left: `${(deg / 360) * 100 - 10}%` }}
            className="absolute inline-flex items-center text-center top-5"
          >
            <BsArrowUp
              size={14}
              className="text-white bg-black rounded-full mr-1 p-0.5"
              style={{ rotate: `${deg}deg` }}
            />
            <span>{deg}°</span>
          </span>
        </label>
      </div>

      {/* right */}
      <div className="flex-1 border-0 sm:border-l border-neutral-300 flex flex-col gap-3 items-center justify-center">
        <h1 className="text-xl md:text-2xl font-semibold mb-2">Play as you like</h1>
        {colors.map((color, i) => (
          <div key={i} className="flex items-center gap-2">
            <input
              type="text"
              className="border border-neutral-400 rounded px-2 py-1 sm:w-36"
              value={color}
              onChange={(e) => {
                const newColors = [...colors];
                newColors[i] = e.target.value;
                setColors(newColors);
              }}
            />
            <input
              type="number"
              className="border border-neutral-400 rounded px-2 py-1 sm:w-36"
              value={colorPercent[i].toFixed(0)}
              min={0}
              max={100}
              onChange={(e) => {
                const newColorPercent = [...colorPercent];
                newColorPercent[i] = Number(e.target.value);
                setcolorPercent(newColorPercent);
              }}
            />
            <button className="cursor-pointer" onClick={() => removeColor(i)}>
              <IoTrashOutline
                size={32}
                className="bg-red-500/80 p-1 rounded text-white"
              />
            </button>
          </div>
        ))}
        <input
          type="text"
          className="border border-neutral-400 rounded px-2 py-1 w-36"
          placeholder="Add color"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddColor(e.currentTarget.value);
              e.currentTarget.value = "";
            }
          }}
        />
      </div>
    </div>
  );
};

export default LinearGradient;
