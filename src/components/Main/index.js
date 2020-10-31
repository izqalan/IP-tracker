import React, { useState, useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import L from 'leaflet'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import mapMarker from '../images/icon-location.svg'

const Main = (props) => {
  const [address, setaddress] = useState('--');
  const [location, setlocation] = useState('--');
  const [timeZone, settimeZone] = useState('--');
  const [isp, setisp] = useState('--');
  const [search, setsearch] = useState('');
  const [position, setposition] = useState([3.1412, 101.68653])
  const API_KEY = process.env.REACT_APP_API_KEY;
  const myIcon = L.icon({
    iconUrl: mapMarker,
    iconSize: [36, 42],
    popupAnchor: [-10, -30],
  });
  useEffect(() => {
    console.log('calls')
    axios({
      method: 'GET',
      url: `https://geo.ipify.org/api/v1?apiKey=${API_KEY}`,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then((response) => {
      const data = response.data;
      setaddress(data.ip);
      setlocation(`${data.location.city}, ${data.location.country}, ${data.location.postalCode}`)
      settimeZone(data.location.timezone)
      setisp(data.isp)
      setposition([data.location.lat, data.location.lng])
    }).catch((err) => {
      console.log(err)
    })
  }, [API_KEY]);

  const handleSubmit = async () => {
    axios({
      method: 'GET',
      url: `https://geo.ipify.org/api/v1?apiKey=${API_KEY}&ipAddress=${search}`,
    }).then((response) => {
      const data = response.data;
      setaddress(data.ip);
      setlocation(`${data.location.city}, ${data.location.country}, ${data.location.postalCode}`)
      settimeZone(data.location.timezone)
      setisp(data.isp)
      setposition([data.location.lat, data.location.lng])
      console.log(position)
    }).catch((err) => {
      console.log(err)
    })
  }

  const handleChange = (event) => {
    setsearch(event.target.value)
  }

  return (
    <div className='flex flex-col w-full h-screen'>
      <div className='absolute z-0 bg-hero-pattern bg-cover bg-no-repeat w-full h-1/3'></div>
      <div className='flex z-20 pb-16'>
        <div className='items-center justify-center w-full flex flex-col'>
          {/* title */}
          <div className='p-8 text-2xl text-white font-medium'>IP Address Tracker</div>
          {/* search */}
          <div className="flex flex-row w-full justify-center px-8 ">
            <input onChange={handleChange} type="text" name="address" className="px-4 rounded-tl-lg rounded-bl-lg border-0 bg-white lg:w-1/4 w-full border-0" placeholder="Search IP Adress" />
            <button
              onClick={handleSubmit}
              className='p-4 rounded-tr-lg rounded-br-lg bg-gray-900'
            >
              <FontAwesomeIcon
                icon={faChevronRight}
                className='text-white'
              />
            </button>
          </div>
        </div>
      </div>
      {/* info cards */}
      <div className='flex flex-row z-10 items-center justify-center '>
        <div className='w-full p-8 mx-8 bg-white justify-around rounded-xl shadow-lg flex flex-col lg:w-3/4 lg:flex-row'>
          <div className="flex flex-col w-full lg:w-1/4 h-1/4">
            <p className='text-xs text-gray-600 tracking-wider py-2'>IP ADDRESS</p>
            <p className='text-lg tracking-wider font-medium'>{address}</p>
          </div>
          <div className="flex flex-col w-full lg:w-1/4 h-1/4">
            <p className='text-xs text-gray-600 tracking-wider py-2'>LOCATION</p>
            <p className='text-lg tracking-wider font-medium'>{location}</p>
          </div>
          <div className="flex flex-col w-full lg:w-1/4 h-1/4">
            <p className='text-xs text-gray-600 tracking-wider py-2'>TIMEZONE</p>
            <p className='text-lg tracking-wider font-medium'>GMT {timeZone}</p>
          </div>
          <div className="flex flex-col w-full lg:w-1/4 h-1/4">
            <p className='text-xs text-gray-600 tracking-wider py-2'>ISP</p>
            <p className='text-lg tracking-wider font-medium'>{isp}</p>
          </div>
        </div>
      </div>
      <div className='flex inset-0 h-full z-0'>
        <Map center={position} zoom={13} className='w-full'>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position} icon={myIcon}>
            <Popup>
              <div className="font-bold">{location}</div>
              <div className='italic'>GMT {timeZone}</div>
            </Popup>
          </Marker>
        </Map>
      </div>
    </div>
  )
}
export default Main;
