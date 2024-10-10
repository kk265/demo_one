import React from 'react';

const CreateDrawer = () => {
    return (
        <div className='create-drawer-main-wrapper'>
            <div className='create-drawer-header'>
                <h2 className="drawer-heading">Create NFT</h2>
                <p> Select 'Single' for a One-of-a-Kind Item or 'Multiple'
                     to Sell a Collectible Multiple Times. 
                </p>
            </div>

            <div className='create-drawer-type-wrapper'>
                <div className='create-drawer-type-wrap'>
                    <div className='create-drawer-type-repeat'>
                        <div className='create-drawer-warp'>
                        <img src='/images/single-create.svg' alt='img' />
                        <div className='create-drawer-type-text'>
                            <h3> Single </h3> 
                            <p> If you wish to accentuate the uniqueness
                                 and individuality of your item... 
                            </p>
                        </div>
                        </div>
                    </div>


                    <div className='create-drawer-type-repeat'>
                        <div className='create-drawer-warp'>
                        <img src='/images/multi-create.svg' alt='img' />
                        <div className='create-drawer-type-text'>
                            <h3> Multiple </h3> 
                            <p> If you want to distribute your NFT among
                                 a vast community of members...
                            </p>
                        </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className='create-drawer-footer-wrap'>
                <p> We do not own your private keys and cannot acces your 
                    funds without your confirmation
                    </p>
            </div>
           
            
        </div>
    );
}

export default CreateDrawer;
