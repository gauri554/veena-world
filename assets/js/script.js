
  const rajasthanBtn = document.getElementById('rajasthanBtn');
  const similarBtn = document.getElementById('similarBtn');
  const rajasthanPackages = document.getElementById('rajasthanPackages');
  const similarPackages = document.getElementById('similarPackages');

  rajasthanBtn.addEventListener('click', () => {
    rajasthanBtn.classList.add('active');
    similarBtn.classList.remove('active');
    rajasthanPackages.classList.remove('d-none');
    similarPackages.classList.add('d-none');
  });

  similarBtn.addEventListener('click', () => {
    similarBtn.classList.add('active');
    rajasthanBtn.classList.remove('active');
    similarPackages.classList.remove('d-none');
    rajasthanPackages.classList.add('d-none');
  });
