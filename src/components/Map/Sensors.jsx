import * as turf from "@turf/turf";
import { Marker, Source, Layer } from "react-map-gl";

const Sensors = ({ sensors, settings }) => {
  const createGeoJsonCircles = () => {
    const dataSensors = sensors.map((sensor) => {
      const center = [sensor.longitude, sensor.latitude];
      const options = {
        steps: 100,
        units: "kilometers",
      };
      const radius = parseInt(settings.radius) / 1000;
      const geoJsonCircle = turf.circle(center, radius, options);
      return geoJsonCircle;
    });
    const featureCollectionSensors = {
      type: "FeatureCollection",
      features: dataSensors,
    };
    return featureCollectionSensors;
  };

  const markerSensor = () => {
    return sensors.map((sensor, index) => {
      return (
        <Marker
          key={index}
          latitude={Number(sensor.latitude)}
          longitude={Number(sensor.longitude)}
        >
          <img
            src={"https://cdn-icons-png.flaticon.com/512/4329/4329553.png"}
            alt="sensor marker"
            width="40px"
          ></img>
          <p>Cámara {index + 1}</p>
        </Marker>
      );
    });
  };

  return (
    <>
      <Source id={"circles"} type="geojson" data={createGeoJsonCircles()}>
        <Layer
          id={"layer-circles"}
          type="fill"
          paint={{
            "fill-color": "#c51250",
            "fill-opacity": 0.6,
            "fill-outline-color": "#000000",
          }}
        />
      </Source>
      {markerSensor()}
    </>
  );
};

export default Sensors;
