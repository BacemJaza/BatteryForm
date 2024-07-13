import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import FormNav from '../components/dashboardComponents/FormNav'
import SavedBatteriesComponent from '../components/dashboardComponents/SavedBatteriesComponent'
import PublishedBatteriesComponent from '../components/dashboardComponents/PublishedBatteriesComponent'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <div>
        <FormNav/>
        <SavedBatteriesComponent/>
        {/* <PublishedBatteriesComponent/> */}
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
