import Styles from "./EightHealthKeysWrapper.module.css";
import MasonryStyles from "./Masonry.module.css";
import LargeHealthKeyCard from "./components/HealthKeyCard/LargeHealthKeyCard";
import PhoneHealthKeyCard from "./components/HealthKeyCard/PhoneHealthKeyCard";
//import HealthList from "./components/HealthList/HealthList";
import { useViewPortContext } from "../../contexts/useViewportContext";
import { useEffect, useState } from "react";
// @ts-ignore
import Masonry from "react-masonry-css";
import waterContent from "../../content/healthKeys/water.json";
import temperanceContent from "../../content/healthKeys/temperance.json";
import exersiceContent from "../../content/healthKeys/exersice.json";
import sunshineContent from "../../content/healthKeys/sunshine.json";
import restContent from "../../content/healthKeys/rest.json";
import trustInGodContent from "../../content/healthKeys/trust-in-god.json";
import airContent from "../../content/healthKeys/air.json";
import nutritionContent from "../../content/healthKeys/nutrition.json";
import { Route, Routes } from "react-router-dom";

const EightHealthKeysWrapper = () => {
    const { viewportWidth } = useViewPortContext();
    const VIEWPORT_BREAKPOINT = 768;
    const [waterExpanded, setWaterExpanded] = useState<boolean>(false); // "Vatten"
    const [temperanceExpanded, setTemperanceExpanded] = useState<boolean>(false); // "Avhållsamhet"
    const [exersiceExpanded, setExersiceExpanded] = useState<boolean>(false); // "Rörelse"
    const [sunshineExpanded, setSunshineExpanded] = useState<boolean>(false); // "Solsken"
    const [restExpanded, setRestExpanded] = useState<boolean>(false); // "Återhämtning"
    const [trustInGodExpanded, setTrustInGodExpanded] = useState<boolean>(false); // "Gudsförtröstan"
    const [airExpanded, setAirExpanded] = useState<boolean>(false); // "O2 syre"
    const [nutritionExpanded, setNutritionExpanded] = useState<boolean>(false); // "Diet"

    function DisplayEightHealthKeysPage() {
        useEffect(() => {
            document.title = "UA Hälsa | 8 Hälsonycklar";
        }, []);

        return (
            <div className={Styles.EightHealthKeysWrapperComponent}>
            <Masonry
            breakpointCols={{
                default: 2,
                1280: 1
            }}
            className={MasonryStyles.MasonryGrid}
            columnClassName={MasonryStyles.MasonryGridColumn}
            >
                <div id="water">
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                    <PhoneHealthKeyCard
                        contentData={waterContent}
                        isExpanded={waterExpanded}
                        setIsExpanded={setWaterExpanded}
                    />
                    :
                    <LargeHealthKeyCard
                        contentData={waterContent}
                        isExpanded={waterExpanded}
                        setIsExpanded={setWaterExpanded}
                    />
                }
                </div>
                <div id="temperance">
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                    <PhoneHealthKeyCard
                        contentData={temperanceContent}
                        isExpanded={temperanceExpanded}
                        setIsExpanded={setTemperanceExpanded}
                    />
                    :
                    <LargeHealthKeyCard
                        contentData={temperanceContent}
                        isExpanded={temperanceExpanded}
                        setIsExpanded={setTemperanceExpanded}
                    />
                }
                </div>
                <div id="exersice">
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                    <PhoneHealthKeyCard
                        contentData={exersiceContent}
                        isExpanded={exersiceExpanded}
                        setIsExpanded={setExersiceExpanded}
                    />
                    :
                    <LargeHealthKeyCard
                        contentData={exersiceContent}
                        isExpanded={exersiceExpanded}
                        setIsExpanded={setExersiceExpanded}
                    />
                }
                </div>
                <div id="sunshine">
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                    <PhoneHealthKeyCard
                        contentData={sunshineContent}
                        isExpanded={sunshineExpanded}
                        setIsExpanded={setSunshineExpanded}
                    />
                    :
                    <LargeHealthKeyCard
                        contentData={sunshineContent}
                        isExpanded={sunshineExpanded}
                        setIsExpanded={setSunshineExpanded}
                    />
                }
                </div>
                <div id="rest">
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                    <PhoneHealthKeyCard
                        contentData={restContent}
                        isExpanded={restExpanded}
                        setIsExpanded={setRestExpanded}
                    />
                    :
                    <LargeHealthKeyCard
                        contentData={restContent}
                        isExpanded={restExpanded}
                        setIsExpanded={setRestExpanded}
                    />
                }
                </div>
                <div id="trust-in-god">
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                    <PhoneHealthKeyCard
                        contentData={trustInGodContent}
                        isExpanded={trustInGodExpanded}
                        setIsExpanded={setTrustInGodExpanded}
                    />
                    :
                    <LargeHealthKeyCard
                        contentData={trustInGodContent}
                        isExpanded={trustInGodExpanded}
                        setIsExpanded={setTrustInGodExpanded}
                    />
                }
                </div>
                <div id="air">
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                    <PhoneHealthKeyCard
                        contentData={airContent}
                        isExpanded={airExpanded}
                        setIsExpanded={setAirExpanded}
                    />
                    :
                    <LargeHealthKeyCard
                        customTitle={<h1>0<sub>2</sub> syre</h1>}
                        contentData={airContent}
                        isExpanded={airExpanded}
                        setIsExpanded={setAirExpanded}
                    />
                }
                </div>
                <div id="nurtrition">
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                    <PhoneHealthKeyCard
                        contentData={nutritionContent}
                        isExpanded={nutritionExpanded}
                        setIsExpanded={setNutritionExpanded}
                    />
                    :
                    <LargeHealthKeyCard
                        contentData={nutritionContent}
                        isExpanded={nutritionExpanded}
                        setIsExpanded={setNutritionExpanded}
                    />
                }
                </div>
                </Masonry>
            </div>
        )
    };

    return (
        <Routes>
            <Route index element={<DisplayEightHealthKeysPage/>}/>
        </Routes>
    )
};

export default EightHealthKeysWrapper;