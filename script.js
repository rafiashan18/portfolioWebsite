function showDetails(element) {
    var description = element.querySelector('.portfolio-description');
    var link = element.querySelector('.portfolio-link');
    description.style.display = 'block';
    link.style.display = 'block';
}

function hideDetails(element) {
    var description = element.querySelector('.portfolio-description');
    var link = element.querySelector('.portfolio-link');
    description.style.display = 'none';
    link.style.display = 'none';
}




//   const portfolioDetails = document.getElementById('portfolio-details');
//   const screenWidth = window.innerWidth;

//   if (screenWidth >= 768) {
//     portfolioDetails.addEventListener('mouseover', showDetails);
//     portfolioDetails.addEventListener('mouseout', hideDetails);
//   }