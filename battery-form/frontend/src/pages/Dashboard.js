import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import FormNav from '../components/FormNav'
import PublishedBatteriesComponent from '../components/PublishedBatteriesComponent'
import SavedBatteriesComponent from '../components/SavedBatteriesComponent'

const Dashboard = () => {
  return (
    <div>
      <Header/>
      <div>
        <FormNav/>
        <SavedBatteriesComponent/>
        <PublishedBatteriesComponent/>
      </div>
      <Footer/>
    </div>
  )
}

export default Dashboard
