import { Route, Switch } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Toolbar } from "./components/Toolbar";
import { TodaysMatchesPage } from "./pages/TodaysMatchesPage";
import { TeamInfoPage } from "./pages/TeamInfoPage";
import { LeaguesPage } from "./pages/LeaguesPage";
import { MatchesListPage } from "./pages/MatchesListPage";
import { LeagueTeamsPage } from "./pages/LeagueTeamsPage";

function App() {
  return (
    <div className="h-screen /adopted">
      <Toolbar />

      <div className="bg-gray-800 h-full text-white">
        <Switch>
          <Route path="/" exact render={() => <HomePage />} />
          <Route path="/leagues" exact render={() => <LeaguesPage />} />
          <Route path="/todaysmatches" render={() => <TodaysMatchesPage />} />

          <Route path="/teams/:teamId" render={() => <TeamInfoPage />} />

          <Route
            path="/leagues/:leagueId"
            exact
            render={() => <MatchesListPage />}
          />
          <Route
            path="/leagues/:leagueId/teams/"
            render={() => <LeagueTeamsPage />}
          />
        </Switch>
      </div>
    </div>
  );
}

export default App;
