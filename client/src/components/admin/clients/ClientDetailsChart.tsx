import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/UI/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/UI/chart";
import { ClientDetailsSchemaType } from "@/types/clientDetailsShema";

type ClientDetailsChartProps = {
    client: ClientDetailsSchemaType;
};

const ClientDetailsChart = ({ client }: ClientDetailsChartProps) => {
    // Map history to chart-friendly format
    const chartData = client?.history?.map((entry) => ({
        date: new Date(entry.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), // Format the date to display
        requested: entry.requested_bw,
        allocated: entry.allocated_bw,
    }));

    // Chart configuration
    const chartConfig = {
        requested: {
            label: "Requested BW",
            color: "hsl(var(--chart-1))",
        },
        allocated: {
            label: "Allocated BW",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Bandwidth Usage</CardTitle>
                <CardDescription>Showing requested vs allocated bandwidth per day</CardDescription>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <AreaChart
                        accessibilityLayer
                        data={chartData} // Use the mapped chart data
                        margin={{
                            left: 12,
                            right: 12,
                            top: 12,
                        }}
                    >
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="date" // Use the formatted date for x-axis
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                            // Directly display the date from the "createdAt" values
                            tickFormatter={(value) => value} 
                        />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Area
                            dataKey="allocated"
                            type="natural"
                            fill="var(--color-allocated)"
                            fillOpacity={0.4}
                            stroke="var(--color-allocated)"
                            stackId="a"
                        />
                        <Area
                            dataKey="requested"
                            type="natural"
                            fill="var(--color-requested)"
                            fillOpacity={0.4}
                            stroke="var(--color-requested)"
                            stackId="a"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            October 2024
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
};

export default ClientDetailsChart;
