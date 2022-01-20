import axios from "axios";

const KEY = "AIzaSyAWK7QcSslxlHKCCB4KF7ENcpCZ9ZBthso";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
