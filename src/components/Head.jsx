export const Head = () => {
  return (
    <div className="h-1/2 md:h-full">
      <div
        className="bg-ball h-full bg-cover bg-center 
          sm:bg-center md:bg-center md:bg-cover lg:bg-right md:bg-no-repeat w-full"
      >
        <h1 className="uppercase bg-gray-800 md:h-1/3 bg-opacity-40 md:bg-opacity-0 text-red-500 pt-20 md:flex md:mr-4 md:justify-end lg:flex lg:mr-4 lg:justify-end  text-center font-semi-bold text-2xl md:text-4xl tracking-widest h-1/2">
          футбольная <br />
          статистика
        </h1>

        <div className="w-full bg-gray-800 bg-opacity-40 md:bg-opacity-0 flex justify-center md:justify-end ">
          <h1 className="self-center text-white md:text-2xl lg:text-2xl flex md:self-start uppercase text-lg tracking-widest md:mr-4">
            для каждого
          </h1>
        </div>
      </div>
    </div>
  );
};
