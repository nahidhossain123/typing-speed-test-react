import React, { useRef, useEffect, useState } from "react";

const CricketGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState("Press SPACE to hit the ball!");
  const [gameOver, setGameOver] = useState(false);

  // Keep ball and bat persistent using useRef
  const ball = useRef({
    x: 600,
    y: 150,
    radius: 10,
    dx: -5,
    dy: 0,
    active: true,
    flying: false,
  });

  const bat = useRef({
    x: 50,
    y: 120,
    width: 10,
    height: 60,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = canvas.width;
    const height = canvas.height;

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ball.current.x, ball.current.y, ball.current.radius, 0, Math.PI * 2);
      ctx.fillStyle = ball.current.flying ? "gold" : "red";
      ctx.fill();
      ctx.closePath();
    };

    const drawBat = () => {
      ctx.fillStyle = "brown";
      ctx.fillRect(bat.current.x, bat.current.y, bat.current.width, bat.current.height);
    };

    const drawPitch = () => {
      ctx.fillStyle = "#2e8b57"; // green field
      ctx.fillRect(0, 0, width, height);
    };

    const clear = () => {
      ctx.clearRect(0, 0, width, height);
    };

    const update = () => {
      if (gameOver) return;

      clear();
      drawPitch();
      drawBat();
      drawBall();

      const b = ball.current;
      const batObj = bat.current;

      if (b.flying) {
        b.x += 6;
        b.y -= b.dy;
        b.dy -= 0.3;

        if (b.y > height || b.x > width) {
          setTimeout(() => {
            resetBall();
            setMessage("Press SPACE to hit the ball!");
          }, 500);
        }
      } else if (b.active) {
        b.x += b.dx;

        if (
          b.x - b.radius <= batObj.x + batObj.width &&
          b.y > batObj.y &&
          b.y < batObj.y + batObj.height
        ) {
          b.active = false;
          b.flying = true;
          b.dy = 10;

          const run = Math.floor(Math.random() * 6) + 1;
          setScore((prev) => prev + run);
          setMessage(`🏏 You hit it! +${run} run${run > 1 ? "s" : ""}`);
        }

        if (b.x < 0) {
          setGameOver(true);
          setMessage("❌ Bowled! Game Over.");
        }
      }

      requestAnimationFrame(update);
    };

    const resetBall = () => {
      ball.current = {
        x: width,
        y: height / 2,
        radius: 10,
        dx: -5,
        dy: 0,
        active: true,
        flying: false,
      };
    };

    const keyDownHandler = (e) => {
      const batObj = bat.current;
      if (e.code === "Space" && ball.current.active && !gameOver) {
        batObj.height = 80;
        setTimeout(() => {
          batObj.height = 60;
        }, 150);
      } else if (gameOver && e.code === "Enter") {
        setScore(0);
        setMessage("Press SPACE to hit the ball!");
        setGameOver(false);
        resetBall();
        requestAnimationFrame(update);
      }
    };

    document.addEventListener("keydown", keyDownHandler);
    requestAnimationFrame(update);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [gameOver]);

  return (
    <div style={{ textAlign: "center" }}>
      <h1>🏏 Cricket Game</h1>
      <h2>Score: {score}</h2>
      <p>{message}</p>
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        style={{ border: "2px solid black", marginTop: "10px" }}
      />
      {gameOver && <p>Press <strong>Enter</strong> to restart</p>}
    </div>
  );
};

export default CricketGame;
