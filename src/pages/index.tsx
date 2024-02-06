import { Container } from "@/components/container";

export default function Home() {
  const possibleDivides = (n: number): number => {
    let possibilities = 0;

    for (let i = 1; i < n / 4; i++) {
      if ((n % 2) * i === 0) {
        if ((n - 2 * i) % 2 === 0) {
          const y = (n - 2 * i) / 2;
          console.log(`{ ${i}, ${i}, ${y}, ${y}}`);
          possibilities++;
        }
      }
    }
    return possibilities;
  };

  const MaxPaintedSquares = (n: number, colors: number[]) => {
    let maxSquares = 0;
    for (let startIndex = 0; startIndex < n; startIndex++) {
      const outcome = loopArrayFromIndex(colors, startIndex);
      console.log(`start index ${startIndex} uyd `, outcome);
      const totalMinimizations = minimizeAndCountTotal([...outcome]);
      console.log("totalMinimizations", totalMinimizations);
      if (totalMinimizations > maxSquares) {
        maxSquares = totalMinimizations;
      }
    }

    return maxSquares;
  };

  const loopArrayFromIndex = (
    colors: number[],
    startIndex: number
  ): number[] => {
    const result: number[] = [];
    const length = colors.length;

    for (let i = 0; i < length; i++) {
      const index = (startIndex + i) % length;
      result.push(colors[index]);
    }
    return result;
  };

  const minimizeAndCountTotal = (numbers: number[]): number => {
    let total = 0;

    while (numbers.some((num) => num > 0)) {
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
          console.log(numbers[i]);
          numbers[i]--;
          total++;
        } else {
          return total;
        }
      }
    }

    return total;
  };

  return (
    <>
      <div className="h-screen w-screen bg-gray-100">
        <div className="w-full h-full p-10">
          <div className="h-full w-full grid grid-rows-3 gap-4">
            <Container
              number={1}
              maxPaintedSquares={MaxPaintedSquares}
              possibleDivides={possibleDivides}
              inputText="Чулуунаагийн савхны уртыг оруулна уу"
              example1="20"
              outputText="Боломжит үүсэж болох квадрат биш тэгш өнцөгтүүдийн тоо"
            />
            <Container
              number={2}
              possibleDivides={possibleDivides}
              maxPaintedSquares={MaxPaintedSquares}
              inputText="Хоёр утга авах ба эхнийх нь Чулуунаад байгаа бүх өнгөтэй савнуудын тоо. Хоёр дахь нь сав тус бүрт байгаа будгийн хэмжээ (литр)"
              example1="5"
              example2="2 4 2 3 3"
              outputText="Хамгийн их будаж чадах квадратын тоо"
            />
          </div>
        </div>
      </div>
    </>
  );
}
