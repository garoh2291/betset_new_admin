import React, { useContext } from "react";
import { GameContext } from "../../context";
import { BETSLIP_DATA, MONTHS } from "../../data";
import * as moment from "moment";
import "./styles.css";

export const BetFooter = ({ lang }) => {
  const { betGames } = useContext(GameContext);
  console.log(betGames);
  let earlyDate = betGames[0].date;
  for (let i = 0; i < betGames.length; i++) {
    let checkingDate = new Date(betGames[i].date).getTime();
    if (checkingDate < new Date(earlyDate).getTime()) {
      earlyDate = betGames[i].date;
    }
  }

  const isTime = moment.utc(earlyDate).format("HH:mm");
  const isDate = moment.utc(earlyDate).format("DD MM YYYY");

  console.log(isDate, isTime);

  const totalCf = betGames.reduce((sum, game) => {
    return (sum *= game.coeff);
  }, 1);

  function timeLogic(isTime, isDate, lang) {
    const date0 = `${isDate[3]}${isDate[4]}/${isDate[0]}${isDate[1]}/${isDate[6]}${isDate[7]}${isDate[8]}${isDate[9]} ${isTime}`;
    var md = new Date(date0);
    var milliseconds = md.getTime();

    if (lang === "ru") {
      const forRu = milliseconds - 3600000;
      const date1 = new Date(forRu);
      const finalDate = date1.toLocaleString("en-GB");
      return finalDate;
    } else if (lang === "en") {
      const forEn = milliseconds - 14400000;
      const date1 = new Date(forEn);
      return date1.toLocaleString("en-GB");
    }
    return `${isDate}, ${isTime}`;
  }

  const finalTime = timeLogic(isTime, isDate, lang);

  const month = `${finalTime[3]}${finalTime[4]}`;
  console.log(finalTime);
  console.log(month, lang);

  const date = `${finalTime[0]}${finalTime[1]} ${MONTHS[month][lang]} ${finalTime[6]}${finalTime[7]}${finalTime[8]}${finalTime[9]}`;
  console.log(date);
  const time = `${finalTime[12]}${finalTime[13]}:${finalTime[15]}${finalTime[16]}`;

  return (
    <div className="bet_footer">
      <div className="total_Cf">
        <p className="total_head">{BETSLIP_DATA.footerTotal[lang]}</p>
        <p className="footer_info">{totalCf.toFixed(3)}</p>
      </div>
      <div className="total_Cf">
        <p className="total_head">{BETSLIP_DATA.footerDate[lang]}</p>
        <p className="footer_info">{date}</p>
      </div>
      <div className="total_Cf">
        <p className="total_head">{BETSLIP_DATA.footerTime[lang]}</p>
        <p className="footer_info">
          {time} | {BETSLIP_DATA.footerZone[lang]}{" "}
        </p>
      </div>
    </div>
  );
};
