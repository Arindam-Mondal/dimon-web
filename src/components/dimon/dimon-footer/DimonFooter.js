import React from 'react';
import './DimonFooter.css';

const DimonFooter = () => {
    return (
        <div className="footer container">
            <div className="row">
                <div className="col-6">&copy;Dimon Storage Tank</div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <i class="fa fa-user-tie"></i>Jagannath Mondal</div>
                        <div className="col-12 col-md-6">
                            <i class="fa fa-address-book"></i> 987745258</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DimonFooter;