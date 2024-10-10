import React from 'react';

const ReportDrawer = () => {
    return (
        <div className='report-drawer-main-wrapper'>
            <div className='report-drawer-header'>
                <h2 className="drawer-heading">Why are you reporting?</h2>
                <p> 
                    Please provide details about the rule violations committed 
                    by this user on the site. 
                </p> 
            </div>

            <div className='report-drawer-wrapper'>
                <div className='report-contant-wrap'>
                    <label> Description* </label>
                    <textarea placeholder='Tell us some details'></textarea>
                </div>
            </div>

            <div className='report-drawer-footer'>
                <div className='report-drawer-button-wrap'>
                    <button> Proceed </button>
                    <button> Cancel </button>
                </div>
            </div>
            
        </div>
    );
}

export default ReportDrawer;
