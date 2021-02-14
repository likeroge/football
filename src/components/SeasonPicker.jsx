export const SeasonPicker = ({years, getTeams, season, handleSetSeason}) => {
    return (
        <div className='flex flex-col items-center'>
            <h1 className='text-xl mt-2 mb-2'>Выберите сезон</h1>
            <select className='text-gray-900 block w-1/2 md:w-40' onChange={(e)=>handleSetSeason(e.target.value)}>
                {
                    years.map( year => {
                        return (
                            <option key={year} value={year} >{+year - 1} - {year}</option>
                        )
                    })
                }
            </select>

            <button onClick={getTeams} className='inline-block bg-green-500 px-4 py-2 mt-2 mx-10'>Показать</button>
        </div>
    )
}
