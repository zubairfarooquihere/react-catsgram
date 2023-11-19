import React, { useState } from "react";
import Picker from "emoji-picker-react";

import classes from "./EmojiBox.module.scss";

function EmojiBox(props) {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(event);
    props.setMessage((prev)=>{
      return [...prev, event.emoji];
    })
  };

  return (
    <div className={classes.emojiBox}>
      {chosenEmoji ? (
        <span>You chose: {chosenEmoji.emoji}</span>
      ) : (
        <span>No emoji Chosen</span>
      )}
      <Picker onEmojiClick={onEmojiClick} />
    </div>
  );
}

export default EmojiBox;
