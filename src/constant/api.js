const baseUrl = "http://localhost:2020/";
export default {
  login: baseUrl + "adminlogin",

  // Product
  getAllProduct: baseUrl + "admin/view/product",
  deleteProduct: baseUrl + "admin/food/delete/",

  // Events
  addEvent: baseUrl + "admin/addevent",
  getAllEvents: baseUrl + "show/events",
  getSingleEvent: baseUrl + "admin/get/eventid/",
  updateEvent: baseUrl + "admin/update/event/",
  deleteEvent: baseUrl + "delete/event/",

  // Users
  getAllActiveUsers: baseUrl + "show/users",

  // Notification
  getAllNotification: baseUrl + "admin/getnotificaiton",
  deleteNotification: baseUrl + "admin/deletenotification/",
  addNotification: baseUrl + "admin/addnotificaiton",

  // News
  addNews: baseUrl + "admin/addnews",
  getNews: baseUrl + "show/news",
  deleteNews: baseUrl + "delete/news/",

  // admin
  checkUser: baseUrl + "checklogin",
  updateAdmin: baseUrl + "admin/update/",

  // logout
  logout: baseUrl + "admin/logout",

  // upload image
  uploadImage: "https://bigos-image-uploader.herokuapp.com/api/uploadImage",
};
