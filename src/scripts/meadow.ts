// Bambi chases the rabbit across the footer meadow. Visitors can drag the rabbit (or use the
// arrow keys on it) to lead Bambi to it, and now and then a treat drops in that they can drag (or
// click) to give him.
// Static scene when motion is reduced or JS is off.
const meadow = document.querySelector<HTMLElement>('[data-meadow]');
const calm = matchMedia('(prefers-reduced-motion: reduce)');

if (meadow && !calm.matches) start(meadow);

function start(meadow: HTMLElement) {
  const dogEl = meadow.querySelector<HTMLElement>('[data-dog]')!;
  const rabbitEl = meadow.querySelector<HTMLButtonElement>('[data-rabbit]')!;
  const bubble = meadow.querySelector<HTMLElement>('[data-bubble]')!;
  const scoreEl = meadow.querySelector<HTMLElement>('[data-score]')!;
  const scoreWrap = meadow.querySelector<HTMLElement>('[data-score-wrap]')!;
  const hearts = meadow.querySelector<HTMLElement>('[data-hearts]')!;
  const treatEl = meadow.querySelector<HTMLButtonElement>('[data-treat]')!;
  const treatsEl = meadow.querySelector<HTMLElement>('[data-treats]')!;

  const SPEED = { dogRoam: 175, dogChase: 230, rabbitRoam: 95, rabbitFlee: 250, leap: 300 };
  const rand = (a: number, b: number) => a + Math.random() * (b - a);
  const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));

  let W = meadow.clientWidth;
  let DW = dogEl.offsetWidth;
  let RW = rabbitEl.offsetWidth;

  type RabbitMode = 'rest' | 'roam' | 'flee' | 'leap' | 'held' | 'caught';
  const dog = { x: W * 0.15, dir: 1, pause: 0, jumpCooldown: 0 };
  const rabbit = {
    x: W * 0.6,
    y: 0,
    dir: 1,
    mode: 'rest' as RabbitMode,
    target: W * 0.6,
    rest: 1.2,
    leapFrom: 0,
    manualUntil: 0,
  };
  // A treat drops in every few seconds; touching it (drag or click) sends Bambi after it instead of the rabbit.
  const TW = 38;
  const treat = { state: 'none' as 'none' | 'waiting' | 'given', x: 0, y: 0, held: false, timer: rand(4, 7) };
  let treats = 0;
  let score = 0;
  let running = false;
  let last = 0;
  let promptShown = false;
  let bubbleTimer = 0;

  meadow.classList.add('is-live');
  dogEl.addEventListener('animationend', (e) => {
    if (e.animationName === 'jump' || e.animationName.endsWith('jump')) dogEl.classList.remove('jump');
  });

  const mouth = () => (dog.dir > 0 ? dog.x + DW * 0.93 : dog.x + DW * 0.07);
  const rabbitCenter = () => rabbit.x + RW / 2;
  const isHeld = () => rabbit.mode === 'held' || performance.now() < rabbit.manualUntil;
  const goingForTreat = () => treat.state === 'given';
  const dogTarget = () => (goingForTreat() ? treat.x + TW / 2 : rabbitCenter());
  const eager = () => goingForTreat() || isHeld();

  function say(text: string, ms: number) {
    bubble.textContent = text;
    bubble.classList.add('show');
    clearTimeout(bubbleTimer);
    bubbleTimer = window.setTimeout(() => bubble.classList.remove('show'), ms);
  }

  function fleeFromDog() {
    const dogLeft = dog.x + DW / 2 < rabbitCenter();
    const farTarget = dogLeft ? W - RW - rand(0, W * 0.15) : rand(0, W * 0.15);
    const cornered = dogLeft ? rabbit.x > W - RW - 70 : rabbit.x < 70;
    if (cornered) {
      // Nowhere to run: jump over Bambi to the other side.
      rabbit.mode = 'leap';
      rabbit.leapFrom = rabbit.x;
      rabbit.target = dogLeft ? rand(0, W * 0.25) : W - RW - rand(0, W * 0.25);
      dog.pause = 0.45;
    } else {
      rabbit.mode = 'flee';
      rabbit.target = farTarget;
    }
  }

  function moveRabbit(dt: number) {
    if (rabbit.mode === 'held' || rabbit.mode === 'caught') return;
    if (performance.now() < rabbit.manualUntil) return;

    // Back to the ground after being dropped mid-air.
    if (rabbit.mode !== 'leap' && rabbit.y < 0) rabbit.y = Math.min(0, rabbit.y + 420 * dt);

    const dist = Math.abs(mouth() - rabbitCenter());
    if ((rabbit.mode === 'rest' || rabbit.mode === 'roam') && dist < 120) fleeFromDog();

    if (rabbit.mode === 'rest') {
      rabbit.rest -= dt;
      if (rabbit.rest <= 0) {
        rabbit.mode = 'roam';
        rabbit.target = clamp(rabbit.x + rand(-180, 180), 0, W - RW);
      }
      return;
    }

    const speed = rabbit.mode === 'leap' ? SPEED.leap : rabbit.mode === 'flee' ? SPEED.rabbitFlee : SPEED.rabbitRoam;
    const dx = rabbit.target - rabbit.x;
    const step = Math.sign(dx) * Math.min(Math.abs(dx), speed * dt);
    rabbit.x += step;
    if (step) rabbit.dir = Math.sign(step);

    if (rabbit.mode === 'leap') {
      const total = Math.abs(rabbit.target - rabbit.leapFrom) || 1;
      const progress = clamp(Math.abs(rabbit.x - rabbit.leapFrom) / total, 0, 1);
      rabbit.y = -Math.sin(progress * Math.PI) * 95;
    }

    if (Math.abs(rabbit.target - rabbit.x) < 1) {
      rabbit.y = 0;
      rabbit.mode = 'rest';
      rabbit.rest = rand(0.6, 1.6);
    }
  }

  function moveDog(dt: number) {
    if (rabbit.mode === 'caught' && !goingForTreat()) return;
    if (dog.pause > 0) {
      dog.pause -= dt;
      return;
    }
    const held = eager();
    const goal = dogTarget() - (dog.dir > 0 ? DW * 0.93 : DW * 0.07);
    const dx = goal - dog.x;
    // While roaming Bambi keeps a little distance so the chase lasts; when you lead him, he goes all in.
    const stopAt = held ? 4 : 50;
    if (Math.abs(dx) > stopAt) {
      const want = Math.sign(dx);
      if (want !== dog.dir && Math.abs(dx) > DW * 0.5) dog.dir = want;
      const speed = held ? SPEED.dogChase : SPEED.dogRoam;
      dog.x = clamp(dog.x + want * Math.min(Math.abs(dx) - stopAt + 1, speed * dt), 0, W - DW);
    }

    dog.jumpCooldown -= dt;
    if (goingForTreat()) {
      if (Math.abs(mouth() - dogTarget()) < 16) {
        if (treat.y > -60) eatTreat();
        else if (dog.jumpCooldown <= 0) {
          jump();
          dog.jumpCooldown = 0.9;
        }
      }
      return;
    }
    const close = Math.abs(mouth() - rabbitCenter()) < 30;
    if (held && close) {
      if (rabbit.y > -55) catchRabbit();
      else if (dog.jumpCooldown <= 0) {
        jump();
        dog.jumpCooldown = 0.9;
      }
    }
  }

  function jump() {
    dogEl.classList.remove('jump');
    void dogEl.offsetWidth;
    dogEl.classList.add('jump');
  }

  function catchRabbit() {
    rabbit.mode = 'caught';
    rabbit.manualUntil = 0;
    rabbitEl.classList.add('caught');
    score++;
    scoreEl.textContent = String(score);
    scoreWrap.hidden = false;
    say(bubble.dataset.caught ?? '', 2600);
    jump();
    burst(rabbitCenter());
    setTimeout(() => {
      const dogLeft = dog.x + DW / 2 < W / 2;
      rabbit.x = dogLeft ? W - RW - rand(10, 60) : rand(10, 60);
      rabbit.y = 0;
      rabbit.mode = 'rest';
      rabbit.rest = 1.5;
      rabbitEl.classList.remove('caught');
    }, 1800);
  }

  function burst(x: number) {
    for (let i = 0; i < 6; i++) {
      const h = document.createElement('i');
      h.style.left = `${x + rand(-14, 14)}px`;
      h.style.bottom = `${40 + rand(0, 20)}px`;
      h.style.setProperty('--dx', `${rand(-40, 40)}px`);
      h.style.animationDelay = `${i * 70}ms`;
      hearts.append(h);
      h.addEventListener('animationend', () => h.remove());
    }
  }

  function hideTreat(next: number) {
    treat.state = 'none';
    treat.timer = next;
    treat.held = false;
    treat.y = 0;
    treatEl.hidden = true;
    treatEl.classList.remove('given');
  }

  function updateTreat(dt: number) {
    // Dropped mid-air: fall back to the grass.
    if (!treat.held && treat.y < 0) treat.y = Math.min(0, treat.y + 420 * dt);
    if (treat.state === 'given') return;
    treat.timer -= dt;
    if (treat.timer > 0) return;
    if (treat.state === 'waiting') {
      hideTreat(rand(5, 9));
      return;
    }
    if (rabbit.mode === 'caught') return;
    // Drop it somewhere Bambi isn't already standing.
    let x = rand(20, W - TW - 20);
    if (Math.abs(x + TW / 2 - (dog.x + DW / 2)) < DW) x = (x + W / 2) % (W - TW - 20);
    treat.x = x;
    treat.y = 0;
    treat.state = 'waiting';
    treat.timer = 14;
    treatEl.style.left = `${x}px`;
    treatEl.hidden = false;
    say(bubble.dataset.treatPrompt ?? '', 3500);
  }

  function eatTreat() {
    const at = treat.x + TW / 2;
    hideTreat(rand(6, 10));
    treats++;
    treatsEl.textContent = String(treats);
    scoreWrap.hidden = false;
    say(bubble.dataset.yum ?? '', 2200);
    jump();
    burst(at);
    dog.pause = 0.7;
  }

  function giveTreat() {
    if (treat.state !== 'waiting') return;
    treat.state = 'given';
    treatEl.classList.add('given');
    bubble.classList.remove('show');
  }
  treatEl.addEventListener('click', giveTreat);

  // ---- Drag the treat to Bambi (he heads for it as soon as you pick it up) ----
  let treatGrabX = 0;
  let treatStartY = 0;
  let treatStartClientY = 0;
  treatEl.addEventListener('pointerdown', (e) => {
    if (treat.state === 'none') return;
    e.preventDefault();
    try {
      treatEl.setPointerCapture(e.pointerId);
    } catch {
      return;
    }
    treatGrabX = e.clientX - meadow.getBoundingClientRect().left - treat.x;
    treatStartY = treat.y;
    treatStartClientY = e.clientY;
    treat.held = true;
    giveTreat();
  });
  treatEl.addEventListener('pointermove', (e) => {
    if (!treat.held || !treatEl.hasPointerCapture(e.pointerId)) return;
    treat.x = clamp(e.clientX - meadow.getBoundingClientRect().left - treatGrabX, 0, W - TW);
    treat.y = clamp(treatStartY + e.clientY - treatStartClientY, -120, 0);
  });
  const dropTreat = (e: PointerEvent) => {
    if (treatEl.hasPointerCapture(e.pointerId)) treatEl.releasePointerCapture(e.pointerId);
    treat.held = false;
  };
  treatEl.addEventListener('pointerup', dropTreat);
  treatEl.addEventListener('pointercancel', dropTreat);

  function render() {
    const dogMoving =
      dog.pause <= 0 &&
      (rabbit.mode !== 'caught' || goingForTreat()) &&
      Math.abs(mouth() - dogTarget()) > (eager() ? 8 : 55);
    dogEl.classList.toggle('running', dogMoving);
    dogEl.classList.toggle('face-left', dog.dir < 0);
    dogEl.style.transform = `translate3d(${dog.x}px,0,0)`;

    const hopping = rabbit.mode === 'roam' || rabbit.mode === 'flee';
    rabbitEl.classList.toggle('hopping', hopping);
    rabbitEl.classList.toggle('face-left', rabbit.dir < 0);
    rabbitEl.style.transform = `translate3d(${rabbit.x}px,${rabbit.y}px,0)`;
    if (treat.state !== 'none') {
      treatEl.style.left = `${treat.x}px`;
      treatEl.style.transform = `translateY(${treat.y}px)`;
    }
  }

  function frame(t: number) {
    if (!running) return;
    const elapsed = (t - last) / 1000 || 0;
    // Movement uses a capped step so a slow frame never teleports anyone; treat timers follow real time.
    const dt = Math.min(0.05, elapsed);
    last = t;
    moveRabbit(dt);
    updateTreat(Math.min(0.5, elapsed));
    moveDog(dt);
    render();
    requestAnimationFrame(frame);
  }

  function setRunning(on: boolean) {
    if (on === running) return;
    running = on;
    if (on) {
      last = performance.now();
      requestAnimationFrame(frame);
    }
  }

  let visible = false;
  new IntersectionObserver(
    ([e]) => {
      visible = e.isIntersecting;
      setRunning(visible && !document.hidden);
      if (visible && e.intersectionRatio > 0.5 && !promptShown) {
        promptShown = true;
        say(bubble.dataset.prompt ?? '', 7000);
      }
    },
    { threshold: [0, 0.5] },
  ).observe(meadow);
  document.addEventListener('visibilitychange', () => setRunning(visible && !document.hidden));

  addEventListener('resize', () => {
    W = meadow.clientWidth;
    DW = dogEl.offsetWidth;
    RW = rabbitEl.offsetWidth;
    dog.x = clamp(dog.x, 0, W - DW);
    rabbit.x = clamp(rabbit.x, 0, W - RW);
    rabbit.target = clamp(rabbit.target, 0, W - RW);
    treat.x = clamp(treat.x, 0, W - TW);
    treatEl.style.left = `${treat.x}px`;
  });

  // ---- Drag the rabbit ----
  let grabX = 0;
  let startY = 0;
  let startClientY = 0;
  rabbitEl.addEventListener('pointerdown', (e) => {
    if (rabbit.mode === 'caught') return;
    e.preventDefault();
    try {
      rabbitEl.setPointerCapture(e.pointerId);
    } catch {
      return;
    }
    rabbitEl.focus({ preventScroll: true });
    grabX = e.clientX - meadow.getBoundingClientRect().left - rabbit.x;
    startY = rabbit.y;
    startClientY = e.clientY;
    rabbit.mode = 'held';
    bubble.classList.remove('show');
  });
  rabbitEl.addEventListener('pointermove', (e) => {
    if (rabbit.mode !== 'held' || !rabbitEl.hasPointerCapture(e.pointerId)) return;
    const left = e.clientX - meadow.getBoundingClientRect().left - grabX;
    const nx = clamp(left, 0, W - RW);
    if (Math.abs(nx - rabbit.x) > 0.5) rabbit.dir = Math.sign(nx - rabbit.x);
    rabbit.x = nx;
    rabbit.y = clamp(startY + e.clientY - startClientY, -120, 0);
  });
  const release = (e: PointerEvent) => {
    if (rabbitEl.hasPointerCapture(e.pointerId)) rabbitEl.releasePointerCapture(e.pointerId);
    if (rabbit.mode === 'held') {
      rabbit.mode = 'rest';
      rabbit.rest = 0.25;
    }
  };
  rabbitEl.addEventListener('pointerup', release);
  rabbitEl.addEventListener('pointercancel', release);

  // ---- Keyboard: arrows move the rabbit while it has focus ----
  rabbitEl.addEventListener('keydown', (e) => {
    if (rabbit.mode === 'caught') return;
    const moves: Record<string, [number, number]> = {
      ArrowLeft: [-28, 0],
      ArrowRight: [28, 0],
      ArrowUp: [0, -24],
      ArrowDown: [0, 24],
    };
    const m = moves[e.key];
    if (!m) return;
    e.preventDefault();
    if (m[0]) rabbit.dir = Math.sign(m[0]);
    rabbit.x = clamp(rabbit.x + m[0], 0, W - RW);
    rabbit.y = clamp(rabbit.y + m[1], -120, 0);
    rabbit.mode = 'rest';
    rabbit.rest = 2.5;
    rabbit.manualUntil = performance.now() + 2500;
    bubble.classList.remove('show');
  });

  render();
}
