// Data
let sessions = [];
let goals = [];
let feedbacks = [];

// Elements
const tabs = document.querySelectorAll('.tab');
const navButtons = document.querySelectorAll('.nav-btn');

const sessionForm = document.getElementById('sessionForm');
const goalForm = document.getElementById('goalForm');
const feedbackForm = document.getElementById('feedbackForm');

const feedbackSession = document.getElementById('feedbackSession');
const goalList = document.getElementById('goalList');
const sessionList = document.getElementById('sessionList');

// Navigation functionality
navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.getAttribute('data-tab');

    tabs.forEach(tab => tab.classList.remove('active'));
    document.getElementById(target).classList.add('active');

    navButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Log Session
sessionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const date = document.getElementById('sessionDate').value;
  const topic = document.getElementById('sessionTopic').value;
  const mentor = document.getElementById('sessionMentor').value;
  const mentee = document.getElementById('sessionMentee').value;

  sessions.push({ date, topic, mentor, mentee });
  updateSessions();
  updateFeedbackDropdown();
  sessionForm.reset();
});

// Set Goal
goalForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = document.getElementById('goalDescription').value;
  const targetDate = document.getElementById('goalTargetDate').value;

  goals.push({ description, targetDate, status: 'In Progress' });
  updateGoals();
  goalForm.reset();
});

// Submit Feedback
feedbackForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const session = feedbackSession.value;
  const feedback = document.getElementById('feedback').value;

  feedbacks.push({ session, feedback });
  feedbackForm.reset();
  alert('Feedback submitted!');
});

// Update feedback session dropdown
function updateFeedbackDropdown() {
  feedbackSession.innerHTML = '';
  sessions.forEach((s, i) => {
    const opt = document.createElement('option');
    opt.value = `${s.date} - ${s.topic}`;
    opt.textContent = `${s.date} - ${s.topic}`;
    feedbackSession.appendChild(opt);
  });
}

// Render Goals
function updateGoals() {
  goalList.innerHTML = '';
  goals.forEach((g) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${g.description}</strong><br>
      Target: ${g.targetDate} <br>
      Status: ${g.status}
    `;
    goalList.appendChild(li);
  });
}

// Render Sessions
function updateSessions() {
  sessionList.innerHTML = '';
  sessions.forEach((s) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <strong>${s.date}</strong> - ${s.topic}<br>
      Mentor: ${s.mentor}<br>
      Mentee: ${s.mentee}
    `;
    sessionList.appendChild(li);
  });
}
