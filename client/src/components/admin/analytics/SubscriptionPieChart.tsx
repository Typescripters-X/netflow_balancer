"use client"

// import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardHeader,
} from "@/components/UI/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/UI/chart"
import usePieChart from "@/hooks/analytics/usePieChart"
// import React from "react"

export const description = "A donut chart with text"

// const chartData = [
//   { max_bw: "chrome", count: 275, fill: "var(--color-chrome)" },
//   { max_bw: "safari", count: 200, fill: "var(--color-safari)" },
//   { max_bw: "firefox", count: 287, fill: "var(--color-firefox)" },
//   { max_bw: "edge", count: 173, fill: "var(--color-edge)" },
//   { max_bw: "other", count: 190, fill: "var(--color-other)" },
// ]

const chartConfig = {
  count: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "hsl(var(--chart-1))",
  },
  safari: {
    label: "Safari",
    color: "hsl(var(--chart-2))",
  },
  firefox: {
    label: "Firefox",
    color: "hsl(var(--chart-3))",
  },
  edge: {
    label: "Edge",
    color: "hsl(var(--chart-4))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function SubscriptionPieChart() {
  // const totalVisitors = React.useMemo(() => {
  //   return chartData.reduce((acc, curr) => acc + curr.count, 0)
  // }, [])

  const { data } = usePieChart()
  console.log(data);
  return (
    <Card className="flex flex-col border-2">
      <CardHeader className="items-center pb-0">
        <CardTitle>Bandwidth Chart </CardTitle>
        <CardDescription>(MB / DAY)</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data?.chartData}
              dataKey="count"
              nameKey="max_bw"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {data?.subscribersCount -1}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Subscribers
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>

    </Card>
  )
}
