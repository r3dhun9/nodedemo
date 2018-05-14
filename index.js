const Xray = require('x-ray');
const x = Xray();
x('https://kiki.ccu.edu.tw/~ccmisp06/Course/5304.html','table > tr',[
    {
    No:'td:nth-child(2)',
    courseName:'td:nth-child(4)',
    teacher:'td:nth-child(5)',
    }
]).write('./dist/course.json');