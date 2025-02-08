import React from 'react';
import GaugeChart from 'react-gauge-chart';

function GaugeChartDynamic() {
  return (
    <div className="d-flex justify-content-center align-items-center p-4 card shadow-sm rounded">
      <GaugeChart
        id="gauge-chart"
        nrOfLevels={100}
        arcsLength={[0.72, 0.28]}  // 72% filled
        colors={['#6A5ACD', '#EDEDED']} // Purple & light gray
        percent={0.72}  // Matches 72% sales percentage
        needleColor="#000"
        hideText={true}
        arcPadding={0.02}
        style={{ width: "250px" }}  // Adjust size
      />
      <div className="text-center mt-3">
        <h2 className="fs-4 fw-bold">72%</h2>
        <p className="text-secondary small">Sales Percentage</p>
      </div>
    </div>
  );
}

export default GaugeChartDynamic;
