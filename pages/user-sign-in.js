// import httpService from "./api/http-service";
var axios = require("axios")
const userSignIn = () => {
    const handleUserSignin = async (event) => {
        event.preventDefault()
        const formData = {
            email: event.target.email.value
          }


          const response = await fetch('/api/comments')
          const data = await response.json()
          console.log(data)
    
      //  const options =  {
      //       method:'POST',
      //       data: JSON.stringify(formData),
      //       url:'/api/comments',
      //       headers:{
      //         'Content-Type': 'application/json',
      //       },
      //       timeout: 10000 }  
            
      // axios(options)
      // .then((response)=>{
      //   console.log(`Success message ${response}`)
      // })
      // .catch((err)=>{
      //   console.log(err)
      // })
    
    }
    
    return ( <div>
       
    </div> );
}
 
export default userSignIn;