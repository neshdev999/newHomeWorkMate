/* Global variables */

var imageChangeCounter = 0;
var receivedImageTileID = '';
var postCode = 28278;
/* Setup API Headers */
var myHeaders = new Headers();
myHeaders.append("Cookie", "JSESSIONID=567F9685339DB8F1A0D7CEB876F61452");
var intervalCycleHolder;
var lat = 35.121676;
var lng = -81.007845;
/* Business coordiates */
var businessesCoordiatesArray = [];
var receivedDistance = 0;
let globalArray = [];
let currentDetailedBusinessInfoPageHeader = "Business Name";
let defaultBusinessInfoPageStore = {
    pages: [{
        currentPageSlug: '/us/south-carolina/total-security-356139046',
        currentPageCoordinates: [-80.935592, 34.903086]
    }]
};

let selectedBusinessInfoPageStore = {
    names: [],
    relatedCoordiates: [],
    slugs: [],
    properties: []
};

var zipCodeErrorStatus = false;


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
    return `
    <div>
        <div class="mainHeaderImageIconContainer">
            <div class="mainHeaderImageIconItem">
                <img src="./images/icons/android-chrome-192x192.png" alt="home with repair tools">
            </div>
        </div>
        <div class="mainHeaderContainer">
            <div class="topHeaderContentContainer">
            <h1 class="topHeaderFirstContent">New Home Workmate</h1>            
            <h2 class="topHeaderSecondContent">Discover a nearby home upgrade/repair specialist for your home improvements</h2>
            </div>
        <div>
    </div>`;
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
    return `<div id="sliderParentContainer"><div id="sliderContainer"><img></div></div>`;
}

function searchInputControlBox() {
    return `
    <div class="randomBorderGenSector"></div>
    <div class="mainHomePageFormContainer">
        <div class="mainHomeFormHeading">Give us a few details and we’ll match you with the right pro.</div>
        <div class="inputControlFormContainer">
            <form id="homePageForm">
                <input id="zip" name="zip" type="text" pattern="[0-9]*" maxlength="5" placeholder=" ZIP Code">
                <input type="submit" value="Submit" id="zipSubmitButton">
                <div id="serverErrorReportContainer">
                </div>
            </form>
        </div>

    </div>
    <div class="randomBorderGenSecondSector"></div>`;
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
    return `
    <div class="servicesTopContainer">
        <div class="commonMenuNavigationContainer">
            <div class="commonMenuNavigationItems commonMenuHeaderIcon"> 
                <img src="./images/icons/menu/menu_new.png" id="commonMenuNavigationTriggerButton" alt="menu button with 4 dots with blue color" tabindex="1" aria-pressed="false" alt="menu icon with black dots">
                <div class="commonMenuHolder hidden" id="commonMenuItemsHolder">
                    <div class="commonMenuContainer">
                        <div class="commonMenuItem serviceHomeIconContainer"><img src="./images/icons/menu/modified/homeIcon.gif" id="serviceHomeImageButton" tabindex="2" aria-pressed="false" alt="menu home image with animation"></div>
                    </div>
                </div>
            </div>
        </div>
        <div id="serviceMenuPageHeader">
            <h2>Services<h2>
        <div>
    </div>`;
}

function generateServiceMenuPageMainContent() {
    const serviceMenuBaseMainContentTemplate = serviceMenuMainContentTemplate();
    $('.mainWorkMateApp').html(serviceMenuBaseMainContentTemplate);
}

function serviceMenuMainContentTemplate() {
    const serviceTileImagesTemplate = generateServiceTileImagesTemplate();
    const formNavigationControl = serviceMenuNavigationInputControlBox();
    return [serviceTileImagesTemplate, formNavigationControl];
}

