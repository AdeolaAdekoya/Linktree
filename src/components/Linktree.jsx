import React from "react";
import ProfileImg from "../images/profileimage.png";
import ShareDefault from "../images/ShareDefault.svg";
import StateDefault from "../images/StateDefault.svg";
import "../Linktree.css";

const Linktree = () => {
  return (
    <div>
         
      <section>
        <div id="container">
          {/* SHARE LINK STARTS */}
          <div id="share__Link">
            <img id="share-state" src={ShareDefault} alt="share_button" />

            <img id="hidden-state" src={StateDefault} alt="state_button" />
          </div>
          {/* SHARE LINK ENDS */}

          {/* PROFILE SECTION STARTS */}
          <div id="profile__section">
            <img id="profile__img" src={ProfileImg} alt="ProfileImage" />
            <p id="twitter">Adeoladev</p>

            {/* <p id='slack'>Adeola Adekoya</p> */}
          </div>

          {/* PROFILE SECTION ENDS */}

          {/* lINKS STARTS */}

          <div id="links">
            <a href="https://twitter.com/adeoladev">Twitter Link</a>
            <a id="btn__zuri" href="https://training.zuri.team/">
              Zuri Team
            </a>

            <a id="books" href="https://books.zuri.team/">
              Zuri Books
            </a>

            <a id="book__python" href="https://books.zuri.team/">
              Python Books
            </a>

            <a id="pitch" href="https://background.zuri.team">
              Background Check for Coders
            </a>

            <a id="book__design" href="https://books.zuri.team/design-rules">
              Design Books
            </a>
          </div>

          {/* lINKS STARTS */}
        </div>
      </section>
    </div>
  );
};

export default Linktree;
