const VuongVietAnh_List = [
  "https://vanhcutii.store/2.mp3",
  "https://vanhcutii.store/1.mp3",
  "https://vanhcutii.store/3.mp3",
    "https://vanhcutii.store/4.mp3",
    "https://vanhcutii.store/5.mp3",
    "https://vanhcutii.store/6.mp3",
      "https://vanhcutii.store/7.mp3",
      "https://vanhcutii.store/8.mp3",
      "https://vanhcutii.store/9.mp3",
      "https://vanhcutii.store/10.mp3",
  ];
  //Random music
  let index = Math.floor(Math.random() * VuongVietAnh_List.length);
  const audio = new Audio(VuongVietAnh_List[index]);
  function ThanhDieuAudio() {audio.play();}
  document.addEventListener("click", ThanhDieuAudio);
  audio.addEventListener("ended", function() {
    index = (index + 1) % VuongVietAnh_List.length;
    audio.src = VuongVietAnh_List[index];
    audio.play();
  });