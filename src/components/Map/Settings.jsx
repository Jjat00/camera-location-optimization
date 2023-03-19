import { useCallback, useEffect, useState } from "react";
import findSensors from "../../services/findSensors";
import "./Settings.css";

const Settings = ({ objects, setSensors, setSettings }) => {
  const [form, setForm] = useState({
    numberSensors: "4",
    radius: "50",
  });

  const findSensorsPosition = useCallback(async () => {
    setSettings(() => {
      if (form.numberSensors === "" || form.radius === "")
        return {
          numberSensors: "1",
          radius: "5",
        };
      return form;
    });
    const { response, data } = await findSensors({
      numberSensors: parseInt(
        form.numberSensors === "" ? 1 : form.numberSensors
      ),
      radius: parseInt(form.radius === "" ? 5 : form.radius),
      data: objects,
    });
    if (response.status === 201) return setSensors(data);
    alert("No se pudo calcular los sensores las optimas ubicaciones");
  }, [form, objects, setSensors, setSettings]);

  useEffect(() => {
    findSensorsPosition();
  }, [findSensorsPosition]);

  const submitForm = async (e) => {
    e.preventDefault();
    findSensorsPosition();
  };

  const onChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <form onSubmit={submitForm} className="form">
      <div className="wrapper-label">
        <label className="label" htmlFor="numberSensors">
          Numero de cámaras:{" "}
        </label>
        <input
          className="input"
          id="numberSensors"
          type="number"
          value={form.numberSensors}
          onChange={onChange}
        />
      </div>
      <div className="wrapper-label">
        <label className="label" htmlFor="radius">
          Radio de alcance (m):{" "}
        </label>
        <input
          className="input"
          id="radius"
          type="number"
          value={form.radius}
          onChange={onChange}
        />
      </div>
    </form>
  );
};

export default Settings;
