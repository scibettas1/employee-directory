import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API
// eslint-disable-next-line 
export default {
  getEmployees: async function() {
    let response = await axios.get("https://randomuser.me/api/?results=20");
    return response;
  },
  getByCountry: function(country) {
    return axios.get("https://randomuser.me/api/?nat=" + country);
  }

  
};
