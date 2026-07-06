import StickerRepository from "../database/repositories/StickerRepository";

const AlbumService = {

    load() {
        return StickerRepository.getAll();
    },

    toggleSticker(id) {
        StickerRepository.toggleOwned(id);
        return StickerRepository.getAll();
    }

};

export default AlbumService;