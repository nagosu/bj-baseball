document.addEventListener("DOMContentLoaded", function () {
  function getParameterByName(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  const leagueName = getParameterByName("league"); // URL에서 리그 이름 가져오기

  // DOM 요소
  const leagueImage = document.getElementById("leagueImage");
  const emblemsContainer = document.getElementById("emblemsContainer");
  const stadiumImage = document.querySelector(".stadium img");
  const homeTeamName = document.getElementById("homeTeamName");
  const homeTeamImage = document.getElementById("homeTeamImage");
  const awayTeamName = document.getElementById("awayTeamName");
  const awayTeamImage = document.getElementById("awayTeamImage");
  const homeTeamContainer = document.getElementById("homeTeamContainer");
  const awayTeamContainer = document.getElementById("awayTeamContainer");
  const homeStadiumBtn = document.getElementById("homeStadiumBtn");
  const subStadiumBtn = document.getElementById("subStadiumBtn");

  // 팀 선택 여부
  let homeTeamSelected = false;
  let awayTeamSelected = false;
  let currentHomeEmblem = null;
  let currentAwayEmblem = null;

  // 엠블럼 데이터
  const emblemsData = {
    // MLB 엠블럼 데이터
    mlb: [
      {
        src: "../static/assets/images/mlb/angels.png",
        top: "290px",
        left: "500px",
        stadium: "../static/assets/images/stadium/mlb/angels.webp",
        size: "35px",
      },
      {
        src: "../static/assets/images/mlb/astros.png",
        top: "430px",
        left: "830px",
        stadium: "../static/assets/images/stadium/mlb/astros.jpeg",
      },
      {
        src: "../static/assets/images/mlb/athletics.png",
        top: "230px",
        left: "470px",
        stadium: "../static/assets/images/stadium/mlb/athletics.webp",
      },
      {
        src: "../static/assets/images/mlb/braves.png",
        top: "360px",
        left: "1000px",
        stadium: "../static/assets/images/stadium/mlb/braves.jpeg",
        size: "70px",
      },
      {
        src: "../static/assets/images/mlb/brewers.png",
        top: "150px",
        left: "925px",
        stadium: "../static/assets/images/stadium/mlb/brewers.jpeg",
      },
      {
        src: "../static/assets/images/mlb/cardinals.png",
        top: "270px",
        left: "930px",
        stadium: "../static/assets/images/stadium/mlb/cardinals.png",
      },
      {
        src: "../static/assets/images/mlb/cubs.png",
        top: "195px",
        left: "920px",
        stadium: "../static/assets/images/stadium/mlb/cubs.webp",
      },
      {
        src: "../static/assets/images/mlb/diamondbacks.png",
        top: "290px",
        left: "570px",
        stadium: "../static/assets/images/stadium/mlb/diamondbacks.jpg",
      },
      {
        src: "../static/assets/images/mlb/dodgers.png",
        top: "300px",
        left: "455px",
        stadium: "../static/assets/images/stadium/mlb/dodgers.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/giants.png",
        top: "235px",
        left: "410px",
        stadium: "../static/assets/images/stadium/mlb/giants.jpeg",
        size: "60px",
      },
      {
        src: "../static/assets/images/mlb/indians.png",
        top: "190px",
        left: "1030px",
        stadium: "../static/assets/images/stadium/mlb/indians.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/jays.png",
        top: "135px",
        left: "1045px",
        stadium: "../static/assets/images/stadium/mlb/jays.webp",
        size: "55px",
      },
      {
        src: "../static/assets/images/mlb/mariners.png",
        top: "40px",
        left: "500px",
        stadium: "../static/assets/images/stadium/mlb/mariners.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/marlins.png",
        top: "480px",
        left: "1100px",
        stadium: "../static/assets/images/stadium/mlb/marlins.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/mets.png",
        top: "190px",
        left: "1170px",
        stadium: "../static/assets/images/stadium/mlb/mets.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/nationals.png",
        top: "280px",
        left: "1100px",
        stadium: "../static/assets/images/stadium/mlb/nationals.webp",
      },
      {
        src: "../static/assets/images/mlb/orioles.png",
        top: "240px",
        left: "1100px",
        stadium: "../static/assets/images/stadium/mlb/orioles.jpeg",
      },
      {
        src: "../static/assets/images/mlb/padres.png",
        top: "345px",
        left: "500px",
        stadium: "../static/assets/images/stadium/mlb/padres.jpeg",
        size: "30px",
      },
      {
        src: "../static/assets/images/mlb/phillies.png",
        top: "205px",
        left: "1100px",
        stadium: "../static/assets/images/stadium/mlb/phillies.jpeg",
      },
      {
        src: "../static/assets/images/mlb/pirates.png",
        top: "235px",
        left: "1065px",
        stadium: "../static/assets/images/stadium/mlb/pirates.webp",
        size: "30px",
      },
      {
        src: "../static/assets/images/mlb/rangers.png",
        top: "360px",
        left: "800px",
        stadium: "../static/assets/images/stadium/mlb/rangers.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/rays.png",
        top: "450px",
        left: "1050px",
        stadium: "../static/assets/images/stadium/mlb/rays.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/reds.png",
        top: "280px",
        left: "1000px",
        stadium: "../static/assets/images/stadium/mlb/reds.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/redsox.png",
        top: "110px",
        left: "1170px",
        stadium: "../static/assets/images/stadium/mlb/redsox.webp",
        size: "50px",
      },
      {
        src: "../static/assets/images/mlb/rockies.png",
        top: "220px",
        left: "720px",
        stadium: "../static/assets/images/stadium/mlb/rockies.jpg",
      },
      {
        src: "../static/assets/images/mlb/royals.png",
        top: "260px",
        left: "870px",
        stadium: "../static/assets/images/stadium/mlb/royals.jpeg",
        size: "35px",
      },
      {
        src: "../static/assets/images/mlb/tigers.png",
        top: "160px",
        left: "1000px",
        stadium: "../static/assets/images/stadium/mlb/tigers.jpeg",
        size: "35px",
      },
      {
        src: "../static/assets/images/mlb/twins.png",
        top: "140px",
        left: "860px",
        stadium: "../static/assets/images/stadium/mlb/twins.jpeg",
      },
      {
        src: "../static/assets/images/mlb/whitesox.png",
        top: "210px",
        left: "960px",
        stadium: "../static/assets/images/stadium/mlb/whitesox.jpeg",
        size: "40px",
      },
      {
        src: "../static/assets/images/mlb/yankees.png",
        top: "165px",
        left: "1130px",
        stadium: "../static/assets/images/stadium/mlb/yankees.webp",
      },
    ],
    // KBO 엠블럼 데이터
    kbo: [
      {
        src: "../static/assets/images/kbo/doosan.png",
        top: "230px",
        left: "520px",
        stadium: "../static/assets/images/stadium/kbo/doosan-lg.png",
      },
      {
        src: "../static/assets/images/kbo/hanhwa.png",
        top: "380px",
        left: "500px",
        stadium: "../static/assets/images/stadium/kbo/hanhwa.jpeg",
      },
      {
        src: "../static/assets/images/kbo/kiwoom.png",
        top: "210px",
        left: "460px",
        stadium: "../static/assets/images/stadium/kbo/kiwoom.jpeg",
      },
      {
        src: "../static/assets/images/kbo/kt.png",
        top: "270px",
        left: "490px",
        stadium: "../static/assets/images/stadium/kbo/kt.jpeg",
      },
      {
        src: "../static/assets/images/kbo/lg.png",
        top: "180px",
        left: "520px",
        stadium: "../static/assets/images/stadium/kbo/doosan-lg.png",
      },
      {
        src: "../static/assets/images/kbo/lotte.png",
        top: "535px",
        left: "700px",
        stadium: "../static/assets/images/stadium/kbo/lotte.jpeg",
        sub_stadium: "../static/assets/images/stadium/sub/lotte_sub.jpeg",
      },
      {
        src: "../static/assets/images/kbo/nc.png",
        top: "570px",
        left: "610px",
        stadium: "../static/assets/images/stadium/kbo/nc.png",
      },
      {
        src: "../static/assets/images/kbo/samsung.png",
        top: "455px",
        left: "630px",
        stadium: "../static/assets/images/stadium/kbo/samsung.jpeg",
      },
      {
        src: "../static/assets/images/kbo/ssg.png",
        top: "190px",
        left: "350px",
        stadium: "../static/assets/images/stadium/kbo/ssg.jpeg",
      },
      {
        src: "../static/assets/images/kbo/kia.png",
        top: "550px",
        left: "400px",
        stadium: "../static/assets/images/stadium/kbo/kia.jpeg",
      },
    ],
    // NPB 엠블럼 데이터
    npb: [
      {
        src: "../static/assets/images/npb/baystars.png",
        top: "620px",
        left: "500px",
        stadium: "../static/assets/images/stadium/npb/baystars.webp",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/buffaloes.png",
        top: "700px",
        left: "350px",
        stadium: "../static/assets/images/stadium/npb/buffaloes.jpeg",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/dragons.png",
        top: "650px",
        left: "400px",
        stadium: "../static/assets/images/stadium/npb/dragons.webp",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/eagles.png",
        top: "450px",
        left: "590px",
        stadium: "../static/assets/images/stadium/npb/eagles.jpeg",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/fighters.png",
        top: "170px",
        left: "600px",
        stadium: "../static/assets/images/stadium/npb/fighters.jpeg",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/giants.png",
        top: "540px",
        left: "550px",
        stadium: "../static/assets/images/stadium/npb/giants.png",
        size: "50px",
      },
      {
        src: "../static/assets/images/npb/hawks.png",
        top: "710px",
        left: "80px",
        stadium: "../static/assets/images/stadium/npb/hawks.webp",
        size: "60px",
      },
      {
        src: "../static/assets/images/npb/lions.png",
        top: "540px",
        left: "500px",
        stadium: "../static/assets/images/stadium/npb/lions.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/npb/marines.png",
        top: "590px",
        left: "550px",
        stadium: "../static/assets/images/stadium/npb/marines.jpeg",
        size: "50px",
      },
      {
        src: "../static/assets/images/npb/swallows.png",
        top: "580px",
        left: "470px",
        stadium: "../static/assets/images/stadium/npb/swallows.jpg",
        size: "50px",
      },
      {
        src: "../static/assets/images/npb/tigers.png",
        top: "650px",
        left: "300px",
        stadium: "../static/assets/images/stadium/npb/tigers.jpg",
        size: "55px",
      },
      {
        src: "../static/assets/images/npb/toyocarp.png",
        top: "670px",
        left: "180px",
        stadium: "../static/assets/images/stadium/npb/toyocarp.jpg",
        size: "55px",
      },
    ],
  };

  // 리그 이름에 따라 이미지 설정
  if (leagueName) {
    switch (leagueName.toLowerCase()) {
      // MLB 이미지 설정
      case "mlb":
        leagueImage.src = "../static/assets/images/league/mlb.jpeg";
        leagueImage.style.width = "880px";
        leagueImage.style.marginLeft = "380px";
        addEmblems(emblemsData.mlb);
        break;
      // KBO 이미지 설정
      case "kbo":
        leagueImage.src = "../static/assets/images/league/kbo.png";
        leagueImage.style.width = "800px";
        leagueImage.style.marginLeft = "150px";
        addEmblems(emblemsData.kbo);
        break;
      // NPB 이미지 설정
      case "npb":
        leagueImage.src = "../static/assets/images/league/npb.jpeg";
        leagueImage.style.width = "930px";
        leagueImage.style.marginLeft = "0px";
        addEmblems(emblemsData.npb);
        break;
      default:
        leagueImage.alt = "League image not found";
    }
  } else {
    leagueImage.alt = "No league specified";
  }

  // 선택 버튼
  function addVictoryButton(teamImage, container) {
    const victoryBtn = document.createElement("button");
    victoryBtn.innerText = "선택";
    victoryBtn.className = "victory-btn";
    victoryBtn.style.width = "100px";
    victoryBtn.style.height = "50px";
    victoryBtn.style.fontSize = "30px";
    victoryBtn.style.fontWeight = "bold";
    victoryBtn.style.backgroundColor = "#999";
    victoryBtn.style.color = "black";
    victoryBtn.style.border = "none";
    victoryBtn.style.borderRadius = "30px";

    // 엠블럼 중앙에 위치하게 설정
    victoryBtn.style.top = "50%";
    victoryBtn.style.left = "50%";
    victoryBtn.style.transform = "translate(-50%, -50%)";

    victoryBtn.addEventListener("click", function () {
      // 모달 생성
      const modal = document.createElement("div");
      modal.className = "modal";
      modal.style.position = "fixed";
      modal.style.top = "0";
      modal.style.left = "0";
      modal.style.width = "100%";
      modal.style.height = "100%";
      modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
      modal.style.display = "flex";
      modal.style.justifyContent = "center";
      modal.style.alignItems = "center";
      modal.style.zIndex = "1000";

      // 모달 콘텐츠 생성
      const modalContent = document.createElement("div");
      modalContent.className = "modal-content";
      modalContent.style.backgroundColor = "#fff";
      modalContent.style.padding = "20px";
      modalContent.style.borderRadius = "10px";
      modalContent.style.display = "flex";
      modalContent.style.flexDirection = "column";
      modalContent.style.alignItems = "center";
      modalContent.style.width = "60%";

      // 취소 버튼 생성
      const cancelButton = document.createElement("button");
      cancelButton.innerHTML =
        '<svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M6 6L18 18" stroke="#33363F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
      cancelButton.style.background = "none";
      cancelButton.style.border = "none";
      cancelButton.style.cursor = "pointer";
      cancelButton.style.alignSelf = "flex-end";

      cancelButton.addEventListener("click", function () {
        document.body.removeChild(modal);
      });

      // 버튼 이미지 설정
      const buttonLabels = ["패스", "플핸", "역배", "승", "U/O"];
      const buttonImages = {
        패스: "../static/assets/images/badge/pass.png",
        플핸: "../static/assets/images/badge/plushandi.png",
        역배: "../static/assets/images/badge/reverse.png",
        승: "../static/assets/images/badge/win.png",
        "U/O": "../static/assets/images/badge/underover.png",
      };

      const buttonsContainer = document.createElement("div");
      buttonsContainer.style.display = "flex";
      buttonsContainer.style.justifyContent = "space-around";
      buttonsContainer.style.width = "100%";

      buttonLabels.forEach((label) => {
        const btn = document.createElement("img");
        btn.src = buttonImages[label];
        btn.style.width = "100px";
        btn.style.height = "100px";
        btn.style.cursor = "pointer";
        btn.alt = label;

        btn.addEventListener("click", function () {
          const gameInfo = document.querySelector(".gameInfo");
          gameInfo.innerHTML = ""; // gameInfo 안의 모든 요소 제거

          const clonedImage = teamImage.cloneNode(); // 엠블럼 이미지 복사
          clonedImage.style.transition = "transform 1s ease, width 1s ease";
          clonedImage.style.width = "600px"; // 엠블럼 너비 설정
          clonedImage.style.marginTop = "80px";
          clonedImage.style.position = "absolute";
          clonedImage.style.top = "50%";
          clonedImage.style.left = "50%";
          clonedImage.style.transform = "translate(-50%, -50%) scale(0)"; // 초기 scale 0
          clonedImage.style.cursor = "pointer";

          gameInfo.appendChild(clonedImage); // gameInfo에 복사된 엠블럼 이미지 추가

          // 흰색 배경 요소 생성
          const backgroundCircle = document.createElement("div");
          backgroundCircle.style.width = "180px";
          backgroundCircle.style.height = "180px";
          backgroundCircle.style.borderRadius = "50%";
          backgroundCircle.style.backgroundColor = "white";
          backgroundCircle.style.position = "absolute";
          backgroundCircle.style.top = "calc(50% - 290px)";
          backgroundCircle.style.left = "calc(50% - 290px)";
          backgroundCircle.style.zIndex = "999";

          // 동그라미 요소 생성
          const circle = document.createElement("img");
          circle.src = buttonImages[label]; // 선택한 이미지 설정
          circle.style.width = "200px";
          circle.style.height = "200px";
          circle.style.position = "absolute";
          circle.style.top = "calc(50% - 300px)";
          circle.style.left = "calc(50% - 300px)";
          circle.style.cursor = "pointer";
          circle.style.zIndex = "1000";

          gameInfo.appendChild(backgroundCircle); // 흰색 배경 추가
          gameInfo.appendChild(circle); // gameInfo에 동그라미 추가

          // 0ms delay to ensure the above styles are applied before starting the transition
          requestAnimationFrame(() => {
            clonedImage.style.transform = "translate(-50%, -50%) scale(1)"; // 최종 scale 1
          });

          // 모달 제거
          document.body.removeChild(modal);

          // 선택된 이미지 클릭 이벤트 추가
          clonedImage.addEventListener("click", function () {
            // 새로고침
            window.location.reload();
          });

          // 선택된 이미지 클릭 이벤트 추가
          circle.addEventListener("click", function () {
            // 모달 다시 열기
            document.body.appendChild(modal);
          });
        });

        buttonsContainer.appendChild(btn);
      });

      modalContent.appendChild(cancelButton);
      modalContent.appendChild(buttonsContainer);
      modal.appendChild(modalContent);
      document.body.appendChild(modal);
    });

    container.appendChild(victoryBtn);
  }

  // 엠블럼 추가
  function addEmblems(emblems) {
    emblemsContainer.innerHTML = ""; // 기존 엠블럼 제거
    emblems.forEach((emblem) => {
      const emblemElement = document.createElement("img");
      emblemElement.src = emblem.src;
      emblemElement.className = "emblem";
      emblemElement.style.position = "absolute";
      emblemElement.style.width = emblem.size || "45px"; // 기본 크기 45px, 지정된 크기 사용
      emblemElement.style.top = emblem.top;
      emblemElement.style.left = emblem.left;
      emblemElement.dataset.src = emblem.src;
      emblemElement.dataset.stadium = emblem.stadium;
      emblemElement.dataset.subStadium = emblem.sub_stadium; // sub_stadium 데이터 추가

      // 엠블럼 클릭 이벤트
      emblemElement.addEventListener("click", function () {
        const emblemRect = emblemElement.getBoundingClientRect(); // 엠블럼 위치 정보
        const homeTeamImageRect = homeTeamImage.getBoundingClientRect(); // HOME 팀 이미지 위치 정보
        const awayTeamImageRect = awayTeamImage.getBoundingClientRect(); // AWAY 팀 이미지 위치 정보
        const stadiumRect = stadiumImage.getBoundingClientRect(); // 구장 이미지 위치 정보
        const scaleX = stadiumRect.width / emblemRect.width; // 구장 이미지 너비 비율
        const scaleY = stadiumRect.height / emblemRect.height; // 구장 이미지 높이 비율

        const homeStadiumBtn = document.getElementById("homeStadiumBtn");
        const subStadiumBtn = document.getElementById("subStadiumBtn");

        const handleStadiumImage = (stadiumSrc) => {
          stadiumImage.src = stadiumSrc;
          stadiumImage.style.transition = "none";
          stadiumImage.style.transformOrigin = `${
            emblemRect.left - stadiumRect.left + emblemRect.width / 2
          }px ${emblemRect.top - stadiumRect.top + emblemRect.height / 2}px`;
          stadiumImage.style.transform = `scale(${1 / scaleX}, ${1 / scaleY})`;
          stadiumImage.offsetHeight;
          stadiumImage.style.transition = "transform 1s ease";
          stadiumImage.style.transform = "scale(1, 1)";
        };

        // HOME 또는 AWAY 팀 선택 시
        if (homeTeamSelected) {
          if (currentHomeEmblem) {
            emblemsContainer.appendChild(currentHomeEmblem); // 이전 HOME 엠블럼 복구
          }

          handleStadiumImage(emblem.stadium);
          homeStadiumBtn.onclick = () => handleStadiumImage(emblem.stadium);
          subStadiumBtn.onclick = () =>
            handleStadiumImage(emblem.sub_stadium || emblem.stadium);

          // stadiumImage.src = emblem.stadium;
          // stadiumImage.style.transition = "none"; // 애니메이션 초기화
          // stadiumImage.style.transformOrigin = `${
          //   emblemRect.left - stadiumRect.left + emblemRect.width / 2
          // }px ${emblemRect.top - stadiumRect.top + emblemRect.height / 2}px`;
          // stadiumImage.style.transform = `scale(${1 / scaleX}, ${1 / scaleY})`;
          // stadiumImage.offsetHeight; // 레이아웃 트리거
          // stadiumImage.style.transition = "transform 1s ease";
          // stadiumImage.style.transform = "scale(1, 1)";

          homeTeamImage.src = emblem.src;
          homeTeamImage.style.transition = "none"; // 애니메이션 초기화
          homeTeamImage.style.transformOrigin = `${
            emblemRect.left - homeTeamImageRect.left + emblemRect.width / 2
          }px ${
            emblemRect.top - homeTeamImageRect.top + emblemRect.height / 2
          }px`;
          homeTeamImage.style.transform = `scale(${1 / scaleX}, ${1 / scaleY})`;
          homeTeamImage.offsetHeight; // 레이아웃 트리거
          homeTeamImage.style.transition = "transform 1s ease";
          homeTeamImage.style.transform = "scale(1, 1)";

          currentHomeEmblem = emblemElement;
          homeTeamSelected = false; // Reset selection
          homeTeamName.style.color = ""; // Reset color
          emblemElement.remove(); // 지도에서 엠블럼 제거
        } else if (awayTeamSelected) {
          if (currentAwayEmblem) {
            emblemsContainer.appendChild(currentAwayEmblem); // 이전 AWAY 엠블럼 복구
          }

          awayTeamImage.src = emblem.src;
          awayTeamImage.style.transition = "none"; // 애니메이션 초기화
          awayTeamImage.style.transformOrigin = `${
            emblemRect.left - awayTeamImageRect.left + emblemRect.width / 2
          }px ${
            emblemRect.top - awayTeamImageRect.top + emblemRect.height / 2
          }px`;
          awayTeamImage.style.transform = `scale(${1 / scaleX}, ${1 / scaleY})`;
          awayTeamImage.offsetHeight; // 레이아웃 트리거
          awayTeamImage.style.transition = "transform 1s ease";
          awayTeamImage.style.transform = "scale(1, 1)";

          currentAwayEmblem = emblemElement;
          awayTeamSelected = false; // 선택 해제
          awayTeamName.style.color = ""; // 컬러 초기화
          emblemElement.remove(); // 지도에서 엠블럼 제거
        }
      });
      emblemsContainer.appendChild(emblemElement);
    });
  }

  homeTeamName.addEventListener("click", function () {
    homeTeamSelected = true; // HOME 선택
    awayTeamSelected = false; // AWAY 선택 해제
    homeTeamName.style.color = "#bbb"; // 클릭한걸 알 수 있게 색 변경
    awayTeamName.style.color = ""; // AWAY 색상 초기화
  });

  awayTeamName.addEventListener("click", function () {
    awayTeamSelected = true;
    homeTeamSelected = false; // HOME 선택 해제
    awayTeamName.style.color = "#bbb"; // 클릭한걸 알 수 있게 색 변경
    homeTeamName.style.color = ""; // HOME 색상 초기화
  });

  addVictoryButton(homeTeamImage, homeTeamContainer); // HOME 팀 선택 버튼
  addVictoryButton(awayTeamImage, awayTeamContainer); // AWAY 팀 선택 버튼
});
