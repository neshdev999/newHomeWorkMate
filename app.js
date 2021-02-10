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
    return `<div class="mainHeaderContainer"><h1>New Home Workmate</h1><h2>Are you a new home buyer and want to find out nearby home services available at your fingertips? No worry! You are at the right place!!!</h2><div>`;
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
    return `
    <div>
        <div class="inputControlFormContainer">
            <form id="homePageForm">
                <input id="zip" name="zip" type="text" pattern="[0-9]*" placeholder="Enter your zip code">
                <input type="submit" value="Submit">
            </form>
        </div>
        <div id="serverErrorReportContainer">
        </div>
    </div>`
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
    return `<div class="serviceMenuPageNavigationFormContainer"><form id="serviceMenuPageNavigationForm"><input type="submit" value="Go Back to Home Page" class="serviceMenuPageButton"/></form></div>`;
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
    // return `<div>Businesses List Main Content ${imageTileID}</div>`;
    return `
    <div id="businessesListPanelContainer" class="hidden">
        <div id="serverErrorReportServicePageContainer">
        </div>
    </div>`
}

function businessesListNavigationInputControlBox() {
    return `
    <div id="businessesListNavigationFormContainer">
        <div class="businessListNavigationFormItem">
            <form id="businessListNavigationFormReturnServicesMenu">
                <input type="submit" value="Go Back to Services Menu" class="businessListNavigationButton">
            </form>
        </div>
        <div class="businessListNavigationFormItem">
            <form id="businessListNavigationFormReturnHomePageMenu">
                <input type="submit" value="Go Back to Home Page" class="businessListNavigationButton">
            </form>
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
    <div class="mapContainer">
        <div id="map" style="width: 100%; height: 530px;"></div>
    </div>`
}