function generateServiceTileImagesTemplate() {
    return `
    <div class="imagteTileParentWrapper">
        <div class="imageTilesWrapper">
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/security_systems.jpg" class="serviceMenuTileImage" id="securitySystemsTile" alt="man clicking on security keypad" tabindex="3" aria-pressed="false"></div>
                <div class="imageTileNameContainer">Security Systems</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/pest-control.jpg" class="serviceMenuTileImage" id="pestControlTile" tabindex="4" aria-pressed="false" alt="man sprinkling pest control"></div>
                <div class="imageTileNameContainer">Pest Control</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/landscaping.jpg" class="serviceMenuTileImage" id="landscapingTile" tabindex="5" aria-pressed="false" alt="men laying out grass"></div>
                <div class="imageTileNameContainer">Landscaping</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/cleaningServices.jpg" class="serviceMenuTileImage"  id="cleaningServicesTile" tabindex="6" aria-pressed="false" alt="woman cleaning water hose"></div>
                <div class="imageTileNameContainer">Cleaning Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/HVAC.jpg" class="serviceMenuTileImage" id="hvacTile" aria-pressed="false" tabindex="7" alt="hvac technician doing routine checkup"></div>
                <div class="imageTileNameContainer">HVAC</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/roofing.jpg" class="serviceMenuTileImage" id="roofingServicesTile" aria-pressed="false" tabindex="8" alt="man arranging roof panels"></div>
                <div class="imageTileNameContainer">Roofing Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/plumbing.jpg" class="serviceMenuTileImage" id="plumbingTile" aria-pressed="false" tabindex="9" alt="man fixing plumbing line under sink"></div>
                <div class="imageTileNameContainer">Plumbing</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/electrical.jpg" class="serviceMenuTileImage" id="electricalServicesTile" aria-pressed="false" tabindex="10" alt="electricians fixing lights"></div>
                <div class="imageTileNameContainer">Electrical Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/windowInstallation.jpg" class="serviceMenuTileImage" id="windowInstallationTile" aria-pressed="false" tabindex="11" alt="man doing window installation"></div>
                <div class="imageTileNameContainer">Window Installation</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/fencing_installation.jpg" class="serviceMenuTileImage" id="fencingServicesTile" aria-pressed="false" tabindex="12" alt="two men installing fences"></div>
                <div class="imageTileNameContainer">Fencing Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/garage-services.jpg" class="serviceMenuTileImage" id="garageServicesTile" aria-pressed="false" tabindex="13" alt="two men repairing garage door"></div>
                <div class="imageTileNameContainer">Garage Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/Siding.jpg" class="serviceMenuTileImage" id="sidingServicesTile" aria-pressed="false" tabindex="14" alt="man installing siding around house"></div>
                <div class="imageTileNameContainer">Siding Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/solar-panel-installation.jpg" class="serviceMenuTileImage" id="solarPanelTile" aria-pressed="false" tabindex="15" alt="man installing solar panel"></div>
                <div class="imageTileNameContainer">Solar Panel Installation</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/carpet_cleaning.jpg" class="serviceMenuTileImage" id="carpetCleaningTile" aria-pressed="false" tabindex="16" alt="two men carpet cleaning"></div>
                <div class="imageTileNameContainer">Carpet Cleaning</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/shades_blinds.jpg" class="serviceMenuTileImage" id="shadesAndBlindsTile" aria-pressed="false" tabindex="17" alt="man installing shade"></div>
                <div class="imageTileNameContainer">Shades & Blinds</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/carpet-installation.jpg" class="serviceMenuTileImage" id="carpetInstallationTile" aria-pressed="false" tabindex="18" alt="man installing carpet"></div>
                <div class="imageTileNameContainer">Carpet Installation</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/painting_services.jpg" class="serviceMenuTileImage" id="paintingServicesTile" aria-pressed="false" tabindex="19" alt="man painting wall with yellow paint"></div>
                <div class="imageTileNameContainer">Painting Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/fireplace_services.jpg" class="serviceMenuTileImage" id="fireplaceServicesTile" aria-pressed="false" tabindex="20" alt="man repairing fireplace"></div>
                <div class="imageTileNameContainer">Fireplace Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/duct-cleaning.jpg" class="serviceMenuTileImage" id="airDuctServicesTile" aria-pressed="false" tabindex="21" alt="man cleaning air duct"></div>
                <div class="imageTileNameContainer">Air Duct Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/pool-services.jpg" class="serviceMenuTileImage" id="poolServicesTile" aria-pressed="false" tabindex="22" alt="man cleaning pool"></div>
                <div class="imageTileNameContainer">Pool Services</div>
            </div>
            <div class="singleImageTileNameContainer">
                <div class="imageContainer"><img src="./images/image-tiles/handyman_services.jpg" class="serviceMenuTileImage" id="handymanServicesTile" aria-pressed="false" tabindex="23" alt="handyman with all different types of tools"></div>
            <div class="imageTileNameContainer">Handyman</div>
        </div>
        </div>
    </div>`;
}

function serviceMenuNavigationInputControlBox() {
    return `<div class="serviceMenuPageNavigationFormContainer"><form id="serviceMenuPageNavigationForm"><input type="submit" value="" class="serviceMenuPageButton" id="serviceMenuNavigationSubmitButton"/></form></div>`;
}

/*----Businesses List Page Template----*/

