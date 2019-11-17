import React,{useState} from 'react';
import { getDate } from "../utils";

const SubHeader = () => {
  const [open, setOpen] = useState(false);  
  return (
    <div className="sub-header">
      <div className="sub-header-top">
        <div className="sub-left">
            <div className="buffet">
                Buffet
            </div>
        </div>
        <div className="sub-right">
            <div className="date">
                <i className="icon icon-calendar"></i>
                <span>{getDate()}</span>
            </div>
            <div className="sort">
                <button onClick={(e) => {
                    e.preventDefault();
                    setOpen(!open);
                }}>
                <i className="icon icon-equalizer"></i>
                Sort</button>
            </div>
        </div>
      </div>
      <div className="sub-header-bottom"></div>
    </div>
  );
};

export default SubHeader;
