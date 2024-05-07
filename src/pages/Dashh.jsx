import React from 'react'
import DashboardData from '../assets/data/DashboardData'
import DashboardDetails from './DashboardDetails'


function Dashh() {
   

    return (
        <div>
            <DashboardDetails Data={DashboardData[0]}  />
        </div>
    )
}

export default Dashh
