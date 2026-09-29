export default function Marquee({
  items,
  direction = 'left',
  speed = 30,
  gap = 32,
  itemClass = '',
  separator = '·',
}) {
  const doubled = [...items, ...items]

  return (
    <div className={`marquee-wrap marquee-${direction}`}>
      <div
        className="marquee-track"
        style={{ animationDuration: `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className={itemClass}
            style={{ paddingRight: gap }}
          >
            {item}
            {separator && (
              <span style={{ paddingLeft: gap, opacity: 0.4 }}>{separator}</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
