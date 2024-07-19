import React, { useState } from 'react'
import Headline from '../../layouts/form/headline'
import ProgressBar from './progressbare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faQrcode } from '@fortawesome/free-solid-svg-icons'
import QRCode from 'qrcode'

const PublishedPassport = () => {
    const [src,setSrc] = useState("")
    const generate =()=>{
        QRCode.toDataURL("https://acme.dpp.Citet.com").then(setSrc)
    }
  return (
    <div className="mt-8">
        <Headline />
        <div className="mt-8">
            <ProgressBar progress="6"/>
        </div>
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-success">Battery Passport successfully registred <FontAwesomeIcon icon={faCheck} /> !</h2>
        <div className="text-lg font-bold mb-4 flex justify-center">Battery Passport ID: BPID0001</div>
        <div className="text-lg font-bold mb-4 flex justify-center">Battery ID : BID0001</div>
        <div className="text-lg font-bold mb-4 flex justify-center">Battery Passport Link : https://acme.dpp.citet.com</div>
        <button className="btn btn-primary flex mx-auto" onClick={generate}>Generate QRCode</button>
        <img src={src} className='flex mx-auto p-2 w-[50%]'></img>
        <button className="btn btn-active flex right-0"><a href='/dashboard'>Return to dashboard</a></button>
      </div>
      
    </div>
  )
}

export default PublishedPassport
