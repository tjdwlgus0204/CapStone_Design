document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-item");
    const mainContent = document.querySelector(".content");

    // 네비게이션 탭 클릭 시, 선택된 탭 활성화 및 컨텐츠 표시/숨기기
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

    // 캐러셀 슬라이드 관련
    const slides = document.querySelector(".slides");
    const indicators = document.querySelectorAll(".indicator");
    let currentSlide = 1;
    const totalSlides = indicators.length;

    // 첫 번째와 마지막 슬라이드 복사본 만들기
    const firstSlideClone = slides.firstElementChild.cloneNode(true);
    const lastSlideClone = slides.lastElementChild.cloneNode(true);
    
    // 복사본을 슬라이드에 추가
    slides.appendChild(firstSlideClone); // 첫 번째 슬라이드 복사본을 마지막에 추가
    slides.insertBefore(lastSlideClone, slides.firstElementChild); // 마지막 슬라이드 복사본을 처음에 추가

    slides.style.transform = `translateX(-100%)`; // 첫 번째 슬라이드를 기본으로 보이게 설정

    const updateSlide = () => {
        slides.style.transition = "transform 0.5s ease"; // 트랜지션 활성화
        slides.style.transform = `translateX(-${currentSlide * 100}%)`; // 슬라이드 이동
        indicators.forEach(ind => ind.classList.remove("active"));
        indicators[(currentSlide - 1 + totalSlides) % totalSlides].classList.add("active");
    };

    // 다음 슬라이드로 이동하는 함수
    const goToNextSlide = () => {
        currentSlide++;
        updateSlide();

        // 복사된 슬라이드가 보일 때 실제 첫 번째 슬라이드로 이동
        if (currentSlide === totalSlides + 1) { 
            setTimeout(() => {
                slides.style.transition = "none"; // 트랜지션을 없애고
                currentSlide = 1; // 실제 첫 번째 슬라이드로 이동
                slides.style.transform = `translateX(-100%)`;
            }, 500); // 트랜지션 후에 실행
        }
    };

    // 이전 슬라이드로 이동하는 함수
    const goToPreviousSlide = () => {
        currentSlide--;
        updateSlide();

        // 복사된 슬라이드가 보일 때 실제 마지막 슬라이드로 이동
        if (currentSlide === 0) {
            setTimeout(() => {
                slides.style.transition = "none"; // 트랜지션을 없애고
                currentSlide = totalSlides; // 실제 마지막 슬라이드로 이동
                slides.style.transform = `translateX(-${currentSlide * 100}%)`;
            }, 500); // 트랜지션 후에 실행
        }
    };

    // 인디케이터 클릭 시 슬라이드 이동
    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => {
            currentSlide = index + 1; // 슬라이드 인덱스 맞추기
            updateSlide();
        });
    });

    // 3초마다 자동으로 슬라이드 넘김
    setInterval(goToNextSlide, 3000);
});
