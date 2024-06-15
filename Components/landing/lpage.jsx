import React from "react";
import Style from "./lpage.module.css";
import images from "../../assets";
import Image from "next/image";

const Lpage = () => {
  return (
    <div>
      <header className={Style.header__container}>
        <div className={Style.header__image}>
          <Image src={images.header} alt="loader" layout="fill" objectFit="cover" />
        </div>
        <div className={Style.header__content}>
          <h2>UI UX DESIGN AGENCY</h2>
          <h1 className="myh1">
            Decentralized Chat<br /><span className={Style.h1__span1}>Connect with Friends</span>
            <span className={Style.h1__span2}>Securely and Privately</span>
          </h1>
          <p>
            From casual conversations to organized group chats, our decentralized chat app ensures secure and private communication. Join us to experience a new era of digital connectivity where your privacy is paramount.
          </p>
          <div className={Style.header__btn}>
            <button className={Style.btn}>Connect Wallet</button>
          </div>
          
        </div>
      </header>
      <div className={Style.header__bar}>
            Copyright © 2024 Decentralized Chat. All rights reserved.
        </div>
    </div>
  );
};

export default Lpage;
