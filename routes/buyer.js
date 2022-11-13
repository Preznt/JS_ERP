import express from "express";
const router = express.Router();

import DB from "../models/index.js";
const buyer = DB.models.tbl_buyer;

/* GET home page. */
router.get("/", async (req, res, next) => {
  const buyers = await buyer.findAll();
  res.render("buyer", { buyers });
});

router.get("/input", (req, res) => {
  res.render("input");
});

router.post("/input", async (req, res) => {
  try {
    await buyer.create(req.body);
  } catch (error) {
    console.log(error);
  }
  res.redirect("/buyer");
});

router.get("/:c_id/detail", async (req, res) => {
  const c_id = req.params.c_id;
  const oneBuyer = await buyer.findAll({ where: { c_id: c_id } });
  res.render("detail", { oneBuyer: oneBuyer[0] });
});

router.get("/:btnC_id/update", async (req, res) => {
  const btnC_id = req.params.btnC_id;
  const updatebuyer = await buyer.findAll({ where: { c_id: btnC_id } });
  res.render("update", { updatebuyer: updatebuyer[0] });
});

router.post("/:btnU_id/update", async (req, res) => {
  try {
    await buyer.update(req.body, {
      where: { c_id: req.body.c_id },
    });
  } catch (error) {
    console.log(error);
  }
  res.redirect("/buyer");
});

router.get("/:btnD_id/delete", async (req, res) => {
  try {
    await buyer.destroy({ where: { c_id: req.params.btnD_id } });
  } catch (error) {
    console.log(error);
  }
  res.redirect("/buyer");
});

export default router;
