/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let clubPopup: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.onEnterLayer('zoneClubPopup').subscribe(() => {
        clubPopup = WA.ui.openPopup("popupNightClub","This space is dedicated to NFT holder !",[]);
    })

    WA.room.onLeaveLayer('zoneClubPopup').subscribe(closePopUp)

    // The line below bootstraps the Scripting API Extra library that adds a number of advanced properties/features to WorkAdventure
    bootstrapExtra().then(() => {
        console.log('Scripting API Extra ready');
    }).catch(e => console.error(e));

}).catch(e => console.error(e));

function closePopUp(){
    if (clubPopup !== undefined) {
        clubPopup.close();
        clubPopup = undefined;
    }
}

export {};
