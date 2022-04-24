const sing = [
  {
    singer: "김세정",
    music: "사랑인가봐",
  },
  {
    singer: "멜로망스",
    music: "사랑인가봐",
  },
  {
    singer: "폴킴",
    music: "비",
  },
  {
    singer: "버블시스터즈",
    music: "사랑먼지",
  },
  {
    singer: "태연",
    music: "숨겨진 세상",
  },
  {
    singer: "필",
    music: "취중진담",
  },
];

const singer = document.querySelector("#sing span:first-child");
const music = document.querySelector("#sing span:last-child");

const todaysMusic = sing[Math.floor(Math.random() * sing.length)];

singer.innerText = todaysMusic.singer;
music.innerText = todaysMusic.music;
