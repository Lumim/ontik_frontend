import fetchApi from './fetchApi'
import getServer from './Common'
let btn={};
var function_name;
var id=null;
/* var url = window.location.pathname;
var ar=getServer.urlArray(url); */

    


btn.getEdata=async()=>{
    var url = window.location.pathname;
    var ar=getServer.urlArray(url);
    var controller_name=ar[2];
const role_status=localStorage.getItem('role_status');
const user_page_list_id=localStorage.getItem('user_page_list_id');

btn.data2={c_data:{controller_name,user_page_list_id,role_status}};
    const res= fetchApi.getApi('api/app/admin/controller_name/edit_button','POST',btn.data2,1).then(
        async  (value)=>{
            return value;
        },((re)=>{
            return re;
        })
    );
   // console.log(res)
   console.log(btn.data2)
     return res;
}
btn.getCOdata=async()=>{
    var url = window.location.pathname;
    var ar=getServer.urlArray(url);
    var controller_name=ar[2];
const role_status=localStorage.getItem('role_status');
const user_page_list_id=localStorage.getItem('user_page_list_id');

btn.data2={c_data:{controller_name,user_page_list_id,role_status}};
    const res= fetchApi.getApi('api/app/admin/controller_name/copy_button','POST',btn.data2,1).then(
        async  (value)=>{
            return value;
        },((re)=>{
            return re;
        })
    );
   // console.log(res)
     return res;
}
btn.getCRdata=async()=>{
    var url = window.location.pathname;
    var ar=getServer.urlArray(url);
    var controller_name=ar[2];
const role_status=localStorage.getItem('role_status');
const user_page_list_id=localStorage.getItem('user_page_list_id');

btn.data2={c_data:{controller_name,user_page_list_id,role_status}};
    let res=  fetchApi.getApi('api/app/admin/controller_name/create_button','POST',btn.data2,1).then(
        async  (value)=>{
            return value;
        },((re)=>{
            return re;
        })
    );
   // console.log(res)
    return  res;
}

btn.getDdata=async()=>{
    var url = window.location.pathname;
    var ar=getServer.urlArray(url);
    var controller_name=ar[2];
const role_status=localStorage.getItem('role_status');
const user_page_list_id=localStorage.getItem('user_page_list_id');

btn.data2={c_data:{controller_name,user_page_list_id,role_status}};
    const res= fetchApi.getApi('api/app/admin/controller_name/delete_button','POST',btn.data2,1).then(
        async   (value)=>{
            return value;
        },((re)=>{
            return re;
        })
    );
    //console.log(res)
  return res;
    
}
btn.getVdata=async()=>{
    var url = window.location.pathname;
    var ar=getServer.urlArray(url);
    var controller_name=ar[2];
const role_status=localStorage.getItem('role_status');
const user_page_list_id=localStorage.getItem('user_page_list_id');

btn.data2={c_data:{controller_name,user_page_list_id,role_status}};
    const res=  fetchApi.getApi('api/app/admin/controller_name/view_button','POST',btn.data2,1).then(
       async (value)=>{
            return value;
        },((re)=>{
            return re;
        })
    );
  //  console.log(res)
  return res;
    
}
btn.checkCmp=async()=>{
    var url = window.location.pathname;
    var ar=getServer.urlArray(url);
    var controller_name=ar[2];
const role_status=localStorage.getItem('role_status');
const user_page_list_id=localStorage.getItem('user_page_list_id');


let data2={c_data:{controller_name,user_page_list_id,role_status}}
    const res=  fetchApi.getApi('api/app/admin/controller_name/comp_check','POST',data2,1).then(
       async (value)=>{
            return value;
        },((re)=>{
            return re;
        })
    );
  //  console.log(res)
  return res;
    
}





export default btn;