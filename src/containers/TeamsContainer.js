import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api";
import { SeasonPicker } from "../components/SeasonPicker";
import { TeamList } from "../components/TeamList";

export const TeamsContainer = () => {
  //Current year for SaesonPicker
  let today = new Date();
  let year = today.getFullYear();

  //To create new empty array
  //According to FREE account - only 3 seasons
  const zeros = new Array(3).fill(0);
  const years = zeros.map((el, id) => year - id);

  const [season, setSeason] = useState(year);
  const [teams, setTeams] = useState([]);
  let { leagueId } = useParams();

  useEffect(() => {
    (async () => {
      const data = await fetchData(`competitions/${leagueId}/teams`);
      setTeams(data?.teams);
    })();
  }, []);

  //To get teams according to SeasonPicker
  const getTeams = async () => {
    try {
      const data = await fetchData(
        `competitions/${leagueId}/teams?season=${season}`
      );
      setTeams(data?.teams);
    } catch (error) {
      console.log(error);
    }
  };

  //To set season
  const handleSetSeason = (season) => {
    setSeason(season);
  };

  return (
    <div>
      <SeasonPicker
        handleSetSeason={handleSetSeason}
        season={season}
        years={years}
        getTeams={getTeams}
      />
      <TeamList teams={teams} />
    </div>
  );
};
