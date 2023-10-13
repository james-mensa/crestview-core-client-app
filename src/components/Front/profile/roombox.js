import React from "react";
import {
  BoundingBoxCircles,
  Cup,
  Person,
  Star,
  Wifi,
} from "react-bootstrap-icons";
import { FaBed } from "react-icons/fa";

import { format } from "date-fns";

const RoomBox = (props) => {
  
  const data = props.data;
  const room = props.data.room;
  props.setData(data);
  return (
    <div className="Roomcard" onClick={() => {}}>
      <img src={room.image} alt="" className="card-room-img" />
      <div className="room-description">
        <h3>Room No: {data.room_number}</h3>
        <h3>{room.room_type}</h3>
        <div className="row-styles">
          <span> GHC {room.price} / per Night</span>
          <Star size={15} color="yellow" /> <Star size={15} color="yellow" />{" "}
          <Star size={15} color="yellow" />
        </div>

        <p>
          {room.alias}: {room.description}
        </p>

        <div className="row-styles" style={{ marginBottom: "10px" }}>
          ORDER ID: {data.orderId}
        </div>
        <div className="row-styles" style={{ marginBottom: "10px" }}>
          Payment completed on :
          {format(new Date(data.createdAt), "EEEE dd yyyy")}
        </div>
        <div className="row-styles" style={{ marginBottom: "10px" }}>
          Payment method :{data.paymentoption}
        </div>
        <div className="row-styles">
          <Person color=" rgb(91, 2, 66)" size={20} />
          <span>{room.capacity} Person</span>
          <BoundingBoxCircles color=" rgb(91, 2, 66)" size={20} />
          <span>{room.aircondition ? "Air conditioned" : ""}</span>
        </div>

        <div className="row-styles">
          <Cup color=" rgb(91, 2, 66)" size={20} />
          <span> {room.meals} </span>
          <FaBed color=" rgb(91, 2, 66)" size={20} />

          <span>{room.mattress} bed</span>
        </div>

        <div className="row-styles-b">
          <p className="book-now">Cancel Booking</p>
          <p
            className="book-now"
            onClick={() => {
              props.setMsg(true);
            }}
          >
            Print
          </p>
        </div>
      </div>
    </div>
  );
};

export default RoomBox;
