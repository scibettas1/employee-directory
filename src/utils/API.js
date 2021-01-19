import axios from "axios";

const BASEURL = "https://randomuser.me/api/";
const APIKEY = "&api_key=6EZH-4KCX-2SQ1-C5OB";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: function(query) {
      console.log(query)
    return axios.get(BASEURL + query + APIKEY);
  }
};
