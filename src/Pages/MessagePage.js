import React, { useState } from "react";

import Message from "../components/Message/Message";
import MessageList from "../components/Message/MessageList";

function MessagePage() {
  const [catMsg, setCatMsg] = useState({});
  const showMessage = (breedName, url) => {
    setCatMsg({breedName, url});
  };

  return (
    <div style={{ display: "flex" }}>
      <MessageList showMessage={showMessage} />
      <Message breedName={catMsg.breedName} url={catMsg.url} />
    </div>
  );
}

export default MessagePage;
