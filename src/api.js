import { API_TOKEN } from "./settings/settings";

export const fetchData = async countsToFetch => {
  try {
    // ${countsToFetch} is calculated in getApiData() in saga.js
    const url = `https://dh-atratadev.atrmywizard360.com/atr-gateway/ticket-management/api/v1/tickets?
    ticketType=incident&sortDirection=DESC&page=0&perPage=${countsToFetch}`;

    const response = await fetch(url, {
      method: "GET",
      headers: {
        apiToken: API_TOKEN,
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    });

    const data = await response.json();
    const headers = await response.headers.get("X-Total-Count");
    console.log(`header.X-Total-Count = ${headers}`);

    // Push headers to data[0]
    return [headers, ...data];
  } catch (e) {
    console.log(e);
  }
};
