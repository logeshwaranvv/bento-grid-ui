const divs = document.querySelectorAll('.inside-div');

const observer = new IntersectionObserver( entries => {
  entries.forEach(entry => {
    if ( entry.isIntersecting ) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

divs.forEach( div => {
  observer.observe(div);
})