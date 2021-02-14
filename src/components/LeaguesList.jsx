import { League } from "./League"

export const LeaguesList = ({leagues}) => {
    return (
        <div className='flex flex-col items-center mt-4'>

            {
                leagues.map(league => {
                    return(

                        <League key={league.id} league={league}/>
                    )
                })
            }

            
        </div>
    )
}
