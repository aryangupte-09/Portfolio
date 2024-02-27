//Home

document.getElementById('homeLink').addEventListener('click', function(e){
    e.preventDefault();

    // Displaying the content of the "home" section
    const homeSection = document.getElementById('home');
    homeSection.style.display = 'block';

    // Scrolling to the bottom of the page after a short delay to ensure content is displayed first
    setTimeout(function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
});

//About

document.getElementById('aboutLink').addEventListener('click', function(e){
    e.preventDefault();

    // Displaying the content of the "home" section
    const homeSection = document.getElementById('about');
    homeSection.style.display = 'block';

    // Scrolling to the bottom of the page after a short delay to ensure content is displayed first
    setTimeout(function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
});

//Contact

document.getElementById('contactLink').addEventListener('click', function(e){
    e.preventDefault();

    // Displaying the content of the "home" section
    const homeSection = document.getElementById('contact');
    homeSection.style.display = 'block';

    // Scrolling to the bottom of the page after a short delay to ensure content is displayed first
    setTimeout(function() {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
});



//Resume Button

document.getElementById('downloadButton').addEventListener('click',function(){

    var resumePath='Resume 2.odt';
    var link=document.createElement('a');
    link.href=resumePath;
    link.download="Aryan Gupte's Resume";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});