import { createContext, useContext, useState ,useEffect } from "react";
export const AuthContext=createContext();

export const AuthProvider=({children})=>{
    
//tacking only logout
 const[token,setToken]=useState(localStorage.getItem("token"))
 const [user, setUser] = useState("");
 const [services, setServices] = useState([]);

const [isLoading,setIsLoading]=useState(true) ;  //to handle loading state for the first time when user logs in or refreshes page

const authorizationToken=`Bearer ${token}`

const API=import.meta.env.VITE_API;

const storeTokenInLS=(serverToken)=>{
  setToken(serverToken)
return localStorage.setItem('token',serverToken)
;
}

//tacking only logout show when user loged in
let isLoggedIn = !!token; // Convert token to a boolean (true if token exists, false if token is null/undefined)


console.log("isloggedin-->",isLoggedIn);
   

//tackling logout functionality
const LogoutUser=()=>{
    setToken("")
    return  localStorage.removeItem("token");}


 // JWT AUTHENTICATION - to get the currently loggedIN user data
 const userAuthentication = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(`${API}/api/auth/user`, 
      {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("user data ", data.userData);
        setUser(data.userData);
         setIsLoading(false);
      } else {
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error fetching user data");
    }
  };

  // to fetch the services data from the database
  const getServices = async () => {
    try {
      const response = await fetch(`${API}/api/data/service`, {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`services frontend error: ${error}`);
    }
  };


  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

    return <AuthContext.Provider value={{isLoggedIn,storeTokenInLS,LogoutUser,user,services,authorizationToken,isLoading,API}}>
      {children}
    </AuthContext.Provider>
}

//custom hook
export const useAuth=()=>{
    const authContextValue=useContext(AuthContext);
    if(!authContextValue){
        throw new Error("Use Auth Provider")
    }
    return authContextValue;
}

