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
  function filteredArrayAm(item, index, array) {
    if (
      index === 0 ||
      array[index].PN === "Անկյունայիններ" ||
      array[index].PN === "Դեղին քարտեր"
    ) {
      return item;
    }
  }
  function filteredArrayEn(item, index, array) {
    if (
      index === 0 ||
      array[index].PN === "Corners" ||
      array[index].PN === "Yellow Cards"
    ) {
      return item;
    }
  }

  function filteredArrayRu(item, index, array) {
    if (
      index === 0 ||
      array[index].PN === "Угловые" ||
      array[index].PN === "Желтые карточки"
    ) {
      return item;
    }
    return;
  }

  const array = matchDetailsAm.filter(filteredArrayAm);
  const arrayEn = matchDetailsEn.filter(filteredArrayEn);

  const arrayRu = matchDetailsRu.filter(filteredArrayRu);

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
