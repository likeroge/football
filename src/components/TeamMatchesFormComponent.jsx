export const TeamMatchesFormComponent = ({league, to, from, handleResetInput, getMatches, handleSetFrom, handleSetTo}) => {
    return (
        <div className='flex flex-col items-center mb-2 pb-6'>
            <h1 className='text-red-500 text-xl pt-2'>Показать матчи {league}</h1>
            <form onSubmit={getMatches}>
                <label htmlFor="">С</label>
                <input className='text-gray-800 block' value={from}  type="date" name="" id="" onChange={(e)=>handleSetFrom(e)} />
                <label htmlFor="">По</label>
                <input className='text-gray-800 block'  value={to} type="date" name="" id=""onChange={(e)=>handleSetTo(e)} />
                <div className='flex flex-row justify-between'>
                <button className='inline-block bg-green-500 px-4 py-2 mt-2' type="submit">Показать</button>
                <button onClick={handleResetInput} className='inline-block bg-red-500 px-4 py-2 mt-2' >Сбросить</button>
                </div>
            </form>
        </div>
    )
}
