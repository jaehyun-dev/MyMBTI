
      const main = document.querySelector("#main");
      const qna = document.querySelector("#qna");
      const result = document.querySelector("#result");
      const qnaBackground = document.querySelector("#qna-background-image");
      const answerButton1 = document.querySelector("#qna-answer-button1");
      const answerButton2 = document.querySelector("#qna-answer-button2");
      const resultBackgroundImage = document.querySelector(
        "#result-background-image"
      );
      // const resultImageUrl = getComputedStyle(document.getElementById('result-background-image')).backgroundImage;
      // const imageUrl = backgroundImage.replace(/url\(['"]?([^'"]*)['"]?\)/, '$1');
      // document.getElementById('download').parentElement.href = imageUrl;s

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
        resultBackgroundImage.style.backgroundImage = `url(img/result/${res}.jpg)`;
        document.getElementById("download").href = `img/result/${res}.jpg`;
        qnaBackground.style.display = "none";
        result.style.display = "block";
      }
