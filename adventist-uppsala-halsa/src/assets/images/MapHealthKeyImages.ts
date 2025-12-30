// Script that automatically locates images based by the id name, since .json files cannot store images
import WaterImage from "./unsplash-nicolas-ruiz-water.webp";
import TemperanceImage from "./unsplash-karolina-kolodziejczak.webp";
import ExersiceImage from "./unsplash-martin-dalsgaard-exersice.webp";
import SunshineImage from "./unsplash-melissa-askew-sunshine.webp";
import RestImage from "./unsplash-shahovskaya-rest.webp";
import TrustInGod from "./unsplash-ioana-ye-trust-in-god.webp";
import AirImage from "./unsplash-mauri-karlin-air.webp";
import NutritionImage from "./unsplash-victoria-shes-nutrition.webp";

// each record name MUST match the id from .json files (use camelCase)
export const MapHealthKeyImages: Record<string, string[]> = {
    "water" : [WaterImage],
    "temperance" : [TemperanceImage],
    "exersice" : [ExersiceImage],
    "sunshine" : [SunshineImage],
    "rest" : [RestImage],
    "trustInGod" : [TrustInGod],
    "air" : [AirImage],
    "nutrition" : [NutritionImage]
};