import { Match } from './Match'

export const MatchesList = ({matches, handleClearResults}) => {
    return (
        <div className=''>
            <div className=' bg-gray-800'>

                {
                    matches?
                        matches.map(match => {
                            return (
                                <Match key={match.id} handleClearResults={handleClearResults} match={match}/>
                            )
                        })
                    :
                    ''

                }

            </div>
        </div>
    )
}


