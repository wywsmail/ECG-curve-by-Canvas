var ctx;


/**绘制中型网格
 * 第一个for语句循环出纵向中方格中线条，间距为X轴方向15像素，小网格的5倍
 * 第二个for语句循环出横向中方格中线条，间距为Y轴方向15像素，小网格的5倍
 */
function drawGrid(c_canvas) {
    var c_canvas = document.getElementById("heartBeat");
    ctx = c_canvas.getContext("2d");
    ctx.strokeStyle = "#F00";
    ctx.strokeWidth = 2;
    //宽度是小网格的2倍
    ctx.beginPath();
    for (var x = 0.5; x < 750; x += 15) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, 750);
        ctx.stroke();
    }
    for (var y = 0.5; y < 750; y += 15) {
        ctx.moveTo(0, y);
        ctx.lineTo(750, y);
        ctx.stroke();
    }
    ctx.closePath();
    return;
}

drawGrid();

var hb;//heartBeat简写，方便之后操作
var beatArray = [
    [0, -10],
    [50, 30],
    [70, -50],
    [90, 50],
    [110, -15],
    [130, 25],
    [150, -60],
    [170, 15],
    [190, -30],
    [210, 32],
    [230, -2],
    [250, 25],
    [270, -45],
    [290, 32],
    [310, -54],
    [330, 25],
    [350, -16],
    [370, 30],
    [390, -50],
    [410, 50],
    [430, -15],
    [450, 25],
    [470, -60],
    [490, 15],
    [510, -30],
    [530, 32],
    [550, -2],
    [570, 25],
    [590, -45],
    [610, 32],
    [630, -54],
    [650, 25],
    [670, -16],
    [696, 30],
    [710, -50],
    [730, 50],
    [750, -15],
    [770, 25],
    [790, -60],
    [810, 15],
    [830, -30],
    [850, 32],
    [870, -2],
    [890, 25],
    [910, -45],
    [930, 32],
    [950, -54],
    [970, 25],
    [990, -16],
    [1010, 30],
    [1030, -50],
    [1050, 50],
    [1070, -15],
    [1090, 25],
    [1110, -60],
    [1130, 15],
    [1150, -30],
    [1170, 32],
    [1190, -2],
    [1210, 25],
    [1230, -45],
    [1250, 32],
    [1270, -54],
    [1290, 25],
    [1310, -16]
];

function draw() {
    var c_canvas = document.getElementById("heartBeat");
    drawGrid(c_canvas);
    drawLine(c_canvas);
    return;
}


/**绘制心电图 */
function drawLine(c_canvas) {
    hb = c_canvas.getContext("2d");
    hb.strokeStyle = "#0f0";
    //线条颜色为绿色
    hb.strokeWidth = 2;
    //线条粗细为2
    hb.beginPath();
    beatArray.forEach(a => {
        hb.lineTo(a[0], a[1] + 80);
    });
    /**for循环 */
    hb.stroke();
    hb.closePath();
}

draw(); //调用绘制网格