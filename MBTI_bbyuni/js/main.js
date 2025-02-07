window.addEventListener('load', function() {
  preloadImages(qnaBackgroundList);
  preloadImages(resultList);
  preloadImages(answerButton1List);
  preloadImages(answerButton2List);
});

const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const qnaBackground = document.querySelector("#qna-background-image");
const answerButton1 = document.querySelector("#qna-answer-button1");
const answerButton2 = document.querySelector("#qna-answer-button2");
const resultBackgroundImage = document.querySelector("#result-background-image");

const qnaBackgroundList = [
  "img/qna/E-I/1번.png",
  "img/qna/E-I/2번.png",
  "img/qna/E-I/3번.png",
  "img/qna/N-S/4번.png",
  "img/qna/N-S/5번.png",
  "img/qna/N-S/6번.png",
  "img/qna/F-T/7번.png",
  "img/qna/F-T/8번.png",
  "img/qna/F-T/9번.png",
  "img/qna/F-T/10번.png",
  "img/qna/F-T/11번.png",
  "img/qna/P-J/12번.png",
  "img/qna/P-J/13번.png",
  "img/qna/P-J/14번.png",
];

const answerButton1List = [
  "img/qna/E-I/1번-E.png",
  "img/qna/E-I/2번-I.png",
  "img/qna/E-I/3번-E.png",
  "img/qna/N-S/4번-N.png",
  "img/qna/N-S/5번-S.png",
  "img/qna/N-S/6번-N.png",
  "img/qna/F-T/7번-F.png",
  "img/qna/F-T/8번-T.png",
  "img/qna/F-T/9번-F.png",
  "img/qna/F-T/10번-T.png",
  "img/qna/F-T/11번-F.png",
  "img/qna/P-J/12번-J.png",
  "img/qna/P-J/13번-P.png",
  "img/qna/P-J/14번-J.png",
];

const answerButton2List = [
  "img/qna/E-I/1번-I.png",
  "img/qna/E-I/2번-E.png",
  "img/qna/E-I/3번-I.png",
  "img/qna/N-S/4번-S.png",
  "img/qna/N-S/5번-N.png",
  "img/qna/N-S/6번-S.png",
  "img/qna/F-T/7번-T.png",
  "img/qna/F-T/8번-F.png",
  "img/qna/F-T/9번-T.png",
  "img/qna/F-T/10번-F.png",
  "img/qna/F-T/11번-T.png",
  "img/qna/P-J/12번-P.png",
  "img/qna/P-J/13번-J.png",
  "img/qna/P-J/14번-P.png",
];

const resultList = [
  "img/result/광고보기.jpg",  // 광고 이미지 추가
  "img/result/ENFJ.jpg",
  "img/result/ENFP.jpg",
  "img/result/ENTJ.jpg",
  "img/result/ENTP.jpg",
  "img/result/ESFJ.jpg",
  "img/result/ESFP.jpg",
  "img/result/ESTJ.jpg",
  "img/result/ESTP.jpg",
  "img/result/INFJ.jpg",
  "img/result/INFP.jpg",
  "img/result/INTJ.jpg",
  "img/result/INTP.jpg",
  "img/result/ISFJ.jpg",
  "img/result/ISFP.jpg",
  "img/result/ISTJ.jpg",
  "img/result/ISTP.jpg"
];

let i = 0;
let E = 0;
let I = 0;
let F = 0;
let T = 0;
let N = 0;
let S = 0;
let P = 0;
let J = 0;
let res = "";

let currentQnaImage = qnaBackgroundList[i];
let currentAnswerButton1Image = answerButton1List[i];
let currentAnswerButton2Image = answerButton2List[i];

qnaBackgroundImage.style.backgroundImage = `url(${currentQnaImage})`;
answerButton1.src = currentAnswerButton1Image;
answerButton2.src = currentAnswerButton2Image;

function start() {
  main.style.display = "none";
  qna.style.display = "block";
}

function changeQuestionAndAnswer1() {
  i++;
  if (1 <= i && i <= 3) {
    if (i % 2 == 1) {
      E++;
    } else {
      I++;
    }
    console.log("E:" + E);
    console.log("I:" + I);
  } else if (4 <= i && i <= 6) {
    if (i % 2 == 0) {
      N++;
    } else {
      S++;
    }
    console.log("N:" + N);
    console.log("S:" + S);
  } else if (7 <= i && i <= 11) {
    if (i % 2 == 1) {
      F++;
    } else {
      T++;
    }
    console.log("F:" + F);
    console.log("T:" + T);
  } else {
    if (i % 2 == 0) {
      J++;
    } else {
      P++;
    }
    console.log("J:" + J);
    console.log("P:" + P);
  }

  if (i == 14) {
    finish();
    return;
  }

  currentQnaImage = qnaBackgroundList[i];
  currentAnswerButton1Image = answerButton1List[i];
  currentAnswerButton2Image = answerButton2List[i];

  qnaBackground.style.backgroundImage = `url(${currentQnaImage})`;
  answerButton1.src = currentAnswerButton1Image;
  answerButton2.src = currentAnswerButton2Image;
}

