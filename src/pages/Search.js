import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";

function Search({ HideButtons = false }) {
  const [state, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const history = useHistory();
  //to prevent refresh page
  const search = (e) => {
    e.preventDefault();
    console.log("you hit the Serach button");
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_icon" />
        <input />
        <MicIcon />
      </div>
      {!HideButtons ? (
        <div className="search_button">
          <Button
            type="submit"
            onClick={search}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button variant="outlined"> I'm Feeling Lucky</Button>
        </div>
      ) : (
        <div className="search_button">
          <Button
            className="search_buttonsHide"
            type="submit"
            onClick={Search}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search_buttonsHide" variant="outlined">
            {" "}
            I'm Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
