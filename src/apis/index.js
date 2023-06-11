import axios from "axios";

//API url

let apiUrl = "https://unoiatech-api-nasrudeenansari.onrender.com/api/data";
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
