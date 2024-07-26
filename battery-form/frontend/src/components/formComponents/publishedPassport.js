import React, { useState } from 'react'
import Headline from '../../layouts/form/headline'
import ProgressBar from './progressbare'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import QRCode from 'qrcode'

const PublishedPassport = () => {
  const [nbrGenerated, setNbrGenerated] = useState(0)
  const [src, setSrc] = useState([])
  const [count,setCount] = useState(1)
  const generate = async () => {
    const qrCodes = []
    for (let i = 0; i < Number(nbrGenerated); i++) {
      const imgURL = `https://acme.dpp.Citet.com/${i}`
      const output = await QRCode.toDataURL(imgURL)
      qrCodes.push(output)
    }
    setSrc(qrCodes)
  }

  return (
    <div className="mt-8">
      <Headline />
      <div className="mt-8">
        <ProgressBar progress="6" />
      </div>
      <div className="max-w-3xl mx-auto mt-8 p-6 bg-blue-50 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center text-success">
          Battery Passport successfully registered <FontAwesomeIcon icon={faCheck} /> !
        </h2>
        <form>
          <input
            type="number"
            placeholder='Number of batteries'
            className="input input-bordered w-full max-w-xs flex mx-auto m-4"
            value={nbrGenerated}
            onChange={(e) => setNbrGenerated(e.target.value)}
          />
          <button type='button' className="btn btn-primary flex mx-auto" onClick={generate}>
            Generate
          </button>
        </form>
        <div>
        {nbrGenerated!=0?(
          <div>
            <h2>Battery ID: </h2><p>BID00{count}</p>
            <h2>Battery Passport ID: </h2><p>BPID 00{count}</p>
            <img src={src[count-1]} className='flex mx-auto p-2 w-[50%]' />
        </div>
        ):(<div>No battery generated.</div>)}

        </div>
        <div className='flex justify-between mt-5'>
          <button className="btn btn-active flex right-0">
            <a href='/dashboard'>Return to dashboard</a>
          </button>
          <div className="join">
            <button className="join-item btn" onClick={()=>{if(count>1) setCount(count-1)}}>«</button>
            <button className="join-item btn">Page {count}</button>
            <button className="join-item btn" onClick={()=>{if(count<nbrGenerated) setCount(count+1)}}>»</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublishedPassport
