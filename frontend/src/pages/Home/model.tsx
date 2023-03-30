import { lazy } from "react";
import diagram from '../../assets/arch_diag.gif'
import styled from "styled-components";
const Container = lazy(() => import("../../common/Container"));

const PredictionWindow = styled.div`
    width: 100%;
    height: 100%;
`;

const Model = () => {
    return (
        <Container>
            <PredictionWindow>
            <iframe width="1200" height="1000" src="https://datastudio.google.com/embed/reporting/dbc51f58-5858-4b06-88ff-0be6ffb5af7b/page/LmUsC" ></iframe>
            </PredictionWindow>
            <p></p>
        </Container>

    );
};

export default Model;