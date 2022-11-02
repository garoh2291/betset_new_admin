import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { SportPositionItemList } from "./SportPositionItemList";

export const SportPositionType = ({
  event,
  eventsEn,
  eventsRu,
  onSubEvent,
  index,
  type,
}) => {
  const armPositionArray = event.StakeTypes;
  const enPositionsArray = eventsEn[index].StakeTypes;
  const ruPositionsArray = eventsRu[index].StakeTypes;

  function sportPositionTypeFilter(item, index) {
    if (index < 16) {
      return item;
    }
  }

  const finalPositionsAm = armPositionArray.filter(sportPositionTypeFilter);

  const finalPositionsEn = enPositionsArray.filter(sportPositionTypeFilter);

  const finalPositionsRu = ruPositionsArray.filter(sportPositionTypeFilter);

  const globalPosition = event.PN ? event.PN : "";
  const globalPositionEn = eventsEn[index].PN ? eventsEn[index].PN : "";
  const globalPositionRu = eventsRu[index].PN ? eventsRu[index].PN : "";

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
        <Typography>{event.PN === "" ? "Գլխավոր" : `${event.PN}`}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontSize: { md: "1.5vw", lg: "1vw", xl: "20px" } }}>
          {finalPositionsAm.map((item, index) => (
            <SportPositionItemList
              key={item.Id}
              item={item}
              finalPositionsEn={finalPositionsEn}
              finalPositionsRu={finalPositionsRu}
              index={index}
              globalPosition={globalPosition}
              globalPositionEn={globalPositionEn}
              globalPositionRu={globalPositionRu}
              onSubEvent={onSubEvent}
              type={type}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
