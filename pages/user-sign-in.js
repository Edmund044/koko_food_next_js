// import httpService from "./api/http-service";
var axios = require("axios")
const userSignIn = () => {
    const handleUserSignin = async (event) => {
        event.preventDefault()
        const formData = {
            email: event.target.email.value
          }
    
       const options =  {
            method:'POST',
            data: JSON.stringify(formData),
            url:'/api/comments',
            headers:{
              'Content-Type': 'application/json',
            },
            timeout: 10000 }  
            
      axios(options)
      .then((response)=>{
        console.log(`Success message ${response}`)
      })
      .catch((err)=>{
        console.log(err)
      })
    
    }
    
    return ( <div>
     <form onSubmit={handleUserSignin}>
      <label htmlFor="last">Email</label>
      <input type="text"
             id="email"
             name="email"
             pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
             title="Invalid email"
             required />

      <button type="submit">Submit</button>
    </form>
       
    </div> );
}
 
export default userSignIn;