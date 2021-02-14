import { NavLink } from "react-router-dom";

export const League = ({league}) => {
  return (
    <div className="bg-gray-900 rounded-sm py-4 px-3 mt-2 mb-2 w-full md:w-2/3">
      <h1 className="text-center text-2xl border-b border-red-500 mx-10">
        <NavLink exact to={`/leagues/${league.id}`}>
          {league.name}
        </NavLink>
      </h1>

      <div className="flex flex-row justify-center items-center mt-1">
        <h2 className="inline-block mr-1">{league.area.name}</h2>
        {league.area.ensignUrl && (
          <img
            className="inline-block"
            width="50"
            src={league.area.ensignUrl}
          />
        )}
      </div>

      {league.currentSeason && (
        <div className="flex flex-row items-baseline">
          <div className="w-1/2">
            <h2 className="mt-4 ml-10 text-md"> Текущий сезон: </h2>
          </div>
          <div className="w-1/2">
            <h2>{league.currentSeason.startDate}</h2>
            <h2>{league.currentSeason.endDate}</h2>
          </div>
          
        </div>
      )}
      <div className='text-center' >
            <NavLink className='mt-3 px-3 py-1 border text-red-500 border-red-500 hover:bg-red-500 hover:text-white inline-block' exact to={`/leagues/${league.id}/teams`}>Список команд</NavLink>
          </div>
    </div>
  );
};
