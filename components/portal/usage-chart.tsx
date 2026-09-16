"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type UsageChartProps = {
  data: { date: string; credits: number }[];
};

export function UsageChart({ data }: UsageChartProps) {
  return (
    <div className="h-64 w-full" role="img" aria-label="Usage chart showing credits consumed over time">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#64748B" }}
            axisLine={{ stroke: "#E2E8F0" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#64748B" }}
            axisLine={{ stroke: "#E2E8F0" }}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "8px",
              border: "1px solid #E2E8F0",
              fontSize: "13px",
            }}
          />
          <Line
            type="monotone"
            dataKey="credits"
            stroke="#2563EB"
            strokeWidth={2}
            dot={{ fill: "#2563EB", r: 3 }}
            name="Credits"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
