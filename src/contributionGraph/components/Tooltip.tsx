import { SIZE, WIDTH } from "../constants";

type TooltipProps = {
  isShow: boolean;
  content?: string;
  x: number;
  y: number;
  width?: number;
  height?: number;
  backgroundColor?: string;
  textColor?: string;
  fontSize?: number;
};

export function Tooltip({
  isShow,
  content,
  x,
  y,
  width = 200,
  height = 30,
  backgroundColor = "#000",
  textColor = "#fff",
  fontSize = 13,
}: TooltipProps) {
  const bgXValue = x >= WIDTH - width ? WIDTH - width : x;
  const textXvalue = bgXValue + width / 2;
  return (
    <>
      <rect
        width={width}
        height={height}
        x={bgXValue}
        y={y + SIZE}
        rx="5"
        fill={backgroundColor}
        display={isShow ? "inline" : "none"}
      ></rect>
      <text
        fill={textColor}
        x={textXvalue}
        y={y + SIZE * 2}
        dy="0.2"
        fontSize={fontSize}
        textAnchor="middle"
        display={isShow ? "inline" : "none"}
      >
        {content}
      </text>
    </>
  );
}
