const ApiHelper = async (
  route: string,
  method: string,
  data = null,
  format = "application/json"
) => {
  const apiUrl = `http://localhost:5000/${route}`;
  const headers: HeadersInit = {
    "Content-Type": format,
    Accept: "application/json",
  };

  if (method === "POST" || method === "PUT") {
    headers["Content-Type"] = format;
  }

  const requestInit: RequestInit = {
    method,
    headers,
    credentials: "include",
  };

  if (data) {
    requestInit.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(apiUrl, requestInit);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const responseData = await response.json();
    return responseData;
  } catch (error: unknown) {
    throw new Error(`Request failed: ${(error as Error).message}`);
  }
};

export default ApiHelper;
