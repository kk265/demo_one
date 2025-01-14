import React from "react";

const PostDrawer = () => {
  return (
    <div className="create-post-drawer-wrapper">
      <h2 className="drawer-heading"> Create New Post </h2>

      <div className="create-post-main-wrapper">
        <div className="create-post-wrap">
          <div className="creat-post-box-repeat">
            <div className="create-post-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                width="72.144"
                height="72.157"
                viewBox="0 0 72.144 72.157"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.12"
                    y1="0.038"
                    x2="0.631"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#f0f" />
                    <stop offset="1" stop-color="orange" />
                  </linearGradient>
                </defs>
                <g
                  id="Component_76_1"
                  data-name="Component 76 – 1"
                  transform="translate(0.523 0.5)"
                >
                  <path
                    id="Union_25"
                    data-name="Union 25"
                    d="M2.434,71.157a3.351,3.351,0,0,1-2.4-2.71A3.291,3.291,0,0,1,3.183,64.6c.184-.012.369-.008.553-.008q22.138,0,44.275,0a4.559,4.559,0,0,1,1.568.222,3.308,3.308,0,0,1,.367,6.056c-.2.11-.42.191-.631.285ZM67.242,55.088q-31.66-.037-63.319-.011a4.362,4.362,0,0,1-2.211-.449A3.309,3.309,0,0,1,.133,50.944a3.259,3.259,0,0,1,3.061-2.482c.231-.007.462,0,.693,0q31.729,0,63.458-.019a3.618,3.618,0,0,1,3.776,2.427v1.807a3.736,3.736,0,0,1-3.872,2.415ZM41.776,38.921H25.832q-10.919,0-21.838,0a6.4,6.4,0,0,1-1.445-.13,3.3,3.3,0,0,1,.034-6.432,6.007,6.007,0,0,1,1.237-.12q22.079-.009,44.159,0c2.417,0,3.928,1.446,3.785,3.6a3.313,3.313,0,0,1-3.542,3.078q-1.321.013-2.642.011C44.313,38.927,43.044,38.921,41.776,38.921Zm25.567-16.2q-31.8-.042-63.595-.01a3.585,3.585,0,0,1-2.677-.9A3.307,3.307,0,0,1,3.163,16.1c.275-.027.555-.011.832-.011h14.6q24.325,0,48.653-.016a3.732,3.732,0,0,1,3.878,2.415v1.806a3.621,3.621,0,0,1-3.768,2.427ZM2.194,6.338A3.136,3.136,0,0,1,.032,3.467,3.157,3.157,0,0,1,1.766.318C1.987.194,2.227.1,2.458,0H49.341a3.34,3.34,0,0,1,2.394,2.711,3.29,3.29,0,0,1-3.144,3.842c-.184.012-.369.008-.555.008q-22.138,0-44.277,0A4.211,4.211,0,0,1,2.194,6.338Z"
                    transform="translate(0 0)"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </svg>
            </div>
            <div className="create-post-text">
              <h5> Upload photos and GIFs here </h5>
              <p>
                {" "}
                Optimize your viewing experience with the enhanced dimensions of
                1080x1080 pixels.{" "}
              </p>
            </div>
          </div>

          <div className="creat-post-box-repeat">
            <div className="create-post-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                // xmlns:xlink="http://www.w3.org/1999/xlink"
                width="72.144"
                height="72.157"
                viewBox="0 0 72.144 72.157"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.12"
                    y1="0.038"
                    x2="0.631"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#f0f" />
                    <stop offset="1" stop-color="orange" />
                  </linearGradient>
                </defs>
                <g
                  id="Component_76_1"
                  data-name="Component 76 – 1"
                  transform="translate(0.523 0.5)"
                >
                  <path
                    id="Union_25"
                    data-name="Union 25"
                    d="M2.434,71.157a3.351,3.351,0,0,1-2.4-2.71A3.291,3.291,0,0,1,3.183,64.6c.184-.012.369-.008.553-.008q22.138,0,44.275,0a4.559,4.559,0,0,1,1.568.222,3.308,3.308,0,0,1,.367,6.056c-.2.11-.42.191-.631.285ZM67.242,55.088q-31.66-.037-63.319-.011a4.362,4.362,0,0,1-2.211-.449A3.309,3.309,0,0,1,.133,50.944a3.259,3.259,0,0,1,3.061-2.482c.231-.007.462,0,.693,0q31.729,0,63.458-.019a3.618,3.618,0,0,1,3.776,2.427v1.807a3.736,3.736,0,0,1-3.872,2.415ZM41.776,38.921H25.832q-10.919,0-21.838,0a6.4,6.4,0,0,1-1.445-.13,3.3,3.3,0,0,1,.034-6.432,6.007,6.007,0,0,1,1.237-.12q22.079-.009,44.159,0c2.417,0,3.928,1.446,3.785,3.6a3.313,3.313,0,0,1-3.542,3.078q-1.321.013-2.642.011C44.313,38.927,43.044,38.921,41.776,38.921Zm25.567-16.2q-31.8-.042-63.595-.01a3.585,3.585,0,0,1-2.677-.9A3.307,3.307,0,0,1,3.163,16.1c.275-.027.555-.011.832-.011h14.6q24.325,0,48.653-.016a3.732,3.732,0,0,1,3.878,2.415v1.806a3.621,3.621,0,0,1-3.768,2.427ZM2.194,6.338A3.136,3.136,0,0,1,.032,3.467,3.157,3.157,0,0,1,1.766.318C1.987.194,2.227.1,2.458,0H49.341a3.34,3.34,0,0,1,2.394,2.711,3.29,3.29,0,0,1-3.144,3.842c-.184.012-.369.008-.555.008q-22.138,0-44.277,0A4.211,4.211,0,0,1,2.194,6.338Z"
                    transform="translate(0 0)"
                    stroke="rgba(0,0,0,0)"
                    stroke-width="1"
                    fill="url(#linear-gradient)"
                  />
                </g>
              </svg>
            </div>
            <div className="create-post-text">
              <h5> Pro Tweet post</h5>
              <p>
              Quickly share your thoughts with a Pro Tweet post.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDrawer;
