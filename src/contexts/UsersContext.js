import { createContext,useReducer } from "react";
import userReducer from "../reducers/userReducer";
import axios from "axios";





const initialState = {
  isPending: true,
  user: {},
  error: null,
};

export const UsersContext = createContext();

const UsersContextProvider = ({ children }) => {

  const [state, dispatch] = useReducer(userReducer, initialState);

  // log in a user
  async function loginUser(user) {

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const data = await axios.post(
      "https://traineesapi-dodoo.herokuapp.com/api/v1/users/login",
      user,
      config
    );
    localStorage.setItem("userInfo", data);
    
      dispatch({
        type: "LOGIN_USER",
        payload: data
      });
     
      console.log(data);
  }
  
  // register user

  async function registerUser(newuser) {
    
  
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };


    const res = await axios.post("https://traineesapi-dodoo.herokuapp.com/api/v1/users/register",
     newuser,
      config
      );
      dispatch({
        type: "REGISTER_UER",
        
      })

    console.log(res);
  }
  

  return (
    <UsersContext.Provider
      value={{ loginUser, user: state.user, isPending: state.isPending }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