function businessesListPage(imageTileID, businessImagesStore) {
    generateBusinessesListPageHeader(imageTileID, businessImagesStore);
    generateBusinessesListPageMainContent();
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
            header = 'Handyman';
            imageSrc = store.images[20].imageSource;
            imageAltText = store.images[20].altText;
    }
    return `
    <div class="businessesListStyleContainer">
        <div class="commonMenuNavigationContainer">
            <div class="commonMenuNavigationItems commonMenuHeaderIcon" > 
                <img src="./images/icons/menu/menu_new.png" id="commonMenuNavigationTriggerButton" alt="menu button with 4 dots with blue color" tabindex="1" aria-pressed="false">
                <div class="commonMenuHolder hidden" id="commonMenuItemsHolder">
                    <div class="commonMenuContainer">
                        <div class="commonMenuItem serviceHomeIconContainer"><img src="./images/icons/menu/modified/homeIcon.gif" id="businessesListHomeImageButton" tabindex="2" aria-pressed="false" alt="home page animated icon"></div>
                        <div class="commonMenuItem serviceServicesMenuIconContainer"><img src="./images/icons/menu/modified/servicesIcon.gif" id="businessesListServicesImageButton" tabindex="3" aria-pressed="false" alt="services animated icon"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="businessesListHeaderContainer">
            <div class="businessesListHeader">
                <h2>${header}</h2>
            </div>
            <div class="businessesListHeaderImageHolder">
                <div class="businessesListHeaderImageItem">
                    <img src="${imageSrc}" alt="${imageAltText}">
                </div>
            </div>
        </div>
    </div>
    <div class="gaper"></div>`;
}

function generateBusinessesListPageMainContent() {
    const businessesListBaseMainContentTemplate = businessesListMainContentTemplate();
    $('.mainWorkMateApp').html(businessesListBaseMainContentTemplate);
}

function businessesListMainContentTemplate() {
    const businessesListContentTemplate = generatebusinessesListContentTemplate();
    const businessesListFormNavigationControl = businessesListNavigationInputControlBox();
    return [businessesListContentTemplate, businessesListFormNavigationControl];
}

function generatebusinessesListContentTemplate() {
    return `
    <div id="loadingIndicatorContainer"><div id="loading"></div></div>
    <div id="businessesListPanelContainer" class="hidden">
        <div id="serverErrorReportServicePageContainer">
        </div>
    </div>`
}

function businessesListNavigationInputControlBox() {
    return `
    <div class="gaper"></div>
    <div>
        <div id="distanceErrorContainer"></div>
        <div id="businessesListNavigationFormContainer">
            <div class="businessListNavigationFormItem individualItemOne">
                <form id="businessListNavigationFormReturnServicesMenu">
                    <input type="submit" value="" class="businessListNavigationButton" id="businessesListNavigationServSubmitButton">
                </form>
            </div>
            <div class="businessListNavigationFormItem individualItemTwo">
                <form id="businessListNavigationFormReturnHomePageMenu">
                    <input type="submit" value="" class="businessListNavigationButton" id="businessesListNavigationHomeSubmitButton">
                </form>
            </div>
        </div>
    </div>`
}

/* Detailed Business Info Page */

function detailedBusinessInfoPage() {
    generateDetailedBusinessInfoPageHeader();
    generateDetailedBusinessInfoPageMapContent();
    generateDetailedBusinessInfoPageMainContent();
}

function generateDetailedBusinessInfoPageHeader() {
    const detailedBusinessInfoPageBaseHeaderTemplate = detailedBusinessInfoPageHeaderContentTemplate();
    $('.headerWorkMateApp').html(detailedBusinessInfoPageBaseHeaderTemplate);
}

function generateDetailedBusinessInfoPageMapContent() {
    const detailedBusinessInfoPageBaseMapTemplate = detailedBusinessInfoPageMapContentTemplate();
    $('.headerWorkMateApp').append(detailedBusinessInfoPageBaseMapTemplate);
}

function detailedBusinessInfoPageMapContentTemplate() {
    return `
    <div class="gaper"></div>
    <div class="mapStylesContainer">
    <div class="mapContainer">
        <div id="map" style="width: 100%; height: 530px;"></div>
    </div>
    </div>
    <div class="gaper"></div>`
}

