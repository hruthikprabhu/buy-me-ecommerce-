// Simple in-memory and localStorage backed auth demo
(function(){
  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));

  // URL params
  const params = new URLSearchParams(window.location.search);
  const requestedMode = (params.get('mode') || '').toLowerCase();
  const returnParam = params.get('return') || '';
  const returnTo = (() => {
    const safeDefault = '../home.html';
    if (!returnParam) return safeDefault;
    if (returnParam.startsWith('http') || returnParam.startsWith('//')) return safeDefault;
    return returnParam;
  })();

  // Elements
  const loginForm = $('#loginForm');
  const signupLink = $('.signup-link');

  // Modal elements (created below)
  let modal, backdrop, form, closeBtn, submitBtn, modeSwitcher;

  // Storage keys
  const USERS_KEY = 'buyme_users';
  const SESSION_KEY = 'buyme_current_user';

  // Utilities
  function loadUsers(){
    try { return JSON.parse(localStorage.getItem(USERS_KEY)) || []; } catch(e){ return []; }
  }
  function saveUsers(list){ localStorage.setItem(USERS_KEY, JSON.stringify(list)); }
  function setSession(user){ localStorage.setItem(SESSION_KEY, JSON.stringify(user)); }
  function getSession(){ try { return JSON.parse(localStorage.getItem(SESSION_KEY)); } catch(e){ return null; } }
  function clearSession(){ localStorage.removeItem(SESSION_KEY); }
  function showToast(msg, type='info'){
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    if (type==='error') t.style.borderColor = '#ef4444';
    if (type==='success') t.style.borderColor = '#10b981';
    document.body.appendChild(t);
    requestAnimationFrame(()=> t.classList.add('show'));
    setTimeout(()=>{ t.classList.remove('show'); setTimeout(()=> t.remove(), 250); }, 2500);
  }

  // Build signup/login modal
  function buildModal(){
    modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-backdrop"></div>
      <div class="modal-card" role="dialog" aria-modal="true" aria-labelledby="signupTitle">
        <div class="modal-header">
          <div class="modal-title" id="signupTitle">Create Account</div>
          <button class="close-btn" aria-label="Close">✕</button>
        </div>
        <form id="signupForm">
          <div class="grid">
            <div class="input-group full">
              <label class="input-label" for="studentName">Student Name</label>
              <input class="input-field" type="text" id="studentName" name="student" placeholder="Enter full name" required>
            </div>
            <div class="input-group full">
              <label class="input-label" for="emailNew">Email</label>
              <input class="input-field" type="email" id="emailNew" name="email" placeholder="name@example.com" required>
            </div>
            <div class="input-group">
              <label class="input-label" for="passwordNew">New Password</label>
              <input class="input-field" type="password" id="passwordNew" name="password" placeholder="Enter new password" minlength="6" required>
            </div>
            <div class="input-group">
              <label class="input-label" for="passwordConfirm">Confirm Password</label>
              <input class="input-field" type="password" id="passwordConfirm" name="confirm" placeholder="Re-enter password" minlength="6" required>
            </div>
            <div class="small full">Password must be at least 6 characters.</div>
          </div>
          <div class="btn-row">
            <button type="button" class="btn secondary" id="cancelSignup">Cancel</button>
            <button type="submit" class="btn primary" id="createAccount">Create Account</button>
          </div>
        </form>
      </div>`;
    document.body.appendChild(modal);

    // refs
    backdrop = $('.modal-backdrop', modal);
    form = $('#signupForm', modal);
    closeBtn = $('.close-btn', modal);
    submitBtn = $('#createAccount', modal);

    // events
    function close(){ modal.classList.remove('open'); }
    function open(){ modal.classList.add('open'); $('#studentName', modal).focus(); }
    backdrop.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    $('#cancelSignup', modal).addEventListener('click', close);

    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const student = $('#studentName', modal).value.trim();
      const email = $('#emailNew', modal).value.trim().toLowerCase();
      const pass = $('#passwordNew', modal).value;
      const confirm = $('#passwordConfirm', modal).value;

      if(!student){ showToast('Student name is required', 'error'); return; }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ showToast('Enter a valid email', 'error'); return; }
      if(pass.length < 6){ showToast('Password must be at least 6 characters', 'error'); return; }
      if(pass !== confirm){ showToast('Passwords do not match', 'error'); return; }

      const users = loadUsers();
      if(users.some(u => u.email === email)){
        showToast('Account already exists for this email', 'error');
        return;
      }
      const user = { student, email, password: pass, createdAt: Date.now() };
      users.push(user);
      saveUsers(users);
      setSession({ student, email });
      showToast('Account created. Signed in as ' + student, 'success');
      close();
      window.location.href = returnTo;
    });

    return { open, close };
  }

  let modalApi = null;

  // Login form behavior
  loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const id = $('#email').value.trim();
    const pass = $('#password').value;

    const idLower = id.toLowerCase();
    const users = loadUsers();
    const user = users.find(u => u.email === idLower || u.student.toLowerCase() === idLower);
    if(!user){ showToast('Account not found', 'error'); return; }
    if(user.password !== pass){ showToast('Invalid password', 'error'); return; }
    setSession({ student: user.student, email: user.email });
    showToast('Welcome back, ' + user.student + '!', 'success');
    window.location.href = returnTo;
  });

  // Signup link opens modal
  signupLink.addEventListener('click', (e)=>{
    e.preventDefault();
    if(!modalApi){ modalApi = buildModal(); }
    modalApi.open();
  });

  // Auto-open modal when requested
  if (requestedMode === 'signup') {
    if(!modalApi){ modalApi = buildModal(); }
    modalApi.open();
  }

  // If already logged in, inform
  const session = getSession();
  if(session){
    showToast('Signed in as ' + session.student);
  }
})();
