type LabelProps = {
  fontSize: number;
  textAnchor: string;
  x: number;
  y: number;
  dy: string;
  fill: string;
  children?: React.ReactNode;
};

export function Label({
  fontSize = 13,
  textAnchor = "start",
  x,
  y,
  dy = "0.3em",
  fill = "#8a8f95",
  children,
}: LabelProps) {
  return (
    <text
      fontSize={fontSize}
      textAnchor={textAnchor}
      x={x}
      y={y}
      dy={dy}
      fill={fill}
    >
      {children}
    </text>
  );
}
