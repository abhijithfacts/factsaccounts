import React from "react";
import { ChartAreaInteractive } from "@/components/charts/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";

const page = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between">
        <SectionCards />
        <SectionCards />
        <SectionCards />
      </div>
      <ChartAreaInteractive />
    </div>
  );
};

export default page;
