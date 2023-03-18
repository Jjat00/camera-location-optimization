import { Marker } from "react-map-gl";

const MarkerObjets = ({ objects }) => {
  return objects.map((object) => (
    <Marker
      key={object.id}
      latitude={Number(object.location.latitude)}
      longitude={Number(object.location.longitude)}
    >
      <img
        src={object.typeElement.urlIconColor}
        alt="nameplate marker"
        width="40"
      ></img>
    </Marker>
  ));
};

export default MarkerObjets;
