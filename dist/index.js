"use strict";
console.log("prabal arora");
const getUsername = document.querySelector('#user'); //TYPE ASSERTION
const formSubmit = document.querySelector('.form');
const main_container = document.querySelector('.main_container');
//default function call
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Network error status : ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
const showResultUI = (singleUser) => {
    const { login, url, avatar_url } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `<div class='card'>
            <img src=${avatar_url} alt=${login} / >
            <hr>
            <div class="card-footer">
            <img src="${avatar_url}" alt="${login}" />
            <a href="${url}">· Github+ </a>
            </div>
            </div>`);
};
function fetchUserData(url) {
    myCustomFetcher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            showResultUI(singleUser);
        }
    });
}
fetchUserData("https://api.github.com/users");
