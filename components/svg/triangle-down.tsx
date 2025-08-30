import { SVGAttributes } from "lucide-react";

const TriangleDown = ({ className, color }: SVGAttributes) => {
  return (
    <svg
      className={className}
      fill={color || "#000000"}
      height="800px"
      width="800px"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 490 490"
      xmlSpace="preserve"
    >
      <polygon points="245,456.701 490,33.299 0,33.299 " />
    </svg>
  );
};

export default TriangleDown;