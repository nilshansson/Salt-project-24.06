import axios from "axios";

const APIkey = "oZAVQkDKWeTCOorYXYCVUw==eNVJpSDSdqObfJWs";
const query = "pasta";
const APIurl = `https://api.api-ninjas.com/v1/recipe?query=${query}`;

const port = process.env.port || 3000;

const fetchData = async () => {
  try {
    const response: any = await axios.get(APIurl, {
      headers: {
        "X-Api-Key": APIkey,
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};
fetchData();
