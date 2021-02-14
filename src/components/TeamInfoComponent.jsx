export const TeamInfoComponent = ({teamInfo,squad, coach}) => {
    return (
        <div className='flex flex-col'>
        <h1 className='text-center py-4 text-xl text-red-500'>{teamInfo.name}</h1>
        <div className='flex flex-col items-center md:px-4 md:flex-row md:items-center lg:items-start md:justify-center'>
            <div>
                <img className='inline-block rounded-sm' src={teamInfo.crestUrl} alt=""/>
            </div>
            <div className='p-7'>
                <h1 className='text-lg text-red-500'>Информация:</h1>
                <br/>
                <p>Главный тренер: {coach} </p>
                <p>Адрес: {teamInfo.address}</p>
                <p>Телефон: {teamInfo.phone}</p>
                <p>Вебсайт: <a className='text-red-500' href={teamInfo.website}>{teamInfo.website}</a> </p>
                <p>email: {teamInfo.email}</p>
                <p>Цвета: {teamInfo.clubColors}</p>
                <p>Стадион: {teamInfo.venue}</p>
                <p>основан: в {teamInfo.founded} г</p>
            </div>
            
        </div>

    </div>
    )
}
