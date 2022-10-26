import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import { SportPositionItemListItem } from "./SportPositionItemListItem";

export const SportPositionItemList = ({
  item,
  finalPositionsEn,
  finalPositionsRu,
  index,
  globalPosition,
  onSubEvent,
  globalPositionEn,
  globalPositionRu,
  type,
}) => {
  const itemEn = finalPositionsEn[index];
  const itemRu = finalPositionsRu[index];
  const localPosition = item.N;
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
        <Typography>{localPosition}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography sx={{ fontSize: { md: "1.5vw", lg: "1vw", xl: "20px" } }}>
          {item.Stakes.map((positions, index) => (
            <SportPositionItemListItem
              key={positions.Id}
              itemEn={itemEn}
              itemRu={itemRu}
              positions={positions}
              globalPosition={globalPosition}
              localPosition={localPosition}
              index={index}
              onSubEvent={onSubEvent}
              globalPositionEn={globalPositionEn}
              globalPositionRu={globalPositionRu}
              type={type}
            />
          ))}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
