var axios = require("axios")
const httpRequest = ({method,data,url}) => 
    axios(
      {
        url,
        method,
        headers:{
          'Content-Type': 'application/json',
        },
        data,
        timeout: 10000
      }
    )
      
export default httpRequest