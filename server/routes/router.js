const express = require("express");
const router = express.Router();
const dbQueries = require("../model/query");
const jwt = require("jsonwebtoken");
const { auth } = require("../util/authMiddleware");
require("dotenv").config({ path: "../.env" });
const { upload } = require("../util/multer");
const SECREAT_KEY = process.env.SECREAT_KEY;

// test
router.get("/", async (req, res) => {
  try {
    res.send("hello world!");
  } catch (error) {
    res.status(500).json({ error: "유저 정보를 불러오는데 실패했습니다." });
  }
});

router.post("/join", async (req, res) => {
  try {
    const { email, password, nickname } = req.body;
    const result = await dbQueries.JoinUser(email, password, nickname);
    res.status(201).json({ message: "회원가입 되셨습니다.", result });
  } catch (error) {
    res.status(500).json({ error: "중복된 이메일 입니다." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await dbQueries.LoginUser(email, password);
    const { nickname, joindate } = result;
    token = jwt.sign(
      {
        type: "JWT",
        email: email,
        nickname: nickname,
        joindate: joindate,
      },
      SECREAT_KEY,
      {
        expiresIn: "1h",
        issuer: "토큰발급자",
      }
    );
    res.status(200).json({
      code: 200,
      email: email,
      nickname: nickname,
      message: `환영합니다. ${nickname}님`,
      token: token,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

router.get("/flower/get/:email", auth, async (req, res) => {
  try {
    const email = decodeURIComponent(req.params.email);
    const data = await dbQueries.GetFlower(email);
    result = data.map((item) => {
      return {
        ...item,
        image_url: `${req.protocol}://${req.get("host")}/` + item.image_url,
      };
    });
    return res.status(200).json({
      result,
    });
  } catch (error) {
    res.status(500).json({ error: "요청이 잘못 됐습니다." });
  }
});

router.get("/payload", auth, (req, res) => {
  const nickname = req.decoded.nickname;
  const joindate = req.decoded.joindate;
  const email = req.decoded.email;
  return res.status(200).json({
    code: 200,
    message: "토큰은 정상입니다.",
    data: {
      email: email,
      nickname: nickname,
      joindate: joindate,
    },
  });
});

router.post("/flower/upload", upload.single("file"), async (req, res) => {
  try {
    const { name, kind, temperature, humidity, email } = req.body;
    const image_url = req.file.path;
    console.log(req.file.path, name, kind, temperature, humidity, email);
    const result = await dbQueries.UploadFlower(
      name,
      kind,
      temperature,
      humidity,
      image_url,
      email
    );
    res.status(200).json({ message: "등록 되었습니다.", result });
  } catch (error) {
    res.status(500).json({ error: "등록에 실패했습니다." });
  }
});

router.post("/flower/update", async (req, res) => {
  try {
    const { flower_id, temperature, humidity } = req.body;
    const result = await dbQueries.UpdateFlower(
      flower_id,
      temperature,
      humidity
    );
    res.status(200).json({ message: "수정에 성공했습니다.", result });
  } catch (error) {
    res.status(500).json({ error: "수정에 실패했습니다." });
  }
});

module.exports = router;
