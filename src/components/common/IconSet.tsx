function IconSet() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="hidden">
      <symbol id="home" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M12 2L2 9.5V19.5C2 20.6046 2.89543 21.5 4 21.5H20C21.1046 21.5 22 20.6046 22 19.5V9.5L12 2ZM14 21.5H10V14H14V21.5Z"
        />
      </symbol>
      <symbol id="sessions" viewBox="0 0 24 24">
        <rect
          x="3"
          y="5"
          width="18"
          height="16"
          rx="2.5"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M16 3V7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M8 3V7"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M3 11H21"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </symbol>
      <symbol id="online" viewBox="0 0 24 24">
        <rect
          x="6"
          y="5"
          width="16"
          height="11"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path d="M13 8L18 10.5L13 13V8Z" fill="currentColor" />
        <path
          d="M17 20H4C3.17157 20 2.5 19.3284 2.5 18.5V11.5C2.5 10.6716 3.17157 10 4 10H5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </symbol>
      <symbol id="progress" viewBox="0 0 24 24">
        <path
          d="M4 22H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect
          x="5"
          y="16"
          width="2.5"
          height="5"
          rx="1.25"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="10"
          y="10"
          width="2.5"
          height="11"
          rx="1.25"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <rect
          x="15"
          y="6"
          width="2.5"
          height="15"
          rx="1.25"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M7 6L14 1M14 1L11 1M14 1L14 4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </symbol>
      <symbol id="login" viewBox="0 0 24 24">
        <rect x="0" y="0" width="24" height="24" rx="4" fill="#2E6B6B" />
        <rect x="4" y="4" width="4" height="4" fill="white" />
        <rect x="16" y="4" width="4" height="4" fill="white" />
        <rect x="4" y="16" width="4" height="4" fill="white" />
        <rect x="5" y="5" width="2" height="2" fill="#2E6B6B" />
        <rect x="17" y="5" width="2" height="2" fill="#2E6B6B" />
        <rect x="5" y="17" width="2" height="2" fill="#2E6B6B" />
        <rect x="16" y="16" width="2" height="2" fill="white" />
        <rect x="18" y="16" width="2" height="2" fill="white" />
        <rect x="16" y="18" width="2" height="2" fill="white" />
      </symbol>
      <symbol id="favorite" viewBox="0 0 512 512">
        <path
          fill="currentColor"
          stroke="stroke-current"
          strokeWidth="40"
          d="M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"
        />
      </symbol>
      <symbol id="search" viewBox="0 -960 960 960" fill="currentColor">
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
      </symbol>
      <symbol
        id="back"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z" />
      </symbol>
    </svg>
  )
}

export default IconSet
