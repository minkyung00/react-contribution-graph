# react-contribution-graph

Contribution graph(heatmap) for React Component

## Install

```bash
npm i react-contribution-graph
```

## Usage

```tsx
import { ContributionGraph } from "react-contribution-graph";

<ContributionGraph
  values={...}
  days={...}
/>;
```

## Props

### ContributionGraph Props

| Name   | Description                                               | Type                                | Default Value | Required |
| ------ | --------------------------------------------------------- | ----------------------------------- | ------------- | -------- |
| values | The data object that is passed into the ContributionGraph | `{ date: string; count: number }[]` | `[]`          | Yes      |
| days   | Total days to be rendered                                 | number                              | `365`(1 Year) | No       |

## Example

```tsx
import { ContributionGraph } from "react-contribution-graph";

<ContributionGraph
  values={[
    { date: "2022-12-30", count: 2 },
    { date: "2023-01-01", count: 4 },
    { date: "2023-01-22", count: 1 },
  ]}
/>;
```

## Development

```bash
npm install
npm start
```

## Theme

### Colors

<span style="padding: 4px; background-color: #e5e7eb; color: #fff">#e5e7eb</span>
<span style="padding: 4px; background-color: #a5b4fc; color: #fff">#a5b4fc</span>
<span style="padding: 4px; background-color: #818cf8; color: #fff">#818cf8</span>
<span style="padding: 4px; background-color: #6366f1; color: #fff">#6366f1</span>
<span style="padding: 4px; background-color: #4f46e5; color: #fff">#4f46e5</span>
<span style="padding: 4px; background-color: #4338ca; color: #fff">#4338ca</span>
<span style="padding: 4px; background-color: #3730a3; color: #fff">#3730a3</span>
<span style="padding: 4px; background-color: #312e81; color: #fff">#312e81</span>
