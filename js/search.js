// 검색 섹션을 숨기는 함수
function hideSearchSection() {
    const searchSection = document.querySelector('.search-section');
    searchSection.style.display = 'none';
}

// "STUDND" 로고를 클릭했을 때 처음 페이지로 돌아가도록 이벤트 리스너 추가
document.getElementById('logo').addEventListener('click', function() {
    location.reload(); // 로고 클릭 시 페이지 새로고침
});

// 프로필 버튼 클릭 시 개인정보 수정 페이지로 이동
document.getElementById('profile-button').addEventListener('click', function() {
    window.location.href = 'profile.html'; // 프로필 페이지로 이동
});


// 모든 스터디 그룹
const studyGroups = [
    {
        name: "호서대 토익",
        description: "안녕하세요 저희는 호서대학교에서 활동하고 있는 토익스터디 그룹입니다. 현재 저희는 6명과 함께 활동하고 있으며, 매주 참석률을 98% 달성하고 있습니다.",
        keywords: ["토익", "호서대", "스터디"]
    },
    {
        name: "월화수목금토익",
        description: "안녕하세요 저희는 아산에서 활동하고 있는 토익스터디 그룹입니다. 현재 저희는 3명과 함께 활동하고 있으며, 매주 참석률을 100% 달성하고 있습니다.",
        keywords: ["토익", "아산", "스터디"]
    },
    {
        name: "화이트해커",
        description: "안녕하세요 저희는 호서대에서 활동하고 있는 코딩스터디 그룹입니다. 저희는 교내의 동아리로도 활동하고 있으며, 멘토멘티 과정을 통해 함께 성장하고 있습니다.",
        keywords: ["코딩", "호서대", "스터디"]
    },
    {
        name: "코디딩",
        description: "안녕하세요 저희는 천안에서 활동하고 있는 코딩스터디 그룹입니다. 현재 저희는 10명과 함께 활동하고 있으며, 매주 참석률을 100% 달성하고 있습니다.",
        keywords: ["코딩", "천안", "스터디"]
    },
    {
        name: "컴화리",
        description: "안녕하세요 저희는 호서대에서 활동하고 있는 컴활 자격증을 위한 스터디 그룹입니다. 현재 저희는 10명과 함께 활동하고 있으며, 매주 참석률을 100% 달성하고 있습니다.",
        keywords: ["컴활", "호서대", "스터디"]
    }
];

// 사용자가 참여 중인 스터디 그룹 (예시)
const myStudyGroups = [
    "호서대 토익", 
    "컴화리"
];

// 나의 스터디를 클릭했을 때 참여 중인 스터디 그룹을 표시하는 함수
function showMyStudyGroups() {
    const resultsSection = document.getElementById('results-section');
    
    // 기존의 검색 결과를 지우기
    resultsSection.innerHTML = '';  

    // myStudyGroups 배열에 있는 이름과 일치하는 스터디 그룹만 필터링
    const filteredGroups = studyGroups.filter(group => myStudyGroups.includes(group.name));

    if (filteredGroups.length > 0) {
        // 그룹 카드 스타일로 나의 스터디 그룹을 표시
        filteredGroups.forEach(group => {
            const groupCard = document.createElement('div');
            groupCard.classList.add('group-card');
            
            const groupName = document.createElement('h2');
            groupName.textContent = `#${group.name}`;
            groupCard.appendChild(groupName);

            const groupDescription = document.createElement('p');
            groupDescription.textContent = group.description;
            groupCard.appendChild(groupDescription);

            resultsSection.appendChild(groupCard);
        });
        
        // CSS Flexbox 설정을 통해 그룹 카드들을 한 줄에 나란히 표시
        resultsSection.style.display = 'block';
    } else {
        const noResultMessage = document.createElement('p');
        noResultMessage.textContent = '참여 중인 스터디 그룹이 없습니다.';
        noResultMessage.classList.add('no-results');
        resultsSection.appendChild(noResultMessage);
    }

    // 검색 섹션을 숨김
    hideSearchSection();
}

// "나의 스터디" 버튼 클릭 시 나의 스터디 목록을 보여주는 이벤트 리스너
document.querySelector('.my-study-button').addEventListener('click', showMyStudyGroups);

// 검색 기능 (기존과 동일하게 유지)
function performSearch() {
    const searchTerm = document.getElementById('search-input').value.trim().toLowerCase(); 
    const resultsSection = document.getElementById('results-section');
    
    // 기존 검색 결과를 지우기
    resultsSection.innerHTML = '';  

    const filteredGroups = studyGroups.filter(group => {
        return group.name.toLowerCase() === searchTerm || 
               group.keywords.some(keyword => keyword.toLowerCase() === searchTerm);
    });

    if (filteredGroups.length > 0) {
        filteredGroups.forEach(group => {
            const groupCard = document.createElement('div');
            groupCard.classList.add('group-card');
            
            const groupName = document.createElement('h2');
            groupName.textContent = `#${group.name}`;
            groupCard.appendChild(groupName);

            const groupDescription = document.createElement('p');
            groupDescription.textContent = group.description;
            groupCard.appendChild(groupDescription);

            const keywordContainer = document.createElement('div');
            keywordContainer.classList.add('keyword-container');
            keywordContainer.textContent = '관련 키워드: ';
            group.keywords.forEach(keyword => {
                const keywordSpan = document.createElement('span');
                keywordSpan.textContent = `#${keyword}`;
                keywordContainer.appendChild(keywordSpan);
            });

            groupCard.appendChild(keywordContainer);
            resultsSection.appendChild(groupCard);
        });
    } else {
        const noResultMessage = document.createElement('p');
        noResultMessage.textContent = '검색 결과가 없습니다.';
        noResultMessage.classList.add('no-results');
        resultsSection.appendChild(noResultMessage);
    }
}

// 검색 버튼을 클릭하거나 Enter 키를 누를 때 검색 수행
document.getElementById('search-button').addEventListener('click', performSearch);

document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        performSearch();
    }
});

// "STUDND" 로고를 클릭했을 때 처음 페이지로 돌아가도록 이벤트 리스너 추가
document.getElementById('logo').addEventListener('click', function() {
    location.reload(); // 로고를 클릭하면 페이지를 새로고침하여 검색 페이지로 돌아가도록 설정
});
