export const doLogin=(id)=>{
    localStorage.setItem("id", id);
    localStorage.setItem("isLoggedIn", true)
};

export const isLogin=()=>{
    return Boolean(localStorage.getItem("isLoggedIn"));
};

export const getId=()=>{
    return localStorage.getItem("id");
}
export const doLogOut=(props)=>{
    localStorage.removeItem("id");
    localStorage.removeItem("isLoggedIn");
    props.history.push("/");
}