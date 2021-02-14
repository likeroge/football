export const SearchLeague = ({textToSearch, handleSearch, handleClear, handleSetToSearch}) => {
    return (
        <form onSubmit={handleSearch} className='flex flex-col w-full  items-center'>
            <label>Введите название лиги</label>
            <input type="text" className='text-gray-900 mt-2' value={textToSearch} onChange={(e)=>handleSetToSearch(e.target.value)}/>
            <div className='flex-row mt-2'>
            <button className='inline-block bg-green-500 px-4 py-2 mt-2' type="submit">Показать</button>
                <button type='reset' onClick={handleClear} className='inline-block bg-red-500 px-4 py-2 mt-2' >Отчистить</button>

            </div>
        </form>
    )
}
