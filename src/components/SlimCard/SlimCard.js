import React from 'react'
import './SlimCard.scss'

function SlimCard({companylogo, cert, company, issued, date}){
    return(
        <div className="SlimCard">
            <div className="logo">
                <img src={companylogo} alt={company} />
            </div>
            <div className="info">
                <h2>{cert}</h2>
                <h3>{company}</h3>
                {issued ? <h4>Issued {date}</h4> : <h4>{date}</h4>}
            </div>
        </div>
    )
}

export default SlimCard