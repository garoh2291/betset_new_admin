import React from "react";
import { uid } from "../../../helpers";
import { SportPositionType } from "../SportPositionType";

export const SportItemBody = ({
  matchDetailsAm,
  matchDetailsEn,
  matchDetailsRu,
  onSubEvent,
  type,
}) => {
  const array = matchDetailsAm.filter((item, index, array) => {
    if (
      index === 0 ||
      array[index].PN === "Անկյունայիններ" ||
      array[index].PN === "Դեղին քարտեր"
    ) {
      return item;
    }
  });

  const arrayEn = matchDetailsEn.filter((item, index, array) => {
    if (
      index === 0 ||
      array[index].PN === "Corners" ||
      array[index].PN === "Yellow Cards"
    ) {
      return item;
    }
  });

  const arrayRu = matchDetailsRu.filter((item, index, array) => {
    if (
      index === 0 ||
      array[index].PN === "Угловые" ||
      array[index].PN === "Желтые карточки"
    ) {
      return item;
    }
  });

  return (
    <>
      {array.map((event, index) => {
        return (
          <div>
            <SportPositionType
              key={uid()}
              event={event}
              eventsEn={arrayEn}
              eventsRu={arrayRu}
              onSubEvent={onSubEvent}
              index={index}
              type={type}
            />
          </div>
        );
      })}
    </>
  );
};