function detailedBusinessInfoPageHeaderContentTemplate() {
    return `
    <div class="detailedBusinessInfoPageListStyleContainer">
        <div class="commonMenuNavigationContainer">
            <div class="commonMenuNavigationItems commonMenuHeaderIcon" > 
                <img src="./images/icons/menu/menu_new.png" id="commonMenuNavigationTriggerButton" tabindex="1" aria-pressed="false" alt="menu button with black dots">
                <div class="commonMenuHolder hidden" id="commonMenuItemsHolder">
                    <div class="commonMenuContainer">
                        <div class="commonMenuItem serviceHomeIconContainer"><img src="./images/icons/menu/modified/homeIcon.gif" id="detailedBusinessInfoHomeImageButton" tabindex="2" aria-pressed="false" alt="home page menu icon"></div>
                        <div class="commonMenuItem serviceServicesMenuIconContainer"><img src="./images/icons/menu/modified/detailedBusinessInfoIcon.gif" id="detailedBusinessInfoBusinessesListImageButton" tabindex="3" aria-pressed="false" alt="businesses list page menu icon"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="headerContainer">
            <div class="headerItem">${currentDetailedBusinessInfoPageHeader}</div>
        </div>
    </div>`;
}

function generateDetailedBusinessInfoPageMainContent() {
    const detailedBusinessInfoPageBaseMainTemplate = detailedBusinessInfoPageMainContentTemplate(selectedBusinessInfoPageStore);
    $('.mainWorkMateApp').html(detailedBusinessInfoPageBaseMainTemplate);
}

function detailedBusinessInfoPageMainContentTemplate(selectedBusinessInfoPageStore) {
    const detailedBusinessInfoPageContentTemplate = generateBusinessInfoPageContentTemplate(selectedBusinessInfoPageStore);
    const detailedBusinessInfoPageFormNavigationControl = businessInfoPageNavigationInputControlBox();
    return [detailedBusinessInfoPageContentTemplate, detailedBusinessInfoPageFormNavigationControl];
}

function generateBusinessInfoPageContentTemplate(selectedBusinessInfoPageStore) {
    let passLat, passLng, holderId, passSlug, srcAddress, srcDetailsAddress, passStreet, passCity, passStateCode, passPostalCode, passCountryCode;
    if (selectedBusinessInfoPageStore.names.length !== 0) {
        for (let i = 0; i <= selectedBusinessInfoPageStore.names.length; i++) {
            if (selectedBusinessInfoPageStore.names[i] === currentDetailedBusinessInfoPageHeader) {
                holderId = i;
                passLat = selectedBusinessInfoPageStore.relatedCoordiates[i][1];
                passLng = selectedBusinessInfoPageStore.relatedCoordiates[i][0];
                passSlug = selectedBusinessInfoPageStore.slugs[i];
                passStreet = selectedBusinessInfoPageStore.properties[i].street;
                passCity = selectedBusinessInfoPageStore.properties[i].city;
                passStateCode = selectedBusinessInfoPageStore.properties[i].stateCode;
                passPostalCode = selectedBusinessInfoPageStore.properties[i].postalCode;
                passCountryCode = selectedBusinessInfoPageStore.properties[i].countryCode;
            }
        }
    }

    srcAddress = "https://www.mapquest.com/embed" + passSlug + "?center=" + passLat + "," + passLng + "&zoom=15&maptype=map";
    srcDetailsAddress = "https://www.mapquest.com" + passSlug;
    constructDestinationAddress = passStreet + ", " + passCity + ", " + passStateCode + " " + passPostalCode;
    generateMapQuestMapTile(constructDestinationAddress, postCode);

    return `
    <div class="detailedInfoAddressStyles">
    <div class="addressContainer">
        <div class="addressHeader">ADDRESS</div>
        <div class="addressUlListContainer">
            <ul class="addressUlList">
                <li>${passStreet}</li>
                <li>${passCity}&nbsp;${passStateCode}&nbsp;${passPostalCode}</li>       
                <li>${passCountryCode}</li>
            </ul>
        </div>
    </div>
    <div class="morInfoContainer">
        <div class="moreInfoItem"><button type="button" onclick="window.open('${srcDetailsAddress}','_blank')" class="moreDetailsLinkButton moreDetailsStyled">More Info</button></div>
    </div>
    </div>
    <div class="gaper"></div>`;
}

function businessInfoPageNavigationInputControlBox() {

    return `
    <div>
        <div id="businessInfoPageNavigationFormContainer">
            <div class="businessInfoPageNavigationFormItem individualItemOne">
                <form id="businessInfoPageNavigationFormReturnListsMenu">
                    <input type="submit" value="" class="businessInfoPageNavigationButton" id="detailedBusinessInfoNavigationBussSubmitButton">
                </form>
            </div>
            <div class="businessInfoPageNavigationFormItem individualItemTwo">
                <form id="businessInfoPageNavigationFormReturnHomePageMenu">
                    <input type="submit" value="" class="businessInfoPageNavigationButton" id="detailedBusinessInfoNavigationHomeSubmitButton">
                </form>
            </div>
        </div>
    </div>`;
}

/* Footer Template */

