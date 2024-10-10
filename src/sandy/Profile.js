import React from "react";
import Drawer from "./Drawer";
import "./drawer.css";
import CreateDrawer from "./CreateDrawer";
import PostDrawer from "./PostDrawer";
import ReportDrawer from "./ReportDrawer";
import { NavLink } from "react-router-dom";

const Profile = () => {
  let list = document.querySelectorAll(".list");
  for (let i = 0; i < list.length; i++) {
    list[i].onclick = (e) => {
      let j = 0;
      while (j < list.length) {
        list[j++].className = "list";
      }
      list[i].className = "list active";
    };
  }

  list.forEach((elements) => {
    elements.addEventListener("click", function (event) {
      let bg = document.querySelector("body");
      let color = event.target.getAttribute("data-color");
      console.log(event.target);
      bg.style.backgroundColor = color;
    });
  });

  return (
    <>
      <div className="profile-nav-tab">
        <div className="navigation">
          <ul>
            <li className="list active" data-color="#dc143c">
              <a href="#">
                <NavLink to="/owned"> Owned </NavLink>
              </a>
            </li>
            <li className="list" data-color="#3c40c6">
              <a href="#">
                <NavLink to="/sale">On Sale </NavLink>
              </a>
            </li>
            <li className="list" data-color="#05c46b">
              <a href="#">
                <NavLink to="/collection">Collection</NavLink>
              </a>
            </li>
            <li className="list" data-color="#0fbcf9">
              <a href="#">
                <NavLink to="/created">Created </NavLink>
              </a>
            </li>
            <li className="list" data-color="#ffa801">
              <a href="#">
                <NavLink to="/activity">Activity </NavLink>
              </a>
            </li>
            <div className="indicator"></div>
          </ul>
        </div>
      </div>

      <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          Profile Drawer
        </button>

        <div
          class="offcanvas offcanvas-end profile-canvas-wrap"
          tabindex="-1"
          id="offcanvasRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-body">
            {/* <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button> */}

            <Drawer />
          </div>
        </div>
      </div>

      <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCreateRight"
          aria-controls="offcanvasRight"
        >
          Create Wallet
        </button>

        <div
          class="offcanvas offcanvas-end profile-canvas-wrap"
          tabindex="-1"
          id="offcanvasCreateRight"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-body">
            {/* <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button> */}

            <CreateDrawer />
          </div>
        </div>
      </div>

      <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasCreatePost"
          aria-controls="offcanvasRight"
        >
          Create Post
        </button>

        <div
          class="offcanvas offcanvas-end profile-canvas-wrap"
          tabindex="-1"
          id="offcanvasCreatePost"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-body">
            {/* <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button> */}

            <PostDrawer />
          </div>
        </div>
      </div>

      <div>
        <button
          class="btn btn-primary"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasReport"
          aria-controls="offcanvasRight"
        >
          Report User
        </button>

        <div
          class="offcanvas offcanvas-end profile-canvas-wrap"
          tabindex="-1"
          id="offcanvasReport"
          aria-labelledby="offcanvasRightLabel"
        >
          <div class="offcanvas-body">
            {/* <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button> */}

            <ReportDrawer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
