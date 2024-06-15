import React, { useEffect, useState ,useContext } from "react";

// INTERNAL IMPORT
import { Filter, Friend , Lpage ,Loader} from "../Components/index";
// import { friendLists,userName } from "../Context/ChatAppContext";
import { ChatAppContect } from "../Context/ChatAppContext";

const ChatApp = () => {
  const { userName, friendLists } = useContext(ChatAppContect);
  const [searchedResults, setSearchedResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setSearchedResults(friendLists);
  }, [friendLists]);
  console.log(userName);

  useEffect(() => {
    if (userName !== "") {
      setLoading(false);
    }
  }, [userName]);

  if (loading) {
    return (
      <Loader/>
    );
  }

  return (
    <div>
      {userName ? (
        <>
          <Filter searchedResults={searchedResults} setSearchedResults={setSearchedResults} />
          <Friend searchedResults={searchedResults} />
        </>
      ) : (
        <Lpage />
      )}
    </div>
  );
};

export default ChatApp;
