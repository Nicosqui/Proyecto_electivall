import { basePatch, apiVersion } from "./config";

export function signUpApi(data) {
  const url = `${basePatch}/${apiVersion}/signup`;
  /*   http://localhost:3977/api/v1/signup   */
  console.Log(url);
  const params = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  return fetch(url, params).then((response) => {
    return response.json();
  });
}
