import React from "react";

const Drawer = () => {
  return (
    <div className="profile-drower-data">
      <h2 className="drawer-heading">Profile Info</h2>

      <div className="profile-drawer-upper-wrapper">
        <div className="profile-links-wrap">
          <div className="profile-links-repeat d-flex align-items-center justify-content-between">
            <div className="profile-link-left">
              <img src="/images/nft-icon.svg" />
              <span>My NFTs</span>
            </div>
            <div className="profile-link-arrow">
              <img src="/images/arrow-right.svg" />
            </div>
          </div>

          <div className="profile-links-repeat d-flex align-items-center justify-content-between">
            <div className="profile-link-left">
              <img src="/images/settings-icon.svg" />
              <span>Settings</span>
            </div>
            <div className="profile-link-arrow">
              <img src="/images/arrow-right.svg" />
            </div>
          </div>
        </div>

        <div className="wallet-connected-wrap">
          <h4>Wallet Connected</h4>
          <div className="wallet-data-inner">
            <div className="connect-wallet-top-warp">
              <div className="connect-wallet-wrap">
                <div className="meta-icon">
                  <img src="images/Avatar.png" />
                </div>
                <div className="meta-info-text">
                  <div className="meta-info-text-left">
                    <p>0xfa7bec5...268e</p>
                    <span>Ethereum</span>
                  </div>
                  <div className="meta-copy-icon">
                    <img src="images/Copy.svg" />
                  </div>
                </div>
              </div>
              <div className="meta-log-off-icon">
                <img src="images/logout.svg" />
              </div>
            </div>

            <div className="connect-wallet-balance-wrap">
              <div className="wallet-balance-repeat">
                <div className="wallet-balance-left">
                  <img src="/images/eth-icon.png" alt="img" />
                  <p> 5.000 ETH </p>
                </div>
                <div className="wallet-balance-right">
                  <p> $34367 </p>
                </div>
              </div>

              <div className="wallet-balance-repeat">
                <div className="wallet-balance-left">
                  <img src="/images/eth-icon.png" alt="img" />
                  <p> 3.000 ETH </p>
                </div>
                <div className="wallet-balance-right">
                  <p> $23455 </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-drawer-footer-wrap">
        <div className="profile-drawer-profile-info">
          <div className="profile-left-wrap">
            <img src="images/Avatar.png" />
            <h3> Genesis </h3>
            <img src="images/Avatar.png" />
          </div>
          <div className="profile-right-wrap">
            <p> View Profile </p>
            <div className="profile-link-arrow">
              <img src="/images/arrow-right.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
