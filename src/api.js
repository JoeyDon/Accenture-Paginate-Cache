import { API_TOKEN } from "./token";

export const fetchData = async countsToFetch => {
  try {
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
    //const response = await fetch("https://randomuser.me/api");
    const data = await response.json();
    
    const headers = await response.headers.get('X-Total-Count')
    console.log(headers)
    return [headers, ...data];
  } catch (e) {
    console.log(e);
  }
};
