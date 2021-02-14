import { NavLink } from "react-router-dom";

export const Match = ({ match, handleClearResults }) => {
  return (
    <div className="py-4 px-3 bg-gray-900 mb-4 rounded-sm">
      {match.competition && (
        <div>
          <h1 className="text-center text-xl">{match.competition.name}</h1>
          <img
            width="50"
            className="block w-12 mx-auto"
            src={match.competition.area.ensignUrl}
          />
        </div>
      )}

      <div className="mt-2 text-center">
        {new Date(match.utcDate).toLocaleDateString()}
      </div>
      <div className="text-center">
        {new Date(match.utcDate).toLocaleTimeString()}
      </div>
      <div
        className="text-center"
        style={{ color: match.status === "FINISHED" ? "red" : "greenyellow" }}
      >
        {match.status === "FINISHED" ? "Завершен" : "По расписанию"}
      </div>
      <div className="flex flex-row justify-around items-end">
        <div className="px-2">
          <h1 className="text-xl mb-2 border-b border-red-500 hover:text-red-500">
            <NavLink
              exact
              to={`/teams/${match.homeTeam.id}`}
              onClick={handleClearResults}
            >
              {match.homeTeam.name}
            </NavLink>
          </h1>

          {+match.score.fullTime.homeTeam >= 0 ? (
            <div className="text-center text-2xl">
              {match.score.fullTime.homeTeam}
            </div>
          ) : +match.score.halfTime.homeTeam >= 0 ? (
            <div className="text-center text-2xl">
              {match.score.halfTime.homeTeam}
            </div>
          ) : (
            "-"
          )}
        </div>
        <div className="px-2">
          <h1 className="text-xl mb-2 border-b border-red-500 hover:text-red-500">
            <NavLink
              exact
              to={`/teams/${match.awayTeam.id}`}
              onClick={handleClearResults}
            >
              {match.awayTeam.name}
            </NavLink>
          </h1>

          {+match.score.fullTime.awayTeam >= 0 ? (
            <div className="text-center text-2xl">
              {match.score.fullTime.awayTeam}
            </div>
          ) : +match.score.halfTime.awayTeam >= 0 ? (
            <div className="text-center text-2xl">
              {match.score.halfTime.awayTeam}
            </div>
          ) : (
            "-"
          )}
        </div>
      </div>
    </div>
  );
};
