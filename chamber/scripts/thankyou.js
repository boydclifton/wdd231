const rawUrlData = window.location.search;
const urlVariables = new URLSearchParams(rawUrlData)

function populateData(htmlElementId, urlParameterName) {
    const targetElement = document.getElementById(htmlElementId);
    const extractedValue = urlVariables.get(urlParameterName);

    if (targetElement && extractedValue) {
        targetElement.textContent = extractedValue;
    }
}

populateData("display-fname", "first_name");
populateData("display-lname", "last_name");
populateData("display-biz-name", "business_name");
populateData("display-email", "email");
populateData("display-phone", "phone");
populateData("display-tier", "membership_level");
populateData("display-time", "timestamp");