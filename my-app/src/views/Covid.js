import useFetch from "../customize/fetch";

const Covid = () => {
  // componentDidMount;
  const { data: dataCovid, isLoading: loading } = useFetch(
    "https://api.covid19api.com/total/country/vietnam?from=2022-03-01T00:00:00Z&to=2022-03-16T00:00:00Z"
  );

  return (
    <div>
      {console.log("check fetch: ", dataCovid)}
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Country</th>
            <th>Date</th>
            <th>Confirmed</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {loading === false &&
            dataCovid &&
            dataCovid.length > 0 &&
            dataCovid.map((item, index) => {
              return (
                <tr key={item.Active}>
                  <th>{index + 1}</th>
                  <td>{item.Country}</td>
                  <td>{item.Date}</td>
                  <td>{item.Confirmed}</td>
                  <td>{item.Deaths}</td>
                </tr>
              );
            })}
          {loading === true && (
            <tr>
              <td colSpan="5"> Loading ... </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Covid;
