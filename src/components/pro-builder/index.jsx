import React, { useEffect, useState } from "react";
import { ProBuilderForm } from "./ProBuilderForm";
import { SportItem } from "./SportItem";
import "./styles.css";

export const ProBuilder = () => {
  const [sport, setSport] = useState([]);
  // const [selSport,setSelSport] = useState(null)
  const [country, setcountry] = useState([]);
  const [leagues, setLeagues] = useState([]);
  const [matchs, setMatchs] = useState(null);

  useEffect(() => {
    fetch(
      // " https://sportiframe.totogaming.am/Live/Sports?langId=3&partnerId=555&countryCode="
      "https://sportiframe.totogaming.am/Prematch/GetSportsWithCount?timeFilter=2&langId=3&partnerId=555&countryCode="
    )
      .then((res) => res.json())
      .then((data) => setSport(data));
  }, []);

  const changeSport = (e) => {
    fetch("https://sportiframe.totogaming.am/Common/GetCountryList", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        countryCode: null,
        langId: 3,
        partnerId: 555,
        sportId: e,
        timeFilter: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => setcountry(data));
  };

  const changeHandleCountry = (e) => {
    fetch("https://sportiframe.totogaming.am/Common/GetChampsList", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        countryCode: null,
        countryId: e,
        langId: 3,
        partnerId: 555,
        timeFilter: 0,
      }),
    })
      .then((res) => res.json())
      .then((data) => setLeagues(data));
  };

  const changeHandleLeagues = (e) => {
    fetch(
      `https://sportiframe.totogaming.am/Prematch/GetEventsList?champId=${e}&timeFilter=2&langId=3&partnerId=555&countryCode=`
    )
      .then((res) => res.json())
      .then((data) => setMatchs(data));
  };

  return (
    <div className="pro_builder_wrapper">
      <ProBuilderForm
        changeSport={changeSport}
        sport={sport}
        changeHandleCountry={changeHandleCountry}
        country={country}
        changeHandleLeagues={changeHandleLeagues}
        leagues={leagues}
      />
      <div className="events_wrapper">
        {matchs &&
          matchs.map((match) => {
            return <SportItem key={match.Id} match={match} />;
          })}
      </div>
    </div>
  );
};
