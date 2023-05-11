import React from "react";
import {RiDeleteBin6Line} from 'react-icons/ri'

const ListItem = (props) => {
  return (
    <>
      <div className="div-main">
        <div className="flex-box">
          <li className="list-main">{props.invokedItem}
          <RiDeleteBin6Line className="delete-icon" onClick={()=>{
            props.deleteItem(props.id)
          }}/>
          </li>
        </div>
      </div>
    </>
  );
};

export default ListItem;