function changeQuestionAndAnswer2() {
  i++;
  if (1 <= i && i <= 3) {
    if (i % 2 == 0) {
      E++;
    } else {
      I++;
    }
  } else if (4 <= i && i <= 6) {
    if (i % 2 == 1) {
      N++;
    } else {
      S++;
    }
  } else if (7 <= i && i <= 11) {
    if (i % 2 == 0) {
      F++;
    } else {
      T++;
    }
  } else {
    if (i % 2 == 1) {
      J++;
    } else {
      P++;
    }
  }

  if (i == 14) {
    finish();
    return;
  }

  currentQnaImage = qnaBackgroundList[i];
  currentAnswerButton1Image = answerButton1List[i];
  currentAnswerButton2Image = answerButton2List[i];

  qnaBackground.style.backgroundImage = `url(${currentQnaImage})`;
  answerButton1.src = currentAnswerButton1Image;
  answerButton2.src = currentAnswerButton2Image;
}

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
  resultBackgroundImage.style.backgroundImage = `url(img/result/광고보기.jpg)`; // 광고 배경으로 설정
  qnaBackground.style.display = "none";  // 질문 배경 숨기기
  result.style.display = "block"; // 결과 화면 보이기
  
  document.querySelector("#result-button-container").parentElement.style.display = "none"; // 결과 버튼 숨기기

  // 광고 클릭 시 동작
  resultBackgroundImage.addEventListener('click', function() {
    // 결과 이미지로 변경 후 광고 페이지로 이동
    resultBackgroundImage.style.backgroundImage = `url(img/result/${res}.jpg)`;  // MBTI 결과 이미지로 설정
    document.getElementById("download").href = `img/result/${res}.jpg`;  // 다운로드 링크 설정
    document.querySelector("#result-button-container").parentElement.style.display = "block";  // 결과 버튼 보이기

    // 세션/로컬스토리지 업데이트 (광고 안 보겠다고 설정)
    sessionStorage.setItem('showAd', 'false');
    localStorage.setItem('showAd', 'false');
    
    // 약간의 지연 후 광고 링크 열기
    setTimeout(() => {
      window.open("https://link.coupang.com/a/bUgInP", "_blank"); // 쿠팡 광고 페이지 열기
    }, 300); // 300ms 후에 쿠팡 광고 링크 열리도록 설정
  });

  // 광고 건너뛰기 버튼 클릭 시의 동작 처리
  const closeAdButton = document.querySelector("#close-ad");

  closeAdButton.addEventListener('click', function() {
    // 광고를 건너뛰고 결과 페이지로 바로 이동
    resultBackgroundImage.style.backgroundImage = `url(img/result/${res}.jpg)`;  // MBTI 결과 이미지로 설정
    document.getElementById("download").href = `img/result/${res}.jpg`;  // 다운로드 링크 설정
    document.querySelector("#result-button-container").parentElement.style.display = "block";  // 결과 버튼 보이기

    // 세션/로컬스토리지 업데이트 (광고 안 보겠다고 설정)
    sessionStorage.setItem('showAd', 'false');
    localStorage.setItem('showAd', 'false');
    
    // 광고 숨기기
    resultBackgroundImage.removeEventListener('click', showAdvertisement);  // 광고 클릭 이벤트 제거
    resultBackgroundImage.style.backgroundImage = `url(img/result/${res}.jpg)`;  // 광고 없이 결과만 표시

    // 쿠팡 링크 열리지 않도록 설정
    window.open = function() {};  // 쿠팡 링크 차단
  });
}

function shareLink() {
  const currentUrl = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: currentUrl
    }).then(() => {
      console.log('공유 성공');
    }).catch((error) => {
      console.log('공유 실패', error);
    });
  } else {
    const urlInput = document.createElement('input');
    urlInput.value = currentUrl;
    document.body.appendChild(urlInput);
    urlInput.select();
    document.execCommand('copy');
    document.body.removeChild(urlInput);
    alert('링크를 복사했습니다: ' + currentUrl);
  }
}

function preloadImages(imageUrls) {
  for (let i = 0; i < imageUrls.length; i++) {
    const img = new Image();
    img.src = imageUrls[i];
  }
}
