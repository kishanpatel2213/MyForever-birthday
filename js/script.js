/**
 * ============================================================================
 * HAPPY BIRTHDAY SIMRAN - INTERACTIVE LOVE ENGINE
 * Crafted with infinite love by Chiku 💕
 * ============================================================================
 */

(function () {
  'use strict';

  // --- DOM Elements ---
  const giftModal = document.getElementById('giftModal');
  const btnOpenGift = document.getElementById('btnOpenGift');
  const giftBoxIcon = document.getElementById('giftBoxIcon');
  
  // Music elements
  const bgMusic = document.getElementById('bgMusic');
  const vinylDisc = document.getElementById('vinylDisc');
  const playPauseBtn = document.getElementById('playPauseBtn');
  const musicStatus = document.getElementById('musicStatus');
  const musicFileInput = document.getElementById('musicFileInput');
  const btnUploadSong = document.getElementById('btnUploadSong');

  // Pookies elements
  const pookiesActorsWrap = document.getElementById('pookiesActorsWrap');
  const pookiesBubble = document.getElementById('pookiesBubble');
  const heartsBurstContainer = document.getElementById('heartsBurstContainer');
  const pookieActionBtns = document.querySelectorAll('.btn-pookie-action');

  // Cake elements
  const cakeStage = document.getElementById('cakeStage');
  const candleFlame = document.getElementById('candleFlame');
  const candleSmoke = document.getElementById('candleSmoke');
  const cakeWishBanner = document.getElementById('cakeWishBanner');

  // Canvas & background
  const magicCanvas = document.getElementById('magicCanvas');
  const ctx = magicCanvas.getContext('2d');

  // Modals & Gallery
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCloseBtn = document.getElementById('lightboxCloseBtn');
  const guideModal = document.getElementById('guideModal');
  const btnOpenGuide = document.getElementById('btnOpenGuide');
  const guideCloseBtn = document.getElementById('guideCloseBtn');

  // ==========================================================================
  // 1. WEB AUDIO ROMANTIC SYNTHESIZER (MUSIC BOX FALLBACK & SOUND FX)
  // ==========================================================================
  let audioCtx = null;
  let isSynthPlaying = false;
  let synthTimer = null;
  let synthNoteIndex = 0;

  function initAudioContext() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  }

  // Play a soft, music-box chime note
  function playChimeNote(freq, duration = 0.8, type = 'sine', gainVal = 0.15) {
    if (!audioCtx) return;
    try {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

      gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      console.warn('Audio note play error:', e);
    }
  }

  // Realistic Multi-Stage Kiss Sound (suction pucker + crisp pop + sparkle trail)
  function playKissSound() {
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;

      // Stage 1: Soft suction pucker ("mm")
      const osc1 = audioCtx.createOscillator();
      const gain1 = audioCtx.createGain();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(560, now);
      osc1.frequency.exponentialRampToValueAtTime(360, now + 0.12);
      gain1.gain.setValueAtTime(0.25, now);
      gain1.gain.exponentialRampToValueAtTime(0.01, now + 0.12);
      osc1.connect(gain1);
      gain1.connect(audioCtx.destination);
      osc1.start(now);
      osc1.stop(now + 0.12);

      // Stage 2: Crisp kiss release pop ("mwah! / pop!")
      setTimeout(() => {
        if (!audioCtx) return;
        const popTime = audioCtx.currentTime;
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(880, popTime);
        osc2.frequency.exponentialRampToValueAtTime(1450, popTime + 0.16);
        gain2.gain.setValueAtTime(0.35, popTime);
        gain2.gain.exponentialRampToValueAtTime(0.001, popTime + 0.18);
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.start(popTime);
        osc2.stop(popTime + 0.18);

        // Stage 3: High sparkle kiss shimmer
        playChimeNote(1046.5, 0.45, 'sine', 0.12);
        setTimeout(() => playChimeNote(1318.5, 0.55, 'sine', 0.1), 80);
      }, 95);
    } catch (e) {
      console.warn('Kiss audio error:', e);
    }
  }

  // Realistic Warm Hug Audio (Gentle heartbeat lub-dub + sweet cozy harmony)
  function playHugSound() {
    if (!audioCtx) return;
    try {
      const now = audioCtx.currentTime;
      const playThump = (time, freq, dur) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, time);
        osc.frequency.exponentialRampToValueAtTime(40, time + dur);
        gain.gain.setValueAtTime(0.4, time);
        gain.gain.exponentialRampToValueAtTime(0.001, time + dur);
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(time);
        osc.stop(time + dur);
      };
      // Heartbeat: lub-dub
      playThump(now, 85, 0.15);
      playThump(now + 0.22, 75, 0.18);

      // Cozy cuddle chords
      setTimeout(() => playChimeNote(523.25, 0.9, 'sine', 0.12), 280);
      setTimeout(() => playChimeNote(659.25, 1.0, 'sine', 0.12), 460);
      setTimeout(() => playChimeNote(783.99, 1.2, 'sine', 0.14), 640);
    } catch (e) {}
  }

  // Soft sparkle cheer
  function playCheerSparkle() {
    if (!audioCtx) return;
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((freq, i) => {
      setTimeout(() => {
        playChimeNote(freq, 0.9, 'sine', 0.12);
      }, i * 110);
    });
  }

  // Romantic Birthday Melody Loop (Music Box Chimes)
  const birthdayMelody = [
    { freq: 392.00, dur: 0.35, pause: 400 }, // G4
    { freq: 392.00, dur: 0.35, pause: 400 }, // G4
    { freq: 440.00, dur: 0.6,  pause: 600 }, // A4
    { freq: 392.00, dur: 0.6,  pause: 600 }, // G4
    { freq: 523.25, dur: 0.6,  pause: 600 }, // C5
    { freq: 493.88, dur: 1.0,  pause: 900 }, // B4

    { freq: 392.00, dur: 0.35, pause: 400 }, // G4
    { freq: 392.00, dur: 0.35, pause: 400 }, // G4
    { freq: 440.00, dur: 0.6,  pause: 600 }, // A4
    { freq: 392.00, dur: 0.6,  pause: 600 }, // G4
    { freq: 587.33, dur: 0.6,  pause: 600 }, // D5
    { freq: 523.25, dur: 1.0,  pause: 900 }, // C5

    { freq: 392.00, dur: 0.35, pause: 400 }, // G4
    { freq: 392.00, dur: 0.35, pause: 400 }, // G4
    { freq: 783.99, dur: 0.6,  pause: 600 }, // G5
    { freq: 659.25, dur: 0.6,  pause: 600 }, // E5
    { freq: 523.25, dur: 0.6,  pause: 600 }, // C5
    { freq: 493.88, dur: 0.6,  pause: 600 }, // B4
    { freq: 440.00, dur: 0.8,  pause: 800 }, // A4

    { freq: 698.46, dur: 0.35, pause: 400 }, // F5
    { freq: 698.46, dur: 0.35, pause: 400 }, // F5
    { freq: 659.25, dur: 0.6,  pause: 600 }, // E5
    { freq: 523.25, dur: 0.6,  pause: 600 }, // C5
    { freq: 587.33, dur: 0.6,  pause: 600 }, // D5
    { freq: 523.25, dur: 1.2,  pause: 1200 } // C5
  ];

  function stepSynthMelody() {
    if (!isSynthPlaying) return;
    const note = birthdayMelody[synthNoteIndex];
    playChimeNote(note.freq, note.dur, 'sine', 0.12);

    // Also play soft harmony note on certain beats
    if (synthNoteIndex % 4 === 0) {
      playChimeNote(note.freq / 2, 1.2, 'triangle', 0.08);
    }

    synthNoteIndex = (synthNoteIndex + 1) % birthdayMelody.length;
    synthTimer = setTimeout(stepSynthMelody, note.pause);
  }

  function startSynthMelody() {
    initAudioContext();
    if (isSynthPlaying) return;
    isSynthPlaying = true;
    synthNoteIndex = 0;
    stepSynthMelody();
    setMusicPlayerState(true, 'Playing: Romantic Birthday Music Box 🎶');
  }

  function stopSynthMelody() {
    isSynthPlaying = false;
    if (synthTimer) {
      clearTimeout(synthTimer);
      synthTimer = null;
    }
  }

  // ==========================================================================
  // 2. BACKGROUND MUSIC CONTROLLER
  // ==========================================================================
  let isPlaying = false;
  let customMusicLoaded = false;

  function setMusicPlayerState(playing, statusText = '') {
    isPlaying = playing;
    if (playing) {
      vinylDisc.classList.add('playing');
      playPauseBtn.innerHTML = '❚❚';
      playPauseBtn.setAttribute('title', 'Pause Music');
      if (statusText) musicStatus.textContent = statusText;
    } else {
      vinylDisc.classList.remove('playing');
      playPauseBtn.innerHTML = '▶';
      playPauseBtn.setAttribute('title', 'Play Music');
      if (statusText) musicStatus.textContent = statusText;
    }
  }

  async function tryPlayAudio() {
    initAudioContext();
    // First try HTML5 audio (music.mp3 or custom uploaded track)
    if (bgMusic && bgMusic.src) {
      try {
        await bgMusic.play();
        setMusicPlayerState(true, customMusicLoaded ? 'Playing Your Song 🎵' : 'Playing Simran\'s Song 💕');
        stopSynthMelody();
        return;
      } catch (err) {
        console.log('HTML5 audio play rejected or file missing, falling back to romantic chime synthesizer:', err);
      }
    }
    // Fallback to built-in romantic melody synthesizer
    startSynthMelody();
  }

  function pauseAudio() {
    if (bgMusic) {
      bgMusic.pause();
    }
    stopSynthMelody();
    setMusicPlayerState(false, 'Music Paused ⏸️');
  }

  function toggleAudio() {
    if (isPlaying) {
      pauseAudio();
    } else {
      tryPlayAudio();
    }
  }

  playPauseBtn.addEventListener('click', toggleAudio);
  vinylDisc.addEventListener('click', toggleAudio);

  // When audio file ends, loop
  if (bgMusic) {
    bgMusic.addEventListener('ended', () => {
      bgMusic.currentTime = 0;
      bgMusic.play();
    });
    // Handle error loading music.mp3 (e.g. not added yet)
    bgMusic.addEventListener('error', () => {
      console.log('No local music.mp3 file found yet. Synthesizer ready as fallback.');
      if (isPlaying && !customMusicLoaded) {
        startSynthMelody();
      }
    });
  }

  // Upload / Select local MP3 directly in browser
  if (btnUploadSong && musicFileInput) {
    btnUploadSong.addEventListener('click', () => {
      musicFileInput.click();
    });

    musicFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const fileUrl = URL.createObjectURL(file);
        bgMusic.src = fileUrl;
        customMusicLoaded = true;
        stopSynthMelody();
        tryPlayAudio();
        musicStatus.textContent = `Playing: ${file.name.substring(0, 20)}... 🎵`;
        spawnConfettiBurst();
      }
    });
  }

  // ==========================================================================
  // 3. CURTAIN / GIFT OPENING EXPERIENCE
  // ==========================================================================
  function openBirthdayGift() {
    initAudioContext();
    playCheerSparkle();
    spawnMassiveConfetti();

    giftModal.classList.add('hidden');
    setTimeout(() => {
      giftModal.style.display = 'none';
    }, 900);

    // Auto-start music
    tryPlayAudio();

    // Trigger sweet pookies kissing greeting
    setTimeout(() => {
      triggerPookieAction('kiss');
    }, 1200);
  }

  if (btnOpenGift) {
    btnOpenGift.addEventListener('click', openBirthdayGift);
  }
  if (giftBoxIcon) {
    giftBoxIcon.addEventListener('click', openBirthdayGift);
  }

  // ==========================================================================
  // 4. POOKIES LOVE & KISSING ANIMATION SYSTEM
  // ==========================================================================
  let currentAction = 'idle';
  let autonomousActionTimer = null;

  const dialogueMap = {
    idle: [
      "Simran & Chiku forever ❤️",
      "Chiku loves Simran so much! ✨",
      "You make my heart smile, Simran 🌸",
      "The happiest Pookies in the world 🧸"
    ],
    kiss: [
      "Mwaaaah! 💋 Chiku's sweetest kiss for Simran!",
      "Lips touch, hearts beat as one! 💋✨",
      "A million passionate kisses for my Birthday Queen! 💋💖",
      "Muah! You're Chiku's whole world! 💋"
    ],
    hug: [
      "SQUEEEZE! 🤗 Chiku wraps Simran in the warmest hug!",
      "Holding you tight... so safe and cozy in Chiku's arms! 🧸💕",
      "Simran's sweet cuddle makes Chiku's world complete! 🌸",
      "Never letting you go, my baby! Tightest pookie hugs! 🤗"
    ],
    dance: [
      "Dancing in love together! 💃🕺",
      "Twirling with my favorite girl! ✨",
      "Every song is about us, Simran! 🎶",
      "Our love is a beautiful melody! 🎵"
    ],
    flowers: [
      "Red roses for the prettiest girl ever! 💐",
      "Flowers as sweet and pure as Simran! 🌹",
      "All the flowers in the world for you! 🌸",
      "Simran's smile is brighter than roses! ✨"
    ],
    cake: [
      "Yum! A sweet birthday bite for Simran! 🍰",
      "Sweet cake for my sweetest human! 🧁",
      "Feeding my birthday angel! 🎂",
      "May life be as sweet as this cake! 🍓"
    ]
  };

  function updatePookieDialogue(action) {
    const quotes = dialogueMap[action] || dialogueMap.idle;
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    pookiesBubble.textContent = randomQuote;
    pookiesBubble.style.transform = 'translateY(-10px) scale(1.05)';
    setTimeout(() => {
      pookiesBubble.style.transform = 'translateY(0) scale(1)';
    }, 300);
  }

  // Burst of floating hearts from between the pookies
  function spawnPookieLoveHearts(type = 'kiss') {
    heartsBurstContainer.innerHTML = '';
    const heartSymbols = ['❤️', '💖', '💕', '💗', '💋', '✨', '🌸'];
    const count = type === 'kiss' ? 18 : 12;

    for (let i = 0; i < count; i++) {
      const heart = document.createElement('span');
      heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
      heart.style.position = 'absolute';
      heart.style.left = '50%';
      heart.style.top = '50%';
      heart.style.fontSize = `${20 + Math.random() * 24}px`;
      heart.style.pointerEvents = 'none';

      const angle = (Math.PI * 2 * i) / count;
      const dist = 70 + Math.random() * 110;
      const targetX = Math.cos(angle) * dist;
      const targetY = Math.sin(angle) * dist - 50;

      heart.animate([
        { transform: 'translate(-50%, -50%) scale(0.3)', opacity: 1 },
        { transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(1.35)`, opacity: 0.95, offset: 0.65 },
        { transform: `translate(calc(-50% + ${targetX * 1.25}px), calc(-50% + ${targetY - 60}px)) scale(1.7)`, opacity: 0 }
      ], {
        duration: 1400 + Math.random() * 700,
        easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
        fill: 'forwards'
      });

      heartsBurstContainer.appendChild(heart);
    }
  }

  function triggerPookieAction(action) {
    currentAction = action;
    pookiesActorsWrap.className = 'pookies-actors-wrap';
    const backdrop = document.querySelector('.pookies-backdrop');
    
    // Update action button active state
    pookieActionBtns.forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-action') === action);
    });

    if (action === 'kiss') {
      pookiesActorsWrap.classList.add('kissing');
      backdrop?.classList.add('zoomed');
      playKissSound();
      spawnPookieLoveHearts('kiss');
      updatePookieDialogue('kiss');
    } else if (action === 'hug') {
      pookiesActorsWrap.classList.add('hugging');
      backdrop?.classList.add('zoomed');
      playHugSound();
      spawnPookieLoveHearts('hug');
      updatePookieDialogue('hug');
    } else if (action === 'dance') {
      pookiesActorsWrap.classList.add('dancing');
      backdrop?.classList.remove('zoomed');
      playCheerSparkle();
      spawnPookieLoveHearts('dance');
      updatePookieDialogue('dance');
    } else if (action === 'flowers') {
      pookiesActorsWrap.classList.add('flowers');
      backdrop?.classList.remove('zoomed');
      playCheerSparkle();
      spawnPookieLoveHearts('kiss');
      updatePookieDialogue('flowers');
    } else if (action === 'cake') {
      pookiesActorsWrap.classList.add('cake');
      backdrop?.classList.remove('zoomed');
      playChimeNote(783.99, 0.5, 'sine', 0.12);
      spawnPookieLoveHearts('hug');
      updatePookieDialogue('cake');
    } else {
      backdrop?.classList.remove('zoomed');
      updatePookieDialogue('idle');
    }

    // Reset back to gentle idle after action completes (generous 4.8s duration to enjoy the kiss & hug!)
    clearTimeout(autonomousActionTimer);
    autonomousActionTimer = setTimeout(() => {
      pookiesActorsWrap.className = 'pookies-actors-wrap';
      backdrop?.classList.remove('zoomed');
      pookieActionBtns.forEach(btn => btn.classList.remove('active'));
      updatePookieDialogue('idle');
      scheduleNextAutonomousPookieMoments();
    }, 4800);
  }

  // Spontaneous loving moments when idle
  function scheduleNextAutonomousPookieMoments() {
    clearTimeout(autonomousActionTimer);
    const delay = 8000 + Math.random() * 6000;
    autonomousActionTimer = setTimeout(() => {
      const actions = ['kiss', 'hug', 'dance'];
      const randomAction = actions[Math.floor(Math.random() * actions.length)];
      triggerPookieAction(randomAction);
    }, delay);
  }

  pookieActionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.getAttribute('data-action');
      triggerPookieAction(action);
    });
  });

  // Start initial autonomous cycle
  scheduleNextAutonomousPookieMoments();

  // ==========================================================================
  // 5. INTERACTIVE BIRTHDAY CAKE & CANDLE BLOWING
  // ==========================================================================
  let candleBlown = false;

  function blowCandle() {
    if (candleBlown) {
      // Re-light if already blown
      candleBlown = false;
      candleFlame.classList.remove('blown-out');
      candleSmoke.classList.remove('active');
      cakeWishBanner.innerHTML = `
        <div style="font-size: 1.1rem; color: var(--text-medium); font-weight: 600;">
          ✨ Candle re-lit! Tap the cake anytime to make another wish, Simran! 🎂
        </div>
      `;
      playChimeNote(523.25, 0.4);
      return;
    }

    candleBlown = true;
    candleFlame.classList.add('blown-out');
    candleSmoke.classList.add('active');

    // Blow sound synth
    if (audioCtx) {
      try {
        const bufferSize = audioCtx.sampleRate * 0.4;
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.25));
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        const filter = audioCtx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        noise.connect(filter);
        filter.connect(audioCtx.destination);
        noise.start();
      } catch (e) {}
    }

    // Celebratory sparkles & confetti
    setTimeout(() => {
      playCheerSparkle();
      spawnMassiveConfetti();
      triggerPookieAction('kiss');

      cakeWishBanner.innerHTML = `
        <div class="wish-unlocked-card">
          <h3>🎉 Wish Granted! Happy Birthday Simran! 🌟</h3>
          <p>May your special day be filled with endless smiles, pure happiness, and infinite love.</p>
          <div style="font-size: 0.95rem; color: var(--primary); font-weight: 800; margin-top: 8px;">
            ❤️ Forever your Chiku, cheering for your dreams! 💕
          </div>
        </div>
      `;
    }, 400);
  }

  if (cakeStage) {
    cakeStage.addEventListener('click', blowCandle);
  }

  // ==========================================================================
  // 6. PHOTO FRAME LIVE PREVIEW & LIGHTBOX
  // ==========================================================================
  const photoCards = document.querySelectorAll('.photo-frame-card');

  // Load any previously saved preview images from localStorage
  photoCards.forEach((card, index) => {
    const frameId = card.getAttribute('data-frame') || (index + 1);
    const imgElement = card.querySelector('.photo-img-viewport img');
    const savedImg = localStorage.getItem(`simran_photo_${frameId}`);
    if (savedImg && imgElement) {
      imgElement.src = savedImg;
    }

    // Hidden file input for this frame
    const fileInput = card.querySelector('.frame-file-input');
    const uploadBtn = card.querySelector('.btn-upload-photo');
    const viewBtn = card.querySelector('.btn-view-photo');

    if (uploadBtn && fileInput) {
      uploadBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        fileInput.click();
      });
    }

    if (fileInput) {
      fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = function (evt) {
            const dataUrl = evt.target.result;
            if (imgElement) {
              imgElement.src = dataUrl;
            }
            try {
              localStorage.setItem(`simran_photo_${frameId}`, dataUrl);
            } catch (err) {
              console.warn('Storage quota exceeded, showing in session');
            }
            spawnConfettiBurst();
          };
          reader.readAsDataURL(file);
        }
      });
    }

    // View in Lightbox
    function openFrameInLightbox(e) {
      if (e) e.stopPropagation();
      if (!imgElement) return;
      const captionText = card.querySelector('.frame-caption h4')?.textContent || 'Simran & Chiku';
      lightboxImg.src = imgElement.src;
      lightboxCaption.textContent = captionText;
      lightboxModal.classList.add('active');
    }

    if (viewBtn) {
      viewBtn.addEventListener('click', openFrameInLightbox);
    }
    card.addEventListener('click', (e) => {
      // Don't trigger if clicked on an action button
      if (e.target.closest('.frame-action-btn') || e.target.tagName === 'INPUT') return;
      openFrameInLightbox(e);
    });
  });

  if (lightboxCloseBtn) {
    lightboxCloseBtn.addEventListener('click', () => {
      lightboxModal.classList.remove('active');
    });
  }
  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) {
        lightboxModal.classList.remove('active');
      }
    });
  }

  // Guide Modal (Instructions on adding photos)
  if (btnOpenGuide && guideModal) {
    btnOpenGuide.addEventListener('click', () => {
      guideModal.classList.add('active');
    });
  }
  if (guideCloseBtn && guideModal) {
    guideCloseBtn.addEventListener('click', () => {
      guideModal.classList.remove('active');
    });
  }
  if (guideModal) {
    guideModal.addEventListener('click', (e) => {
      if (e.target === guideModal) {
        guideModal.classList.remove('active');
      }
    });
  }

  // ==========================================================================
  // 7. FLOATING HEARTS & PARTICLES CANVAS
  // ==========================================================================
  let canvasWidth = (magicCanvas.width = window.innerWidth);
  let canvasHeight = (magicCanvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    canvasWidth = magicCanvas.width = window.innerWidth;
    canvasHeight = magicCanvas.height = window.innerHeight;
  });

  const particles = [];
  const particleColors = ['#ff4d79', '#ff7597', '#ffb6c1', '#f9ca24', '#e056fd', '#ffffff'];

  class Particle {
    constructor() {
      this.reset();
      this.y = Math.random() * canvasHeight; // initial scatter
    }

    reset() {
      this.x = Math.random() * canvasWidth;
      this.y = canvasHeight + 20;
      this.size = 8 + Math.random() * 14;
      this.speedY = 0.6 + Math.random() * 1.4;
      this.speedX = (Math.random() - 0.5) * 0.8;
      this.color = particleColors[Math.floor(Math.random() * particleColors.length)];
      this.alpha = 0.3 + Math.random() * 0.5;
      this.type = Math.random() > 0.4 ? 'heart' : 'sparkle';
      this.rot = Math.random() * Math.PI * 2;
      this.rotSpeed = (Math.random() - 0.5) * 0.04;
    }

    update() {
      this.y -= this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.01) * 0.5;
      this.rot += this.rotSpeed;

      if (this.y < -30 || this.x < -30 || this.x > canvasWidth + 30) {
        this.reset();
      }
    }

    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate(this.rot);
      ctx.globalAlpha = this.alpha;

      if (this.type === 'heart') {
        ctx.fillStyle = this.color;
        const s = this.size;
        ctx.beginPath();
        ctx.moveTo(0, s * 0.3);
        ctx.bezierCurveTo(-s * 0.5, -s * 0.3, -s, s * 0.2, 0, s);
        ctx.bezierCurveTo(s, s * 0.2, s * 0.5, -s * 0.3, 0, s * 0.3);
        ctx.fill();
      } else {
        // Sparkle star
        ctx.fillStyle = this.color;
        const r = this.size * 0.5;
        ctx.beginPath();
        for (let i = 0; i < 4; i++) {
          ctx.lineTo(Math.cos((i * Math.PI) / 2) * r, Math.sin((i * Math.PI) / 2) * r);
          ctx.lineTo(Math.cos((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.35), Math.sin((i * Math.PI) / 2 + Math.PI / 4) * (r * 0.35));
        }
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }
  }

  for (let i = 0; i < 35; i++) {
    particles.push(new Particle());
  }

  function renderMagicCanvas() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    requestAnimationFrame(renderMagicCanvas);
  }
  renderMagicCanvas();

  // Sparkle Cursor trail on pointer move
  let lastCursorTime = 0;
  window.addEventListener('pointermove', (e) => {
    const now = Date.now();
    if (now - lastCursorTime > 80) {
      lastCursorTime = now;
      const heart = document.createElement('span');
      heart.className = 'heart-cursor';
      const emojis = ['💖', '✨', '🌸', '💕', '⭐'];
      heart.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      heart.style.left = `${e.clientX}px`;
      heart.style.top = `${e.clientY}px`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 950);
    }
  });

  // ==========================================================================
  // 8. CELEBRATORY CONFETTI CANNON
  // ==========================================================================
  function spawnConfettiBurst() {
    const confettiColors = ['#ff4d79', '#ff9a9e', '#fecfef', '#f9ca24', '#00cec9', '#a29bfe'];
    for (let i = 0; i < 50; i++) {
      const bit = document.createElement('div');
      bit.style.position = 'fixed';
      bit.style.left = '50%';
      bit.style.top = '50%';
      bit.style.width = `${6 + Math.random() * 8}px`;
      bit.style.height = `${8 + Math.random() * 12}px`;
      bit.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
      bit.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
      bit.style.pointerEvents = 'none';
      bit.style.zIndex = '99999';

      const angle = Math.random() * Math.PI * 2;
      const speed = 120 + Math.random() * 320;
      const targetX = Math.cos(angle) * speed;
      const targetY = Math.sin(angle) * speed - 100;

      bit.animate([
        { transform: 'translate(-50%, -50%) rotate(0deg) scale(1)', opacity: 1 },
        { transform: `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) rotate(${360 * Math.random()}deg) scale(0.9)`, opacity: 0.9, offset: 0.6 },
        { transform: `translate(calc(-50% + ${targetX * 1.15}px), calc(-50% + ${targetY + 250}px)) rotate(${720 * Math.random()}deg) scale(0.4)`, opacity: 0 }
      ], {
        duration: 1600 + Math.random() * 1000,
        easing: 'cubic-bezier(0.1, 1, 0.1, 1)',
        fill: 'forwards'
      });

      document.body.appendChild(bit);
      setTimeout(() => bit.remove(), 2800);
    }
  }

  function spawnMassiveConfetti() {
    spawnConfettiBurst();
    setTimeout(spawnConfettiBurst, 250);
    setTimeout(spawnConfettiBurst, 500);
  }

  // Global button to shower love
  const btnShowerLove = document.getElementById('btnShowerLove');
  if (btnShowerLove) {
    btnShowerLove.addEventListener('click', () => {
      spawnMassiveConfetti();
      playCheerSparkle();
      triggerPookieAction('kiss');
    });
  }

})();
