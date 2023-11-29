import React, { useState } from "react";
import Picker from "emoji-picker-react";

import classes from "./EmojiBox.module.scss";

function EmojiBox(props) {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(event);
    if(props.reaction) {
      props.setSendMessage((prev) => {
        const updatedMessages = [...prev]; // Create a copy of the previous array
        updatedMessages[props.index] = { ...updatedMessages[props.index], reaction: event.emoji }; // Update the reaction of the specific message at the given index
        return updatedMessages; // Return the updated array
      });
      //props.setShowReactionEmoji(false);
      return;
    }  
    props.setMessage((prev) => {
      return  prev+''+ event.emoji;
    });

  };

  return (
    <div style={props.received ? { right: props.left } : { left: props.left }} className={classes.emojiBox}>
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
