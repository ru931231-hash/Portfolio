document.addEventListener('DOMContentLoaded', () => {
    // 1. 自動更新年份
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 2. 導覽列滾動陰影效果
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // 3. 簡單的按鈕點擊追蹤 (範例，可自行擴充)
    const primaryBtn = document.querySelector('.btn-primary');
    primaryBtn.addEventListener('click', (e) => {
        // 如果未來有作品集 section，這裡會自動捲動過去
        console.log("User clicked 'View Work'");
    });
});
