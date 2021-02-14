import { useHistory } from "react-router-dom";

export const Main = () => {
  const history = useHistory();
  return (
    <div className="h-1/2 bg-gray-900 text-white text-xl md:hidden">
      <div className="h-1/2 w-full flex p-4">
        <div className="img-league w-1/2 rounded"></div>
        <div onClick={() => history.push("/leagues")} className="link w-1/2 flex items-center justify-center">
          <div >
            <h1 className="text-2xl">Все</h1>
            <h2 className="text-red-500 border-b-2 border-red-500">лиги</h2>
          </div>
          
        </div>
      </div>

      <hr className='mx-4' />
      
      <div className="h-1/2 w-full flex p-4">
        <div className="" onClick={() => history.push("/todaysmatches")} className="link  w-1/2 flex items-center justify-center">
          <div >
            <h1 className="text-2xl">Матчи</h1>
            <h2 className="text-red-500 border-b-2 border-red-500">сегодня</h2>
          </div>
        </div>
        <div className="img-team w-1/2 rounded"></div>
      </div>
    </div>
  );
};
