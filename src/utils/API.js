import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=20";

// eslint-disable-next-line
export default {
  search: function(query) {
    return axios.get(BASEURL);
  }
};
