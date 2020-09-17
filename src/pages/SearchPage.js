import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../datalayer/StateProvider";
import useGoogleSearch from "../useGoogleSearch";
import { Link } from "react-router-dom";
import Search from "../components/Search";
import Response from "../response.js";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function SearchPage() {
  const [{ term }] = useStateValue();
  // const { data } = useGoogleSearch(term); //Live API Call
  const data = Response;
  console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div class="searchPage_headerBody">
          <Search HideButtons />
          <div class="searchPage_options">
            <div class="searchPage_optionsLeft">
              <div class="searchPage_option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div class="searchPage_option">
                <DescriptionIcon />
                <Link to="/all">News</Link>
              </div>
              <div class="searchPage_option">
                <ImageIcon />
                <Link to="/all">Images</Link>
              </div>
              <div class="searchPage_option">
                <LocalOfferIcon />
                <Link to="/all">shopping</Link>
              </div>
              <div class="searchPage_option">
                <RoomIcon />
                <Link to="/all">maps</Link>
              </div>
              <div class="searchPage_option">
                <MoreVertIcon />
                <Link to="/all">more</Link>
              </div>
            </div>
            <div class="searchPage_optionsRight">
              <div class="searchPage_option">
                <Link to="/settings">Settings</Link>
              </div>
              <div class="searchPage_option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div class="searchPage_results">
          <p className="searchPage_resultCount">
            About {data?.searchInformation.formattedTotalResults} results (
            {data?.searchInformation.formattedSearchTime}
            seconds) for {term}
          </p>

          {data?.items.map((item) => (
            <div className="searchPage_result">
              <a className="searchPage_resultLink" href={item.link}>
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="searchPage_resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}
                {item.displayLink} ∆
              </a>
              <a href={item.link} className="searchPage_resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="searchPage_resultSnippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
