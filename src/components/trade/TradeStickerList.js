import TradeStickerCard from "./TradeStickerCard";

export default function TradeStickerList({
    stickers,
    type,
    onPress,
}) {

    return (
        <>
            {stickers.map(sticker => (
                <TradeStickerCard
                    key={sticker.id}
                    sticker={sticker}
                    type={type}
                    onPress={onPress}
                />
            ))}
        </>
    );

}