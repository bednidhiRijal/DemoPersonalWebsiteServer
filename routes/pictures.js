const express = require("express");
const router = express.Router();

const picture = [
  {
    name: "nature1",
    date: "07 Jul 2019",
    imgAddress:
      "https://images.unsplash.com/photo-1512052841874-42cbf0701904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "nature2",
    date: "07 Jul 2020",
    imgAddress:
      "https://images.unsplash.com/photo-1512052841874-42cbf0701904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "nature3",
    date: "07 Jul 2021",
    imgAddress:
      "https://images.unsplash.com/photo-1512052841874-42cbf0701904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "nature4",
    date: "07 Jul 2022",
    imgAddress:
      "https://images.unsplash.com/photo-1512052841874-42cbf0701904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "nature3",
    date: "07 Jul 2021",
    imgAddress:
      "https://images.unsplash.com/photo-1512052841874-42cbf0701904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
  {
    name: "nature4",
    date: "07 Jul 2022",
    imgAddress:
      "https://images.unsplash.com/photo-1512052841874-42cbf0701904?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
  },
];

router.get("/pictures", (req, res, next) => {
    res.send(picture)
});

module.exports = router;
