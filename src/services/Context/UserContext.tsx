/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
  useMemo,
} from "react";

// Interface pour l'objet utilisateur
interface User {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  role: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

// Interface pour le contexte
interface UserContextType {
  user: User | null;
  handleReloadUser: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
}

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [reload, setReload] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const handleReloadUser = () => {
    setReload(!reload);
  };

  useEffect(() => {
    const userConnect = localStorage.getItem("userConnect");

    if (userConnect) {
      const userProfil = JSON.parse(userConnect) as User;
      setUser(userProfil);
    }
  }, [reload]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, [reload]);

  const contextValue: UserContextType = useMemo(() => {
    return { user, token, handleReloadUser };
  }, [user, token, handleReloadUser]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}
