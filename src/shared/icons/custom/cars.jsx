import React from 'react';

export const Cars = ({ width, height, fill, stroke, className = '' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill || '#222222'}
      stroke={fill || '#222222'}
      height={height || '24px'}
      width={width || '24px'}
      className={className}
      viewBox="0 0 122.88 53.49"
    >
      <path
        className="cls-1"
        d="M93.43.94h13c4,0,6.3,3.39,7.27,7.27L116,17.62l1.34-2.54c6.95-.4,7.57,3.64.22,7.12L118.78,24c4.84,5,4.38,9.93,3.63,22.21v4a2.27,2.27,0,0,1-2.27,2.27h-9.71a2.27,2.27,0,0,1-2.27-2.27V48.45h-3.6V47l0-.63c.18-2.92.34-5.49.42-7.79l5.73-.05a3.88,3.88,0,0,0,1.93-.53,3.3,3.3,0,0,0,1.17-1.3l.93-2.26c.69-1.76.14-2.61-1.89-2.39L105,33a19.87,19.87,0,0,0-2.65-9.45,11.6,11.6,0,0,0,1.4-1.91h0a10.55,10.55,0,0,0,.73-1.57h8.14l-2.35-9.76c-.64-3-2.49-5.55-5.55-5.55H95A21.78,21.78,0,0,0,93.43.94ZM31.27,21.74c-7-3.54-6.17-7.49.83-7.08l1.57,2.94,3.23-10C38.17,3.59,40.29,0,44.44,0H81c4.15,0,6.53,3.52,7.54,7.54L91,17.29l1.4-2.63c7.2-.42,7.85,3.77.22,7.38l1.24,1.9c5,5.15,4.54,10.29,3.76,23v4.18a2.36,2.36,0,0,1-2.35,2.36H85.17a2.36,2.36,0,0,1-2.35-2.36V49.24H40.08v1.89a2.36,2.36,0,0,1-2.36,2.36h-10a2.36,2.36,0,0,1-2.36-2.36V45.7c0-.12,0-.24,0-.37-.76-9.76-1.84-18.56,5.93-23.59ZM44.11,33.32l-8.93-1.13c-2.11-.23-2.68.66-2,2.47l1,2.35a3.36,3.36,0,0,0,1.2,1.34,4.09,4.09,0,0,0,2,.56l8,.06c1.92,0,2.75-.77,2.15-2.54a4.3,4.3,0,0,0-3.4-3.11Zm34.67,0,8.93-1.13c2.1-.23,2.67.66,2,2.47L88.7,37a3.38,3.38,0,0,1-1.21,1.34,4.06,4.06,0,0,1-2,.56l-8,.06c-1.93,0-2.76-.77-2.16-2.54a4.31,4.31,0,0,1,3.41-3.11ZM37,19.82H87.38L85,9.7C84.28,6.62,82.36,4,79.2,4H45.81C42.65,4,41,6.69,40.06,9.7L37,19.82v0ZM32.15.94H16.47c-4,0-6.3,3.39-7.27,7.27L6.85,17.62,5.51,15.08c-6.95-.4-7.57,3.64-.22,7.12L4.1,24C-.74,29-.29,34,.47,46.25v4a2.27,2.27,0,0,0,2.27,2.27h9.71a2.27,2.27,0,0,0,2.27-2.27V48.45h3.62V45.36l-.06-.74c-.16-2.08-.33-4.11-.42-6.09l-5.73-.05A3.88,3.88,0,0,1,10.21,38,3.3,3.3,0,0,1,9,36.65l-.93-2.26C7.42,32.63,8,31.78,10,32l7.88,1a21.93,21.93,0,0,1,3.19-10.85c-.17-.25-.31-.5-.45-.74A11.35,11.35,0,0,1,20,20.06h-9.7l2.35-9.76c.64-3,2.49-5.55,5.55-5.55h12.3A26.67,26.67,0,0,1,32.15.94Z"
      />
    </svg>
  );
};