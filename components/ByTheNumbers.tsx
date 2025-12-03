"use client";

export default function ByTheNumbers() {
  const items = [
    { value: '1020+', label: 'Total Transactions' },
    { value: '$835M', label: 'Total Sales' },
  ];

  return (
    <section
      className="relative bg-center bg-cover"
      style={{
        backgroundImage:
          "linear-gradient(rgba(15, 23, 42, 0.55), rgba(15, 23, 42, 0.55)), url('/assets/hero-1.jpg')",
      }}
    >
      <div className="relative max-w-7xl mx-auto py-28 px-6 text-center text-white">
        <div>
          <span
            className="text-sm md:text-base tracking-widest font-semibold"
            style={{
              color: "white",
              letterSpacing: "1.020em",
              textTransform: "uppercase",
              fontWeight: 600,
              fontSize: "20px",
            }}
          >
            <span className="font-bold text-sky-400">KEYES</span> REAL ESTATE
          </span>
        </div>

        <h2 className="text-4xl md:text-6xl font-extralight mb-12 leading-tight">
          By The Numbers
        </h2>

        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {items.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight">
                {item.value}
              </div>
              <div className="mt-4 text-sm md:text-base uppercase tracking-widest opacity-90">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
