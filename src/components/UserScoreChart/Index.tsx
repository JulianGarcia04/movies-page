"use client";

import React from "react";
import Circle from "react-circle";

interface Props {
  score: number;
}

function UserScoreChart({ score }: Props): React.JSX.Element {
  return (
    <div style={{ width: "auto" }}>
      <Circle
        animate={true}
        animationDuration="1s"
        responsive={false}
        progress={score}
        progressColor="#4DA14F"
        textColor="#fff"
        textStyle={{
          font: "bold 4rem Helvetica, Arial, sans-serif",
          fontSize: "90px",
        }}
        roundedStroke={true}
        showPercentage={true}
        showPercentageSymbol={true}
      />
    </div>
  );
}

export default UserScoreChart;
