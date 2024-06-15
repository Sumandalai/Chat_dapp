import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

// INTERNAL IMPORT
import Style from "./Chat.module.css";
import images from "../../../assets";
import { converTime } from "../../../Utils/apiFeature";
import { Loader } from "../../index";

const Chat = ({
  functionName,
  readMessage,
  friendMsg,
  account,
  userName,
  loading,
  currentUserName,
  currentUserAddress,
  readUser,
}) => {
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState({
    name: "",
    address: "",
  });

  const router = useRouter();
  const containerRef = useRef(null);

  // Scroll to the bottom of the container when messages change
  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [friendMsg]); // Adding friendMsg as a dependency to scroll whenever messages update

  // Handle router data and set chat data
  useEffect(() => {
    if (!router.isReady) return;
    setChatData(router.query);
  }, [router.isReady]);

  // Fetch messages and user info based on chat data
  useEffect(() => {
    if (chatData.address) {
      readMessage(chatData.address);
      readUser(chatData.address);
    }
  }, [chatData.address]);

  return (
    <div className={Style.Chat}>
      {currentUserName && currentUserAddress ? (
        <div className={Style.Chat_user_info}>
          <Image src={images.accountName} alt="image" width={70} height={70} />
          <div className={Style.Chat_user_info_box}>
            <h4>{currentUserName}</h4>
            <p className={Style.show}>{currentUserAddress}</p>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className={Style.Chat_box_box}>
        <div className={Style.Chat_box}>
          <div ref={containerRef} className={Style.Chat_box_left}>
            {friendMsg.map((el, i) => (
              <div key={i}>
                {el.sender === chatData.address ? (
                  <div className={Style.Chat_box_left_title}>
                    <Image
                      src={images.accountName}
                      alt="image"
                      width={50}
                      height={50}
                    />
                    <span>
                      {chatData.name}{" "}
                      <small>Time: {converTime(el.timestamp)}</small>
                    </span>
                  </div>
                ) : (
                  <div className={Style.Chat_box_left_title}>
                    <Image
                      src={images.accountName}
                      alt="image"
                      width={50}
                      height={50}
                    />
                    <span>
                      {userName}{" "}
                      <small>Time: {converTime(el.timestamp)}</small>
                    </span>
                  </div>
                )}
                <p key={i + 1}>
                  {el.msg}
                </p>
              </div>
            ))}
          </div>
        </div>

        {currentUserName && currentUserAddress ? (
          <div className={Style.Chat_box_send}>
            <div className={Style.Chat_box_send_img}>
              <Image src={images.smile} alt="smile" width={50} height={50} />
              <input
                type="text"
                placeholder="type your message"
                onChange={(e) => setMessage(e.target.value)}
              />
              <Image src={images.file} alt="file" width={50} height={50} />
              {loading ? (
                <Loader />
              ) : (
                <Image
                  src={images.send}
                  alt="send"
                  width={50}
                  height={50}
                  onClick={() =>
                    functionName({
                      msg: message,
                      address: router.query.address,
                    })
                  }
                />
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Chat;
