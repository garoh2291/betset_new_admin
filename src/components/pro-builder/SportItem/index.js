import React, { useEffect, memo, useState } from "react";
import "./styles.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch } from "react-redux";
import * as moment from "moment";

import { SetGameThunk } from "../../../redux/gameSlice";
import { SportItemBody } from "../SportItemBody";
import { message, Skeleton } from "antd";
import { checkProbability, uid } from "../../../helpers";

export const SportItem = memo(({ match, count }) => {
  const [matchDetailsAm, setMatchDetailsAm] = useState();
  const [matchDetailsEn, setMatchDetailsEn] = useState();
  const [matchDetailsRu, setMatchDetailsRu] = useState();
  const dispatch = useDispatch();
  const cbSuccess = () => {
    message.success("Game successfully added");
  };

  const cbError = () => {
    message.error("Can't add this Game");
  };

  ////Date
  const s = new Date(`${match.TempEventDate}`);
  const dt = moment(s).format("YYYY-MM-DD HH:mm:ss");
  const dt2 = new Date(`${dt} UTC`);
  const finalDate = dt2.toISOString();

  //////

  useEffect(() => {
    fetch(
      `https://sportiframe.totogaming.am/Common/GetEvent?eventId=${match.Id}&isLive=false&langId=3&partnerId=555`
    )
      .then((res) => res.json())
      .then((data) => setMatchDetailsAm(data));

    fetch(
      `https://sportiframe.totogaming.am/Common/GetEvent?eventId=${match.Id}&isLive=false&langId=2&partnerId=555`
    )
      .then((res) => res.json())
      .then((data) => setMatchDetailsEn(data));

    fetch(
      `https://sportiframe.totogaming.am/Common/GetEvent?eventId=${match.Id}&isLive=false&langId=1&partnerId=555`
    )
      .then((res) => res.json())
      .then((data) => setMatchDetailsRu(data));
  }, [match.Id]);

  const onSubEvent = (additional) => {
    const {
      positionAm,
      positionEn,
      positionRu,
      descriptionAm,
      descriptionEn,
      descriptionRu,
      probPrc,
      coef,
    } = additional;

    const newGame = {
      team1: {
        am: matchDetailsAm[0].HT,
        en: matchDetailsEn[0].HT,
        ru: matchDetailsRu[0].HT,
      },
      team2: {
        am: matchDetailsAm[0].AT,
        en: matchDetailsEn[0].AT,
        ru: matchDetailsRu[0].AT,
      },
      risk: checkProbability(coef, probPrc),
      sport: matchDetailsEn[0].SN.toLowerCase(),
      coeff: +coef,
      league: {
        am: matchDetailsAm[0].CN,
        en: matchDetailsEn[0].CN,
        ru: matchDetailsRu[0].CN,
      },
      position: {
        am: positionAm,
        en: positionEn,
        ru: positionRu,
      },
      description: {
        am: descriptionAm,
        en: descriptionEn,
        ru: descriptionRu,
      },
      date: finalDate,
    };

    if (newGame.risk === "wrong") {
      message.error("You can't add this game");
    } else {
      dispatch(SetGameThunk({ newGame, cbSuccess, cbError }));
    }
  };

  if (!matchDetailsAm || !matchDetailsEn || !matchDetailsRu) {
    return <Skeleton active />;
  }
  return (
    <Accordion
      sx={{
        mt: 1,
        backgroundColor: "#f8f8fc",
        boxShadow: "none",
      }}
      className="accordion_item"
    >
      <AccordionSummary
        expandIcon={<AddIcon color="success" />}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography>{`${dt}: ${match.HT} - ${match.AT}`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontSize: { md: "1.5vw", lg: "1vw", xl: "20px" } }}>
          {matchDetailsAm && (
            <SportItemBody
              matchDetailsAm={matchDetailsAm}
              matchDetailsEn={matchDetailsEn}
              matchDetailsRu={matchDetailsRu}
              onSubEvent={onSubEvent}
              key={uid()}
            />
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
});
