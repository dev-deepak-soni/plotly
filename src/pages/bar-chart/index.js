import dynamic from "next/dynamic";

const Plot = dynamic(import("react-plotly.js"), {
  ssr: false,
});

function BarChart() {
  return (
    <div class="w-full h-[100vh] md:h-96 lg:h-128 xl:h-160 mb-20 text-center">
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: "100%", height: "100%", title: "A Fancy Plot" }}
      />
    </div>
  );
}

export default BarChart;
