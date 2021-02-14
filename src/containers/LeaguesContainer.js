import { useEffect, useState } from "react";
import { availableLeagues, fetchData } from "../api";
import { LeaguesList } from "../components/LeaguesList";
import { SearchLeague } from "../components/SearchLeague";

export const LeaguesContainer = () => {
  const [leagues, setLeagues] = useState([]);
  const [textToSearch, setTextToSearch] = useState("");
  const [searchedLeagues, setSearchedLeagues] = useState([]);

  useEffect(() => {
    (async () => {
      const leagues = await fetchData("competitions");

      //For free account available leagues from availableLeagues only!!!
      const onlyAvailableLeagues = leagues.competitions.filter((league) => {
        let pattern = league.id.toString();
        return availableLeagues.includes(pattern);
      });
      setLeagues(onlyAvailableLeagues);
      setSearchedLeagues(onlyAvailableLeagues);

      //For advanced account !!!!!!!!!!
      // setLeagues(leagues.competitions)
      // setSearchedLeagues(leagues.competitions)
    })();
  }, []);

  //To search league in leagues list
  const handleSearch = (e) => {
    e.preventDefault();
    const searchedLeagues = leagues.filter((league) => {
      //to check if league.name includes searched text
      return league.name.toLowerCase().includes(textToSearch.toLowerCase());
    });
    setSearchedLeagues(searchedLeagues);
  };

  //to reset result-list
  const handleClear = () => {
    setTextToSearch("");
    setSearchedLeagues(leagues);
  };

  //to input onChange reaction
  const handleSetToSearch = (text) => {
    if (text === "") {
      setSearchedLeagues(leagues);
    }
    setTextToSearch(text);
  };

  return (
    <>
      <SearchLeague
        handleSearch={handleSearch}
        handleSetToSearch={handleSetToSearch}
        handleClear={handleClear}
        textToSearch={textToSearch}
      />
      <LeaguesList leagues={searchedLeagues} />
    </>
  );
};
