'use client';

const ValidCheckSvgIcon = ({ iconValid }: { iconValid: boolean | null }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_440_38)">
        <path
          d="M7.68225 12.2355L4.5 9.05249L5.5605 7.99199L7.68225 10.113L11.9243 5.87024L12.9855 6.93149L7.68225 12.234V12.2355Z"
          fill={`${iconValid ? '#64FFDA' : '#984C41'}`}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.75 9C0.75 4.44375 4.44375 0.75 9 0.75C13.5562 0.75 17.25 4.44375 17.25 9C17.25 13.5562 13.5562 17.25 9 17.25C4.44375 17.25 0.75 13.5562 0.75 9ZM9 15.75C8.11358 15.75 7.23583 15.5754 6.41689 15.2362C5.59794 14.897 4.85382 14.3998 4.22703 13.773C3.60023 13.1462 3.10303 12.4021 2.76381 11.5831C2.42459 10.7642 2.25 9.88642 2.25 9C2.25 8.11358 2.42459 7.23583 2.76381 6.41689C3.10303 5.59794 3.60023 4.85382 4.22703 4.22703C4.85382 3.60023 5.59794 3.10303 6.41689 2.76381C7.23583 2.42459 8.11358 2.25 9 2.25C10.7902 2.25 12.5071 2.96116 13.773 4.22703C15.0388 5.4929 15.75 7.20979 15.75 9C15.75 10.7902 15.0388 12.5071 13.773 13.773C12.5071 15.0388 10.7902 15.75 9 15.75Z"
          fill={`${iconValid ? '#64FFDA' : '#984C41'}`}
        />
      </g>
      <defs>
        <clipPath id="clip0_440_38">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ValidCheckSvgIcon;
