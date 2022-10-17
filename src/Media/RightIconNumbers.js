import React from "react";

function RightIconNumbers({ color = "#62BCD3", addOrSub }) {
  let upOrDownClick = (e) => {
    let imagePos = e.target.getBoundingClientRect();
    let y = e.clientY - imagePos.top;
    let up = y < imagePos.height / 2;
    addOrSub(up ? 1 : -1);
  };

  return (
    <svg
      width="72"
      height="77"
      viewBox="0 0 72 77"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={upOrDownClick}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32.7109 77C13.5651 70.2564 -5.34058e-05 53.4418 -5.34058e-05 33.7663C-5.34058e-05 20.4584 6.20564 8.45935 16.1465 0H59C66.1797 0 72 5.8203 72 13V64C72 71.1797 66.1797 77 59 77H32.7109Z"
        fill="#62BCD3"
      />
      <path d="M35.052 52.274H44.376V55.982H35.052V52.274Z" fill="#063677" />
      <path
        d="M38.7259 31.4091V16.4091H41.2713V31.4091H38.7259ZM32.4986 25.1818V22.6364H47.4986V25.1818H32.4986Z"
        fill="#063677"
      />
    </svg>
  );
}

export default RightIconNumbers;
