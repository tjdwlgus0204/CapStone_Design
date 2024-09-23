// 개인정보 수정 저장 로직 (예시)
document.getElementById('profile-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 방지

    // 사용자 입력 정보 가져오기
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const interests = document.getElementById('interests').value;

    // 여기에서 정보를 저장하는 로직을 추가 (예: 서버에 보내기, 로컬 스토리지에 저장 등)
    console.log(`이름: ${name}, 전화번호: ${phone}, 이메일: ${email}, 관심 분야: ${interests}`);

    alert("개인정보가 저장되었습니다.");

    // 폼을 리셋하여 모든 입력 필드를 초기화
    document.getElementById('profile-form').reset();
    
});

// 프로필 버튼 클릭 시 개인정보 수정 페이지로 이동
document.getElementById('logo').addEventListener('click', function() {
    window.location.href = 'search.html'; // 프로필 페이지로 이동
});