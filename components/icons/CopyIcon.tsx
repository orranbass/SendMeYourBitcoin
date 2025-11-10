
import React from 'react';

export const CopyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      d="M10.5 3.75a2.25 2.25 0 00-2.25 2.25v10.5a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25h-6Zm.75 12.75a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5Z"
      clipRule="evenodd"
    />
    <path d="M4.5 1.5a.75.75 0 00-.75.75V15a.75.75 0 00.75.75h1.5a.75.75 0 000-1.5H5.25V2.25H15v1.5a.75.75 0 001.5 0V2.25a.75.75 0 00-.75-.75H4.5Z" />
  </svg>
);
