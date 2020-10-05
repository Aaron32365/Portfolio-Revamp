import axios from "axios";
const URL = "/portfolioItems";

export default {
    Search: function(){
        return axios.get(URL)
    }
};