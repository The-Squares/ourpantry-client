import React from "react";

function StarWrapped({
  width = "17",
  height = "16",
  className = "",
  filled = true,
  onClick = () => {},
}) {
  let color = filled ? "#62BCD3" : "rgba(0, 0, 0, 0.17)";
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M8.5 0L10.4084 5.87336L16.584 5.87336L11.5878 9.50329L13.4962 15.3766L8.5 11.7467L3.50383 15.3766L5.41219 9.50329L0.416019 5.87336L6.59163 5.87336L8.5 0Z"
        fill={color}
      />
    </svg>
  );
}

export default StarWrapped;
