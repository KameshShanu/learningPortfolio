window.onscroll = () => {
  document.getElementById("topBtn").style.display = window.scrollY > 100 ? "block" : "none";
};

document.getElementById("topBtn").onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
