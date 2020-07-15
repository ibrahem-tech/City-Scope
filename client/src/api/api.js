import axios from "axios";
const key = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImVzaG90MTk4OEBnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjQ2NjUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiQmFzaWMiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIwLTA2LTI2IiwiaXNzIjoiaHR0cHM6Ly9hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNTk0NDk4MDU3LCJuYmYiOjE1OTQ0OTA4NTd9.fwJIJkMC2vREfdwayHQlotI4KkMSr9toJDgAiL597uk"


export default {

    getBodyLocations: function() {
        return axios.get("https://healthservice.priaid.ch/body/locations?token=" + key + "&format=json&language=en-gb");
      },

      getBodyLocation: function(id) {
        return axios.get("https://healthservice.priaid.ch/body/locations/" + id + "?token=" + key + "&format=json&language=en-gb");
      },

      getBodySymptoms: function(id) {
        return axios.get("https://healthservice.priaid.ch/symptoms/" + id + "/0?token=" +key+ "&format=json&language=en-gb");
      },

      getDiagnosis: function(dignosis) {
        return axios.get("https://healthservice.priaid.ch/diagnosis?symptoms=[" + dignosis + "]&gender=male&year_of_birth=1998&token=" + key + "&format=json&language=en-gb")
},
      getIssue: function(issueID) {
        return axios.get("https://healthservice.priaid.ch/issues/" + issueID + "/info?token=" + key + "&format=json&language=en-gb")

      }

}