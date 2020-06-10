const express = require('express');
const path = require('path');
const router = require("./routers/router.js");
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 4000;
const corsOptions = {
    origin: 'http://localhost:3000', // 허락하고자 하는 요청 주소
    credentials: true, // true로 하면 설정한 내용을 response 헤더에 추가 해줍니다.
};
app.use(cors(corsOptions))
app.use(express.static(path.join(__dirname, '..', 'src/')));

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Check out the app at http://localhost:${PORT}`);
});