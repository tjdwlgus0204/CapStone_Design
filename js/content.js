document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");
    const mainContent = document.querySelector(".content"); // 콘텐츠를 선택

    navItems.forEach(item => {
        item.addEventListener("click", () => {
            navItems.forEach(nav => nav.classList.remove("selected"));
            item.classList.add("selected");

            // '홈'을 클릭했을 때만 콘텐츠 보이기
            if (item.textContent === "홈") {
                mainContent.style.display = "block";
            } else {
                mainContent.style.display = "none";
            }
        });
    });
});
