/* Global variables */

var imageChangeCounter = 0;
var receivedImageTileID = '';
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
                <div class="imageContainer"><img src="./images/image-tiles/security_systems.jpg" class="serviceMenuTileImage" id="securitySystemsTile"></div>
                <div class="imageTileNameContainer">Security Systems</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/pest-control.jpg" class="serviceMenuTileImage" id="pestControlTile"></div>
                <div class="imageTileNameContainer">Pest Control</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/landscaping.jpg" class="serviceMenuTileImage" id="landscapingTile"></div>
                <div class="imageTileNameContainer">Landscaping</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/cleaningServices.jpg" class="serviceMenuTileImage"  id="cleaningServicesTile"></div>
                <div class="imageTileNameContainer">Cleaning Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/HVAC.jpg" class="serviceMenuTileImage" id="hvacTile"></div>
                <div class="imageTileNameContainer">HVAC</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/roofing.jpg" class="serviceMenuTileImage" id="roofingServicesTile"></div>
                <div class="imageTileNameContainer">Roofing Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/plumbing.jpg" class="serviceMenuTileImage" id="plumbingTile"></div>
                <div class="imageTileNameContainer">Plumbing</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/electrical.jpg" class="serviceMenuTileImage" id="electricalServicesTile"></div>
                <div class="imageTileNameContainer">Electrical Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/windowInstallation.jpg" class="serviceMenuTileImage" id="windowInstallationTile"></div>
                <div class="imageTileNameContainer">Window Installation</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/fencing_installation.jpg" class="serviceMenuTileImage" id="fencingServicesTile"></div>
                <div class="imageTileNameContainer">Fencing Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/garage-services.jpg" class="serviceMenuTileImage" id="garageServicesTile"></div>
                <div class="imageTileNameContainer">Garage Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/Siding.jpg" class="serviceMenuTileImage" id="sidingServicesTile"></div>
                <div class="imageTileNameContainer">Siding Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/solar-panel-installation.jpg" class="serviceMenuTileImage" id="solarPanelTile"></div>
                <div class="imageTileNameContainer">Solar Panel Installation</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/carpet_cleaning.jpg" class="serviceMenuTileImage" id="carpetCleaningTile"></div>
                <div class="imageTileNameContainer">Carpet Cleaning</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/shades_blinds.jpg" class="serviceMenuTileImage" id="shadesAndBlindsTile"></div>
                <div class="imageTileNameContainer">Shades & Blinds</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/carpet-installation.jpg" class="serviceMenuTileImage" id="carpetInstallationTile"></div>
                <div class="imageTileNameContainer">Carpet Installation</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/painting_services.jpg" class="serviceMenuTileImage" id="paintingServicesTile"></div>
                <div class="imageTileNameContainer">Painting Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/fireplace_services.jpg" class="serviceMenuTileImage" id="fireplaceServicesTile"></div>
                <div class="imageTileNameContainer">Fireplace Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/duct-cleaning.jpg" class="serviceMenuTileImage" id="airDuctServicesTile"></div>
                <div class="imageTileNameContainer">Air Duct Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/pool-services.jpg" class="serviceMenuTileImage" id="poolServicesTile"></div>
                <div class="imageTileNameContainer">Pool Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/handyman_services.jpg" class="serviceMenuTileImage" id="handymanServicesTile"></div>
            <div class="imageTileNameContainer">Handyman</div>
        </div>
        </div>
    </div>`;
}

function serviceMenuNavigationInputControlBox() {
    return `<div class="serviceMenuPageNavigationFormContainer"><form id="serviceMenuPageNavigationForm"><input type="submit" value="Go Back to Home Page"/></form></div>`;
}

/*----Businesses List Page Template----*/

function businessesListPage(imageTileID, businessImagesStore) {
    generateBusinessesListPageHeader(imageTileID, businessImagesStore);
    generateBusinessesListPageMainContent(imageTileID);
}

function generateBusinessesListPageHeader(imageTileID, businessImagesStore) {
    const businessesListPageBaseHeaderTemplate = businessesListPageHeaderContentTemplate(imageTileID, businessImagesStore);
    $('.headerWorkMateApp').html(businessesListPageBaseHeaderTemplate);
}

function businessesListPageHeaderContentTemplate(imageTileID, store) {
    let header = '';
    let imageSrc = '';
    let imageAltText = '';

    switch (imageTileID) {
        case 'securitySystemsTile':
            header = 'Security Systems';
            imageSrc = store.images[0].imageSource;
            imageAltText = store.images[0].altText;
            break;
        case 'pestControlTile':
            header = 'Pest Control';
            imageSrc = store.images[1].imageSource;
            imageAltText = store.images[1].altText;
            break;
        case 'landscapingTile':
            header = 'Landscaping';
            imageSrc = store.images[2].imageSource;
            imageAltText = store.images[2].altText;
            break;
        case 'cleaningServicesTile':
            header = 'Cleaning Services';
            imageSrc = store.images[3].imageSource;
            imageAltText = store.images[3].altText;
            break;
        case 'hvacTile':
            header = 'HVAC';
            imageSrc = store.images[4].imageSource;
            imageAltText = store.images[4].altText;
            break;
        case 'roofingServicesTile':
            header = 'Roofing Services';
            imageSrc = store.images[5].imageSource;
            imageAltText = store.images[5].altText;
            break;
        case 'plumbingTile':
            header = 'Plumbing';
            imageSrc = store.images[6].imageSource;
            imageAltText = store.images[6].altText;
            break;
        case 'electricalServicesTile':
            header = 'Electrical Services';
            imageSrc = store.images[7].imageSource;
            imageAltText = store.images[7].altText;
            break;
        case 'windowInstallationTile':
            header = 'Window Installation';
            imageSrc = store.images[8].imageSource;
            imageAltText = store.images[8].altText;
            break;
        case 'fencingServicesTile':
            header = 'Fencing Services';
            imageSrc = store.images[9].imageSource;
            imageAltText = store.images[9].altText;
            break;
        case 'garageServicesTile':
            header = 'Garage Services';
            imageSrc = store.images[10].imageSource;
            imageAltText = store.images[10].altText;
            break;
        case 'sidingServicesTile':
            header = 'Siding Services';
            imageSrc = store.images[11].imageSource;
            imageAltText = store.images[11].altText;
            break;
        case 'solarPanelTile':
            header = 'Solar Panel Installation';
            imageSrc = store.images[12].imageSource;
            imageAltText = store.images[12].altText;
            break;
        case 'carpetCleaningTile':
            header = 'Carpet Cleaning';
            imageSrc = store.images[13].imageSource;
            imageAltText = store.images[13].altText;
            break;
        case 'shadesAndBlindsTile':
            header = 'Shades & Blinds';
            imageSrc = store.images[14].imageSource;
            imageAltText = store.images[14].altText;
            break;
        case 'carpetInstallationTile':
            header = 'Carpet Installation';
            imageSrc = store.images[15].imageSource;
            imageAltText = store.images[15].altText;
            break;
        case 'paintingServicesTile':
            header = 'Painting Services';
            imageSrc = store.images[16].imageSource;
            imageAltText = store.images[16].altText;
            break;
        case 'fireplaceServicesTile':
            header = 'Fireplace Services';
            imageSrc = store.images[17].imageSource;
            imageAltText = store.images[17].altText;
            break;
        case 'airDuctServicesTile':
            header = 'Air Duct Services';
            imageSrc = store.images[18].imageSource;
            imageAltText = store.images[18].altText;
            break;
        case 'poolServicesTile':
            header = 'Pool Services';
            imageSrc = store.images[19].imageSource;
            imageAltText = store.images[19].altText;
            break;
        case 'handymanServicesTile':
            header = 'Handyman';
            imageSrc = store.images[20].imageSource;
            imageAltText = store.images[20].altText;
            break;
        default:
            console.log('');
    }
    return `
    <div class="businessesListHeaderContainer">
        <div class="businessesListHeader">
            <h2>${header}</h2>
        </div>
        <div class="businessesListHeaderImageHolder">
            <img src="${imageSrc}" alt="${imageAltText}">
        </div>
    </div>`;
}

function generateBusinessesListPageMainContent(imageTileID) {
    const businessesListBaseMainContentTemplate = businessesListMainContentTemplate(imageTileID);
    $('.mainWorkMateApp').html(businessesListBaseMainContentTemplate);
}

function businessesListMainContentTemplate(imageTileID) {
    const businessesListContentTemplate = generatebusinessesListContentTemplate(imageTileID);
    const businessesListFormNavigationControl = businessesListNavigationInputControlBox();
    return [businessesListContentTemplate, businessesListFormNavigationControl];
    //return `<div>Businesses List Main Content ${imageTileID}</div>`;
}

function generatebusinessesListContentTemplate(imageTileID) {
    return `<div>Businesses List Main Content ${imageTileID}</div>`;
}

function businessesListNavigationInputControlBox() {
    return `
    <div id="businessesListNavigationFormContainer">
        <div>
            <form id="businessListNavigationFormReturnServicesMenu">
                <input type="submit" value="Go Back to Services Menu">
            </form>
        </div>
        <div>
            <form id="businessListNavigationFormReturnHomePageMenu">
                <input type="submit" value="Go Back to Home Page">
            </form>
        </div>
    </div>`
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

/* Home Page */
function handleHomePageFormSubmission() {
    $('#homePageForm').submit(function(event) {
        alert("form handler is called");
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[1]);
    });
}

/* Services Menu Page */
function handleServiceMenuPageNavigationFormSubmission() {
    $('#serviceMenuPageNavigationForm').submit(function(event) {
        alert("Going Back to Home page");
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[0]);
    });
}

function handleImageTileClick() {
    // switch(imageID){
    //     case 'securitySystemsTile':
    //         $('#securitySystemsTile').on("click", function(){
    //             alert("security System is clicked");
    //         });
    // }

    $('img').on('click', function() {
        var receivedImageID = $(this).attr('id');
        alert(receivedImageID);
        receivedImageTileID = receivedImageID;
        provideRoute(routingParamsHolder.currentPage[2]);
        // switch(imageID){
        //     case 'securitySystemsTile':
        //         provideRoute(routingParamsHolder.currentPage[2]);
        //         break;

        // }
    });
}

/* Businesses List Page */

function handleBusinessesListPageNavigationFormSubmission() {
    $('#businessListNavigationFormReturnServicesMenu').submit(function(event) {
        alert('Go Back to Services Menu');
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[1]);
    });
    $('#businessListNavigationFormReturnHomePageMenu').submit(function(event) {
        alert('Go Back to Home Page');
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
        handleImageTileClick();
    } else if (checkFlag === 'businessesListPage') {
        businessesListPage(receivedImageTileID, businessesListStore);
        handleBusinessesListPageNavigationFormSubmission();
    }
}



/********** Initialization Function **********/

function initializeNewHomeWorkMateApp() {
    provideRoute(routingParamsHolder.currentPage[0]);
}

// When the page loads, call `initializeYogiApp`
$(initializeNewHomeWorkMateApp);