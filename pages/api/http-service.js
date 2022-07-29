var axios = require("axios")
const httpRequest = ({method,data,url,headers,timeout}) => 
    axios(
      {
        url,
        method,
        headers,
        data,
        timeout
      }
    )
      .then((results) => {
        // setinitiatives(results.data)
        console.log(results.data)
      })
      .catch((err) => {
        console.log(err)
      })
  
export default httpRequest