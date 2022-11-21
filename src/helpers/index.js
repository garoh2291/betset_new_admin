import afootbal from "../assets/afootball.png";
import hockey from "../assets/hockey.png";
import soccer from "../assets/soccer.png";
import tennis from "../assets/tennis.png";
import ttennis from "../assets/ttennis.png";
import volleyball from "../assets/volleyball.png";
import basketball from "../assets/basketball.jpeg";
import * as moment from "moment";
///
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbCloudyIcon from "@mui/icons-material/WbCloudy";

const today = new Date();
const today1 = new Date(`${today}`);
const finalDate = moment(today1).utc(8).toISOString();

export function sportType(sport) {
  switch (sport) {
    case "volleyball":
      return <img src={volleyball} alt="img" width={"30px"} height="30px" />;
    case "basketball":
      return (
        <img
          src={basketball}
          alt="img"
          width={"24px"}
          height="24px"
          style={{ marginRight: "7px" }}
        />
      );
    case "ice hockey":
      return <img src={hockey} alt="img" width={"20px"} height="20px" />;
    case "regby":
      return <img src={afootbal} alt="img" width={"30px"} height="30px" />;
    case "tabbleTennis":
      return <img src={ttennis} alt="img" width={"30px"} height="30px" />;
    case "tennis":
      return <img src={tennis} alt="img" width={"30px"} height="30px" />;
    default:
      return <img src={soccer} alt="img" width={"30px"} height="30px" />;
  }
}

export const generateQuery = (_searchSortQuery) => {
  let query = "";
  _searchSortQuery.forEach((item) => {
    if (item.queryValue !== "") {
      return (query += `${item.queryRoute}=${item.queryValue}&`);
    }
  });
  if (query === "") {
    return `complete_gte=${finalDate}`;
  } else {
    return query;
  }
};

export const generateQueryExpress = (_searchSortQuery) => {
  let query = "";
  _searchSortQuery.forEach((item) => {
    if (item.queryValue !== "") {
      return (query += `${item.queryRoute}=${item.queryValue}&`);
    }
  });
  if (query === "") {
    return `complete_gte=${finalDate}`;
  } else {
    return query;
  }
};

export function weatherType(weather) {
  switch (weather) {
    case "sunny":
      return <WbSunnyIcon width={"24px"} height={"24px"} />;
    case "rainy":
      return <ThunderstormIcon width={"24px"} height={"24px"} />;
    case "snowy":
      return <AcUnitIcon width={"24px"} height={"24px"} />;
    default:
      return <WbCloudyIcon width={"24px"} height={"24px"} />;
  }
}

export const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

export function checkProbability(cf, probability) {
  const risk =
    ((parseFloat(cf) * parseFloat(probability)) / 100 - 1) /
    (parseFloat(cf) - 1);
  if (risk >= 0.9) {
    return "best";
  } else if (risk >= 0.7 && risk < 0.9) {
    return "low";
  } else if (risk >= 0.5 && risk < 0.7) {
    return "medium";
  } else if (risk >= 0.3 && risk < 0.5) {
    return "high";
  } else if (risk >= 0.1 && risk < 0.3) {
    return "extreme";
  } else {
    return "wrong";
  }
}
