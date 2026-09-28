function HeroSun({ className = '', compact = false }) {
  const viewBox = compact ? '100 150 500 155' : '0 150 700 170';

  return (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
        {/* half-circle sun */}
        <path d="M 278 300 A 72 72 0 0 1 422 300" />

        {/* center rays (tall, close together) */}
        <line x1="350" y1="230" x2="350" y2="165" />
        <line x1="332" y1="232" x2="322" y2="170" />
        <line x1="368" y1="232" x2="378" y2="170" />
        <line x1="315" y1="238" x2="298" y2="182" />
        <line x1="385" y1="238" x2="402" y2="182" />

        {/* mid rays (medium length, wider angle) */}
        <line x1="298" y1="248" x2="266" y2="200" />
        <line x1="402" y1="248" x2="434" y2="200" />
        <line x1="280" y1="260" x2="238" y2="222" />
        <line x1="420" y1="260" x2="462" y2="222" />
        <line x1="263" y1="274" x2="212" y2="248" />
        <line x1="437" y1="274" x2="488" y2="248" />

        {/* outer rays (long, sparse, wide spacing) */}
        <line x1="248" y1="288" x2="180" y2="272" />
        <line x1="452" y1="288" x2="520" y2="272" />
        <line x1="235" y1="298" x2="150" y2="292" />
        <line x1="465" y1="298" x2="550" y2="292" />

        {/* ground line breaks, far left and right */}
        <line x1="110" y1="300" x2="180" y2="300" />
        <line x1="520" y1="300" x2="590" y2="300" />
      </g>
    </svg>
  );
}

export default HeroSun;
