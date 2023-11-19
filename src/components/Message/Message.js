import React, { useState, useRef, Fragment } from "react";

import classes from "./Message.module.scss";

import {
  phonecall,
  videocall,
  info,
  blackInfo,
  mike,
  gallery,
  heart,
  emoji,
  Messagesvg,
} from "../ui/svg/Message.js";

import Info from "./Info.js";
import EmojiBox from "./EmojiBox.js";

function Message(props) {
  const [message, setMessage] = useState("");
  const [sendMessage, setSendMessage] = useState([]);
  const [showInfo, setShowInfo] = useState(false);
  const [showEmoji, setShowEmoji] = useState(false);
  const fileInputRef = useRef(null);

  if (props.breedName === undefined) {
    return (
      <div className={classes.messagePage}>
        <div className={classes.messagePage__content}>
          {Messagesvg}
          <h3>Your messages</h3>
          <p>Send private photos and messages to a friend or group</p>
          <div className={classes.btn}>Send message</div>
        </div>
      </div>
    );
  }

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); // Prevents a new line in the textarea

      setSendMessage((prev) => {
        return [...prev, event.target.value];
      });
      setMessage("");
    }
  };

  const handleDownload = (fileData, fileName) => {
    // Create a Blob from the file data
    const blob = new Blob([fileData], { type: "text/plain" });

    // Create a URL for the Blob
    const url = window.URL.createObjectURL(blob);

    // Create a link element
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName; // Set the download attribute to the file name
    link.click();

    // Clean up by revoking the Object URL
    window.URL.revokeObjectURL(url);
  };

  const handleFileChange = (event) => {
    const files = event.target.files; // Get selected files
    const filesArray = Array.from(files); // Convert FileList to an array

    // Read each file and add it to the sendMessage state
    filesArray.forEach((file) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        const dataURL = e.target.result;
        let name = file.name;
        let type = file.type;
        setSendMessage((prev) => [...prev, { dataURL, type, name }]); // Add image data to the state
      };

      reader.readAsDataURL(file); // Read file as a data URL
    });
  };

  const showPicture = () => {};

  return (
    <Fragment>
      <div className={classes.messagePage}>
        <div className={classes.messageLayout}>
          <div className={classes.messageLayout__header}>
            <div className={classes["messageLayout__header__one"]}>
              <div
                className={classes["messageLayout__header__one--imageHolder"]}
              >
                <img src={props.url} alt="pro" />
              </div>
              <div className={classes["messageLayout__header__one--name"]}>
                {props.breedName}
              </div>
            </div>
            <div className={classes["messageLayout__header__two"]}>
              <span>{phonecall}</span>
              <span>{videocall}</span>
              <span
                onClick={() => {
                  setShowInfo((prev) => {
                    return !prev;
                  });
                }}
                className={classes["messageLayout__header__two--info"]}
                style={{ color: "black" }}
              >
                {!showInfo && info}
                {showInfo && blackInfo}
              </span>
            </div>
          </div>
          <div className={classes.messageLayout__body}>
            <div
              className={`${classes["messageLayout__body--recieve"]} ${classes.msgBlock}`}
              style={{ whiteSpace: "pre-wrap" }}
            >
              Hi, My name is {props.breedName}
            </div>
            {sendMessage.map((data, index) => {
              if (data.type === "image/jpeg") {
                return (
                  <div
                    key={index}
                    className={`${classes["messageLayout__body--send"]} ${classes.msgBlock}`}
                    style={{
                      whiteSpace: "pre-wrap",
                      padding: "0rem",
                      background: "transparent",
                    }}
                  >
                    <img
                      style={{
                        cursor: "pointer",
                        width: "25rem",
                        height: "20rem",
                        objectFit: "fill",
                        borderRadius: "3rem",
                      }}
                      onClick={() => {
                        showPicture(data.dataURL);
                      }}
                      src={data.dataURL}
                      alt={`Uploaded file ${index}`}
                    />
                  </div>
                );
              }
              if (data.type === "text/plain") {
                return (
                  <div
                    key={index}
                    onClick={() => handleDownload(data.dataURL, data.name)}
                    className={`${classes["messageLayout__body--send"]} ${classes.msgBlock} ${classes[emoji]}`}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      cursor: "pointer",
                      whiteSpace: "pre-wrap",
                      backgroundColor: "#efefef",
                      color: "black",
                      fontWeight: "700",
                      padding: "1rem",
                    }}
                  >
                    <div //Circle in filr
                      style={{
                        height: "3rem",
                        width: "3rem",
                        borderRadius: "100%",
                        backgroundColor: "#e4e4e5",
                        margin: "1rem",
                      }}
                    ></div>
                    {data.name}
                  </div>
                );
              } else {
                let emoji = "";
                if (data === "❤️") {
                  emoji = "emoji";
                }
                return (
                  <div
                    key={index}
                    className={`${classes["messageLayout__body--send"]} ${classes.msgBlock} ${classes[emoji]}`}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {data}
                  </div>
                );
              }
            })}
          </div>
          <div className={classes.messageLayout__textbox}>
            <div className={classes["messageLayout__textbox--one"]}>
              <div className={classes["messageLayout__textbox--one__svg"]}>
                {showEmoji && <EmojiBox setMessage={setMessage} />}
                <span
                  onClick={() => {
                    setShowEmoji((prev) => {
                      return !prev;
                    });
                  }}
                  className={classes["messageLayout__textbox--one--emoji"]}
                >
                  {emoji}
                </span>
              </div>
              <div className={classes["messageLayout__textbox--one__text"]}>
                <textarea
                  placeholder="Message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyPress}
                ></textarea>
              </div>
            </div>
            {message === "" ? (
              <div className={classes["messageLayout__textbox--two"]}>
                <span>{mike}</span>
                <input
                  type="file"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
                <span onClick={() => fileInputRef.current.click()}>
                  {gallery}
                </span>
                <span
                  onClick={() => {
                    setSendMessage((prev) => {
                      return [...prev, "❤️"];
                    });
                  }}
                >
                  {heart}
                </span>
              </div>
            ) : (
              <p className={classes.sendBtn}>Send</p>
            )}
          </div>
        </div>
      </div>
      {showInfo && <Info url={props.url} breedName={props.breedName} />}
    </Fragment>
  );
}

export default Message;
