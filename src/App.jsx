import s from './App.module.css'
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'



function App() {

  const position = [-25.5934726, -49.3348188]

  return (
    <>
      <div className={s.wrapAll}>
        <h1>Mapa dos D</h1>
        <div className={s.wrapMap}>
        <MapContainer style={{borderRadius: "20px", width: "100%", height: "100%"}} center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              <a href="https://www.google.com/maps/place/Instituto+FORJA/@-25.5934726,-49.3348188,17z/data=!4m6!3m5!1s0x94dcfe7bd2686f37:0x3f0cfdd684d6f712!8m2!3d-25.5934726!4d-49.3322439!16s%2Fg%2F11btm0twp7?entry=ttu&g_ep=EgoyMDI1MTIwNy4wIKXMDSoASAFQAw%3D%3D">
              Ir para Google maps
              </a>
            </Popup>
          </Marker>
        </MapContainer>
        </div>
      </div>
    </>
  )
}

export default App
