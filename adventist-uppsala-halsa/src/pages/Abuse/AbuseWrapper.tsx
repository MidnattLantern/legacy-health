import Masonry from "react-masonry-css";
import Styles from "./AbuseWrapper.module.css";
import MasonryStyles from "./Masonry.module.css";
import PhoneViewAddictionCard from "./components/AddictionCard/PhoneViewAddictionCard";
import LargeViewAddictionCard from "./components/AddictionCard/LargeViewAddictionCard";
import Introduction from "./components/Introduction/Introduction";
import ContentData from "../../content/abuse/abuse-data.json"
import { useEffect, useState } from "react";
import AbuseContent from "../../content/abuse/AbuseContent";
import { useViewPortContext } from "../../contexts/useViewportContext";
import RecipeCard from "./components/RecipeCard/RecipeCard";
import RecipeContent from "../../content/abuse/RecipeContent";
import ReplacementCard from "./components/ReplacementCard/ReplacementCard";
import ReplacementContent from "../../content/abuse/ReplacementContent";
import { Route, Routes } from "react-router-dom";

const AbuseWrapper = () => {
    const { viewportWidth } = useViewPortContext();
    const VIEWPORT_BREAKPOINT = 768;
    const [sugarExpanded, setSugarExpanded] = useState<boolean>(false); // "Socker"
    const [caffeineExpanded, setCaffeineExpanded] = useState<boolean>(false); // "Koffein"
    const [nicotineExpanded, setNicotineExpanded] = useState<boolean>(false); // "Nikotin"
    const [alcoholExpanded, setAlcoholExpanded] = useState<boolean>(false); // "Alkohol"
    const [phoneAddictionExpanded, setPhoneAddictionExpanded] = useState<boolean>(false); // "Mobilberoende"
    const [foodExpanded, setFoodExpanded] = useState<boolean>(false); // "Food"

    function DisplayAbusePage() {
        useEffect(() => {
            document.title = "UA Hälsa | Missbruk";
        }, []);

        return (
        <div className={Styles.AbuseWrapperView}>
            <Introduction/>
            <h2 className={Styles.Title}>{"Vanliga beroenden"}</h2>
            <div className={Styles.AddictionSection}>
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["sugar"]} isExpanded={sugarExpanded} setIsExpanded={setSugarExpanded}>
                    <AbuseContent.Sugar/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["sugar"]} isExpanded={sugarExpanded} setIsExpanded={setSugarExpanded}>
                    <AbuseContent.Sugar/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["caffeine"]} isExpanded={caffeineExpanded} setIsExpanded={setCaffeineExpanded}>
                    <AbuseContent.Caffeine/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["caffeine"]} isExpanded={caffeineExpanded} setIsExpanded={setCaffeineExpanded}>
                    <AbuseContent.Caffeine/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["nicotine"]} isExpanded={nicotineExpanded} setIsExpanded={setNicotineExpanded}>
                    <AbuseContent.Nicotine/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["nicotine"]} isExpanded={nicotineExpanded} setIsExpanded={setNicotineExpanded}>
                    <AbuseContent.Nicotine/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["alcohol"]} isExpanded={alcoholExpanded} setIsExpanded={setAlcoholExpanded}>
                    <AbuseContent.Alcohol/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["alcohol"]} isExpanded={alcoholExpanded} setIsExpanded={setAlcoholExpanded}>
                    <AbuseContent.Alcohol/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["phone-addiction"]} isExpanded={phoneAddictionExpanded} setIsExpanded={setPhoneAddictionExpanded}>
                    <AbuseContent.PhoneAddiction/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["phone-addiction"]} isExpanded={phoneAddictionExpanded} setIsExpanded={setPhoneAddictionExpanded}>
                    <AbuseContent.PhoneAddiction/>
                </LargeViewAddictionCard>
                }
                {viewportWidth < VIEWPORT_BREAKPOINT ?
                <PhoneViewAddictionCard contentData={ContentData["food"]} isExpanded={foodExpanded} setIsExpanded={setFoodExpanded}>
                    <AbuseContent.Food/>
                </PhoneViewAddictionCard>
                :
                <LargeViewAddictionCard contentData={ContentData["food"]} isExpanded={foodExpanded} setIsExpanded={setFoodExpanded}>
                    <AbuseContent.Food/>
                </LargeViewAddictionCard>
                }
            </div>

            <p className={Styles.DarkParagraph}>8 hälsonycklar kan hjälpa med att bryta beroenden, det dröjer 21 dagar att etablera en ny vana, efter 30 dagar sitter det.</p>
            <h2 className={Styles.Title}>{"Ersättning"}</h2>

            <Masonry
            breakpointCols={{
                default: 2,
                1280: 1 //BREAKPOINT_DESKTOP
            }}
            className={MasonryStyles.MasonryGrid}
            columnClassName={MasonryStyles.MasonryGridColumn}
            >
                <ReplacementCard
                    title={"Cikoriarot"}
                    idName="chicoryroot"
                    content={<ReplacementContent.ChicoryrootContent/>}
                />
                <ReplacementCard
                    title={"Carob"}
                    idName="carob"
                    content={<ReplacementContent.ChagaContent/>}
                />
                <ReplacementCard
                    title={"Chaga Sprängticka"}
                    idName="chaga"
                    content={<ReplacementContent.CarobContent/>}
                />
            </Masonry>
            <h2 className={Styles.Title}>{"Hälsosamma recept"}</h2>
            <Masonry
            breakpointCols={{
                default: 2,
                1280: 1 //BREAKPOINT_DESKTOP
            }}
            className={MasonryStyles.MasonryGrid}
            columnClassName={MasonryStyles.MasonryGridColumn}
            >
                <RecipeCard
                idName="coconut-cookies"
                title="Kokoskakor"
                ingredientsContent={<>
                    <RecipeContent.CoconutCookiesIngredients/>
                </>}
                instructionsContent={<>
                    <RecipeContent.CoconutCookiesInstructions/>
                </>}
                />
                <RecipeCard
                idName="date-balls"
                title="Dadelboller"
                ingredientsContent={<>
                    <RecipeContent.DateBallsIngredients/>
                </>}
                instructionsContent={<>
                    <RecipeContent.DateBallsInstructions/>
                </>}
                />
            </Masonry>
        </div>
        );
    };

    return(
        <Routes>
            <Route index element={<DisplayAbusePage/>}/>
        </Routes>
    )
};

export default AbuseWrapper;