function footerGen() {
    generatefooter();
    footerContent();
}

function generatefooter() {
    const footerBaseContentGenerator = footerContentGenTemplate();
    $('.footerWorkMateApp').html(footerBaseContentGenerator);
}

function footerContentGenTemplate() {
    return `
    <div>
        <div class="footerContainer">Copyright &copy; Workmate Team </div>
        <div class="footerContainer" id="copyRightYear"></div>
    </div>`;
}

/*********** Map Generation Functions ***********/

function generateMapQuestMapTile(destAddress, pCode) {
    L.mapquest.key = 'GZDv4LmGEWEgYHHXQ91rn8y3QDnDqS2A';
    var map = L.mapquest.map('map', {
        center: [lat, lng],
        layers: L.mapquest.tileLayer('map'),
        zoom: 13
    });
    L.mapquest.directions().route({
        start: pCode,
        end: destAddress
    });
}


/********** RENDER FUNCTION(S) **********/

/* Home Page */

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

    if (imageChangeCounter === 21) {
        imageChangeCounter = 0;
    } else {
        imageChangeCounter++;
    }
}

function sliderRender() {
    preloadSliderImages(sliderStore);
    intervalCycleHolder = setInterval(function() {
        changeSliderImages(sliderStore);
    }, 3000);
}

/* MAPQUEST API CALL */

