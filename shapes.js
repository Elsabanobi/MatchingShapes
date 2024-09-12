
                function fxx() {son.play();}
                function fend(){sond.play();}
                var son = document.getElementById("son");
                var sond = document.getElementById("theend");
                var canvas = document.getElementById("myCanvas"),
                    ctx = canvas.getContext("2d"),
                    x = 340,
                    y = 40,
                    a = 0,
                    b = 0,
                    c = 0,
                    d = 0,
                    e = 0,
                    f = 0;

                function star() {
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x + 25, y);
                    ctx.lineTo(x + 40, y - 20);
                    ctx.lineTo(x + 55, y);
                    ctx.lineTo(x + 80, y);
                    ctx.lineTo(x + 65, y + 20);
                    ctx.lineTo(x + 80, y + 40);
                    ctx.lineTo(x + 55, y + 40);
                    ctx.lineTo(x + 40, y + 60);
                    ctx.lineTo(x + 25, y + 40);
                    ctx.lineTo(x, y + 40);
                    ctx.lineTo(x + 15, y + 20);
                    ctx.lineTo(x, y);
                    ctx.lineTo(x + 25, y);
                    ctx.lineTo(x + 25, y);
                    ctx.lineTo(x + 25, y);
                    ctx.lineTo(x + 25, y);
                    ctx.lineTo(x + 25, y);
                    ctx.lineTo(x, y);
                    ctx.fillStyle = "#ffff4d";
                    ctx.fill();
                    ctx.closePath();
                }

                function square() {
                    ctx.beginPath();
                    ctx.rect(a, b, 80, 80);
                    ctx.fillStyle = "#990033";
                    ctx.fill();
                    ctx.closePath();
                }

                function bol() {
                    ctx.beginPath();
                    ctx.arc(c, d, 40, 0, 2 * Math.PI);
                    ctx.fillStyle = "#6666ff";
                    ctx.fill();
                    ctx.closePath();
                }

                function tri() {
                    ctx.beginPath();
                    ctx.moveTo(e, f);
                    ctx.lineTo(e + 50, f - 80);
                    ctx.lineTo(e + 100, f);
                    ctx.lineTo(e, f);
                    ctx.stroke();
                    ctx.fillStyle = "#4dffb8";
                    ctx.fill();
                    ctx.closePath();
                }
                star();

                function lijnStar() {
                    ctx.beginPath();
                    ctx.strokeStyle = "#ffff4d";
                    ctx.lineWidth = 5;
                    ctx.moveTo(440, 250);
                    ctx.lineTo(465, 250);
                    ctx.lineTo(480, 230);
                    ctx.lineTo(495, 250);
                    ctx.lineTo(520, 250);
                    ctx.lineTo(505, 270);
                    ctx.lineTo(520, 290);
                    ctx.lineTo(495, 290);
                    ctx.lineTo(480, 310);
                    ctx.lineTo(465, 290);
                    ctx.lineTo(440, 290);
                    ctx.lineTo(455, 270);
                    ctx.lineTo(440, 250);
                    ctx.stroke();
                    ctx.closePath();
                }

                function lijnSquare() {
                    ctx.beginPath();
                    ctx.strokeStyle = "#990033";
                    ctx.strokeRect(100, 230, 80, 80);
                    ctx.closePath();
                }

                function lijnBol() {
                    ctx.beginPath();
                    ctx.strokeStyle = "#6666ff";
                    ctx.arc(250, 270, 40, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.closePath();
                }

                function lijnTri() {
                    ctx.beginPath();
                    ctx.strokeStyle = "#4dffb8";
                    ctx.lineWidth = 5;
                    ctx.moveTo(310, 310);
                    ctx.lineTo(360, 230);
                    ctx.lineTo(410, 310);
                    ctx.lineTo(310, 310);
                    ctx.stroke();
                    ctx.closePath();
                }
                lijnStar();
                lijnSquare();
                lijnTri();
                lijnBol();

                function moveup() {
                    if (a == 0 && b == 0 && c == 0 && d == 0 && e == 0 && f == 0) {
                        moveupStar();
                    } else if (a == 0 && b == 0 && e == 0 && f == 0) {
                        moveupBol();
                    } else if (e == 0 && f == 0) {
                        moveupSquare();
                    } else {
                        moveupTri();
                    }
                }

                function movedown() {
                    if (a == 0 && b == 0 && c == 0 && d == 0 && e == 0 && f == 0) {
                        movedownStar();
                    } else if (a == 0 && b == 0 && e == 0 && f == 0) {
                        movedownBol();
                    } else if (e == 0 && f == 0) {
                        movedownSquare();
                    } else {
                        movedownTri();
                    }
                }

                function moveleft() {
                    if (a == 0 && b == 0 && c == 0 && d == 0 && e == 0 && f == 0) {
                        moveleftStar();
                    } else if (a == 0 && b == 0 && e == 0 && f == 0) {
                        moveleftBol();
                    } else if (e == 0 && f == 0) {
                        moveleftSquare();
                    } else {
                        moveleftTri();
                    }
                }

                function moveright() {
                    if (a == 0 && b == 0 && c == 0 && d == 0 && e == 0 && f == 0) {
                        moverightStar();
                    } else if (a == 0 && b == 0 && e == 0 && f == 0) {
                        moverightBol();
                    } else if (e == 0 && f == 0) {
                        moverightSquare();
                    } else {
                        moverightTri();
                    }
                }

                function moveupStar() {
                    ctx.clearRect(0, 0, 680, 227);
                    y += -20;
                    if (x >= 430 && x <= 450 && y >= 240 && y <= 260) {
                        ctx.clearRect(0, 220, 680, 170);
                        x = 440;
                        y = 250;
                        fxx();
                        lijnSquare();
                        lijnTri();
                        lijnBol();
                        c = 320, d = 50;
                        bol();
                    }
                    star();
                }

                function moveupBol() {
                    ctx.clearRect(0, 0, 680, 227);
                    d += -20;
                    if (c >= 240 && c <= 260 && d >= 260 && d <= 280) {
                        ctx.clearRect(0, 220, 680, 170);
                        c = 250;
                        y = 270;
                        fxx();
                        lijnSquare();
                        lijnTri();
                        star();
                        a = 350, b = 40;
                        square();
                    }
                    bol();
                }

                function moveupSquare() {
                    ctx.clearRect(0, 0, 680, 227);
                    b += -20;
                    if (a >= 90 && a <= 110 && b >= 220 && b <= 240) {
                        ctx.clearRect(0, 220, 680, 170);
                        a = 100;
                        b = 230;
                        fxx();
                        lijnTri();
                        star();
                        bol();
                        e = 300, f = 100;
                        tri();
                    }
                    square();
                }

                function moveupTri() {
                    ctx.clearRect(0, 0, 680, 227);
                    f += -20;
                    if (e >= 300 && e <= 320 && f >= 300 && f <= 320) {
                        ctx.clearRect(0, 220, 680, 170);
                        e = 310;
                        f = 310;
                        fxx();
                        star();
                        bol();
                        square();
                    }
                    tri();
                }

                function movedownStar() {
                    ctx.clearRect(0, 0, 680, 227);
                    y += 20;
                    if (x >= 430 && x <= 530 && y >= 240 && y <= 260) {
                        ctx.clearRect(0, 220, 680, 170);
                        x = 440;
                        y = 250;
                        fxx();
                        lijnSquare();
                        lijnTri();
                        lijnBol();
                        c = 320, d = 50;
                        bol();
                    }
                    star();
                }

                function movedownBol() {
                    ctx.clearRect(0, 0, 680, 227);
                    d += 20;
                    if (c >= 240 && c <= 260 && d >= 260 && d <= 280) {
                        ctx.clearRect(0, 220, 680, 170);
                        c = 250;
                        d = 270;
                        fxx();
                        lijnSquare();
                        lijnTri();
                        star();
                        a = 350, b = 40;
                        square();
                    }
                    bol();
                }

                function movedownSquare() {
                    ctx.clearRect(0, 0, 680, 227);
                    b += 20;
                    if (a >= 90 && a <= 110 && b >= 220 && b <= 240) {
                        ctx.clearRect(0, 220, 680, 170);
                        a = 100;
                        b = 230;
                        fxx();
                        lijnTri();
                        star();
                        bol();
                        e = 300, f = 100;
                        tri();
                    }
                    square();
                }

                function movedownTri() {
                    ctx.clearRect(0, 0, 680, 227);
                    f += 20;
                    if (e >= 300 && e <= 320 && f >= 300 && f <= 320) {
                        ctx.clearRect(0, 220, 680, 170);
                        e = 310;
                        f = 310;
                        fxx();
                        star();
                        bol();
                        square();
                    }
                    tri();
                }

                function moveleftStar() {
                    ctx.clearRect(0, 0, 680, 227);
                    x += -20;
                    if (x >= 430 && x <= 530 && y >= 240 && y <= 260) {
                        ctx.clearRect(0, 220, 680, 170);
                        x = 440;
                        y = 250;
                        fxx();
                        lijnSquare();
                        lijnTri();
                        lijnBol();
                        c = 320, d = 50;
                        bol();
                    }
                    star();
                }

                function moveleftBol() {
                    ctx.clearRect(0, 0, 680, 227);
                    c += -20;
                    if (c >= 240 && c <= 260 && d >= 260 && d <= 280) {
                        ctx.clearRect(0, 220, 680, 170);
                        c = 250;
                        d = 270;
                        fxx();
                        lijnSquare();
                        lijnTri();
                        star();
                        a = 350, b = 40;
                        square();
                    }
                    bol();
                }

                function moveleftSquare() {
                    ctx.clearRect(0, 0, 680, 227);
                    a += -20;
                    if (a >= 90 && a <= 110 && b >= 220 && b <= 240) {
                        ctx.clearRect(0, 220, 680, 170);
                        a = 100;
                        b = 230;
                        fxx();
                        lijnTri();
                        star();
                        bol();
                        e = 300, f = 100;
                        tri();
                    }
                    square();
                }

                function moveleftTri() {
                    ctx.clearRect(0, 0, 680, 227);
                    e += -20;
                    if (e >= 300 && e <= 320 && f >= 300 && f <= 320) {
                        ctx.clearRect(0, 220, 680, 170);
                        e = 310;
                        f = 310;
                        fxx();
                        star();
                        bol();
                        square();
                    }
                    tri();
                }

                function moverightStar() {
                    ctx.clearRect(0, 0, 680, 227);
                    x += 20;
                    if (x >= 430 && x <= 530 && y >= 240 && y <= 260) {
                        ctx.clearRect(0, 220, 680, 170);
                        x = 440;
                        y = 250;
                        fxx();
                        lijnSquare();
                        lijnTri();
                        lijnBol();
                        c = 320, d = 50;
                        bol();
                    }
                    star();
                }

                function moverightBol() {
                    ctx.clearRect(0, 0, 680, 227);
                    c += 20;
                    if (c >= 240 && c <= 260 && d >= 260 && d <= 280) {
                        ctx.clearRect(0, 220, 680, 170);
                        c = 250;
                        d = 270;
                        fxx();
                        lijnSquare();
                        lijnTri();
                        star();
                        a = 350, b = 40;
                        square();
                    }
                    bol();
                }

                function moverightSquare() {
                    ctx.clearRect(0, 0, 680, 227);
                    a += 20;
                    if (a >= 90 && a <= 110 && b >= 220 && b <= 240) {
                        ctx.clearRect(0, 220, 680, 170);
                        a = 100;
                        b = 230;
                        fxx();
                        lijnTri();
                        star();
                        bol();
                        e = 300, f = 100;
                        tri();
                    }
                    square();
                }

                function moverightTri() {
                    ctx.clearRect(0, 0, 680, 227);
                    e += 20;
                    if (e >= 300 && e <= 320 && f >= 300 && f <= 320) {
                        ctx.clearRect(0, 220, 680, 170);
                        e = 210;
                        f = 310;
                        fxx();
                        star();
                        bol();
                        square();
                    }
                    tri();
                }
            
