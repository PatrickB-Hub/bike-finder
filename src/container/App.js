import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";

import { color_primary } from "../atoms/Variables";

import Header from "../components/Layout/Header";
import TopBar from "../components/Layout/TopBar";
import Gallery from "../components/Layout/Gallery";
import SideFilter from "../components/Layout/SideFilter";

import FilterContext from "../context/FilterContext";

const App = () => {
  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [queryOptions, setQueryOptions] = useState({
    searchBar: "",
    dropdownFilter: "New York",
    page: 1,
    perPage: 25,
  });
  const [sideFilterOptions, setSideFilterOptions] = useState({
    dateRangeFilter: { startDate: null, endDate: null },
    searchFilter: "",
    radioFilter: "Image",
    checkboxFilter: [],
  });

  const [sideFilterVisibility, setSideFilterVisibility] = useState(false);

  const [filtersFixed, setFiltersFixed] = useState(false);

  const [datePickerExpanded, setDatePickerExpanded] = useState(false);

  useEffect(() => {
    console.log("IN USEEFFECT");
    setLoading(true);
    fetch(
      `https://bikeindex.org/api/v3/search?page=${queryOptions.page}&per_page=${
        queryOptions.perPage
      }&query=${encodeURI(queryOptions.searchBar)}&location=${encodeURI(
        queryOptions.dropdownFilter
      )}&distance=100&colors=${sideFilterOptions.checkboxFilter.join(
        ","
      )}&stolenness=proximity`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setBikes(data.bikes);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message);
      });
  }, [
    queryOptions.page,
    queryOptions.dropdownFilter,
    queryOptions.searchBar,
    queryOptions.perPage,
    sideFilterOptions.checkboxFilter,
  ]);

  // const { data, loading, failed } = useFetch(
  //   `https://bikewise.org:443/api/v2/incidents?page=${
  //     queryOptions.page
  //   }&per_page=200&incident_type=theft&proximity=${encodeURI(
  //     queryOptions.dropdownFilter
  //   )}&proximity_square=100&query=${encodeURI(queryOptions.searchBar)}`
  // );

  const fixFilterElements = () => {
    const offsetTop = 150;
    const scrollTop = window.scrollY;
    scrollTop >= offsetTop ? setFiltersFixed(true) : setFiltersFixed(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", fixFilterElements);

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener("scroll", fixFilterElements);
    };
  }, []);

  const toggleSideFilterVisibility = () => {
    setSideFilterVisibility(!sideFilterVisibility);
  };

  const changeSelectedFilter = (option) => {
    const newQueryOptions = { ...queryOptions };
    if (option.filterPart !== "page") {
      newQueryOptions.page = 1;
    }
    newQueryOptions[option.filterPart] = option.value;
    setQueryOptions(newQueryOptions);
  };

  const changeSelectedFilterOptions = (option) => {
    const newSideFilterOptions = { ...sideFilterOptions };
    newSideFilterOptions[option.filterPart] = option.value;
    setSideFilterOptions(newSideFilterOptions);
    console.log(sideFilterOptions);
  };

  const changeCheckboxFilterOptions = (option, action) => {
    const newSideFilterOptions = { ...sideFilterOptions };
    let selectedCheckboxFilter = [...sideFilterOptions.checkboxFilter];
    // add or remove filter option from list
    action && action === "push"
      ? selectedCheckboxFilter.push(option)
      : (selectedCheckboxFilter = selectedCheckboxFilter.filter(
          (elem) => elem !== option
        ));
    newSideFilterOptions.checkboxFilter = selectedCheckboxFilter;
    setQueryOptions({ ...queryOptions, page: 1 });
    setSideFilterOptions(newSideFilterOptions);
  };

  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Container>
        <FilterContext.Provider
          value={{
            queryOptions,
            sideFilterVisibility,
            filtersFixed,
            toggleSideFilterVisibility,
            changeSelectedFilter,
            sideFilterOptions,
            changeSelectedFilterOptions,
            changeCheckboxFilterOptions,
            datePickerExpanded,
            setDatePickerExpanded,
          }}
        >
          <Header></Header>
          <TopBar></TopBar>
          <Gallery
            bikes={bikes}
            loading={loading}
            error={error}
            casesPerPage={queryOptions.perPage}
            filter={sideFilterOptions}
          ></Gallery>
          <SideFilter></SideFilter>
        </FilterContext.Provider>
      </Container>
    </>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  html * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-size: 1.6rem;
    font-family: "Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;

    color: ${color_primary};
    background-color: #e7e7e7;
  }
`;

const Container = styled.div`
  position: relative;
  min-height: 100vh;
`;
