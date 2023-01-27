import { SIZE, WIDTH, WEEK_DAYS } from "../constants";
import { Label } from "./Label";

type MonthLabelProps = {
  months: number;
};

export function MonthLabel({ months }: MonthLabelProps) {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();

  return (
    <>
      {Array.from({ length: months }).map((_, monthIndex) => {
        const month =
          new Date(currentYear, currentMonth - monthIndex).getMonth() + 1;
        const diffDays =
          (+new Date() - +new Date(currentYear, currentMonth - monthIndex, 1)) /
          86400000;
        return (
          <Label x={WIDTH - SIZE * (diffDays / 7)} y={SIZE * (WEEK_DAYS + 1)}>
            {month}월
          </Label>
        );
      })}
    </>
  );
}
