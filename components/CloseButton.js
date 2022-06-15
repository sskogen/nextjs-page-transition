export default function CloseButton({ onClick, style }) {
  return (
    <button
      style={{
        height: "48px",
        width: "48px",
        background: "none",
        border: "none",
        borderRadius: "200px",
        padding: "8px",
        cursor: "pointer",
          ...style
      }}
      onClick={onClick}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M36.617 38.7383C37.2028 39.3241 38.1525 39.3241 38.7383 38.7383C39.3241 38.1525 39.3241 37.2028 38.7383 36.617L22.1213 20L38.7383 3.38299C39.3241 2.79721 39.3241 1.84746 38.7383 1.26167C38.1525 0.675885 37.2028 0.675885 36.617 1.26167L20 17.8787L3.383 1.26167C2.79721 0.675885 1.84746 0.675885 1.26168 1.26167C0.675889 1.84746 0.675889 2.79721 1.26168 3.38299L17.8787 20L1.26168 36.617C0.675889 37.2028 0.675889 38.1525 1.26168 38.7383C1.84746 39.3241 2.79721 39.3241 3.383 38.7383L20 22.1213L36.617 38.7383Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
