document.addEventListener('DOMContentLoaded', function() {
    // 1. 페이지 로드 시 localStorage에서 저장된 배경색 불러오기
    const savedColor = localStorage.getItem('bgColor');
    if (savedColor) {
      document.body.style.backgroundColor = savedColor;
    }
  
    // 2. 드롭다운 요소를 찾음 (메인 페이지에만 있음)
    const colorSelect = document.getElementById('colorSelect');
    if (colorSelect) {
      // 저장된 색상이 있으면 드롭다운 선택값에도 적용
      if (savedColor) {
        colorSelect.value = savedColor;
      }
  
      // 3. 드롭다운 선택 시 localStorage에 저장 및 배경색 변경
      colorSelect.addEventListener('change', function() {
        const selectedColor = colorSelect.value;
        localStorage.setItem('bgColor', selectedColor);
        document.body.style.backgroundColor = selectedColor;
        console.log("선택된 색상:", selectedColor);
      });
    }
  });