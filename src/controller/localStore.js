//

/* fetchApi.getApi= async (api_url,method_type,body_data=null,api_data=null)=>{
    var url;
    if(!api_data){
        url = `${host}`+`${api_url}`
    }
    else{
        url = `${host}`+`${api_url}`+`${api_data}`
    }
    if(!body_data){
         await fetch(url,{
			method: method_type,
			headers: {
			  'Content-type': 'application/json',
            }
		  }).then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
          .then((data) => {
            this.setState({ isLoading: false, downlines: data.response });
            console.log("DATA STORED");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
    }
    
    else{
        await fetch(url,{
			method: method_type,
			headers: {
			  'Content-type': 'application/json',
			},
		   
			body: JSON.stringify(body_data),
		  }).then((response) => {
            if(!response.ok) throw new Error(response.status);
            else return response.json();
          })
          .then((data) => {
            this.setState({ isLoading: false, downlines: data.response });
            console.log("DATA STORED");
          })
          .catch((error) => {
            console.log('error: ' + error);
            this.setState({ requestFailed: true });
          });
        
       
    } 

}*/