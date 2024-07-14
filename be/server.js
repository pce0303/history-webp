import express from 'express';
import path from 'path';
import eraRouter from './routes/era.js';
import detailRouter from './routes/detail.js';

const app = express();
const port = 3000;
const __dirname = path.resolve();

// API 경로 설정
app.use('/api/era', eraRouter);
app.use('/api/title', detailRouter);

// 정적 파일 서빙
app.use(express.static(path.join(__dirname, '../fe/dist')));

// 모든 기타 경로에 대해 클라이언트 애플리케이션 서빙
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../fe/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
