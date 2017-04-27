/**
 * Created by Zhang on 16/9/7.
 */

window.onload = function () {


    // 1
    (function (drawing) {

        //确认浏览器支持<canvas>元素
        if (drawing.getContext){

            //获取2d上下文
            var context = drawing.getContext('2d');

            //设置描边的颜色
            context.strokeStyle = "red";
            context.strokeRect(0, 0, 200, 200);

            //设置填充的颜色
            context.fillStyle = "#ff0000";
            context.fillRect(20, 20, 100, 100);

            context.fillStyle = "rgba(0, 0, 255, 0.5)";
            context.fillRect(80, 80, 100, 100);


            //获取图像数据URI
            // var imgURI = drawing.toDataURL("image/png");

            //显示图像
            // document.getElementById('img1').src = imgURI;
        }

    })(document.getElementById("drawing0"));


    // 2
    (function (drawing) {

        //确认浏览器支持<canvas>元素
        if (drawing.getContext){

            //获取2d上下文
            var context = drawing.getContext('2d');

            //设置描边的颜色
            context.strokeStyle = "red";
            context.strokeRect(0, 0, 200, 200);

            //设置描边的颜色
            context.strokeRect(20, 20, 100, 100);
            context.strokeStyle = "rgba(0, 0, 255, 0.5)";
            context.strokeRect(80, 80, 100, 100);

            //获取图像数据URI
            // var imgURI = drawing.toDataURL("image/png");

            //显示图像
            // document.getElementById('img2').src = imgURI;
        }

    })(document.getElementById("drawing1"));



    //3
    (function (drawing) {


        //获取2d上下文
        var context = drawing.getContext('2d');

        //设置描边的颜色
        context.strokeStyle = "red";
        context.strokeRect(0, 0, 200, 200);

        //设置填充的颜色
        context.fillStyle = "#ff0000";
        context.fillRect(20, 20, 100, 100);

        context.fillStyle = "rgba(0, 0, 255, 0.5)";
        context.fillRect(80, 80, 100, 100);

        //在两个矩形重叠的地方清除一个小矩形
        context.clearRect(85, 85, 30, 30);

    })(document.getElementById("drawing2"));


    //4
    (function (drawing) {


        var context = drawing.getContext('2d');

        //开始路径
        context.beginPath();

        //绘制外圆
        context.arc(100, 100, 99, 0, 2*Math.PI, false);

        //移动绘图游标
        //绘制内圆
        context.moveTo(194, 100);
        context.arc(100, 100, 94, 0, 2*Math.PI, false);


        //绘制分针
        context.moveTo(100, 100);
        context.lineTo(100, 20);

        //绘制时针
        context.moveTo(100, 100);
        context.lineTo(40, 100);


        if (context.isPointInPath(100, 100)){
            console.info("Point(100, 100) is in the path");
        }

        //描边路径
        context.stroke();

    })(document.getElementById("drawing3"));


    //5
    (function (drawing) {


        var context = drawing.getContext('2d');

        //开始路径
        context.beginPath();

        //绘制外圆
        context.arc(100, 100, 99, 0, 2*Math.PI, false);

        //移动绘图游标
        //绘制内圆
        context.moveTo(194, 100);
        context.arc(100, 100, 94, 0, 2*Math.PI, false);


        //绘制分针
        context.moveTo(100, 100);
        context.lineTo(100, 20);

        //绘制时针
        context.moveTo(100, 100);
        context.lineTo(40, 100);

        context.font = "bold 14px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("12", 100, 20);

        //描边路径
        context.stroke();

    })(document.getElementById("drawing4"));


    //6
    (function (drawing) {


        var context = drawing.getContext('2d');

        //开始路径
        context.beginPath();

        //绘制外圆
        context.arc(100, 100, 99, 0, 2*Math.PI, false);

        //移动绘图游标
        //绘制内圆
        context.moveTo(194, 100);
        context.arc(100, 100, 94, 0, 2*Math.PI, false);


        //变换原点
        context.translate(100, 100);

        //旋转表针
        context.rotate(1);

        //绘制分针
        context.moveTo(0, 0);
        context.lineTo(0, -80);

        //绘制时针
        context.moveTo(0, 0);
        context.lineTo(-60, 0);

        context.font = "bold 14px Arial";
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.fillText("12", 0, -80);

        //描边路径
        context.stroke();

    })(document.getElementById("drawing5"));

    //7
    (function (drawing) {

        var context = drawing.getContext('2d');

        //设置图片
        context.drawImage(document.getElementById("drawing0"), 0, 0, 100, 100);

        //阴影
        context.shadowColor = 'rgba(0, 0, 0, 0.5)';
        context.shadowOffsetX =5;
        context.shadowOffsetY = 5;
        context.shadowBlur = 4;

        context.drawImage(document.getElementById("drawing0"), 50, 50, 100, 100, 100, 100,100, 100);

    })(document.getElementById("drawing6"));


    //8
    (function (drawing) {

        var context = drawing.getContext('2d');

        //渐变
        var gradient = context.createLinearGradient(30, 30, 70, 70);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "black");

        context.fillStyle = "#ff0000";
        context.fillRect(10, 10, 50, 50);

        context.fillStyle = gradient;
        context.fillRect(30, 30, 50, 50);



        var gradient = context.createRadialGradient(150, 150, 10, 150, 150, 30);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "black");

        context.fillStyle = "#ff0000";
        context.fillRect(100, 100, 50, 50);

        context.fillStyle = gradient;
        context.fillRect(125, 125, 50, 50);



    })(document.getElementById("drawing7"));


    //9 模式
    (function (drawing) {

        var context = drawing.getContext('2d');

        var image = document.images[0],
            pattern = context.createPattern(image, 'repeat');

        context.fillStyle = pattern;
        context.fillRect(0,0,200,200);


    })(document.getElementById("drawing8"));



    //10 使用图像数据
    (function (drawing) {

        var context = drawing.getContext('2d'),
            image = document.images[0],
            imageData, data,
            i, len, average,
            red, green, blue, alpha;

        //绘制原始图像
        context.drawImage(image, 0, 0,465,432, 0,0,200,200);

        // 取得图像数据
        imageData = context.getImageData(0, 0, 200, 200);
        data = imageData.data;

        for (i=0, len=data.length; i<len; i+=4) {
            red = data[i];
            green = data[i+1];
            blue = data[i+2];
            alpha = data[i+3];

            //求rgb平均值
            average = Math.floor((red + green + blue) /3 );

            //设置颜色值，透明度不变
            data[i] = average;
            data[i+1] = average;
            data[i+2] = average;
        }

        //回写图像数据并显示结果
        imageData.data = data;
        context.putImageData(imageData, 0, 0);

    })(document.getElementById("drawing9"));


};