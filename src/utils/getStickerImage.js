export function getStickerImage(sticker){

    if(sticker.owned){

        return STICKER_IMAGES[sticker.code];

    }

    return TEAM_LOGOS[sticker.team_code];

}