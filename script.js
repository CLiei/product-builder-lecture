const themeToggle = document.getElementById('theme-toggle');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const body = document.body;

function updateToggleUI(isDark) {
    if (toggleIcon) toggleIcon.textContent = isDark ? '☀️' : '🌙';
    if (toggleText) toggleText.textContent = isDark ? '라이트 모드' : '다크 모드';
}

// 초기 테마 설정 확인
const currentTheme = localStorage.getItem('theme');
if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    updateToggleUI(true);
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = body.classList.toggle('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateToggleUI(isDark);
    });
}
