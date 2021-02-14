import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api";
import { MatchesList } from "../components/MatchesList";
import { TeamInfoComponent } from "../components/TeamInfoComponent";
import { TeamMatchesFormComponent } from "../components/TeamMatchesFormComponent";

export const TeamInfoContainer = () => {
  let { teamId } = useParams();
  const [teamInfo, setTeamInfo] = useState({});
  const [squad, setSquad] = useState([]);
  const [coach, setCoach] = useState("");
  // const[leagueName, setLeagueName] = useState('')

  const [matches, setMatches] = useState([]);

  //Dates
  const today = new Date().toISOString().slice(0, 10);
  let nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 6);
  const formatedNextDate = nextDate.toISOString().slice(0, 10);

  //Matches form
  const [from, setFrom] = useState(today);
  const [to, setTo] = useState(formatedNextDate);

  useEffect(() => {
    (async () => {
      const teamInfo = await fetchData(`teams/${teamId}`);
      setTeamInfo(teamInfo);
      setSquad(teamInfo?.squad);
      const fetchedCoach = await teamInfo.squad?.find(
        (person) => person.role === "COACH"
      ).name;
      await setCoach(fetchedCoach);
      // setLeagueName(teamInfo.name)
    })();
  }, []);

  //to fetch matches for selected team
  //to submit form
  const handleGetMatches = async (e) => {
    e.preventDefault();
    try {
      const data = await fetchData(
        `teams/${teamId}/matches?dateFrom=${from}&dateTo=${to}`
      );
      setMatches(data.matches);
    } catch (error) {
      console.log(error);
    }
  };

  //to clear old results list
  //for new selected team
  const handleClearResults = () => {
    setMatches("");
  };

  //set date from
  const handleSetFrom = (e) => {
    setFrom(e.target.value);
  };

  //set date to
  const handleSetTo = (e) => {
    setTo(e.target.value);
  };

  //reset searched data
  const handleResetInput = () => {
    setFrom(today);
    setTo("");
  };

  return (
    <>
      <TeamInfoComponent teamInfo={teamInfo} squad={squad} coach={coach} />
      <TeamMatchesFormComponent
        to={to}
        from={from}
        handleResetInput={handleResetInput}
        getMatches={handleGetMatches}
        handleSetFrom={handleSetFrom}
        handleSetTo={handleSetTo}
      />
      <MatchesList handleClearResults={handleClearResults} matches={matches} />
    </>
  );
};
