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
    return `<div class="inputControlFormContainer"><form id="homePageForm"><input id="zip" name="zip" type="text" pattern="[0-9]*" placeholder="Enter your zip code"><input type="submit" value="Submit"></form></div>`
}

/*----Service Menu Page Template----*/

function serviceMenuPage() {
    generateServiceMenuPageHeader();
    generateServiceMenuPageMainContent();
}

function generateServiceMenuPageHeader() {
    const serviceMenuBaseHeaderTemplate = serviceMenuHeaderContentTemplate();
    $('.headerWorkMateApp').html(serviceMenuBaseHeaderTemplate);
}

function serviceMenuHeaderContentTemplate() {
    return `<div id="serviceMenuPageHeader"><h2>Services<h2><div>`;
}

function generateServiceMenuPageMainContent() {
    const serviceMenuBaseMainContentTemplate = serviceMenuMainContentTemplate();
    $('.mainWorkMateApp').html(serviceMenuBaseMainContentTemplate);
}

function serviceMenuMainContentTemplate() {
    const serviceTileImagesTemplate = generateServiceTileImagesTemplate();
    const formNavigationControl = serviceMenuNavigationInputControlBox();
    return [serviceTileImagesTemplate, formNavigationControl];

    //return `<h3>Service Menu main content goes here</h3>`;
}

function generateServiceTileImagesTemplate() {
    return `
    <div class="imagteTileParentWrapper">
        <div class="imageTilesWrapper">
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/security_systems.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Security Systems</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/pest-control.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Pest Control</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/landscaping.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Landscaping</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/cleaningServices.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Cleaning Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/HVAC.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">HVAC</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/roofing.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Roofing Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/plumbing.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Plumbing</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/electrical.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Electrical Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/windowInstallation.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Window Installation</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/fencing_installation.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Fencing Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/garage-services.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Garage Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/Siding.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Siding Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/solar-panel-installation.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Solar Panel Installation</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/carpet_cleaning.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Carpet Cleaning</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/shades_blinds.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Shades & Blinds</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/carpet-installation.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Carpet Installation</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/painting_services.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Painting Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/fireplace_services.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Fireplace Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/duct-cleaning.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Air Duct Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/pool-services.jpg" class="serviceMenuTileImage"></div>
                <div class="imageTileNameContainer">Pool Services</div>
            </div>
        </div>
    </div>`;
}

function serviceMenuNavigationInputControlBox() {
    return `<div class="serviceMenuPageNavigationFormContainer"><form id="serviceMenuPageNavigationForm"><input type="submit" value="Go Back to Home Page"/></form></div>`;
}

/********** RENDER FUNCTION(S) **********/

function preloadSliderImages(slider) {
    var slideImagesLength = slider.sliderImages.length;

    for (var i = 0; i < slideImagesLength; i++) {
        $("#sliderContainer>img").attr("src", slider.sliderImages[i].imageSource);
        $("#sliderContainer>img").attr("alt", slider.sliderImages[i].altText);
    }
}

function changeSliderImages(slide) {

    $('#sliderContainer img').attr({
        src: slide.sliderImages[imageChangeCounter].imageSource,
        alt: slide.sliderImages[imageChangeCounter].altText
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
        changeSliderImages(sliderStore);
    }, 3000);
}



/********** EVENT HANDLER FUNCTIONS **********/
function handleHomePageFormSubmission() {
    $('#homePageForm').submit(function(event) {
        alert("form handler is called");
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[1]);
    });
}

function handleServiceMenuPageNavigationFormSubmission() {
    $('#serviceMenuPageNavigationForm').submit(function(event) {
        alert("Going Back to Home page");
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[0]);
    });
}


/********** Routing Function **********/

function provideRoute(checkFlag) {
    if (checkFlag === 'homePage') {
        homePage();
        sliderRender();
        handleHomePageFormSubmission();
    } else if (checkFlag === 'servicesMenuPage') {
        serviceMenuPage();
        handleServiceMenuPageNavigationFormSubmission();
    }
}



/********** Initialization Function **********/

function initializeNewHomeWorkMateApp() {
    provideRoute(routingParamsHolder.currentPage[0]);
}

// When the page loads, call `initializeYogiApp`
$(initializeNewHomeWorkMateApp);