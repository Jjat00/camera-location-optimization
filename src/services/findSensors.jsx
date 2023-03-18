import config from "../config";

const URL_BACKEND = config.URL_BACKEND;

const findSensors = async (body) => {
  const response = await fetch(`${URL_BACKEND}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json();
  return { response, data };
};

export default findSensors;
