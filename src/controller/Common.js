import fetchApi from './fetchApi'
let getServer ={}
getServer.name=()=>{
    return 'www.islamicadhan.com'
}
getServer.location="samething";
getServer.getMenu=(word,keyword)=>{
    var uname= window.location.href
        if(uname.includes('/'+word+'/')){
            return keyword
        }
        else{
            return ""
        }
}
getServer.getLeftMenu=(word,keyword)=>{
    var uname= window.location.href
        if(uname.includes(word)){
            return keyword
        }
        else{
            return ""
        }
}


getServer.getPageGroup=()=>{
    var url = window.location.href;
    if(url.includes('?')){
    var page_group;
    /* const check =url.contains('?')
    console.log(check); */
    var p_array=url.split('?',2)[1].split('=',2)
    !p_array? page_group="":page_group=p_array[1];
    return page_group;
    }
    else{
        return ""
    }
}
getServer.required_alert=()=>{
    var alert= `<div class='alert alert-warning mb-0 mx-4 mt-4 text-danger font-weight-bold' role='alert'>(<small><sup><i class='text-danger fas fa-star'></i></sup></small>) field required</div>`
    return alert;
}
getServer.required_icon=()=>{
    var icon= `<small><sup><small><i class='text-danger fas fa-star'></i></small></sup></small>`;
    return icon;
}
getServer.urlArray=(url)=>{
    
    var controller_name;
    var function_name;
    var id=null;
    const ar = url.split('/');

    controller_name=ar[2]
    function_name=ar[3];
    !ar[4]?id=null:id=ar[4];

    return ar;

}
getServer.getFunctionName=(url)=>{
    const ar=url.split('/');
    var function_name=ar[3];
    return function_name;
}
getServer.getControllerName=(url)=>{
    const ar=url.split('/');
    var controller_name=ar[2];
    return controller_name;
}


export default getServer