function getLatLng(postCode) {
    let url = "https://www.mapquestapi.com/geocoding/v1/address?key=GZDv4LmGEWEgYHHXQ91rn8y3QDnDqS2A&country=US&postalCode=" + postCode;
    fetch(url, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(
            responseJson => {
                let latLngObject = responseJson.results['0'].locations['0'].latLng;
                receiveLatLngObject(latLngObject);
            })
        .catch(err => {
            zipCodeErrorStatus = true;
            $('#serverErrorReportContainer').text(`Server has responded with error 😪  : ${err.message} 😫`);
        })
}

function receiveLatLngObject(latLng) {
    let receivedLat = latLng["lat"];
    let receivedLng = latLng["lng"];
    lat = receivedLat;
    lng = receivedLng;
}

/* Gather relevant category for API CALL */

function findMapQuestBusinessCategory(imageID) {
    let mapQuestBusinessCategory = '';

    switch (imageID) {
        case 'securitySystemsTile':
            mapQuestBusinessCategory = '874813';
            break;
        case 'pestControlTile':
            mapQuestBusinessCategory = '734201';
            break;
        case 'landscapingTile':
            mapQuestBusinessCategory = '078204';
            break;
        case 'cleaningServicesTile':
            mapQuestBusinessCategory = '734922';
            break;
        case 'hvacTile':
            mapQuestBusinessCategory = '171147';
            break;
        case 'roofingServicesTile':
            mapQuestBusinessCategory = '176109';
            break;
        case 'plumbingTile':
            mapQuestBusinessCategory = '171105';
            break;
        case 'electricalServicesTile':
            mapQuestBusinessCategory = '173101';
            break;
        case 'windowInstallationTile':
            mapQuestBusinessCategory = '175102';
            break;
        case 'fencingServicesTile':
            mapQuestBusinessCategory = '179938';
            break;
        case 'garageServicesTile':
            mapQuestBusinessCategory = '175107';
            break;
        case 'sidingServicesTile':
            mapQuestBusinessCategory = '176111';
            break;
        case 'solarPanelTile':
            mapQuestBusinessCategory = '769932';
            break;
        case 'carpetCleaningTile':
            mapQuestBusinessCategory = '721704';
            break;
        case 'shadesAndBlindsTile':
            mapQuestBusinessCategory = '259198';
            break;
        case 'carpetInstallationTile':
            mapQuestBusinessCategory = '175206';
            break;
        case 'paintingServicesTile':
            mapQuestBusinessCategory = '172101';
            break;
        case 'fireplaceServicesTile':
            mapQuestBusinessCategory = '179939';
            break;
        case 'airDuctServicesTile':
            // mapQuestBusinessCategory = '73490202';
            mapQuestBusinessCategory = '171102';
            break;
        case 'poolServicesTile':
            mapQuestBusinessCategory = '179985';
            break;
        case 'handymanServicesTile':
            mapQuestBusinessCategory = '152115';
            break;
        default:
            mapQuestBusinessCategory = '078204';
    }

    return mapQuestBusinessCategory;

}

/* Convert meters to miles */
function getMiles(valInMeters) {
    return Math.round(valInMeters * 0.000621371);
}

function generateBusinessesListPanel(responseJson, businessesDistanceArray) {
    let businessesNamesArray = [];
    let verifyLength = responseJson.results.length;
    let tabIndexValue = 4;

    $('#businessesListPanelContainer').append(`
    <div class="businessItemContainer"> 
        <div id="businessHeadingNameContainer">Business</div><div id="businessHeadingDistanceContainer">Distance</div>
    </div>`);

    if (verifyLength === 0) {
        $('#businessesListPanelContainer').append(`
            <div class="businessItemContainer">         
                <div>
                    <p>No relevant business available in this area.😫😫😫</p>                
                </div>
            </div>`);
    } else {
        for (let i = 0; i < responseJson.results.length; i++) {
            businessesNamesArray.push(responseJson.results[i].name);
        }

        for (let j = 0; j < responseJson.results.length; j++) {
            $('#businessesListPanelContainer').append(`
                <div class="businessItemContainer" >         
                    <div class="businessNameContainer" tabindex="${tabIndexValue}" aria-pressed="false">${businessesNamesArray[j]}</div>
                    <div class="businessDistanceContainer">${businessesDistanceArray[j]} miles</div>         
                </div>`);
            tabIndexValue++;
        }
    }

    $('#loadingIndicatorContainer').css("display", "none");
    $('#businessesListPanelContainer').removeClass("hidden");
}


/* MapQuest Business List API CALL */

async function getBusinessesListFromMapQuestApi(lat, lng, cat) {

    let givenRadiusDistance = '32186';

    let mapQuestBusinessListURL = "https://www.mapquestapi.com/search/v4/place?location=" + lng + "," + lat + "&category=sic:" + cat + "&key=GZDv4LmGEWEgYHHXQ91rn8y3QDnDqS2A&sort=distance&circle=" + lng + "," + lat + "," + givenRadiusDistance;

    fetch(mapQuestBusinessListURL, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(
            async(responseJson) => {
                gatherInfoForDetailedBusinessInfoPage(responseJson);
                createCurrentBusinessLocationLatLng(responseJson);
                let outputArray = await processBusinessesLocationLatLng();
                generateBusinessesListPanel(responseJson, outputArray);
            })
        .catch(err => {
            $('#serverErrorReportServicePageContainer').text(`Server has responded with error 😪  : ${err.message} 😫`);
            $('#serverErrorReportServicePageContainer').css('display', 'block');
        })
}

function createCurrentBusinessLocationLatLng(responseJson) {
    var businessesCoordiatesCurrentArray = [];

    for (let i = 0; i < responseJson.results.length; i++) {
        businessesCoordiatesCurrentArray.push(responseJson.results[i].place.geometry.coordinates);
    }

    businessesCoordiatesArray = JSON.parse(JSON.stringify(businessesCoordiatesCurrentArray));
}


/* MapQuest Distance Finding route API Call */

async function mapQuestDelay(lat, lng, businessLocationLat, businessLocationLng) {

    let mapQuestBusinessListURL = "https://www.mapquestapi.com/directions/v2/route?key=GZDv4LmGEWEgYHHXQ91rn8y3QDnDqS2A&outFormat=json&unit=m&from=" + lat + "," + lng + "&to=" + businessLocationLat + "," + businessLocationLng;

    return fetch(mapQuestBusinessListURL, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(
            responseJson => {
                let receivedDistancespl = responseJson.route.distance;
                return receivedDistancespl;
            })
        .catch(err => {
            $('#distanceErrorContainer').text(`Server has responded with error 😪  : ${err.message} 😫`);
            // $('#serverErrorReportContainer').css('display', 'block');
            $('#distanceErrorContainer').css('display', 'block');

            return 0;
        });
}

async function getDelayedFetchDistanceValue(bLat, bLng) {
    let distanceValue = await mapQuestDelay(lat, lng, bLat, bLng);
    globalArray.push(distanceValue);
    return distanceValue;
}

async function processBusinessesLocationLatLng() {
    let bCurrentLat = 0,
        bCurrentLng = 0;
    let distanceArray = [];
    for (let i = 0; i < businessesCoordiatesArray.length; i++) {
        bCurrentLng = businessesCoordiatesArray[i][0];
        bCurrentLat = businessesCoordiatesArray[i][1];
        let acquiredDistanceValue = await getDelayedFetchDistanceValue(bCurrentLat, bCurrentLng);
        distanceArray.push(acquiredDistanceValue);
    }
    return distanceArray;
}

/* Detailed Business Info Page */

function gatherInfoForDetailedBusinessInfoPage(responseJson) {
    let totalLength = responseJson.results.length;
    for (let i = 0; i < totalLength; i++) {
        selectedBusinessInfoPageStore.names.push(responseJson.results[i].name);
        selectedBusinessInfoPageStore.relatedCoordiates.push(responseJson.results[i].place.geometry.coordinates);
        selectedBusinessInfoPageStore.slugs.push(responseJson.results[i].slug);
        selectedBusinessInfoPageStore.properties.push(responseJson.results[i].place.properties);
    }
}


function footerContent() {
    $('#copyRightYear').text(getCopyRightCurrentYear());
}


/********** EVENT HANDLER FUNCTIONS **********/

/* Home Page */
function handleHomePageFormSubmission() {
    $('#homePageForm').submit(function(event) {
        event.preventDefault();
        postCode = $('#zip').val();
        if (validateZipFormat(postCode) && validateForRealZipCode(postCode, zipCodesStore)) {
            getLatLng(postCode);
            if (zipCodeErrorStatus === false) {
                provideRoute(routingParamsHolder.currentPage[1]);
            } else {
                $('#serverErrorReportContainer').css('display', 'block');
            }
        } else {
            $('#serverErrorReportContainer').text(`The specified ZIP is invalid 😫😪`);
            $('#serverErrorReportContainer').css('display', 'block');
        }
    });
}

/* Services Menu Page */
function handleServiceMenuPageNavigationFormSubmission() {
    $('#serviceMenuPageNavigationForm').submit(function(event) {
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[0]);
    });
    $('#serviceHomeImageButton').keyup('click', function(event) {
        if (event.keyCode === 13) {
            const targetButton = $(event.currentTarget);
            targetButton.attr('aria-pressed', true);
            $('#serviceHomeImageButton').click();
        }
    });
    $('#serviceHomeImageButton').on('click', function(event) {
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[0]);
    });
}

function handleServiceMenuPageNavigationTriggerButtonClick() {

    $('#commonMenuNavigationTriggerButton').keyup('click', function(event) {
        if (event.keyCode === 13) {
            const targetButton = $(event.currentTarget);
            targetButton.attr('aria-pressed', true);
            $('#commonMenuNavigationTriggerButton').click();
        }
    });

    $('#commonMenuNavigationTriggerButton').on('click', function() {
        if ($("#commonMenuItemsHolder").hasClass("hidden")) {
            $('#commonMenuItemsHolder').removeClass('hidden');
            $('.commonMenuNavigationContainer').css('background-color', 'rgba(31,162,229,0.1)');
        } else {
            $('#commonMenuItemsHolder').addClass('hidden');
            $('.commonMenuNavigationContainer').css('background-color', 'transparent');
        }
    });
}

function handleImageTileClick() {

    $('img.serviceMenuTileImage').keyup('click', function(event) {
        if (event.keyCode === 13) {
            const targetImage = $(event.currentTarget);
            const otherImage = $('img.serviceMenuTileImage').not(targetImage);
            targetImage.attr('aria-pressed', true);
            const pressedBool = $(targetImage).attr('aria-pressed') === 'true';
            otherImage.attr('aria-pressed', false);
            if (pressedBool) {
                $('img.serviceMenuTileImage').attr('aria-pressed', true);
                $('img.serviceMenuTileImage').click();
            }
        }
    });


    $('img.serviceMenuTileImage').on('click', function() {
        var receivedImageID = $(this).attr('id');
        receivedImageTileID = receivedImageID;
        let receivedMapQuestBusinessCatgo = findMapQuestBusinessCategory(receivedImageTileID);
        getBusinessesListFromMapQuestApi(lat, lng, receivedMapQuestBusinessCatgo);
        provideRoute(routingParamsHolder.currentPage[2]);
    });

}

/* Businesses List Page */

function handleBusinessesListPageNavigationFormSubmission() {
    $('#businessListNavigationFormReturnServicesMenu').submit(function(event) {
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[1]);
    });
    $('#businessListNavigationFormReturnHomePageMenu').submit(function(event) {
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[0]);
    });
    $('#businessesListHomeImageButton').keyup('click', function(event) {
        if (event.keyCode === 13) {
            const targetButton = $(event.currentTarget);
            targetButton.attr('aria-pressed', true);
            $('#businessesListHomeImageButton').click();
        }
    });
    $('#businessesListHomeImageButton').on('click', function(event) {
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[0]);
    });
    $('#businessesListServicesImageButton').keyup('click', function(event) {
        if (event.keyCode === 13) {
            const targetButton = $(event.currentTarget);
            targetButton.attr('aria-pressed', true);
            $('#businessesListServicesImageButton').click();
        }
    });
    $('#businessesListServicesImageButton').on('click', function(event) {
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[1]);
    });
}


