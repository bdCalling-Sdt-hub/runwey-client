import React from "react";

const TrushCard = () => {
  return (
    <div className="flex justify-between items-center my-4">
      <div className="flex items-center justify-between gap-10">
        <svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <rect width="50" height="50" rx="10" fill="url(#pattern0)" />
          <rect opacity="0.5" width="50" height="50" rx="10" fill="#333333" />
          <path
            d="M27.0639 24.376L24.666 22.7773C24.1676 22.4451 23.5 22.8024 23.5 23.4014V26.5986C23.5 27.1976 24.1676 27.5549 24.666 27.2227L27.0639 25.624C27.5092 25.3272 27.5092 24.6728 27.0639 24.376Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M31.75 25C31.75 28.7279 28.7279 31.75 25 31.75C21.2721 31.75 18.25 28.7279 18.25 25C18.25 21.2721 21.2721 18.25 25 18.25C28.7279 18.25 31.75 21.2721 31.75 25Z"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <defs>
            <pattern
              id="pattern0"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1"
            >
              <use
                xlinkHref="#image0_455_13705"
                transform="translate(0 -0.2506) scale(0.00239808)"
              />
            </pattern>
            <image id="image0_455_13705" width="417" height="626" />
          </defs>
        </svg>
        <h2 className="text-lg font-medium font-['Montserrat']">
          Sheath Weeding gown
        </h2>
      </div>
      <div className="flex gap-[150px]">
        <div className="flex gap-2 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 6V9L11.25 11.25M15.75 9C15.75 12.7279 12.7279 15.75 9 15.75C5.27208 15.75 2.25 12.7279 2.25 9C2.25 5.27208 5.27208 2.25 9 2.25C12.7279 2.25 15.75 5.27208 15.75 9Z"
              stroke="#858585"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span> 0:10</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.85446 4.65451C4.26035 3.24863 6.53975 3.24863 7.94563 4.65451L9.00005 5.70893L10.0545 4.65451C11.4604 3.24863 13.7397 3.24863 15.1456 4.65451C16.5515 6.0604 16.5515 8.3398 15.1456 9.74568L9.00005 15.8913L2.85446 9.74568C1.44858 8.3398 1.44858 6.0604 2.85446 4.65451Z"
              fill="#858585"
            />
          </svg>

          <span> 6K</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.2501 9C11.2501 10.2426 10.2427 11.25 9.00006 11.25C7.75742 11.25 6.75006 10.2426 6.75006 9C6.75006 7.75736 7.75742 6.75 9.00006 6.75C10.2427 6.75 11.2501 7.75736 11.2501 9Z"
              stroke="#858585"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M1.84375 8.99997C2.79946 5.95716 5.64217 3.75 9.00039 3.75C12.3586 3.75 15.2014 5.95719 16.157 9.00003C15.2013 12.0428 12.3586 14.25 9.00041 14.25C5.64217 14.25 2.79944 12.0428 1.84375 8.99997Z"
              stroke="#858585"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <span>10.8k</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14396 3.53448C8.41338 2.7053 9.58645 2.7053 9.85586 3.53448L10.8185 6.4971C10.939 6.86792 11.2845 7.11898 11.6744 7.11898H14.7895C15.6614 7.11898 16.0239 8.23464 15.3185 8.7471L12.7984 10.5781C12.4829 10.8073 12.3509 11.2135 12.4714 11.5843L13.434 14.5469C13.7034 15.3761 12.7544 16.0656 12.0491 15.5532L9.52892 13.7222C9.21348 13.493 8.78634 13.493 8.47091 13.7222L5.95075 15.5532C5.24541 16.0656 4.29638 15.3761 4.5658 14.5469L5.52841 11.5843C5.6489 11.2135 5.5169 10.8073 5.20146 10.5781L2.68131 8.7471C1.97597 8.23464 2.33847 7.11898 3.21032 7.11898H6.3254C6.7153 7.11898 7.06086 6.86792 7.18135 6.4971L8.14396 3.53448Z"
              fill="#FFC60B"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14396 3.53448C8.41338 2.7053 9.58645 2.7053 9.85586 3.53448L10.8185 6.4971C10.939 6.86792 11.2845 7.11898 11.6744 7.11898H14.7895C15.6614 7.11898 16.0239 8.23464 15.3185 8.7471L12.7984 10.5781C12.4829 10.8073 12.3509 11.2135 12.4714 11.5843L13.434 14.5469C13.7034 15.3761 12.7544 16.0656 12.0491 15.5532L9.52892 13.7222C9.21348 13.493 8.78634 13.493 8.47091 13.7222L5.95075 15.5532C5.24541 16.0656 4.29638 15.3761 4.5658 14.5469L5.52841 11.5843C5.6489 11.2135 5.5169 10.8073 5.20146 10.5781L2.68131 8.7471C1.97597 8.23464 2.33847 7.11898 3.21032 7.11898H6.3254C6.7153 7.11898 7.06086 6.86792 7.18135 6.4971L8.14396 3.53448Z"
              fill="#FFC60B"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14396 3.53448C8.41338 2.7053 9.58645 2.7053 9.85586 3.53448L10.8185 6.4971C10.939 6.86792 11.2845 7.11898 11.6744 7.11898H14.7895C15.6614 7.11898 16.0239 8.23464 15.3185 8.7471L12.7984 10.5781C12.4829 10.8073 12.3509 11.2135 12.4714 11.5843L13.434 14.5469C13.7034 15.3761 12.7544 16.0656 12.0491 15.5532L9.52892 13.7222C9.21348 13.493 8.78634 13.493 8.47091 13.7222L5.95075 15.5532C5.24541 16.0656 4.29638 15.3761 4.5658 14.5469L5.52841 11.5843C5.6489 11.2135 5.5169 10.8073 5.20146 10.5781L2.68131 8.7471C1.97597 8.23464 2.33847 7.11898 3.21032 7.11898H6.3254C6.7153 7.11898 7.06086 6.86792 7.18135 6.4971L8.14396 3.53448Z"
              fill="#FFC60B"
            />
          </svg>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14396 3.53448C8.41338 2.7053 9.58645 2.7053 9.85586 3.53448L10.8185 6.4971C10.939 6.86792 11.2845 7.11898 11.6744 7.11898H14.7895C15.6614 7.11898 16.0239 8.23464 15.3185 8.7471L12.7984 10.5781C12.4829 10.8073 12.3509 11.2135 12.4714 11.5843L13.434 14.5469C13.7034 15.3761 12.7544 16.0656 12.0491 15.5532L9.52892 13.7222C9.21348 13.493 8.78634 13.493 8.47091 13.7222L5.95075 15.5532C5.24541 16.0656 4.29638 15.3761 4.5658 14.5469L5.52841 11.5843C5.6489 11.2135 5.5169 10.8073 5.20146 10.5781L2.68131 8.7471C1.97597 8.23464 2.33847 7.11898 3.21032 7.11898H6.3254C6.7153 7.11898 7.06086 6.86792 7.18135 6.4971L8.14396 3.53448Z"
              fill="#FFC60B"
            />
          </svg>

          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.14396 3.53448C8.41338 2.7053 9.58645 2.7053 9.85586 3.53448L10.8185 6.4971C10.939 6.86792 11.2845 7.11898 11.6744 7.11898H14.7895C15.6614 7.11898 16.0239 8.23464 15.3185 8.7471L12.7984 10.5781C12.4829 10.8073 12.3509 11.2135 12.4714 11.5843L13.434 14.5469C13.7034 15.3761 12.7544 16.0656 12.0491 15.5532L9.52892 13.7222C9.21348 13.493 8.78634 13.493 8.47091 13.7222L5.95075 15.5532C5.24541 16.0656 4.29638 15.3761 4.5658 14.5469L5.52841 11.5843C5.6489 11.2135 5.5169 10.8073 5.20146 10.5781L2.68131 8.7471C1.97597 8.23464 2.33847 7.11898 3.21032 7.11898H6.3254C6.7153 7.11898 7.06086 6.86792 7.18135 6.4971L8.14396 3.53448Z"
              fill="#FFC60B"
            />
          </svg>
        </div>
      </div>
      <div>
        <div className="w-[120px] cursor-pointer h-9 p-2.5 bg-white rounded-lg border border-green-600 justify-center items-center gap-2.5 inline-flex">
          <div className="text-green-600 text-sm font-semibold font-['Montserrat']">
            Restore
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrushCard;
