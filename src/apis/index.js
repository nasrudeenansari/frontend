import axios from "axios";

//API url

let apiUrl = "http://localhost:3001/api/data";
export const fetchData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(apiUrl);
      resolve(response.data);
    } catch (error) {
      reject(error);
    }
  });
};
