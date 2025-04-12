document.addEventListener('DOMContentLoaded', function() {
    const toggleBtns = document.querySelectorAll('.toggleBtn');
    console.log("토글 버튼 개수:", toggleBtns.length);
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // 버튼의 부모(contentBox)에서 subject-comment 찾기
            const contentParagraph = this.parentElement.querySelector('.subject-comment');
            if (!contentParagraph) {
                console.error("subject-comment 요소를 찾을 수 없습니다.");
                return;
            }
            contentParagraph.classList.toggle('hidden');
    
            if (contentParagraph.classList.contains('hidden')) {
                this.innerText = 'Show Content';
            } else {
                this.innerText = 'Hide Content';
            }
        });
    });
});