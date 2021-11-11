export const data_1 = {
  labels: [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayis",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasim",
    "Aralik",
  ],
  datasets: [
    {
      label: "Oğrencinin Test Çözme Durumu",
      data: [1, 2, 2, 0, 5, 2, 1, 6, 7, 3, 2, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)",
        "rgba(255, 159, 64, 0.6)",
        "rgba(255, 99, 132, 0.6)",
      ],
    },
  ],
};

export const options_1 = {
  title: {
    display: true,
    text: "Oğrencinin Test Çözme Durumu",
    fontSize: 25,
  },
  legend: {
    display: true,
    position: "botton",
  },
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
