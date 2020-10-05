/** @jsx jsx */
/* eslint-disable jsx-a11y/accessible-emoji */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { fontSize } from "../styles/variables";
import { breakpoints } from "../styles/breakpoints";
import { Mission } from "../styles/components/mission";
import { Interrupt } from "../styles/components/interrupt";
import { NoOrphan } from "../styles/components/noOrphan";

const Subheader = styled.h2(
    breakpoints({
        fontSize: fontSize.subheader,
        lineHeight: 1.45,
        letterSpacing: 1.1,
        fontWeight: 400,

        margin: ["0 0 30px", "0 0 45px"],
        width: [undefined, "65%"],
    })
);

export const Header = () => (
    <header>
        {/** Mission Statement */}
        <Mission>
            I'm an interdisciplinary{" "}
            <NoOrphan>
                <Interrupt>UI/UX dev</Interrupt> 👨🏻‍💻{" "}
            </NoOrphan>
            and{" "}
            <NoOrphan>
                <Interrupt>designer</Interrupt> 💅🏻
            </NoOrphan>{" "}
            from <NoOrphan>Philly. 🏙</NoOrphan> Right now, I work as a{" "}
            <Interrupt>front end dev</Interrupt> at the Barnes Foundation — an{" "}
            art <NoOrphan>museum 🎨</NoOrphan> in town. I{" "}
            <NoOrphan>design ✨</NoOrphan> and <NoOrphan>write ✍🏻</NoOrphan>{" "}
            software to solve people's problems.
        </Mission>

        {/** Sub-header */}
        <Subheader>
            I use a range of client-side technologies, like{" "}
            <NoOrphan>
                <Interrupt small>React</Interrupt> ⚛️
            </NoOrphan>{" "}
            or <Interrupt small>Vue</Interrupt> for the{" "}
            <NoOrphan>‘net, 🌐</NoOrphan> <Interrupt small>Kotlin</Interrupt>{" "}
            for <NoOrphan>Android 🤖,</NoOrphan> or{" "}
            <Interrupt small>React Native</Interrupt> for{" "}
            <NoOrphan>iOS. 🍏</NoOrphan> That said, my{" "}
            <NoOrphan>portfolio 💼</NoOrphan> is largely dedicated to what I{" "}
            <NoOrphan>love 💕</NoOrphan> to create most: maintainable,
            extensible React web applications written in{" "}
            <NoOrphan>
                <Interrupt small>TypeScript</Interrupt>.
            </NoOrphan>
        </Subheader>
    </header>
);
