import React from 'react'
import DashboardDetailsPresataire from '../pages/DashboardDetailsPresataire'
import DashboardDataPrestataire from '../assets/data/DashboardDataPrestataire'




function DashboardClient() {
    
    return (
        <div>
              <DashboardDetailsPresataire Data={DashboardDataPrestataire[0]}  />
        </div>
    )
}

export default DashboardClient;
