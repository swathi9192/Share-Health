import moment from "moment";

export const dateFormat = (d) => {
  return moment(d).format("MMM Do YYYY");
};
