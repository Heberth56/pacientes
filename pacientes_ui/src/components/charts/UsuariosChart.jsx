import { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const backgroundColor = [
  "rgba(255, 99, 132, 0.2)",
  "rgba(54, 162, 235, 0.2)",
  "rgba(255, 206, 86, 0.2)",
  "rgba(75, 192, 192, 0.2)",
  "rgba(153, 102, 255, 0.2)",
  "rgba(255, 159, 64, 0.2)",
];

const borderColor = [
  "rgba(255, 99, 132, 1)",
  "rgba(54, 162, 235, 1)",
  "rgba(255, 206, 86, 1)",
  "rgba(75, 192, 192, 1)",
  "rgba(153, 102, 255, 1)",
  "rgba(255, 159, 64, 1)",
];

const UsuariosChart = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [
      {
        label: "Usuarios",
      },
    ],
  });
  const [animationDuration, setAnimationDuration] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setChartData({
              labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
              datasets: [
                {
                  label: "Usuarios",
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor,
                  borderColor,
                  borderWidth: 1,
                },
              ],
            });
            setAnimationDuration(1000);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) observer.observe(chartRef.current);

    return () => observer.disconnect();
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Usuarios/Roles",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
    animation: {
      duration: animationDuration,
    },
  };

  return (
    <div
      ref={chartRef}
      className="w-full h-48 sm:h-72 md:h-72 lg:h-120 max-w-4xl mx-auto"
    >
      <Line data={chartData} options={options} />
    </div>
  );
};

export default UsuariosChart;
