import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import Axios from "../../api/axios";

export default function LineGraphCase() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      let dataApi = await Axios.get("historical/all?lastdays=120").then(
        (res) => res.data
      );
      let dataFormat = {
        labels: Object.keys(dataApi.cases),
        datasets: [
          {
            data: Object.values(dataApi.cases),
            label: "Cases",
            borderColor: "#CC1034",
            fill: false,
          },
          {
            data: Object.values(dataApi.recovered),
            label: "Recovered",
            borderColor: "#008000",
            fill: false,
          },
          {
            data: Object.values(dataApi.deaths),
            label: "Deaths",
            borderColor: "#000000",
            fill: false,
          },
        ],
      };
      setData(dataFormat);
    }
    getData();
  }, []);

  return (
    <div className="line-graph-case">
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: "Bảng thống kê toàn thế giới trong vòng 120 ngày qua",
          },
          legend: {
            display: true,
            position: "bottom",
          },
        }}
      />
    </div>
  );
}
