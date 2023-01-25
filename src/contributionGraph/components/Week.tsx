import { Day } from "../components";
import { SIZE, WEEK_DAYS, WIDTH } from "../constants";

type WeekProps = {
  currentWeek: number;
  contributions?: { date: number; count: number }[];
};

export function Week({ currentWeek, contributions }: WeekProps) {
  const dayCounts = currentWeek === 0 ? new Date().getDay() + 1 : WEEK_DAYS;

  return (
    <>
      {Array.from({ length: dayCounts }).map((_, day) => {
        const current = new Date(
          new Date().getFullYear(),
          new Date().getMonth(),
          new Date().getDate() - currentWeek * WEEK_DAYS - day
        );

        return (
          <Day
            x={WIDTH - currentWeek * SIZE}
            y={(dayCounts - day - 1) * SIZE}
            contributions={
              contributions?.find(
                ({ date }) => date === currentWeek * WEEK_DAYS + day
              )?.count
            }
            date={`
            ${current.getFullYear()}-${
              current.getMonth() + 1
            }-${current.getDate()}`}
          />
        );
      })}
    </>
  );
}
