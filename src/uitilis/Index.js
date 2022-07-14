export const isLogin = () => {
    let user = JSON.parse(localStorage.getItem("User"));

    if(user){
        return true;
    }else{
        return false;
    }
}