import axios, { all } from "axios";
import * as notify from "./notification";
import { AutoLogin } from "./adminActions";

const {
  ADDROOM,
  SEARCRESULTS,
  GETROOMS,
  ALLRATINGS,
  ALLORDERS,
  BOOKROOM,
  ORDERDETAIL,
  ROOMTYPES,
  MATCHCARDS,
  API,
  GETROOM,
  VERIFIEDCARD,
} = require("../type");

export const Getroom = (data) => ({
  type: GETROOM,
  payload: data,
});
export const searchResult = (data) => ({
  type: SEARCRESULTS,
  payload: data,
});
export const newRoom = (data) => ({
  type: ADDROOM,
  payload: data,
});

export const allrooms = (data) => ({
  type: GETROOMS,
  payload: data,
});

export const allroomsTypes = (data) => ({
  type: ROOMTYPES,
  payload: data,
});

export const orderDetail = (data) => ({
  type: ORDERDETAIL,
  payload: data,
});

export const Bookrooms = (data) => ({
  type: BOOKROOM,
  payload: data,
});

export const Bookings = (data) => ({
  type: ALLORDERS,
  payload: data,
});
export const allRatings = (data) => ({
  type: ALLRATINGS,
  payload: data,
});

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.interceptors.request.use((config) => {
  config.mode = "cors";
  return config;
});

export const AddNewRoom = (data) => {
  return async (dispatch, getdispatch) => {
    try {
      console.log(data);
      const newd = await axios.post(`${API}/session/admin/room/addroom`, data);

      dispatch(newRoom(newd.data));
      dispatch(
        notify.notify_success({
          msg: `Room Added`,
        })
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: `failed !`,
        })
      );
    }
  };
};

export const AddNewRoomFromCate = (data) => {
  return async (dispatch, getdispatch) => {
    try {
      console.log(data);
      const newd = await axios.post(
        `${API}/session/admin/room/addfromcategory`,
        data
      );
      dispatch(newRoom(newd.data));
      dispatch(
        notify.notify_success({
          msg: `Room Added`,
        })
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: `${error.response.data.msg}`,
        })
      );
    }
  };
};

export const AddRoomFromList = (data) => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.post(`${API}/admin/addroom_from_list`, data);

      dispatch(newRoom(newd.data));
      dispatch(
        notify.notify_success({
          msg: `Room Added`,
        })
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: `failed !`,
        })
      );
    }
  };
};

export const AddRoomType = (data) => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.post(`${API}/session/admin/addroomtype`, data);

      dispatch(newRoom(newd.data));
      dispatch(
        notify.notify_success({
          msg: `Room Added`,
        })
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: `failed !`,
        })
      );
    }
  };
};

export const GetAllRooms = (data) => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.get(`${API}/session/admin/get_roooms`, data);
      dispatch(allrooms(newd.data));
    } catch (error) {}
  };
};

export const GetAllRoomTypes = (data) => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.get(`${API}/session/admin/get_room_type`, data);

      dispatch(allroomsTypes(newd.data));
    } catch (error) {}
  };
};

export const GetsearchResult = (startDate, roomtype, persons) => {
  return async (dispatch) => {
    try {
      console.log({
        startDate,
        roomtype,
        persons,
      });
      const contents = await axios.get(
        `${API}/session/client/get_available_rooms/${startDate}/${roomtype}/${persons}`
      );

      dispatch(searchResult(contents.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const GetRoom = (id) => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.get(`${API}/session/admin/get_rooom/${id}`);

      dispatch(Getroom(newd.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const UpdateRoom = (id) => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.patch(`${API}/session/admin/updateroom/${id}`);
      dispatch(
        notify.notify_success({
          msg: `Room Updated`,
        })
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: `failed !`,
        })
      );
    }
  };
};

export const DeleteRoom = (id) => {
  return async (dispatch, getdispatch) => {
    try {
      await axios.delete(`${API}/session/admin/deleteroom/${id}`);
      dispatch(
        notify.notify_success({
          msg: `Room deleted`,
        })
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: `failed !`,
        })
      );
    }
  };
};

export const BookRoom = (room, client, data) => {
  return async (dispatch, getdispatch) => {
    try {
      console.log({room:room, client:client, data:data});
      const newd = await axios.post(
        `${API}/session/client/book/rooms/${room}/${client}`,
        data
      );
      dispatch(Bookrooms(newd.data));
      dispatch(
        notify.notify_success({
          msg: "successful",
        })
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: "failed",
        })
      );
    }
  };
};

export const AllOrders = () => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.post(`${API}/server/all_bookings`);
      dispatch(Bookings(newd.data));
    } catch (error) {
      console.log(error);
    }
  };
};
export const BookingDetail = (id) => {
  return async (dispatch) => {
    try {
      const newd = await axios.post(`${API}/server/getbooking/${id}`);
      dispatch(orderDetail(newd.data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const RateRoom = (orderid, client, data) => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.post(
        `${API}/client/book/rateme/${orderid}/${client}`,
        data
      );
      dispatch(Bookrooms(newd.data));
      dispatch(
        notify.notify_success({
          msg: "Verification successful",
        })
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: "verification failed",
        })
      );
    }
  };
};

export const GetRate = () => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.get(`${API}/rooms/get_ratings`);
      dispatch(allRatings(newd.data));
      dispatch(
        notify.notify_success({
          msg: "Verification successful",
        })
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: "verification failed",
        })
      );
    }
  };
};

export const CreateChat = (user_id, card_id) => {
  return async (dispatch, getdispatch) => {
    try {
      const newd = await axios.post(
        `${API}/session/api/chat/${user_id}/${card_id}`
      );
    } catch (error) {
      dispatch(
        notify.notify_error({
          msg: error,
        })
      );
    }
  };
};

export const Clear_CreateChat = () => {
  return async (dispatch) => {};
};

export const Clear_ChatBox = () => {
  return async (dispatch) => {};
};

export const Clear_SearchBox = () => {
  return async (dispatch) => {
    dispatch(searchResult(null));
  };
};
