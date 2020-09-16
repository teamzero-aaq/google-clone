import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../datalayer/StateProvider";

function Search({ HideButtons = false }) {
  const [state, dispatch] = useStateValue();

  const [input, setInput] = useState("");
  const history = useHistory();

  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_SEARCH_TERM",
      term: input,
    });
    history.push("/search");
  };

  return (
    <form className="search">
      <div class="search_input">
        <SearchIcon className="search_icon" />
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <MicIcon />
      </div>

      {!HideButtons ? (
        <div class="search_button">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div class="search_buttonsHide">
          <Button
            className="search_buttonsHide"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined">I'm Feeling Lucky</Button>
        </div>
      )}
    </form>
  );
}

export default Search;
