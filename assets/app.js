
function openRegisterModal() {
  document.getElementById("register_modal").showModal();
}

function closeRegisterModal() {
  document.getElementById("register_modal").close();
}

function openLoginModal() {
  login_modal.showModal();
}

tailwind.config = {
theme: {
  colors: {
    'light': '#1A1A1A',
    'dark': '#1A1A1A',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      '8xl': '96rem',
      '9xl': '128rem',
    },
    borderRadius: {
      '4xl': '2rem',
    }
  }
},
}