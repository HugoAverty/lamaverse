/// <reference types="@workadventure/iframe-api-typings" />

import { bootstrapExtra } from "@workadventure/scripting-api-extra";

console.log('Script started successfully');

let clubPopup: any = undefined;
let popupPlaceBuild1: any = undefined;
let popupPlaceBuild2: any = undefined;
let popupPlaceBuild3: any = undefined;
let popupHidden: any = undefined;

// Waiting for the API to be ready
WA.onInit().then(() => {

    WA.room.onEnterLayer('zonePopupHidden').subscribe(() => {
        popupHidden = WA.ui.openPopup("popupHidden","Congratulations! You found the hidden Llamaverse logo! The first 10 to screenshot this and tag @Metadventure_ on Twitter will get a free Whitelist!",[]);
    })

    WA.room.onLeaveLayer('zonePopupHidden').subscribe(closePopUp)

    WA.room.onEnterLayer('zoneClubPopup').subscribe(() => {
        clubPopup = WA.ui.openPopup("popupNightClub","This space is dedicated to NFT holder !",[]);
    })

    WA.room.onLeaveLayer('zoneClubPopup').subscribe(closePopUp)

    WA.room.onEnterLayer('zonePopupPlaceBuild1').subscribe(() => {
        popupPlaceBuild1 = WA.ui.openPopup("popupPlaceBuild1","Opening soon...",[]);
    })

    WA.room.onLeaveLayer('zonePopupPlaceBuild1').subscribe(closePopUp)

    WA.room.onEnterLayer('zonePopupPlaceBuild2').subscribe(() => {
        popupPlaceBuild2 = WA.ui.openPopup("popupPlaceBuild2","Opening soon...",[]);
    })

    WA.room.onLeaveLayer('zonePopupPlaceBuild2').subscribe(closePopUp)

    WA.room.onEnterLayer('zonePopupPlaceBuild3').subscribe(() => {
        popupPlaceBuild3 = WA.ui.openPopup("popupPlaceBuild3","Opening soon...",[]);
    })

    WA.room.onLeaveLayer('zonePopupPlaceBuild3').subscribe(closePopUp)

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
    if (popupPlaceBuild1 !== undefined) {
        popupPlaceBuild1.close();
        popupPlaceBuild1 = undefined;
    }
    if (popupPlaceBuild2 !== undefined) {
        popupPlaceBuild2.close();
        popupPlaceBuild2 = undefined;
    }
    if (popupPlaceBuild3 !== undefined) {
        popupPlaceBuild3.close();
        popupPlaceBuild3 = undefined;
    }
    if (popupHidden !== undefined) {
        popupHidden.close();
        popupHidden = undefined;
    }
}

export {};
