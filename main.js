/* 로딩 애니메이션 */

// setTimeout(() => $(".loader-wrapper").addClass("show"), 0),
//   setTimeout(() => $(".loader-wrapper").removeClass("show"), 2500);
function loader() {
  $(".loader-wrapper").addClass("loader-hide");
}

// 'load' 웹 페이지가 모든 리소스(이미지, 스크립트 파일, 스타일시트 등)와 함께 완전히 로드되었을 때 발생
window.addEventListener("load", loader);

// gnb animation
const menuOpen = document.querySelector(".gnb .menuOpen");
const menuBox = document.querySelector(".gnb .menuBox");

menuOpen.addEventListener("click", () => {
  menuBox.classList.toggle("on");
});

// GSAP 라이브러리를 이용한 스크롤 트리거 애니메이션
gsap.registerPlugin(ScrollTrigger);

// 비주얼 섹션 애니메이션
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".visual",
      start: "100% 100%",
      end: "100% 0%",
      scrub: 1,
      /*
        scrub은 scrollTrigger의 이벤트가 스크롤이 사용될때만 재생되도록 만들어 주는 속성(안적으면 트리거시점 나오면 스크롤 안해도 계속 애니 진행됨)
        scrub은 true나 숫자로 값을 써 줄 수 있는데 true 같은 경우는 스코롤하면 애니 바로 진행되고 바로 멈추며 숫자는 그 시점을 따라 잡는데 n초가 걸려 애니가 더 부드러움. 숫자가 클 수록 애니거 더 부드러움 1-3
        markers:true
        */
    },
  })
  .to(
    ".logoWrap #j",
    {
      x: -150,
      y: 250,
      rotate: 20,
      ease: "none",
      duration: 5,
    },
    0
  )
  .to(".logoWrap #y", {
    x: -30,
    y: 150,
    rotate: -10,
    ease: "none",
    duration: 5,
  })
  .to(
    ".logoWrap #o",
    {
      x: 0,
      y: 400,
      rotate: -10,
      ease: "none",
      duration: 5,
    },
    0
  )
  .to(".logoWrap #u", {
    x: 50,
    y: 300,
    rotate: 10,
    ease: "none",
    duration: 5,
  })
  .to(".logoWrap #n", {
    x: 100,
    y: 100,
    rotate: -10,
    ease: "none",
    duration: 5,
  })
  .to(".logoWrap #g", {
    x: 50,
    y: 450,
    rotate: 20,
    ease: "none",
    duration: 5,
  });

// 02. 공통적 .mainTextBox .title i animation
gsap.utils.toArray(".mainTextBox .title i").forEach((selector) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: selector,
        start: "100% 100%",
        end: "100% 100%",
        scrub: 1,
        //markers: true
      },
    })
    .fromTo(
      selector,
      { overflow: "hidden", y: 150 },
      { y: 0, ease: "none", duration: 5 },
      0
    );
});

// 3. 공통적 .subText p animation
gsap.utils.toArray(".subText p").forEach((selector) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: selector,
        start: "100% 100%",
        end: "100% 100%",
        scrub: 1,
        // markers: true,
      },
    })
    .from(
      selector,
      {
        y: 100,
        opacity: 0,
      },
      { opacity: 1, y: 0, ease: "none", duration: 5 }
    );
});

// 4. con1 textAni 텍스트 체인지 텍스트 애니메이션 반복
let textAniList = document.querySelectorAll(".con1 .textAni li");
let textAni = gsap.timeline({ repeat: -1 });

for (let i = 0; i < textAniList.length; i++) {
  let text = textAniList[i];
  textAni.to(text, 0.8, {
    opacity: 1,
    repeat: 1,
    delay: 0,
    x: 0,
    yoyo: true,
    ease: "power4.out",
  });
}
textAni.play();

// con4 리스트 박스 애니메이션
gsap.utils.toArray(".cons .listBox .box").forEach((selector) => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: selector,
        start: "0% 20%",
        end: "0% 0%",
        scrub: 1,
        // markers: true,
      },
    })
    .to(selector, {
      transform: "rotateX(-10deg)",
      scale: 0.8,
      transformOrigin: "top",
      filter: "brightness(0.3)",
    });
});

// 5. con3 listBox
gsap.utils.toArray(".con3 .listBox li").forEach((selector, idx) => {
  ScrollTrigger.create({
    // 대문자 S 주의
    trigger: selector,
    start: "30% 50%",
    onEnter: () => {
      gsap.set(selector, {
        rotationX: "-65deg",
        z: "-500px",
        opacity: 0,
      }),
        gsap.to(selector, {
          rotationX: 0,
          z: 0,
          opacity: 1,
          delay: (idx % 3) * 0.05,
        });
    },
  });
});

// 7. con5 listBox li 호버시 이미지 보이는 애니
const listBox = document.querySelectorAll("con5 .listBox li");
const imgBox = document.querySelector(".con5 .imgBox");
const img = document.querySelector(".con5 .imgBox img");

for (let i = 0; i < listBox.length; i++) {
  listBox[i].addEventListener("mouseover", () => {
    img.src = `./images/img${i}.jpg`;
    gsap.set(imgBox, { scale: 0, opacity: 0, duration: 0.3 }),
      gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.3 });
  });
  listBox[i].addEventListener("mousemove", (e) => {
    let imgBoxX = e.pageX + 20;
    let imgBoxY = e.pageY - 20;
    imgBox.style.left = imgBoxX + "px";
    imgBox.style.top = imgBoxY + "px";
  });
  listBox[i].addEventListener("mouseout", () => {
    gsap.to(imgBox, { scale: 0, opacity: 0, duration: 0.3 });
  });
}

gsap.timeline({
  scrollTrigger: {
    trigger: ".con5",
    start: "0% 100%",
    end: "100% 0%",
    toggleClass: { targets: ".wrap", className: "on" },
  },
});

// footer
gsap
  .timeline({
    scrollTrigger: {
      trigger: "footer",
      start: "0% 100%",
      end: "100% 0%",
      scrub: 1,
      markers: true,
    },
  })
  .to(".logoWrap", { top: "20%", ease: "none", duration: 5 });
