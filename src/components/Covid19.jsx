import { darkScrollbar } from "@mui/material";
import React, { useState, useEffect } from "react";
import "../Styles/Covid19.css";

const Covid19 = () => {
  const [covidData, setCovidData] = useState([]);
  const getData = async () => {
    try {
      const resp = await fetch("https://data.covid19india.org/data.json");
      const ActualData = await resp.json();
      console.log(ActualData);
      setCovidData(ActualData.statewise);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="conatiner__covid19">
        <div className="covid19__heading__box">
          <h1 className="covid19__title">
            <span className="covid19__india">india</span> covid 19 Dashboard
          </h1>
          <div className="covid19__table__box">
            <table className="table table-striped">
              <thead>
                <tr className="table-dark">
                  <th scope="col" className="state">
                    State
                  </th>
                  <th scope="col" className="confirmed">
                    Confirmed
                  </th>
                  <th scope="col" className="confirmed">
                    Recovered
                  </th>
                  <th scope="col" className="Deaths">
                    Deaths
                  </th>
                  <th scope="col" className="confirmed">
                    Active
                  </th>
                  <th scope="col" className="confirmed">
                    UpdateTime
                  </th>
                </tr>
              </thead>
              <tbody>
                {covidData.map((cuurentElemet, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <th className="state__data">{cuurentElemet.state}</th>
                        <td className="state__data">
                          {cuurentElemet.confirmed}
                        </td>
                        <td className="state__data">
                          {cuurentElemet.recovered}
                        </td>
                        <td className="state__deaths">
                          {cuurentElemet.deaths}
                        </td>
                        <td className="state__data">{cuurentElemet.active}</td>
                        <td className="state__data">
                          {cuurentElemet.lastupdatedtime}
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Covid19;
