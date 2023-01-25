import { SIZE, WIDTH, WEEK_DAYS } from "../constants";
import { Label } from "./Label";

type MonthLabelProps = {
  months: number;
};

export function MonthLabel({ months }: MonthLabelProps) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth(); // 0부터 시작
  const currentDate = new Date().getDate(); // 0부터 시작
  return (
    <>
      {Array.from({ length: months }).map((_, monthIndex) => {
        const month =
          new Date(currentYear, currentMonth - monthIndex).getMonth() + 1;
        const weekCounts = Math.floor(
          (+new Date(
            currentYear,
            currentMonth - monthIndex,
            monthIndex === 0 ? currentDate : 1
          ) -
            +new Date(
              currentYear,
              monthIndex === 0 ? currentMonth : currentMonth - monthIndex - 1
            )) /
            86400000 /
            7
        );
        console.log(WIDTH - SIZE * (monthIndex + 1) * weekCounts);
        return (
          <Label
            x={WIDTH - SIZE * (monthIndex + 1) * weekCounts + SIZE}
            y={SIZE * (WEEK_DAYS + 1)}
          >
            {month}월
          </Label>
        );
      })}
    </>
  );
}
