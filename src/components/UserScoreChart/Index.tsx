"use client";

import React, { CSSProperties } from "react";
import Circle from "react-circle";

interface Props {
  score: number;
  textStyle?: CSSProperties;
  style?: CSSProperties;
}

function UserScoreChart({ score, textStyle, style }: Props): React.JSX.Element {
  return (
    <div style={{ width: "auto", ...style }}>
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
          ...textStyle,
        }}
        roundedStroke={true}
        showPercentage={true}
        showPercentageSymbol={true}
      />
    </div>
  );
}

export default UserScoreChart;
