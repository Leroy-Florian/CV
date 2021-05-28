import {Helmet} from "react-helmet"
import {NavigationHelper} from "../../Components/NavigationHelper/NavigationHelper";
import "./GlobalLayout.css"

/**
 *
 *
 * @constructor
 * @param {children}
 */
export default function GlobalLayout({children}) {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8"/>
                <title></title>
            </Helmet>
            <div className={"FullScreen"}>
                {children}{" "}
            </div>
        </>
    )
}