function detailedBusinessInfoPageHeaderContentTemplate() {
    return `
    <div class="headerContainer">
    <div class="headerItem">Detailed Info Page : ${currentDetailedBusinessInfoPageHeader}</div>
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
    //srcDetailsAddress = "https://www.mapquest.com" + passSlug + "?maptype=map";
    srcDetailsAddress = "https://www.mapquest.com" + passSlug;
    constructDestinationAddress = passStreet + ", " + passCity + ", " + passStateCode + " " + passPostalCode;
    generateMapQuestMapTile(constructDestinationAddress, postCode);

    return `
    <div>
    <div class="addressContainer">
        <div class="addressHeader">ADDRESS</div>
        <div class="addressUlListContainer">
            <ul class="addressUlList">
                <li>${passStreet}</li>
                <li>${passCity}</li>
                <li>${passStateCode}</li>
                <li>${passPostalCode}</li>
                <li>${passCountryCode}</li>
            </ul>
        </div>
    </div>
    <div class="morInfoContainer">
        <div class="moreInfoItem"><a href="${srcDetailsAddress}" target=”_blank”>More Details</a></div>
    </div>
    </div>`;
}

function businessInfoPageNavigationInputControlBox() {

    return `
        <div id="businessInfoPageNavigationFormContainer">
            <div class="businessInfoPageNavigationFormItem">
                <form id="businessInfoPageNavigationFormReturnListsMenu">
                    <input type="submit" value="Go Back to Businesses List" class="businessInfoPageNavigationButton">
                </form>
            </div>
            <div class="businessInfoPageNavigationFormItem">
                <form id="businessInfoPageNavigationFormReturnHomePageMenu">
                    <input type="submit" value="Go Back to Home Page" class="businessInfoPageNavigationButton">
                </form>
            </div>
        </div>`;
}


/* <span id="mapIframe" class="mapItems">
<iframe height="400" width="300" border="0" marginwidth="0" marginheight="0" src="${srcAddress}"></iframe>
</span>
<span id="locationDetailsIframe" class="mapItems">
<iframe src="${srcDetailsAddress}" height="400" width="400" title="mapquest location details"></iframe>
<a href="${srcDetailsAddress}">More Details</a>
</span> */


/*********** Map Generation Functions ***********/

function generateMapQuestMapTile(destAddress, pCode) {
    // L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

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

    if (imageChangeCounter === 23) {
        imageChangeCounter = 0;
    } else {
        ++imageChangeCounter;
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
    let url = "http://www.mapquestapi.com/geocoding/v1/address?key=GZDv4LmGEWEgYHHXQ91rn8y3QDnDqS2A&country=US&postalCode=" + postCode;
    fetch(url, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(
            responseJson => {
                //console.log(responseJson);
                let latLngObject = responseJson.results['0'].locations['0'].latLng;
                //console.log(latLngObject);
                receiveLatLngObject(latLngObject);
            })
        .catch(err => {
            console.log(`${err.message}`);
        })
}

function receiveLatLngObject(latLng) {
    let receivedLat = latLng["lat"];
    let receivedLng = latLng["lng"];
    console.log(receivedLat);
    lat = receivedLat;
    lng = receivedLng;
    console.log(receivedLng);
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
            mapQuestBusinessCategory = '73490202';
            break;
        case 'poolServicesTile':
            mapQuestBusinessCategory = '179985';
            break;
        case 'handymanServicesTile':
            mapQuestBusinessCategory = '152115';
            break;
        default:
            mapQuestBusinessCategory = '078204';
            console.log('');
    }

    return mapQuestBusinessCategory;

}

/* Convert meters to miles */
function getMiles(valInMeters) {
    return Math.round(valInMeters * 0.000621371);
}

function generateBusinessesListPanel(responseJson, businessesDistanceArray) {
    let businessesNamesArray = [];
    console.log("businessesDistanceArray");
    console.log(businessesDistanceArray);

    for (let i = 0; i < responseJson.results.length; i++) {
        businessesNamesArray.push(responseJson.results[i].name);
    }
    console.log("trial");
    console.log(businessesDistanceArray[0]);

    for (let j = 0; j < responseJson.results.length; j++) {
        console.log("let: " + businessesDistanceArray[j]);
        $('#businessesListPanelContainer').append(`
            <div class="businessItemContainer">         
                <div class="businessNameContainer">${businessesNamesArray[j]}</div>
                <div class="businessDistanceContainer">Distance: ${businessesDistanceArray[j]} miles</div>         
            </div>`);
    }
    $('#businessesListPanelContainer').removeClass("hidden");
}


/* MapQuest Business List API CALL */

async function getBusinessesListFromMapQuestApi(lat, lng, cat) {

    let givenRadiusDistance = '32186';

    let mapQuestBusinessListURL = "http://www.mapquestapi.com/search/v4/place?location=" + lng + "," + lat + "&category=sic:" + cat + "&key=GZDv4LmGEWEgYHHXQ91rn8y3QDnDqS2A&sort=distance&circle=" + lng + "," + lat + "," + givenRadiusDistance;

    fetch(mapQuestBusinessListURL, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(
            async(responseJson) => {
                console.log(responseJson);
                console.log("Nesh: ");
                console.log(responseJson.results[0].place.geometry.coordinates);
                console.log(responseJson.results[0].slug);

                gatherInfoForDetailedBusinessInfoPage(responseJson);
                console.log("selectedBusinessInfoPageStore: ");
                console.log(selectedBusinessInfoPageStore);
                createCurrentBusinessLocationLatLng(responseJson);
                let outputArray = await processBusinessesLocationLatLng();
                console.log("outputArray: " + outputArray[0]);
                console.log("Global Array" + globalArray[0]);
                console.log(outputArray);
                generateBusinessesListPanel(responseJson, outputArray);
            })
        .catch(err => {
            console.log(`${err.message}`);
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

    let mapQuestBusinessListURL = "http://www.mapquestapi.com/directions/v2/route?key=GZDv4LmGEWEgYHHXQ91rn8y3QDnDqS2A&outFormat=json&unit=m&from=" + lat + "," + lng + "&to=" + businessLocationLat + "," + businessLocationLng;

    return fetch(mapQuestBusinessListURL, {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(
            responseJson => {
                console.log(responseJson);
                let receivedDistancespl = responseJson.route.distance;
                console.log(receivedDistancespl);
                return receivedDistancespl;
            })
        .catch(err => {
            console.log(`${err.message}`);
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
        console.log("acquiredDistanceValue: " + acquiredDistanceValue);
        distanceArray.push(acquiredDistanceValue);
    }
    // console.log("trial Me: " + distanceArray[0]);
    // console.log("trial Me: " + distanceArray[1]);
    // console.log("trial Me: " + distanceArray[2]);
    // console.log("trial Me: " + distanceArray[3]);
    // console.log("trial Me: " + distanceArray[4]);
    console.log(distanceArray);
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


/********** EVENT HANDLER FUNCTIONS **********/

/* Home Page */
function handleHomePageFormSubmission() {
    $('#homePageForm').submit(function(event) {
        alert("form handler is called");
        event.preventDefault();
        postCode = $('#zip').val();
        if (validateZipFormat(postCode) && validateForRealZipCode(postCode, zipCodesStore)) {
            //validateForRealZipCode(postCode, zipCodesStore);
            //alert('valid zip');
            console.log(postCode);
            getLatLng(postCode);
            provideRoute(routingParamsHolder.currentPage[1]);
        } else {
            //alert('invalid zip');
            $('#serverErrorReportContainer').text(`Invalid Zipcode  😫: Please enter valid Zipcode 😪 `);
            $('#serverErrorReportContainer').css('display', 'block');
        }
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
    $('img').on('click', function() {
        var receivedImageID = $(this).attr('id');
        alert(receivedImageID);
        receivedImageTileID = receivedImageID;
        let receivedMapQuestBusinessCatgo = findMapQuestBusinessCategory(receivedImageTileID);
        //getBusinessesListFromMapQuestApi(lat, lng, '078204');
        getBusinessesListFromMapQuestApi(lat, lng, receivedMapQuestBusinessCatgo);
        provideRoute(routingParamsHolder.currentPage[2]);
        //getBusinessesListFromMapQuestApi(lat, lng, receivedMapQuestBusinessCatgo).then(provideRoute(routingParamsHolder.currentPage[2]));
        //provideRoute(routingParamsHolder.currentPage[2]);
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


function handleDetailedBusinessInfoPageBNameClick() {
    $('#businessesListPanelContainer').on('click', '.businessNameContainer', function(event) {
        event.preventDefault();
        console.log("I am clicked");
        alert('I am clicked');
        let receivedBName = $(event.currentTarget).text();
        console.log(receivedBName);
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
}

/********** UTILITY FUNCTIONS **********/

function validateZipFormat(value) {
    return (/(^\d{5}$)|(^\d{5}-\d{4}$)/).test(value);
}

function validateForRealZipCode(value, zipCodesStore) {
    let check = false;
    // let passVal = parseInt(value);
    // let object = { Zipcode: value };
    check = zipCodesStore.some(item => item.ZipCode === value);
    return check;
}

/********** Routing Function **********/

function provideRoute(checkFlag) {
    if (checkFlag === 'homePage') {
        homePage();
        sliderRender();
        handleHomePageFormSubmission();
    } else if (checkFlag === 'servicesMenuPage') {
        /* Clear Home Page banner interval  */
        clearInterval(intervalCycleHolder);
        serviceMenuPage();
        handleServiceMenuPageNavigationFormSubmission();
        handleImageTileClick();
    } else if (checkFlag === 'businessesListPage') {
        /* Clear Home Page banner interval  */
        clearInterval(intervalCycleHolder);
        businessesListPage(receivedImageTileID, businessesListStore);
        handleBusinessesListPageNavigationFormSubmission();
        handleDetailedBusinessInfoPageBNameClick();
    } else if (checkFlag === 'detailedSingleBusinessInfoPage') {
        /* Clear Home Page banner interval  */
        clearInterval(intervalCycleHolder);
        detailedBusinessInfoPage();
        handleBusinessInfoPageNavigationFormSubmission();
    }
}

/********** Initialization Function **********/

function initializeNewHomeWorkMateApp() {
    provideRoute(routingParamsHolder.currentPage[0]);
}

// When the page loads, call `initializeYogiApp`
$(initializeNewHomeWorkMateApp);