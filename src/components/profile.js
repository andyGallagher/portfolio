/** @jsx jsx */
import { jsx } from "@emotion/core";
import styled from "@emotion/styled";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Social } from "./social";
import { Mission } from "../styles/components/mission";
import { Interrupt } from "../styles/components/interrupt";
import { color } from "../styles/variables";
import { breakpoints } from "../styles/breakpoints";

const query = graphql`
    query ProfilePictureQuery {
        file(relativePath: { eq: "profile.jpg" }) {
            childImageSharp {
                fluid {
                    aspectRatio
                    base64
                    sizes
                    src
                    srcSet
                }
            }
        }
    }
`;

const ProfileFrame = styled.section(
    breakpoints({
        display: [undefined, "flex"],
        flexDirection: [undefined, "column"],
        borderTop: [`1px dashed rgba(${color.primary.rgb}, 0.4)`, "none"],
        paddingTop: ["30px", 0],
    })
);

export const Profile = () => {
    const data = useStaticQuery(query);

    return (
        <ProfileFrame>
            <Mission>
                <Interrupt>About</Interrupt>
            </Mission>
            <Img
                fluid={data.file.childImageSharp.fluid}
                css={breakpoints({
                    width: ["80%", "300px"],
                })}
            />
            <Social />
        </ProfileFrame>
    );
};
