import { useState } from "react";
import { Input } from "./input";

type ContainerProps = {
  inputText: string;
  outputText: string;
  example1: string;
  example2?: string;
  possibleDivides: (n: number) => number;
  maxPaintedSquares: (n: number, colors: number[]) => number;
  number: number;
};

export const Container = ({
  inputText,
  outputText,
  example1,
  example2,
  number,
  possibleDivides,
  maxPaintedSquares,
}: ContainerProps) => {
  const [length, setLength] = useState(0);
  const [total, setTotal] = useState(0);
  const [input2Value, setInput2Value] = useState("");

  const handleProcess = () => {
    if (number === 1) {
      const result = possibleDivides(length);
      setTotal(result);
    } else {
      const parsedColors = (input2Value || "")
        .split(" ")
        .map((part) => parseFloat(part))
        .filter((num) => !isNaN(num));

      const result = maxPaintedSquares(length, parsedColors);
      setTotal(result);
    }
  };

  const handleInputChange = (value: number) => {
    setLength(value);
  };


  const handleInput2Change = (value: string) => {
    console.log("Here", typeof value);
    setInput2Value(value);
  };

  return (
    <>
      <div className="flex items-center justify-between px-8 py-4 bg-white shadow-lg rounded-lg  gap-6">
        <div className="w-1/2 gap-6 flex items-center justify-between">
          <div className="">
            <h2 className="font-bold text-blue-400 text-2xl pb-2">Input</h2>
            <div className="text-sm">{inputText}</div>
            <h3 className="text-sm italic text-blue-">Жишээ нь: {example1}</h3>
            {example2}
          </div>
          <div>
            {number === 1 ? (
              <Input
                placeholder="Савааны урт"
                onChange={(value) => handleInputChange(value)}
              />
            ) : (
              <div className="flex flex-col gap-2">
                <Input
                  placeholder="Нийт савнуудын тоо"
                  onChange={(value) => handleInputChange(value)}
                />
                <input
                  className="p-2 outline-none border border-blue-400 rounded-lg"
                  placeholder='Тус бүрийн литр'
                  onChange= {(e)=> handleInput2Change(e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
        <div className="w-1/2 gap-6 flex items-center justify-between">
          <div>
            <button
              className="bg-blue-400 text-white font-semibold rounded-lg py-2 px-4 hover:bg-blue-500"
              onClick={handleProcess}
            >
              Process
            </button>
          </div>
          <div className="pr-8 w-2/3">
            <h2 className="font-bold text-blue-400 text-2xl pb-2">Output</h2>
            <div className="text-sm">{outputText}</div>
          </div>
          <div className="h-16 w-16 rounded-full border border-blue-400 flex items-center justify-center">
            {total}
          </div>
        </div>
      </div>
    </>
  );
};
