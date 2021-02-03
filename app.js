/* Global variables */

var imageChangeCounter = 0;
/********** TEMPLATE GENERATION FUNCTIONS **********/

/*----Home Page Template----*/

function homePage() {
    generateHomePageHeader();
    generateHomePageMainContent();
}

/* home page header section */
function generateHomePageHeader() {
    const homePageBaseHeaderTemplate = headerContentTemplate();
    $('.headerWorkMateApp').html(homePageBaseHeaderTemplate);
}

function headerContentTemplate() {
    return `<h1>New Home Workmate</h1><h2>Are you a new home buyer and want to find out nearby home services available at your fingertips? No worry! You are at the right place!!!</h2>`;
}

/* home page main section */
function generateHomePageMainContent() {
    const homePageBaseMainContentTemplate = homePageMainContentTemplate();
    $('.mainWorkMateApp').html(homePageBaseMainContentTemplate);
}

function homePageMainContentTemplate() {
    const imageSliderTemplate = generateSliderTemplate();
    const formInputControl = searchInputControlBox();
    return [imageSliderTemplate, formInputControl];
}

function generateSliderTemplate() {
    return `<div id="sliderContainer"><img></div>`;
}

function searchInputControlBox() {
    return `<div class="inputControlFormContainer"><form><input id="zip" name="zip" type="text" pattern="[0-9]*" placeholder="Enter your zip code"><input type="button" value="Submit"></form></div>`
}



/********** RENDER FUNCTION(S) **********/

function preloadSliderImages(slider) {
    var slideImagesLength = slider.sliderImages.length;

    for (var i = 0; i < slideImagesLength; i++) {
        $("#sliderContainer>img").attr("src", slider.sliderImages[i].imageSource);
        $("#sliderContainer>img").attr("alt", slider.sliderImages[i].altText);
    }
}

function changeSliderImages() {

    $('#sliderContainer img').attr({
        src: sliderStore.sliderImages[imageChangeCounter].imageSource,
        alt: sliderStore.sliderImages[imageChangeCounter].altText
    });

    if (imageChangeCounter === 23) {
        imageChangeCounter = 0;
    } else {
        ++imageChangeCounter;
    }
}

function sliderRender() {
    preloadSliderImages(sliderStore);
    setInterval(function() {
        changeSliderImages();
    }, 3000);
}



/********** EVENT HANDLER FUNCTIONS **********/



/********** Routing Function **********/

function provideRoute(checkFlag) {
    if (checkFlag === 'homePage') {
        homePage();
        sliderRender();
    }
}



/********** Initialization Function **********/

function initializeNewHomeWorkMateApp() {
    provideRoute(routingParamsHolder.currentPage[0]);
}

// When the page loads, call `initializeYogiApp`
$(initializeNewHomeWorkMateApp);