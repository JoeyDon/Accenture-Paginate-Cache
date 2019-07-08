import { API_TOKEN } from "./token";

export const fetchData = async () => {
  try {
    const response = await fetch("https://dh-atratadev.atrmywizard360.com/atr-gateway/ticket-management/api/v1/tickets?ticketType=incident&sortDirection=DESC&page=0&perPage=10",{
      method:'GET',
      headers:{
        apiToken: API_TOKEN,
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }
    });

    //const response = await fetch("https://randomuser.me/api");
    const data = await response.json();

    console.log('data: ' )
    console.log(data)
    return data;
  } catch (e) {
    console.log(e);
  }
};
