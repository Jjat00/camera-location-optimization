import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import { useState } from "react";
import MarkerObjets from "./MarkerObjets";
import Settings from "./Settings";
import Sensors from "./Sensors";
import objects from "./objects.json";
import config from "./../../config";

const TOKEN_MAPBOX = config.TOKEN_MAPBOX;

const Index = () => {
  const [sensors, setSensors] = useState();
  const [settings, setSettings] = useState();

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          position: "absolute",
          zIndex: "1",
          justifyContent: "right",
        }}
      >
        <Settings
          objects={objects}
          setSensors={setSensors}
          setSettings={setSettings}
        />
      </div>
      <Map
        mapboxAccessToken={TOKEN_MAPBOX}
        initialViewState={{
          latitude: 0.9084666,
          longitude: -77.7904923,
          zoom: 18,
        }}
        style={{ width: "100%", height: "99vh", margin: "auto" }}
        mapStyle="mapbox://styles/mapbox/dark-v9"
        attributionControl={false}
      >
        <MarkerObjets objects={objects} />
        {settings && sensors && (
          <Sensors sensors={sensors} settings={settings} />
        )}
      </Map>
    </div>
  );
};

export default Index;
