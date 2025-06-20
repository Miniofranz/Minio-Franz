// Confetti effect
function launchConfetti() {
  const canvas = document.getElementById('confetti-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.display = 'block';

  const confettiCount = 120;
  const confetti = [];
  const colors = ['#ff9800', '#43e97b', '#38f9d7', '#fed6e3', '#a8edea', '#fff176', '#ff4081'];

  for (let i = 0; i < confettiCount; i++) {
    confetti.push({
      x: Math.random() * canvas.width,
      y: Math.random() * -canvas.height,
      r: Math.random() * 6 + 4,
      d: Math.random() * confettiCount,
      color: colors[Math.floor(Math.random() * colors.length)],
      tilt: Math.random() * 10 - 10,
      tiltAngleIncremental: Math.random() * 0.07 + 0.05,
      tiltAngle: 0
    });
  }

  let angle = 0;
  let tiltAngle = 0;
  let animationFrame;
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    angle += 0.01;
    tiltAngle += 0.1;
    for (let i = 0; i < confettiCount; i++) {
      let c = confetti[i];
      c.tiltAngle += c.tiltAngleIncremental;
      c.y += (Math.cos(angle + c.d) + 3 + c.r / 2) / 2;
      c.x += Math.sin(angle);
      c.tilt = Math.sin(c.tiltAngle - (i % 3)) * 15;
      ctx.beginPath();
      ctx.lineWidth = c.r;
      ctx.strokeStyle = c.color;
      ctx.moveTo(c.x + c.tilt + c.r / 3, c.y);
      ctx.lineTo(c.x + c.tilt, c.y + c.tilt + c.r / 5);
      ctx.stroke();
    }
    animationFrame = requestAnimationFrame(draw);
  }
  draw();
  setTimeout(() => {
    cancelAnimationFrame(animationFrame);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.display = 'none';
  }, 2200);
}

const btn = document.getElementById('watchBtn');
if (btn.textContent.includes('Learn More')) {
  btn.onclick = function() {
    window.location.href = 'earnmineylearnmore.html';
  };
} else {
  btn.onclick = function() {
    var reward = document.getElementById('rewardMsg');
    // Simulate a short 'watching' delay
    document.getElementById('watchBtn').disabled = true;
    setTimeout(function() {
      reward.style.display = 'block';
      setTimeout(function() {
        reward.classList.add('show');
        launchConfetti();
        document.getElementById('watchBtn').disabled = false;
      }, 10);
    }, 1200);
  };
}
