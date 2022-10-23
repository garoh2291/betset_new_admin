import { Button } from "antd";
import React from "react";
import { memo, useState } from "react";
import { DescriptionForm } from "../../../../Description";
import { ProDescritptionAndProbability } from "../../../ProDescription";

export const SportPositionItemListItem = memo(
  ({
    positions,
    itemEn,
    itemRu,
    globalPosition,
    localPosition,
    index,
    onSubEvent,
    globalPositionEn,
    globalPositionRu,
  }) => {
    const [checked, setChecked] = useState(false);
    const positionsEn = itemEn.Stakes[index];
    const positionsRu = itemRu.Stakes[index];
    const changeChecked = () => setChecked((prev) => !prev);

    if (!positionsEn || !positions || !positionsRu) {
      return <p>loading</p>;
    }

    const positionDetails = {
      positionAm: `${globalPosition ? `${globalPosition} - ` : ""}${
        positions.A ? `${positions.SFN} (${positions.A})` : `${positions.SFN}`
      }`,
      positionEn: `${globalPositionEn ? `${globalPositionEn} - ` : ""}${
        positionsEn.A
          ? `${positionsEn.SFN} (${positionsEn.A})`
          : `${positionsEn.SFN}`
      }`,
      positionRu: `${globalPositionRu ? `${globalPositionRu} - ` : ""}${
        positionsRu.A
          ? `${positionsRu.SFN} (${positionsRu.A})`
          : `${positionsRu.SFN}`
      }`,
      coef: positions.F,
    };

    return (
      <>
        <Button
          onClick={changeChecked}
          data-coef={positions.F}
          data-position-am={`${globalPosition ? `${globalPosition} - ` : ""}${
            positions.A
              ? `${positions.SFN} (${positions.A})`
              : `${positions.SFN}`
          }`}
          data-position-en={`${
            globalPositionEn ? `${globalPositionEn} - ` : ""
          }${
            positionsEn.A
              ? `${positionsEn.SFN} (${positionsEn.A})`
              : `${positionsEn.SFN}`
          }`}
          data-position-ru={`${
            globalPositionRu ? `${globalPositionRu} - ` : ""
          }${
            positionsRu.A
              ? `${positionsRu.SFN} (${positionsRu.A})`
              : `${positionsRu.SFN}`
          }`}
        >{`${
          positions.A ? `${positions.SFN} (${positions.A})` : `${positions.SFN}`
        } : ${positions.F}`}</Button>
        {checked && (
          <ProDescritptionAndProbability
            positionDetails={positionDetails}
            onSubEvent={onSubEvent}
            changeChecked={changeChecked}
          />
        )}
      </>
    );
  }
);
