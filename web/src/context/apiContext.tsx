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
import { toast } from "react-toastify";

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
  modalAdd: boolean;
  createNetwork: (data: INetwork) => void;
  createUser: (data: IUserRequest) => void;
  deleteNetwork: (id: string) => void;
  updatedNetwork: (data: INetwork, id?: string, ) => Promise<void>;
}

export const ApiContext = createContext<ApiContextData>({} as ApiContextData);

export const ApiContextProvider = ({ children }: ApiContextProps) => {
  const [list, setList] = useState([]);
  const [modalAdd, setModalAdd] = useState<boolean>(false);

  const navigate = useNavigate();

  const [token, setToken] = useState<string | null>(
    localStorage.getItem("@TOKEN")
  );

  const login = async (data: ILogin) => {
    await api
      .post("/login", data)
      .then((response) => {
        console.log(response);
        setToken(response.data.token);
        toast("Seja bem vindo!");
        localStorage.setItem("@TOKEN", response.data.token);
        navigate("/dashboard");
      })
      .catch((error: any) => {
        toast(error.message);
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
        toast(error.message);
        console.log(error);
      });
  };

  const deleteNetwork = async (id: string) => {
    console.log(id);
    await api
      .delete(`/networks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast("contato deletado");
      })
      .catch((error: any) => {
        toast(error.message);
        console.log(error);
      });
  };

  const updatedNetwork = async (data: INetwork, id?: string) => {
    await api
      .patch(`/networks/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        toast("contato atualizado");
      })
      .catch((error: any) => {
        toast(error.message);
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
        toast("contato adicionado com sucesso");
        console.log(response);
      })
      .catch((error: any) => {
        toast(error.message);
        console.log(error);
      });
  };

  const createUser = async (data: IUserRequest) => {
    await api
      .post("/users", data)
      .then((response) => {
        toast("usuário criado com sucesso");
        console.log(response);
        navigate("/");
      })
      .catch((error: any) => {
        toast(error.message);
        console.log(error);
      });
  };

  return (
    <ApiContext.Provider
      value={{
        deleteNetwork,
        login,
        token,
        listNetwork,
        list,
        modalAdd,
        setModalAdd,
        createNetwork,
        createUser,
        updatedNetwork,
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
