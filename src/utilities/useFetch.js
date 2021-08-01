import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [requestState, setRequestState] = useState({
    data: null,
    loading: true,
    error: "",
  });

  useEffect(() => {
    setRequestState(() => ({
      data: null,
      loading: true,
      error: "",
    }));

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setRequestState({ data: json, loading: false, error: "" });
      })
      .catch((err) => {
        setRequestState({ data: null, loading: false, error: err });
      });
  }, [url, setRequestState]);

  return requestState;
};
