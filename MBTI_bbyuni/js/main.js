function finish() {
  if (E < I) {
    res += "I";
  } else {
    res += "E";
  }
  if (N < S) {
    res += "S";
  } else {
    res += "N";
  }
  if (F < T) {
    res += "T";
  } else {
    res += "F";
  }
  if (P < J) {
    res += "J";
  } else {
    res += "P";
  }
  console.log(res);

  // URL에 결과 추가
  const url = new URL(window.location.href);
  url.searchParams.set('result', res);
  window.history.replaceState({}, '', url);

  // 세션스토리지와 로컬스토리지 모두 사용
  sessionStorage.setItem('result', res);
  localStorage.setItem('result', res);
  sessionStorage.setItem('showAd', 'true');
  localStorage.setItem('showAd', 'true');
  
  showAdvertisement();
}

function showAdvertisement() {
  resultBackgroundImage.style.backgroundImage = `url(img/result/광고보기.jpg)`;
  qnaBackground.style.display = "none";
  result.style.display = "block";
  document.querySelector("#result-button-container").parentElement.style.display = "none";

  let hasClicked = false;
  
  resultBackgroundImage.addEventListener('click', async function(e) {
    if (!hasClicked) {
      e.preventDefault();
      hasClicked = true;

      // 결과 이미지로 먼저 변경
      resultBackgroundImage.style.backgroundImage = `url(img/result/${res}.jpg)`;
      document.getElementById("download").href = `img/result/${res}.jpg`;
      document.querySelector("#result-button-container").parentElement.style.display = "block";
      
      // 상태 업데이트
      sessionStorage.setItem('showAd', 'false');
      localStorage.setItem('showAd', 'false');

      // 약간의 지연 후 광고 링크 열기
      setTimeout(() => {
        window.open("https://link.coupang.com/a/bUgInP", "_blank");
      }, 300);
    }
  });
}
