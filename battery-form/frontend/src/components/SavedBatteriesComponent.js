import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SavedBatteriesComponent = () => {
  const battery = [
    {
      "BatteryPassportID": "BPID0001",
      "BatteryModel": "BM-100A",
      "Weight": "1.2kg",
      "ManufacturingSite": "Site A",
      "ManufacturingDate": "2023-01-15",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0002",
      "BatteryModel": "BM-100B",
      "Weight": "1.3kg",
      "ManufacturingSite": "Site B",
      "ManufacturingDate": "2023-02-20",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0003",
      "BatteryModel": "BM-100C",
      "Weight": "1.1kg",
      "ManufacturingSite": "Site C",
      "ManufacturingDate": "2023-03-10",
      "BatteryStatus": "Inactive"
    },
    {
      "BatteryPassportID": "BPID0004",
      "BatteryModel": "BM-100D",
      "Weight": "1.4kg",
      "ManufacturingSite": "Site D",
      "ManufacturingDate": "2023-04-05",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0005",
      "BatteryModel": "BM-100E",
      "Weight": "1.2kg",
      "ManufacturingSite": "Site A",
      "ManufacturingDate": "2023-05-12",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0006",
      "BatteryModel": "BM-100F",
      "Weight": "1.3kg",
      "ManufacturingSite": "Site B",
      "ManufacturingDate": "2023-06-25",
      "BatteryStatus": "Inactive"
    },
    {
      "BatteryPassportID": "BPID0007",
      "BatteryModel": "BM-100G",
      "Weight": "1.1kg",
      "ManufacturingSite": "Site C",
      "ManufacturingDate": "2023-07-14",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0008",
      "BatteryModel": "BM-100H",
      "Weight": "1.4kg",
      "ManufacturingSite": "Site D",
      "ManufacturingDate": "2023-08-18",
      "BatteryStatus": "Inactive"
    },
    {
      "BatteryPassportID": "BPID0009",
      "BatteryModel": "BM-100I",
      "Weight": "1.2kg",
      "ManufacturingSite": "Site A",
      "ManufacturingDate": "2023-09-22",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0010",
      "BatteryModel": "BM-100J",
      "Weight": "1.3kg",
      "ManufacturingSite": "Site B",
      "ManufacturingDate": "2023-10-27",
      "BatteryStatus": "Inactive"
    },
    {
      "BatteryPassportID": "BPID0011",
      "BatteryModel": "BM-100K",
      "Weight": "1.1kg",
      "ManufacturingSite": "Site C",
      "ManufacturingDate": "2023-11-30",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0012",
      "BatteryModel": "BM-100L",
      "Weight": "1.4kg",
      "ManufacturingSite": "Site D",
      "ManufacturingDate": "2024-01-03",
      "BatteryStatus": "Inactive"
    },
    {
      "BatteryPassportID": "BPID0013",
      "BatteryModel": "BM-100M",
      "Weight": "1.2kg",
      "ManufacturingSite": "Site A",
      "ManufacturingDate": "2024-02-06",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0014",
      "BatteryModel": "BM-100N",
      "Weight": "1.3kg",
      "ManufacturingSite": "Site B",
      "ManufacturingDate": "2024-03-12",
      "BatteryStatus": "Inactive"
    },
    {
      "BatteryPassportID": "BPID0015",
      "BatteryModel": "BM-100O",
      "Weight": "1.1kg",
      "ManufacturingSite": "Site C",
      "ManufacturingDate": "2024-04-15",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0016",
      "BatteryModel": "BM-100P",
      "Weight": "1.4kg",
      "ManufacturingSite": "Site D",
      "ManufacturingDate": "2024-05-19",
      "BatteryStatus": "Inactive"
    },
    {
      "BatteryPassportID": "BPID0017",
      "BatteryModel": "BM-100Q",
      "Weight": "1.2kg",
      "ManufacturingSite": "Site A",
      "ManufacturingDate": "2024-06-22",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0018",
      "BatteryModel": "BM-100R",
      "Weight": "1.3kg",
      "ManufacturingSite": "Site B",
      "ManufacturingDate": "2024-07-24",
      "BatteryStatus": "Inactive"
    },
    {
      "BatteryPassportID": "BPID0019",
      "BatteryModel": "BM-100S",
      "Weight": "1.1kg",
      "ManufacturingSite": "Site C",
      "ManufacturingDate": "2024-08-28",
      "BatteryStatus": "Active"
    },
    {
      "BatteryPassportID": "BPID0020",
      "BatteryModel": "BM-100T",
      "Weight": "1.4kg",
      "ManufacturingSite": "Site D",
      "ManufacturingDate": "2024-09-30",
      "BatteryStatus": "Inactive"
    }
]
  return (
    <div  className='mb-10'>
        <hr/>
        <div className="navbar bg-base-100">
            <a className="btn btn-ghost text-xl">Saved Batteries</a>
        </div>
        <div className="overflow-x-auto">
        <table className="table table-xs bg-[#F2F2F2]">
        <thead>
        <tr>
        <th>#</th>
        <th>Battery Passport ID</th>
        <th>Battery model</th>
        <th>Weight</th>
        <th>Manifacturing site</th>
        <th>Manufactiry date</th>
        <th>Battery status</th>
        <th>Config</th>
        <th>Qr generator</th>
        </tr>
        </thead>
        <tbody>
          {battery.map((item,index) =>(
              <tr>
              <th>{index+1}</th>
              <td>{item.BatteryPassportID}</td>
              <td>{item.BatteryModel}</td>
              <td>{item.Weight}</td>
              <td>{item.ManufacturingSite}</td>
              <td>{item.ManufacturingDate}</td>
              <td>{item.BatteryStatus}</td>
              <td><a href='#'><FontAwesomeIcon icon={faGear} /></a></td>
              </tr>
          ))}
        </tbody>
        </table>
        </div>
    </div>
  )
}

export default SavedBatteriesComponent