function handleDetailedBusinessInfoPageBNameClick() {

    $('#businessesListPanelContainer').on('keyup', '.businessNameContainer', function(event) {
        if (event.keyCode === 13) {
            const targetImage = $(event.currentTarget);
            const otherImage = $('#businessesListPanelContainer .businessNameContainer').not(targetImage);
            targetImage.attr('aria-pressed', true);
            const pressedBool = $(targetImage).attr('aria-pressed') === 'true';
            otherImage.attr('aria-pressed', false);
            if (pressedBool) {
                targetImage.attr('aria-pressed', true);
                targetImage.click();
            }
        }
    });

    $('#businessesListPanelContainer').on('click', '.businessNameContainer', function(event) {
        event.preventDefault();
        let receivedBName = $(event.currentTarget).text();
        currentDetailedBusinessInfoPageHeader = receivedBName;
        provideRoute(routingParamsHolder.currentPage[3]);
    });
}

/* Detailed Business Info Page */
function handleBusinessInfoPageNavigationFormSubmission() {
    $('#businessInfoPageNavigationFormReturnListsMenu').submit(function(event) {
        event.preventDefault();
        let receivedMapQuestBusinessCatgo = findMapQuestBusinessCategory(receivedImageTileID);
        getBusinessesListFromMapQuestApi(lat, lng, receivedMapQuestBusinessCatgo);
        provideRoute(routingParamsHolder.currentPage[2]);
    });
    $('#businessInfoPageNavigationFormReturnHomePageMenu').submit(function(event) {
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[0]);
    });
    $('#detailedBusinessInfoHomeImageButton').keyup('click', function(event) {
        if (event.keyCode === 13) {
            const targetButton = $(event.currentTarget);
            targetButton.attr('aria-pressed', true);
            $('#detailedBusinessInfoHomeImageButton').click();
        }
    });
    $('#detailedBusinessInfoHomeImageButton').on('click', function(event) {
        event.preventDefault();
        provideRoute(routingParamsHolder.currentPage[0]);
    });
    $('#detailedBusinessInfoBusinessesListImageButton').keyup('click', function(event) {
        if (event.keyCode === 13) {
            const targetButton = $(event.currentTarget);
            targetButton.attr('aria-pressed', true);
            $('#detailedBusinessInfoBusinessesListImageButton').click();
        }
    });
    $('#detailedBusinessInfoBusinessesListImageButton').on('click', function(event) {
        event.preventDefault();
        let receivedMapQuestBusinessCatgo = findMapQuestBusinessCategory(receivedImageTileID);
        getBusinessesListFromMapQuestApi(lat, lng, receivedMapQuestBusinessCatgo);
        provideRoute(routingParamsHolder.currentPage[2]);
    });
}

