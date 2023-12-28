import { useEffect, useState } from "react";
import ApiHelper from "@/services/apiHelper";

export function useAdminMessageFunctions() {
  const [messages, setMessages] = useState([]);

  // récupère les datas des messages
  useEffect(() => {
    const fetchData = async () => {
      const newData = await ApiHelper("messages", "GET");
      setMessages(newData);
    };
    fetchData();
  }, []);

  return {
    messages,
  };
}
