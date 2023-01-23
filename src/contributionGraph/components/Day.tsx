import { ACTIVE_COLOR } from "../constants";

type DayProps = {
  width?: number;
  height?: number;
  x: number;
  y: number;
  rx?: number;
  strokeWidth?: number;
  contributions?: number;
};

export function Day({
  width = 18,
  height = 18,
  x,
  y,
  rx = 5,
  strokeWidth = 2.5,
  contributions,
}: DayProps) {
  return (
    <rect
      width={width}
      height={height}
      x={x}
      y={y}
      rx={rx}
      fill={contributions ? ACTIVE_COLOR[contributions] : ACTIVE_COLOR[0]}
      strokeWidth={strokeWidth}
    ></rect>
  );
}
