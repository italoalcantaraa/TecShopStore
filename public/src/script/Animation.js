import particlesJS from 'particles.js';

particlesJS('particles-js', {
    "particles": {
      "number": {
        "value": 100,  // Número de partículas
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"  // Cor das partículas
      },
      "shape": {
        "type": "circle"  // Tipo de forma das partículas
      },
      "opacity": {
        "value": 0.5,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 4,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,  // Linhas que conectam as partículas
        "distance": 150,
        "color": "#ffffff",  // Cor das linhas
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",  // Direção do movimento das partículas
        "random": true,
        "straight": false,
        "out_mode": "out",  // As partículas saem da tela
        "bounce": false
      }
    },
    "interactivity": {
      "detect_on": "window",  // Detecta interações do usuário
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"  // Efeito de repulsão ao passar o mouse
        },
        "onclick": {
          "enable": true,
          "mode": "push"  // Adiciona partículas ao clicar
        }
      }
    },
    "retina_detect": true  // Ajusta para telas com alta resolução
  });