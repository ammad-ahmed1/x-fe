import React, { useEffect, useRef, useState } from "react";
import TextField from "./TextFieldUI";
import UserCard from "../shared/UserCard";

const SearchInputUI = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const dropdownRef = useRef(null);

  const handleShowDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  };
  const fetchUsers = () => {
    setLoading(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 90) {
          clearInterval(interval);
          return oldProgress;
        }
        return oldProgress + 10;
      });
    }, 300);

    fetch(
      `https://dummyjson.com/user/search?q=${searchQuery}&limit=10&skip=${
        page - 1
      }`
    )
      .then((response) => response.json())
      .then((data) => {
        setProgress(100);
        setUsers(data?.users);
        setProgress(0);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        console.log(error);
        setError(error?.message || "Search failed!");
        setProgress(0);
        setLoading(false);
      });
  };
  useEffect(() => {
    if (searchQuery.length > 0) {
      const delayDebounce = setTimeout(() => {
        fetchUsers(searchQuery);
      }, 500);

      return () => clearTimeout(delayDebounce);
    } else {
      setUsers([]);
      setProgress(0);
      setLoading(false);
    }
  }, [searchQuery, page]);
  useEffect(() => {
    const dropdown = dropdownRef.current;

    const handleScroll = () => {
      if (dropdown && searchQuery.length != 0) {
        const { scrollTop, scrollHeight, clientHeight } = dropdown;

        if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
          setPage((prevPage) => prevPage + 1);
        }
      }
    };

    if (dropdown) {
      dropdown.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (dropdown) {
        dropdown.removeEventListener("scroll", handleScroll);
      }
    };
  }, [loading, searchQuery]);
  return (
    <div
      onFocusCapture={() => handleShowDropdown()}
      onBlurCapture={() => handleShowDropdown()}>
      <TextField
        fieldState={searchQuery}
        setFieldState={setSearchQuery}
        startIcon={<i className="fas fa-user"></i>}
        placeholder="Search"
        fullWidth
        size="md"
        className={"border-none outline-none"}
        rounded="rounded-3xl"
      />
      <div
        ref={dropdownRef}
        className={`h-[200px] w-[300px] overflow-hidden rounded-lg bg-black border border-[rgb(51,54,57)] shadow-[0_0_15px_rgba(255,255,255,0.1)] overflow-y-auto ${
          !isShowDropdown && "hidden"
        }`}>
        {loading && (
          <div
            className="h-full  bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-300"
            style={{ width: `${progress}%`, height: "5px" }}></div>
        )}
        {searchQuery?.length == 0 && (
          <p className="mt-3 text-center text-xs color">
            Try searching for people, lists, or keywords
          </p>
        )}
        {error != null && (
          <p className="mt-3 text-center text-xs text-red-500">{error}</p>
        )}
        {users?.map((user, index) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
};

export default SearchInputUI;
