  function goToHomePage(e) {
      e.preventDefault();
      const email = document.getElementById("login-email").value.trim();
      const password = document.getElementById("login-password").value.trim();

      if (!email || !password) {
        alert("Email and password are required!");
        return;
      }

      window.location.href = "index.html";
    }

    feather.replace();

    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const showSignupBtn = document.getElementById("show-signup");
    const showLoginBtn = document.getElementById("show-login");

    showSignupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      loginForm.classList.add("hidden");
      signupForm.classList.remove("hidden");
    });

    showLoginBtn.addEventListener("click", (e) => {
      e.preventDefault();
      signupForm.classList.add("hidden");
      loginForm.classList.remove("hidden");
    });

    function togglePasswordVisibility(id) {
      const passwordInput = document.getElementById(id);
      const icon = passwordInput.nextElementSibling.querySelector("i");
      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        icon.setAttribute("data-feather", "eye-off");
      } else {
        passwordInput.type = "password";
        icon.setAttribute("data-feather", "eye");
      }
      feather.replace();
    }

    const translations = {
      en: {
        loginTitle: "Welcome back!",
        loginSubtitle: "Please enter your details",
        email: "Email",
        password: "Password",
        remember: "Remember for 30 days",
        forgot: "Forgot password?",
        loginBtn: "Login",
        noAccount: "Don't have an account?",
        signupTitle: "Create an account",
        signupSubtitle: "Please enter your details",
        signupEmail: "Email",
        signupPassword: "Password",
        signupName: "Name",
        signupBtn: "Sign up",
        alreadyAccount: "Already have an account?",
      },
      hi: {
        loginTitle: "वापस स्वागत है!",
        loginSubtitle: "कृपया अपनी जानकारी दर्ज करें",
        email: "ईमेल",
        password: "पासवर्ड",
        remember: "30 दिनों तक याद रखें",
        forgot: "पासवर्ड भूल गए?",
        loginBtn: "लॉगिन",
        noAccount: "खाता नहीं है?",
        signupTitle: "खाता बनाएँ",
        signupSubtitle: "कृपया अपनी जानकारी दर्ज करें",
        signupEmail: "ईमेल",
        signupPassword: "पासवर्ड",
        signupName: "नाम",
        signupBtn: "साइन अप करें",
        alreadyAccount: "पहले से खाता है?",
      },
      od: {
        loginTitle: "ପୁନର୍ବାର ସ୍ୱାଗତ!",
        loginSubtitle: "ଦୟାକରି ଆପଣଙ୍କର ବିବରଣୀ ପ୍ରବେଶ କରନ୍ତୁ",
        email: "ଇମେଲ୍",
        password: "ପାସୱାର୍ଡ",
        remember: "30 ଦିନ ପାଇଁ ମନେ ରଖନ୍ତୁ",
        forgot: "ପାସୱାର୍ଡ ଭୁଲିଗଲେ?",
        loginBtn: "ଲଗଇନ୍",
        noAccount: "ଖାତା ନାହିଁ?",
        signupTitle: "ଏକ ଖାତା ତିଆରି କରନ୍ତୁ",
        signupSubtitle: "ଦୟାକରି ଆପଣଙ୍କର ବିବରଣୀ ପ୍ରବେଶ କରନ୍ତୁ",
        signupEmail: "ଇମେଲ୍",
        signupPassword: "ପାସୱାର୍ଡ",
        signupName: "ନାମ",
        signupBtn: "ସାଇନ୍ ଅପ୍",
        alreadyAccount: "ପୂର୍ବରୁ ଏକ ଖାତା ଅଛି?",
      },
    };

   
    const switcher = document.getElementById("language-switcher");

    switcher.addEventListener("change", (e) => {
      const lang = e.target.value;
      applyTranslations(lang);
    });

    function applyTranslations(lang) {
      const t = translations[lang];

      document.getElementById("login-title").innerText = t.loginTitle;
      document.getElementById("login-subtitle").innerText = t.loginSubtitle;
      document.getElementById("label-email").innerText = t.email;
      document.getElementById("label-password").innerText = t.password;
      document.getElementById("remember-text").innerText = t.remember;
      document.getElementById("forgot-password").innerText = t.forgot;
      document.getElementById("login-btn").innerText = t.loginBtn;
      document.getElementById("no-account").innerText = t.noAccount;

      document.getElementById("signup-title").innerText = t.signupTitle;
      document.getElementById("signup-subtitle").innerText = t.signupSubtitle;
      document.getElementById("signup-label-email").innerText = t.signupEmail;
      document.getElementById("signup-label-password").innerText =
        t.signupPassword;
      document.getElementById("signup-label-name").innerText = t.signupName;
      document.getElementById("signup-btn").innerText = t.signupBtn;
      document.getElementById("already-account").innerText = t.alreadyAccount;
    }

  
    applyTranslations("en");