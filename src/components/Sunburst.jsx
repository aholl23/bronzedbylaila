function Sunburst({ className = '', strokeWidth = 1.5, preserveAspectRatio = 'xMidYMid meet' }) {
  return (
    <svg
      viewBox="0 0 200 120"
      preserveAspectRatio={preserveAspectRatio}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
    >
      <line x1="68.1" y1="96.4" x2="45.5" y2="88.2" />
      <line x1="70.2" y1="91.6" x2="57.9" y2="84.9" />
      <line x1="73.0" y1="87.3" x2="50.8" y2="70.3" />
      <line x1="76.5" y1="83.4" x2="66.8" y2="73.3" />
      <line x1="80.5" y1="80.1" x2="69.0" y2="63.8" />
      <line x1="85.0" y1="77.5" x2="78.8" y2="65.0" />
      <line x1="89.8" y1="75.6" x2="80.8" y2="47.0" />
      <line x1="94.8" y1="74.4" x2="92.7" y2="60.6" />
      <line x1="100.0" y1="74.0" x2="100.0" y2="52.0" />
      <line x1="105.2" y1="74.4" x2="107.3" y2="60.6" />
      <line x1="110.2" y1="75.6" x2="119.2" y2="47.0" />
      <line x1="115.0" y1="77.5" x2="121.2" y2="65.0" />
      <line x1="119.5" y1="80.1" x2="131.0" y2="63.8" />
      <line x1="123.5" y1="83.4" x2="133.2" y2="73.3" />
      <line x1="127.0" y1="87.3" x2="149.2" y2="70.3" />
      <line x1="129.8" y1="91.6" x2="142.1" y2="84.9" />
      <line x1="131.9" y1="96.4" x2="154.5" y2="88.2" />
      <path d="M 66 108 A 34 34 0 0 1 134 108" />
      <line x1="0" y1="108" x2="66" y2="108" />
      <line x1="134" y1="108" x2="200" y2="108" />
    </svg>
  );
}

export default Sunburst;
