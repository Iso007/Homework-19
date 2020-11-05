import axios from "axios";

export default{
    getUsers:function(){

        return axios.get("https://randomyser.me/api/?results=200&nat=us");
    }
};