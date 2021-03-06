// ==UserScript==
// @name         AnimePahe Random Anime
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  Adds a random anime button to animepahe
// @author       Arjix
// @match        *://*animepahe.com/*
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @grant        GM_xmlhttpRequest
// ==/UserScript==

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


(function() {
    'use strict';
    const getRandomAnime = () => {
        GM_xmlhttpRequest({
            method: "GET",
            url: "https://raw.githubusercontent.com/ArjixGamer/animepahe-random-button/main/all_anime.json",
            onload: function(res) {
                const ALL_ANIME = JSON.parse(res.response)
                const index = getRandomInt(1, ALL_ANIME.length - 1)
                document.location.href = "https://animepahe.com" + ALL_ANIME[index]
            }


    })}
    const button = `<li class="nav-item">
                          <a class="nav-link" href="#" id="randomBtn" title="random">
                              random
                          </a>
                   </li>`
    $("#navbarNavDropdown > ul > li").last().after(button)
    document.querySelector("a#randomBtn").onclick = getRandomAnime

})();
