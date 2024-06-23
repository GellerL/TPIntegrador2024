document.addEventListener('DOMContentLoaded', function() {
    var logos = [
        "logos/boca1911.png",
        "logos/boca1915.png",
        "logos/boca1970.png",
        "logos/boca1970.png",
        "logos/boca2007.png",
        "logos/boca2007.png",
        "logos/bocaact.png",
        "logos/bocaact.png",
        "logos/bocaact.png",
        "logos/bocaact.png",
    ];
    var randomIndex = Math.floor(Math.random() * logos.length);
    var randomLogo = logos[randomIndex];
    var logoElement = document.getElementById('logo');
    logoElement.src = randomLogo;
});