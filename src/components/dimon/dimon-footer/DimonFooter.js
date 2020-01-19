import React from 'react';
import './DimonFooter.css';

const DimonFooter = () => {
    return (
        <div className="footer">
            <div className="row footer-content">
                <div className="col-5 col-md-6">&copy;Dimon Storage Tank</div>
                <div className="col-7 col-md-6">
                    <div className="row">
                        <div className="col-1">
                            <i class="fa fa-address-book"></i>
                        </div>
                        <div className="col-10">
                            <div className="col-12 col-md-6">Jagannath Mondal</div>
                            <div className="col-12 col-md-6">987745258</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DimonFooter;