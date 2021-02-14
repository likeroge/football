import { NavLink } from "react-router-dom";

export const TeamComponent = ({ team }) => {
  return (
    <div className="flex flex-col items-center py-4 px-3 bg-gray-900 mb-4 rounded-sm w-3/4 md:w-2/4">
      <NavLink exact to={`/teams/${team.id}`}>
        <h1 className="text-center text-2xl border-b border-red-500">
          {team.name}
        </h1>
      </NavLink>
      <NavLink exact to={`/teams/${team.id}`}>
        <img className="inline-block mt-2" width="150" src={team.crestUrl} />
      </NavLink>
    </div>
  );
};