/********** UTILITY FUNCTIONS **********/

function validateZipFormat(value) {
    return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value);
}

function validateForRealZipCode(value, zipCodesStore) {
    let check = false;
    check = zipCodesStore.some(item => item.ZipCode === value);
    return check;
}

/* Copyright Year */

function getCopyRightCurrentYear() {
    var today = new Date();
    var year = today.getFullYear();
    return year;
}

/********** Routing Function **********/

function provideRoute(checkFlag) {
    if (checkFlag === 'homePage') {
        homePage();
        sliderRender();
        handleHomePageFormSubmission();
        footerGen();
    } else if (checkFlag === 'servicesMenuPage') {
        /* Clear Home Page banner interval  */
        clearInterval(intervalCycleHolder);
        serviceMenuPage();
        handleServiceMenuPageNavigationFormSubmission();
        handleServiceMenuPageNavigationTriggerButtonClick();
        handleImageTileClick();
        footerGen();
    } else if (checkFlag === 'businessesListPage') {
        /* Clear Home Page banner interval  */
        clearInterval(intervalCycleHolder);
        businessesListPage(receivedImageTileID, businessesListStore);
        handleBusinessesListPageNavigationFormSubmission();
        handleServiceMenuPageNavigationTriggerButtonClick();
        handleDetailedBusinessInfoPageBNameClick();
        footerGen();
    } else if (checkFlag === 'detailedSingleBusinessInfoPage') {
        /* Clear Home Page banner interval  */
        clearInterval(intervalCycleHolder);
        detailedBusinessInfoPage();
        handleBusinessInfoPageNavigationFormSubmission();
        handleServiceMenuPageNavigationTriggerButtonClick();
        footerGen();
    }
}

/********** Initialization Function **********/

function initializeNewHomeWorkMateApp() {
    provideRoute(routingParamsHolder.currentPage[0]);
}

// When the page loads, call `initializeYogiApp`
$(initializeNewHomeWorkMateApp);