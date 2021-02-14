import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../api";
import { MatchesList } from "../components/MatchesList";
import { TeamMatchesFormComponent } from "../components/TeamMatchesFormComponent";

export const MatchesListContainer = () => {
  const { leagueId } = useParams();
  const [matches, setMatches] = useState([]);

  //Dates
  const today = new Date().toISOString().slice(0, 10);
  let nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + 6);
  const formatedNextDate = nextDate.toISOString().slice(0, 10);

  //Matches form
  const [from, setFrom] = useState(today);
  const [to, setTo] = useState(formatedNextDate);
  const [leagueName, setLeagueName] = useState("");

  useEffect(() => {
    (async () => {
      const data = await fetchData(
        `competitions/${leagueId}/matches?dateFrom=${today}&dateTo=${formatedNextDate}`
      );
      setMatches(data.matches);
      setLeagueName(data.competition.name);
    })();
  }, []);

  //fetch new data
  const getData = async () => {
    try {
      const data = await fetchData(
        `competitions/${leagueId}/matches?dateFrom=${from}&dateTo=${to}`
      );
      setMatches(data.matches);
    } catch (error) {
      console.log(error);
    }
  };

  //form submit -> load new data
  //update matches data
  const handleGetMatches = async (e) => {
    e.preventDefault();
    getData();
  };

  const handleResetInput = async () => {
    setFrom(today);
    setTo(formatedNextDate);
    try {
      const data = await fetchData(
        `competitions/${leagueId}/matches?dateFrom=${from}&dateTo=${to}`
      );
      const matches = await data.matches;
      setMatches(matches);
    } catch (error) {
      console.log(error);
    }
  };

  //to clear matches-list results
  //if other team selected (select other team -> loading other team info)
  //prevent prev. team matched-list
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

  return (
    <>
      <TeamMatchesFormComponent
        league={leagueName}
        handleResetInput={handleResetInput}
        from={from}
        to={to}
        handleSetTo={handleSetTo}
        handleSetFrom={handleSetFrom}
        getMatches={handleGetMatches}
      />
      <MatchesList handleClearResults={handleClearResults} matches={matches} />
    </>
  );
};
