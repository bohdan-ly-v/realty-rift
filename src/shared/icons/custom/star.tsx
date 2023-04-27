import React from "react";

export const Star: React.FC<{
  width?: string;
  height?: string;
  fill?: string;
  stroke?: string;
  className?: string;
}> = ({ width, height, fill, stroke, className = "" }) => {
  return (
    <svg
      fill={fill || "#222222"}
      stroke={fill || "#222222"}
      height={height || "16px"}
      width={width || "16px"}
      className={className}
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.76241 4.4184C7.28681 3.11106 7.54901 2.4574 7.9999 2.4574C8.45078 2.4574 8.71298 3.11106 9.23739 4.4184L9.26181 4.47927C9.55807 5.21785 9.7062 5.58714 10.0081 5.8116C10.31 6.03606 10.7063 6.07155 11.4989 6.14254L11.6422 6.15537C12.9394 6.27155 13.588 6.32963 13.7268 6.74229C13.8656 7.15494 13.3839 7.59317 12.4205 8.46963L12.099 8.76215C11.6114 9.20583 11.3675 9.42767 11.2539 9.71842C11.2327 9.77265 11.215 9.82822 11.2011 9.88476C11.1264 10.1879 11.1978 10.5097 11.3406 11.1533L11.3851 11.3537C11.6475 12.5366 11.7787 13.128 11.5496 13.3831C11.464 13.4785 11.3527 13.5471 11.2291 13.5808C10.8983 13.6711 10.4287 13.2884 9.48937 12.523C8.87259 12.0204 8.5642 11.7691 8.21013 11.7126C8.07086 11.6903 7.92894 11.6903 7.78967 11.7126C7.4356 11.7691 7.12721 12.0204 6.51043 12.523C5.57113 13.2884 5.10148 13.6711 4.77068 13.5808C4.64706 13.5471 4.53579 13.4785 4.45018 13.3831C4.22106 13.128 4.35228 12.5366 4.61473 11.3537L4.65918 11.1533C4.80199 10.5097 4.87339 10.1879 4.79869 9.88476C4.78475 9.82822 4.76713 9.77265 4.74593 9.71842C4.63228 9.42767 4.38844 9.20583 3.90077 8.76215L3.57925 8.46963C2.61589 7.59317 2.13421 7.15494 2.27299 6.74229C2.41178 6.32963 3.06038 6.27155 4.35759 6.15537L4.50088 6.14254C5.29349 6.07155 5.6898 6.03606 5.9917 5.8116C6.2936 5.58714 6.44173 5.21785 6.73799 4.47927L6.76241 4.4184Z"
        stroke="#222222"
      />
    </svg>
  );
};