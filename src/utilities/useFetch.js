import { useEffect, useState } from "react";

export const useFetch = url => {
  const [requestState, setRequestState] = useState({
    data: null,
    loading: true,
    failed: false
  });

  useEffect(() => {
    setRequestState(() => ({
      data: null,
      loading: true,
      failed: false
    }));

    fetch(url)
      .then(res => res.json())
      .then(json => {
        setRequestState({ data: json, loading: false, failed: false });
      })
      .catch(err => {
        // console.log(err);
        setRequestState({ data: null, loading: false, failed: true });
      });
  }, [url, setRequestState]);

  return requestState;
};
