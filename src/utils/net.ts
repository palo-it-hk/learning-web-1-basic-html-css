import { backendUrl } from "./config";

export default async function fetchData() {
  try {
    const response = await fetch(backendUrl, {
      mode: "cors",
    });
    const body = await response.json();
    return body.message;
  } catch (err) {
    return "PROBLEM_FETCH_DATA";
  }
}
