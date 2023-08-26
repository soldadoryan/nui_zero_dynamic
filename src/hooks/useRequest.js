function useRequest() {
  const request = async (method, body = {}) => {
    return fetch(`https://104.234.189.131/zero_dynamic/${method}`, {
      method: "POST",
      body: JSON.stringify(body),
    });
  };

  return {
    request,
  };
}

export default useRequest;
