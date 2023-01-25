import { useState } from "react";

import { Week, Tooltip, MonthLabel } from "./components";
import { HEIGHT, WIDTH, SIZE, WEEK_DAYS } from "./constants";
import { getDiffDay } from "./utils";

export default function ContributionGraph({
  endDate = new Date(),
  days = 365,
  values,
}: {
  endDate?: Date;
  days?: number;
  values: { date: string; count: number }[];
}) {
  const weeks = Math.floor(days / WEEK_DAYS);
  const months = 12 + 1;

  const contributions = values.map(({ date, ...rest }) => ({
    date: getDiffDay(date),
    ...rest,
  }));

  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltip, setTooltip] = useState({
    value: "",
    x: 0,
    y: 0,
  });

  const handleDayMouseOver = (
    e: React.MouseEvent<SVGSVGElement> & { target: SVGSVGElement }
  ) => {
    if (e.target?.id !== "day") return;

    const { dataset, x, y } = e.target;
    setTooltip({
      value: dataset?.tooltip ?? "",
      x: x.baseVal.value,
      y: y.baseVal.value,
    });
    setShowTooltip(true);
  };

  const handleDayMouseOut = () => {
    setShowTooltip(false);
  };

  return (
    <svg
      style={{
        direction: "ltr",
        height: `${HEIGHT}px`,
        width: `${WIDTH}px`,
        display: "block",
        margin: "0px auto",
      }}
      viewBox={`0 0 ${WIDTH + SIZE} ${HEIGHT}`}
      onMouseOver={handleDayMouseOver}
      onMouseOut={handleDayMouseOut}
    >
      <MonthLabel months={months} />
      {Array.from({ length: weeks }).map((_, weekIndex) => (
        <Week currentWeek={weekIndex} contributions={contributions} />
      ))}
      <Tooltip
        isShow={showTooltip}
        content={tooltip.value}
        x={tooltip.x}
        y={tooltip.y}
      />
    </svg>
  );
}
