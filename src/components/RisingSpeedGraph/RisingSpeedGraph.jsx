import css from "./RisingSpeedGraph.module.css";

export default function RisingSpeedGraph({
  width = 320,
  height = 140,
  speed = 10, // швидкість що визначає нахил
  maxSpeed = 100, // максимальне значення для нормалізації
  isPhone,
}) {
  // Обмежуємо speed
  const clamped = Math.min(Math.max(speed, 0), maxSpeed);

  // нормалізуємо: 0 → 0px підйому, maxSpeed → height * 0.7 підйому
  const rise = (clamped / maxSpeed) * (height * 0.7);

  // Координати фігури
  const bottomLeft = [0, height];
  const bottomRight = [width, height];
  const topRight = [width, height - rise];
  const topLeft = [0, height - rise * 0.6]; // щоб лінія була трошки похилою

  return (
    <svg width={width} height={height}>
      {/* нижня форма */}
      <polygon
        className={css.polygon}
        points={`
          ${bottomLeft} 
          ${bottomRight}
          ${topRight}
          ${topLeft}
        `}
      />

      {/* верхня похила лінія */}
      <line
        className={css.line}
        x1={topLeft[0]}
        y1={topLeft[1]}
        x2={topRight[0]}
        y2={topRight[1]}
        strokeWidth={isPhone ? 2.18 : 3}
        strokeLinecap="round"
      />
    </svg>
  );
}
