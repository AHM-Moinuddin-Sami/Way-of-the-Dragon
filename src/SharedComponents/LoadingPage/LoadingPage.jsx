import anime from "animejs";
import "./loadingPage.css";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const LoadingPage = () => {

    useEffect(() => {
        const targets = document.querySelectorAll('line');

        anime({
            targets,
            translateX: [
                { value: 270, duration: 1000, easing: 'easeOutSine' },
                { value: 0, duration: 1000, easing: 'easeOutSine' }
            ],
            delay: anime.stagger(200, { grid: [16, 10], from: 7 }),
            loop: true
        });
    }, []);



    return (
        <div className="flex bg-black w-full px-auto justify-center items-center container">
            <svg
                className="px-auto"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1145.7 288.31"
            >
                <defs>
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n        .cls-1,\n        .cls-2 {\n          fill: none;\n        }\n\n        .cls-2 {\n          stroke: #ff0d98;\n          stroke-width: 4.32px;\n        }\n\n        .cls-3 {\n          fill: #fff;\n        }\n\n        .cls-4 {\n          fill: url(#_10_lpi_60_2);\n        }\n\n        .cls-5 {\n          fill: url(#_10_lpi_60_2-3);\n        }\n      "
                        }}
                    />
                    <pattern
                        id="_10_lpi_60_2"
                        data-name="10 lpi 60% 2"
                        x="-66.36"
                        y="-94.35"
                        width={72}
                        height={72}
                        patternUnits="userSpaceOnUse"
                        viewBox="0 0 72 72"
                    >
                        <rect className="cls-1" width={72} height={72} />
                        <line className="cls-2" x1="71.75" y1="68.4" x2="144.25" y2="68.4" />
                        <line className="cls-2" x1="71.75" y1={54} x2="144.25" y2={54} />
                        <line className="cls-2" x1="71.75" y1="39.6" x2="144.25" y2="39.6" />
                        <line className="cls-2" x1="71.75" y1="25.2" x2="144.25" y2="25.2" />
                        <line className="cls-2" x1="71.75" y1="10.8" x2="144.25" y2="10.8" />
                        <line className="cls-2" x1="71.75" y1="61.2" x2="144.25" y2="61.2" />
                        <line className="cls-2" x1="71.75" y1="46.8" x2="144.25" y2="46.8" />
                        <line className="cls-2" x1="71.75" y1="32.4" x2="144.25" y2="32.4" />
                        <line className="cls-2" x1="71.75" y1={18} x2="144.25" y2={18} />
                        <line className="cls-2" x1="71.75" y1="3.6" x2="144.25" y2="3.6" />
                        <line className="cls-2" x1="-0.25" y1="68.4" x2="72.25" y2="68.4" />
                        <line className="cls-2" x1="-0.25" y1={54} x2="72.25" y2={54} />
                        <line className="cls-2" x1="-0.25" y1="39.6" x2="72.25" y2="39.6" />
                        <line className="cls-2" x1="-0.25" y1="25.2" x2="72.25" y2="25.2" />
                        <line className="cls-2" x1="-0.25" y1="10.8" x2="72.25" y2="10.8" />
                        <line className="cls-2" x1="-0.25" y1="61.2" x2="72.25" y2="61.2" />
                        <line className="cls-2" x1="-0.25" y1="46.8" x2="72.25" y2="46.8" />
                        <line className="cls-2" x1="-0.25" y1="32.4" x2="72.25" y2="32.4" />
                        <line className="cls-2" x1="-0.25" y1={18} x2="72.25" y2={18} />
                        <line className="cls-2" x1="-0.25" y1="3.6" x2="72.25" y2="3.6" />
                        <line className="cls-2" x1="-72.25" y1="68.4" x2="0.25" y2="68.4" />
                        <line className="cls-2" x1="-72.25" y1={54} x2="0.25" y2={54} />
                        <line className="cls-2" x1="-72.25" y1="39.6" x2="0.25" y2="39.6" />
                        <line className="cls-2" x1="-72.25" y1="25.2" x2="0.25" y2="25.2" />
                        <line className="cls-2" x1="-72.25" y1="10.8" x2="0.25" y2="10.8" />
                        <line className="cls-2" x1="-72.25" y1="61.2" x2="0.25" y2="61.2" />
                        <line className="cls-2" x1="-72.25" y1="46.8" x2="0.25" y2="46.8" />
                        <line className="cls-2" x1="-72.25" y1="32.4" x2="0.25" y2="32.4" />
                        <line className="cls-2" x1="-72.25" y1={18} x2="0.25" y2={18} />
                        <line className="cls-2" x1="-72.25" y1="3.6" x2="0.25" y2="3.6" />
                    </pattern>
                    <pattern
                        id="_10_lpi_60_2-3"
                        data-name="10 lpi 60% 2"
                        width={72}
                        height={72}
                        patternUnits="userSpaceOnUse"
                        viewBox="0 0 72 72"
                    >
                        <rect className="cls-1" width={72} height={72} />
                        <line className="cls-2" x1="71.75" y1="68.4" x2="144.25" y2="68.4" />
                        <line className="cls-2" x1="71.75" y1={54} x2="144.25" y2={54} />
                        <line className="cls-2" x1="71.75" y1="39.6" x2="144.25" y2="39.6" />
                        <line className="cls-2" x1="71.75" y1="25.2" x2="144.25" y2="25.2" />
                        <line className="cls-2" x1="71.75" y1="10.8" x2="144.25" y2="10.8" />
                        <line className="cls-2" x1="71.75" y1="61.2" x2="144.25" y2="61.2" />
                        <line className="cls-2" x1="71.75" y1="46.8" x2="144.25" y2="46.8" />
                        <line className="cls-2" x1="71.75" y1="32.4" x2="144.25" y2="32.4" />
                        <line className="cls-2" x1="71.75" y1={18} x2="144.25" y2={18} />
                        <line className="cls-2" x1="71.75" y1="3.6" x2="144.25" y2="3.6" />
                        <line className="cls-2" x1="-0.25" y1="68.4" x2="72.25" y2="68.4" />
                        <line className="cls-2" x1="-0.25" y1={54} x2="72.25" y2={54} />
                        <line className="cls-2" x1="-0.25" y1="39.6" x2="72.25" y2="39.6" />
                        <line className="cls-2" x1="-0.25" y1="25.2" x2="72.25" y2="25.2" />
                        <line className="cls-2" x1="-0.25" y1="10.8" x2="72.25" y2="10.8" />
                        <line className="cls-2" x1="-0.25" y1="61.2" x2="72.25" y2="61.2" />
                        <line className="cls-2" x1="-0.25" y1="46.8" x2="72.25" y2="46.8" />
                        <line className="cls-2" x1="-0.25" y1="32.4" x2="72.25" y2="32.4" />
                        <line className="cls-2" x1="-0.25" y1={18} x2="72.25" y2={18} />
                        <line className="cls-2" x1="-0.25" y1="3.6" x2="72.25" y2="3.6" />
                        <line className="cls-2" x1="-72.25" y1="68.4" x2="0.25" y2="68.4" />
                        <line className="cls-2" x1="-72.25" y1={54} x2="0.25" y2={54} />
                        <line className="cls-2" x1="-72.25" y1="39.6" x2="0.25" y2="39.6" />
                        <line className="cls-2" x1="-72.25" y1="25.2" x2="0.25" y2="25.2" />
                        <line className="cls-2" x1="-72.25" y1="10.8" x2="0.25" y2="10.8" />
                        <line className="cls-2" x1="-72.25" y1="61.2" x2="0.25" y2="61.2" />
                        <line className="cls-2" x1="-72.25" y1="46.8" x2="0.25" y2="46.8" />
                        <line className="cls-2" x1="-72.25" y1="32.4" x2="0.25" y2="32.4" />
                        <line className="cls-2" x1="-72.25" y1={18} x2="0.25" y2={18} />
                        <line className="cls-2" x1="-72.25" y1="3.6" x2="0.25" y2="3.6" />
                    </pattern>
                </defs>
                <g id="Black">
                    <path
                        className="cls-3"
                        d="M138.3,321.47V100.16H138V376.84h44.05V321.47Z"
                        transform="translate(-66.36 -94.35)"
                    />
                    <path
                        className="cls-3"
                        d="M356.54,155a66.53,66.53,0,0,0-41.27-53.41q-17.68-7.26-39.91-7.26H275V141.2l.71,0q6.66,0,8.8,5.38t2.13,24.69V298.4q0,24.45-2.05,30.93t-9.4,6.5H275v46.83h.36q23.42,0,41-7.7t27.94-22a66.2,66.2,0,0,0,12.31-31.7q2-17.36,2-59.05V214.83Q358.59,172.11,356.54,155Z"
                        transform="translate(-66.36 -94.35)"
                    />
                    <path
                        className="cls-3"
                        d="M509.79,100.16H460v66.77c.23-1.68.46-3.37.7-5.08q5.51,69.21,11,116.22H460v49h13.55l3.86,49.73h73.53Z"
                        transform="translate(-66.36 -94.35)"
                    />
                    <path
                        className="cls-3"
                        d="M727.39,145a49.82,49.82,0,0,0-12-24.35q-9.57-10.94-27.94-15.72-12.69-3.3-41.49-4.33v47.67a16.63,16.63,0,0,1,5.17,1.69,11.42,11.42,0,0,1,5.47,7.77q1.18,5.31,1.19,24.1V289.34q0,27.69-3.58,33.93-2.1,3.63-8.25,5.15v48.42h7.9q25.82,0,38.63-2.82a50.69,50.69,0,0,0,21.53-9.91q8.72-7.08,12.22-19.65t3.5-49.82v-96.9Q729.78,158.44,727.39,145Z"
                        transform="translate(-66.36 -94.35)"
                    />
                    <path
                        className="cls-3"
                        d="M756.61,270.89v106h71.95V198.94Z"
                        transform="translate(-66.36 -94.35)"
                    />
                    <path
                        className="cls-3"
                        d="M958,100.16V376.84h60.09V100.16Z"
                        transform="translate(-66.36 -94.35)"
                    />
                    <path
                        className="cls-3"
                        d="M1205.74,138.19q-6.33-17.86-27.18-30.85-20.22-12.6-50.56-13v46.83h.32q7.7,0,9.74,6t2,29.73V202h72v-12Q1212.06,156,1205.74,138.19Zm-77.93,90.14v42h14.52v32.81q0,19.31-2.82,26t-10.68,6.67l-.83,0v45.57a47.12,47.12,0,0,0,13.63-5.13q11.2-6.42,18.56-19.23l6.66,19.82h45.21V228.33Z"
                        transform="translate(-66.36 -94.35)"
                    />
                </g>
                <g id="Lines">
                    <rect className="cls-4" y="5.81" width="71.64" height="276.68" />
                    <path
                        className="cls-5"
                        d="M264.08,171.25v129.2q0,24.1,2,29.74t8.95,5.64v46.83q-22-.06-39.54-7.27A66.49,66.49,0,0,1,194.19,322q-2.06-17.1-2.05-59.82V214.83q0-41.69,2-59a66.1,66.1,0,0,1,12.31-31.7q10.34-14.36,27.94-22T275,94.35V141.2a9.68,9.68,0,0,0-7.92,4.33Q264.08,149.89,264.08,171.25Z"
                        transform="translate(-66.36 -94.35)"
                    />
                    <path
                        className="cls-5"
                        d="M460,166.93q-10.38,75.58-13.1,111.14H460v49H447.81l-4.32,49.73H369.1l36.7-276.68H460Z"
                        transform="translate(-66.36 -94.35)"
                    />
                    <path
                        className="cls-5"
                        d="M635.11,147.5v182A46,46,0,0,0,646,328.42v48.42H563.16V100.16H617q16.11,0,29,.46v47.67A61.24,61.24,0,0,0,635.11,147.5Z"
                        transform="translate(-66.36 -94.35)"
                    />
                    <polygon
                        className="cls-4"
                        points="762.2 5.81 762.2 104.59 690.25 176.54 690.25 5.81 762.2 5.81"
                    />
                    <polygon
                        className="cls-4"
                        points="891.64 5.81 891.64 282.49 888.67 282.49 851.24 156.71 851.24 282.49 791.08 282.49 791.08 5.81 851.24 5.81 891.57 130.4 891.57 5.81 891.64 5.81"
                    />
                    <path
                        className="cls-5"
                        d="M1116.87,172.62V305.41q0,18.63,2.39,24.52,2.25,5.55,8.74,5.88v45.57a61.42,61.42,0,0,1-12.79,1.28,68.71,68.71,0,0,1-34-8.81q-15.83-8.79-24-21.79A69,69,0,0,1,1047,324.81q-2.06-14.28-2-42.81V199.79q0-39.64,4.27-57.59t24.53-32.9q20.25-15,52.38-15h1.9v46.83q-6.4.1-8.74,5.11T1116.87,172.62Z"
                        transform="translate(-66.36 -94.35)"
                    />
                </g>
            </svg>
        </div>

    );
};

export default LoadingPage;
