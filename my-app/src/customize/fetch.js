import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setTimeout(async () => {
        let res = await axios.get(url);
        let data = res && res.data ? res.data : [];
        if (data && data.length > 0) {
          data.map((item, index) => {
            item.Date = moment(item.Date).format("DD/MM/YYYY");
            return item;
          });
          data = data.reverse();
        }
        let canceled = false;
        if (!canceled) {
          setData(data);
          setIsLoading(false);
        }
        return () => (canceled = true);
      }, 2000);
    }

    fetchData();
  }, []);
  return {
    data,
    isLoading,
  };
};

export default useFetch;
