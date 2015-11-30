// ==UserScript==
// @author         Sycam Inc (origionally Alvaro)
// @name           Enhanced Steam Workshop Downloader
// @description    Adds an extra button to download, supports collections and new workshop layout
// @include        *steamcommunity.com/sharedfiles/filedetails/?id=*
// @include        *steamcommunity.com/workshop/filedetails/?id=*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @grant          GM_xmlhttpRequest
// @version        2.1
// @license        MIT
// @namespace https://greasyfork.org/users/6073
// ==/UserScript==

var patt = new RegExp("[0-9]{2,15}");
var id = patt.exec(document.URL);
var baseURL = "http://api.steampowered.com/ISteamRemoteStorage/GetPublishedFileDetails/v0001/";
var baseURLCtn = "http://api.steampowered.com/ISteamRemoteStorage/GetCollectionDetails/v0001/";

if (document.URL.indexOf("steamcommunity.com") != -1) {
    if (document.URL.indexOf("workshop") != -1) {
        addCollectionBtn(id);
    } else {
        addWorkshopBtn(id);
    }
}



function prepareDownload(url, id) {
    GM_xmlhttpRequest({
        method: "POST",
        url: url,
        data: "itemcount=1&publishedfileids[0]=" + id + "&format=json",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        onload: function (response) {
            //console.log(response.responseText);
            //debugger;
            data = jQuery.parseJSON(response.responseText);
            var fileurl = data.response.publishedfiledetails[0].file_url;
            $("#SubscribeItemOptionAdd2").click(function (e) {
                e.preventDefault(); //stop the browser from following
                window.location.href = fileurl;
            });
        },
        onerror: function (reponse) {
            //alert('error');
            console.log(reponse);
        }
    });
}

function download(url, id) {
    GM_xmlhttpRequest({
        method: "POST",
        url: url,
        data: "itemcount=1&publishedfileids[0]=" + id + "&format=json",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        onload: function (response) {
            //console.log(response.responseText);
            //debugger;
            data = jQuery.parseJSON(response.responseText);
            var fileurl = data.response.publishedfiledetails[0].file_url;
            console.log(fileurl);
            window.open(fileurl);
        },
        onerror: function (reponse) {
            //alert('error');
            console.log(reponse);
        }
    });
}


function addWorkshopBtn(id) {
    var element = document.getElementById("AddToCollectionBtn");
    var button = document.createElement('span');
    button.setAttribute('class', 'general_btn share tooltip');
    //button.setAttribute('href', baseURLCtn + id);

    button.innerHTML = '<span id="SubscribeItemOptionAdd2"><span>Download</span></span>';
    // Append the element after the real subscribe button
    if (element.nextSibling) {
        element.parentNode.insertBefore(button, element.nextSibling);
    } else {
        element.parentNode.appendChild(button);
    }
    prepareDownload(baseURL, id);
    // Change the stupid text to the left of it
    document.querySelectorAll(".game_area_purchase_game")[0].getElementsByTagName('h1')[0].setAttribute('style', 'width: 300px;');
}

function addCollectionBtn(id) {
    var element = document.getElementById("AddToCollectionBtn");

    var button = document.createElement('span');
    button.setAttribute('class', 'general_btn share tooltip');
    //button.setAttribute('href', baseURLCtn + id);

    button.innerHTML = '<span id="SubscribeItemOptionAdd2"><span>Download</span></span>';

    // Append the element after the real subscribe button
    if (element.nextSibling) {
        element.parentNode.insertBefore(button, element.nextSibling);
    } else {
        element.parentNode.appendChild(button);
    }
    prepareDownloadCtn(baseURLCtn, id);
    // Change the stupid text to the left of it
    document.querySelectorAll(".game_area_purchase_game")[0].getElementsByTagName('h1')[0].setAttribute('style', 'width: 300px;');
}

function prepareDownloadCtn(url, id) {
    GM_xmlhttpRequest({
        method: "POST",
        url: url,
        data: "collectioncount=1&publishedfileids[0]=" + id + "&format=json",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        onload: function (response) {
            //console.log(response);
            data = jQuery.parseJSON(response.responseText);
            $("#SubscribeItemOptionAdd2").click(function (e) {
                e.preventDefault(); //stop the browser from following
              $.each(data.response.collectiondetails[0].children, function(index, element) {
              	download(baseURL,element.publishedfileid);
              });
            });
        },
        onerror: function (reponse) {
            //alert('error');
            console.log(reponse);
        }
    });
}