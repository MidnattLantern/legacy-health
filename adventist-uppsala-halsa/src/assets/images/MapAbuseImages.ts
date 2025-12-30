// Script that automatically locates images based by the id name, since .json files cannot store images
import SugarImage from "./unsplash-daniel-kraus-sugar.webp";
import CaffeineImage from "./unsplash-anastasiia-chepinska-caffeine.webp";
import NicotineImage from "./unsplash-irina-iriser-nicotine.webp";
import AlcoholImage from "./unsplash-ambitious-studio-alcohol.webp";
import PhoneAddiction from "./unsplash-nathan-dumlao-phone-addiction.webp";
import Food from "./unsplash-ashley-green-food.webp";

// each record name MUST match the id from .json files (use camelCase)
export const MapAbuseImages: Record<string, string[]> = {
    "sugar" : [SugarImage],
    "caffeine" : [CaffeineImage],
    "nicotine" : [NicotineImage],
    "alcohol" : [AlcoholImage],
    "phone-addiction" : [PhoneAddiction],
    "food" : [Food]
};