"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", true: 222, false: 150 },
  { date: "2024-04-02", true: 97, false: 180 },
  { date: "2024-04-03", true: 167, false: 120 },
  { date: "2024-04-04", true: 242, false: 260 },
  { date: "2024-04-05", true: 373, false: 290 },
  { date: "2024-04-06", true: 301, false: 340 },
  { date: "2024-04-07", true: 245, false: 180 },
  { date: "2024-04-08", true: 409, false: 320 },
  { date: "2024-04-09", true: 59, false: 110 },
  { date: "2024-04-10", true: 261, false: 190 },
  { date: "2024-04-11", true: 327, false: 350 },
  { date: "2024-04-12", true: 292, false: 210 },
  { date: "2024-04-13", true: 342, false: 380 },
  { date: "2024-04-14", true: 137, false: 220 },
  { date: "2024-04-15", true: 120, false: 170 },
  { date: "2024-04-16", true: 138, false: 190 },
  { date: "2024-04-17", true: 446, false: 360 },
  { date: "2024-04-18", true: 364, false: 410 },
  { date: "2024-04-19", true: 243, false: 180 },
  { date: "2024-04-20", true: 89, false: 150 },
  { date: "2024-04-21", true: 137, false: 200 },
  { date: "2024-04-22", true: 224, false: 170 },
  { date: "2024-04-23", true: 138, false: 230 },
  { date: "2024-04-24", true: 387, false: 290 },
  { date: "2024-04-25", true: 215, false: 250 },
  { date: "2024-04-26", true: 75, false: 130 },
  { date: "2024-04-27", true: 383, false: 420 },
  { date: "2024-04-28", true: 122, false: 180 },
  { date: "2024-04-29", true: 315, false: 240 },
  { date: "2024-04-30", true: 454, false: 380 },
  { date: "2024-05-01", true: 165, false: 220 },
  { date: "2024-05-02", true: 293, false: 310 },
  { date: "2024-05-03", true: 247, false: 190 },
  { date: "2024-05-04", true: 385, false: 420 },
  { date: "2024-05-05", true: 481, false: 390 },
  { date: "2024-05-06", true: 498, false: 520 },
  { date: "2024-05-07", true: 388, false: 300 },
  { date: "2024-05-08", true: 149, false: 210 },
  { date: "2024-05-09", true: 227, false: 180 },
  { date: "2024-05-10", true: 293, false: 330 },
  { date: "2024-05-11", true: 335, false: 270 },
  { date: "2024-05-12", true: 197, false: 240 },
  { date: "2024-05-13", true: 197, false: 160 },
  { date: "2024-05-14", true: 448, false: 490 },
  { date: "2024-05-15", true: 473, false: 380 },
  { date: "2024-05-16", true: 338, false: 400 },
  { date: "2024-05-17", true: 499, false: 420 },
  { date: "2024-05-18", true: 315, false: 350 },
  { date: "2024-05-19", true: 235, false: 180 },
  { date: "2024-05-20", true: 177, false: 230 },
  { date: "2024-05-21", true: 82, false: 140 },
  { date: "2024-05-22", true: 81, false: 120 },
  { date: "2024-05-23", true: 252, false: 290 },
  { date: "2024-05-24", true: 294, false: 220 },
  { date: "2024-05-25", true: 201, false: 250 },
  { date: "2024-05-26", true: 213, false: 170 },
  { date: "2024-05-27", true: 420, false: 460 },
  { date: "2024-05-28", true: 233, false: 190 },
  { date: "2024-05-29", true: 78, false: 130 },
  { date: "2024-05-30", true: 340, false: 280 },
  { date: "2024-05-31", true: 178, false: 230 },
  { date: "2024-06-01", true: 178, false: 200 },
  { date: "2024-06-02", true: 470, false: 410 },
  { date: "2024-06-03", true: 103, false: 160 },
  { date: "2024-06-04", true: 439, false: 380 },
  { date: "2024-06-05", true: 88, false: 140 },
  { date: "2024-06-06", true: 294, false: 250 },
  { date: "2024-06-07", true: 323, false: 370 },
  { date: "2024-06-08", true: 385, false: 320 },
  { date: "2024-06-09", true: 438, false: 480 },
  { date: "2024-06-10", true: 155, false: 200 },
  { date: "2024-06-11", true: 92, false: 150 },
  { date: "2024-06-12", true: 492, false: 420 },
  { date: "2024-06-13", true: 81, false: 130 },
  { date: "2024-06-14", true: 426, false: 380 },
  { date: "2024-06-15", true: 307, false: 350 },
  { date: "2024-06-16", true: 371, false: 310 },
  { date: "2024-06-17", true: 475, false: 520 },
  { date: "2024-06-18", true: 107, false: 170 },
  { date: "2024-06-19", true: 341, false: 290 },
  { date: "2024-06-20", true: 408, false: 450 },
  { date: "2024-06-21", true: 169, false: 210 },
  { date: "2024-06-22", true: 317, false: 270 },
  { date: "2024-06-23", true: 480, false: 530 },
  { date: "2024-06-24", true: 132, false: 180 },
  { date: "2024-06-25", true: 141, false: 190 },
  { date: "2024-06-26", true: 434, false: 380 },
  { date: "2024-06-27", true: 448, false: 490 },
  { date: "2024-06-28", true: 149, false: 200 },
  { date: "2024-06-29", true: 103, false: 160 },
  { date: "2024-06-30", true: 446, false: 400 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  true: {
    label: "true",
    color: "#696CFF",
  },
  false: {
    label: "false",
    color: "#03C3EC",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive() {
  const isMobile = useIsMobile();
  const [timeRange, setTimeRange] = React.useState("90d");

  React.useEffect(() => {
    if (isMobile) {
      setTimeRange("7d");
    }
  }, [isMobile]);

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="@container/card bg-[#1F1F1F] border text-white">
      <CardHeader className="flex gap-4">
        <CardTitle>
          <span className="ml-2 inline-block w-3 h-3 rounded-full bg-[#696CFF] mr-2"></span>
          Fact-Checked
        </CardTitle>
        <CardTitle>
          <span className="ml-2 inline-block w-3 h-3 rounded-full bg-[#03C3EC] mr-2"></span>
          Incorrect information
        </CardTitle>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
            <defs>
              <linearGradient id="filltrue" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-true)"
                  stopOpacity={1.0}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-true)"
                  stopOpacity={0.1}
                />
              </linearGradient>
              <linearGradient id="fillfalse" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="5%"
                  stopColor="var(--color-false)"
                  stopOpacity={0.8}
                />
                <stop
                  offset="95%"
                  stopColor="var(--color-false)"
                  stopOpacity={0.1}
                />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="false"
              type="natural"
              fill="url(#fillfalse)"
              stroke="var(--color-false)"
              stackId="a"
            />
            <Area
              dataKey="true"
              type="natural"
              fill="url(#filltrue)"
              stroke="var(--color-true)"
              stackId="a"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
