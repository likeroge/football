import { TeamComponent } from "./TeamComponent"

export const TeamList = ({teams}) => {
    return (
        <div className='flex flex-col items-center mt-4'>

        {
            teams &&
            teams.map(team => {
                return(

                <TeamComponent key={team.id} team={team}/> 
                )
            })
        }

        
    </div>    
    )
}
