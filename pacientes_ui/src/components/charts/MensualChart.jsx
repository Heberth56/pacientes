import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Filler,
  Title,
  Tooltip,
  Legend
);

const MensualChart = () => {
  const data = {
    labels: ["Ene/Feb", "Mar/Abr", "May/Jun", "Jul/Ago", "Sep/Oct", "Nov/Dic"],
    datasets: [
      {
        type: "line",
        label: "Examenes",
        data: [65, 59, 80, 81, 56, 55, 40],
        borderColor: "#ff0101",
        backgroundColor: "rgba(255, 4, 0, 0.3)",
        fill: true,
        tension: 0.4,
        cubicInterpolationMode: "monotone",
        yAxisID: "y2",
      },
      {
        type: "bar",
        label: "Temas",
        data: [30, 50, 70, 90, 60, 40, 80],
        backgroundColor: "#02d3f3",
        yAxisID: "y1",
      },
      {
        type: "bar",
        label: "Especialidades",
        data: [25, 45, 65, 85, 55, 35, 75],
        backgroundColor: "#ed06a8cd",
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Especialidades - Temas - Examenes",
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
      },
      y1: {
        type: "linear",
        position: "left",
      },
      y2: {
        display: false,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default MensualChart;
