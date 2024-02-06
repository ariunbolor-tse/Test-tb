import { Container } from "@/components/container";

export default function Home() {
  const PossibleDivides = (n: number): number => {
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

  const SpiralMatrix = (n: number, x: number, y: number): number => {
    const matrix: number[][] = generateSpiralMatrix(n);
    console.log(matrix);
    const center = Math.ceil(n / 2);
    let temp;
    if (y <= center) {
      temp = n - y + 1;
    } else {
      temp = y - center;
    }
    console.log(temp);
    return matrix[temp - 1][x - 1];
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

  const generateSpiralMatrix = (n: number): number[][] => {
    const matrix: number[][] = Array.from({ length: n }, () =>
      Array(n).fill(0)
    );

    let num = 1;
    let rowStart = 0;
    let rowEnd = n - 1;
    let colStart = 0;
    let colEnd = n - 1;

    while (num <= n * n) {
      for (let i = colStart; i <= colEnd; i++) {
        matrix[rowStart][i] = num++;
      }
      rowStart++;

      for (let i = rowStart; i <= rowEnd; i++) {
        matrix[i][colEnd] = num++;
      }
      colEnd--;

      for (let i = colEnd; i >= colStart; i--) {
        matrix[rowEnd][i] = num++;
      }
      rowEnd--;

      for (let i = rowEnd; i >= rowStart; i--) {
        matrix[i][colStart] = num++;
      }
      colStart++;
    }

    return matrix;
  };

  return (
    <>
      <div className="h-screen w-screen bg-gray-100">
        <div className="w-full h-full p-10">
          <div className="h-full w-full grid grid-rows-3 gap-4">
            <Container
              spiralMatrix={SpiralMatrix}
              number={1}
              maxPaintedSquares={MaxPaintedSquares}
              possibleDivides={PossibleDivides}
              inputText="Чулуунаагийн савхны уртыг оруулна уу"
              example1="20"
              outputText="Боломжит үүсэж болох квадрат биш тэгш өнцөгтүүдийн тоо"
            />
            <Container
              spiralMatrix={SpiralMatrix}
              number={2}
              possibleDivides={PossibleDivides}
              maxPaintedSquares={MaxPaintedSquares}
              inputText="Хоёр утга авах ба эхнийх нь Чулуунаад байгаа бүх өнгөтэй савнуудын тоо. Хоёр дахь нь сав тус бүрт байгаа будгийн хэмжээ (литр)"
              example1="5"
              example2="2 4 2 3 3"
              outputText="Хамгийн их будаж чадах квадратын тоо"
            />
            <Container
              spiralMatrix={SpiralMatrix}
              number={3}
              possibleDivides={PossibleDivides}
              maxPaintedSquares={MaxPaintedSquares}
              inputText="N*N матриксийн N утгыг болон x, y координатыг оруулна уу."
              example1="3 2 1"
              outputText="Cпирал матрикс дээрх x, y координатад байрлах тоон утга"
            />
          </div>
        </div>
      </div>
    </>
  );
}
