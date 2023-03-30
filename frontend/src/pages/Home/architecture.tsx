import { lazy } from "react";
import diagram from '../../assets/arch_diag.gif'
import diagram_two from '../../assets/anomaly_detect.png'
import styled from "styled-components";
const Container = lazy(() => import("../../common/Container"));

const ArchitectureGif = styled.img`
    width: 100%;
    height: 100%;
`;

const Architecture = () => {
    return (
        <Container>
            <h1>Streaming Anomaly</h1>
            <ArchitectureGif src={diagram} alt="loading"></ArchitectureGif>
            <h1>Batch Prediction</h1>
            <ArchitectureGif src={diagram_two} alt="loading"></ArchitectureGif>
        </Container>

    );
};

export default Architecture;