import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

interface ApiContextProps {
  children: ReactNode;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface INetwork {
  name: string;
  tel: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  tel: string;
  createdAt: string;
}

export interface IUserRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  tel: string;
}

export interface IList {
  name: string;
  tel: string;
  id: string;
  createdAt: string;
  user: IUser;
}

export interface ApiContextData {
  login: (data: ILogin) => void;
  listNetwork: () => void;
  token: string | null;
  list: IList[];
  setModalAdd: Dispatch<SetStateAction<boolean>>;
  modalAdd:boolean;
  createNetwork: (data: INetwork) => void;
  createUser: (data: IUserRequest) => void;
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiContextProvider = ({ children }: ApiContextProps) => {
  const [user, setUser] = useState(null);
  const [list, setList] = useState([]);
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const navigate = useNavigate()

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("@TOKEN")
  );

  const login = async (data: ILogin | boolean) => {
    await api
      .post("/login", data)
      .then((response) => {
        setToken(response.data.token);
        localStorage.setItem("@TOKEN", response.data.token);
        navigate("/dashboard")
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const listNetwork = async () => {
    await api
      .get("/networks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setList(response.data);
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const createNetwork = async (data: INetwork) => {
    await api
      .post("/networks", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  const createUser = async (data: IUserRequest) => {
    await api
      .post("/users", data)
      .then((response) => {
        console.log(response)
        navigate("/")
      })
      .catch((error: any) => {
        console.log(error);
      });
  };

  return (
    <ApiContext.Provider
      value={{
        login,
        token,
        listNetwork,
        list,
        modalAdd,
        setModalAdd,
        createNetwork,
        createUser,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};