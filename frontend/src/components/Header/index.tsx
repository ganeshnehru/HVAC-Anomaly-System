import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";
import UserIcon from '../../assets/Sample_User_Icon.png'
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  UserSpan,
} from "./styles";
import { useHistory } from 'react-router-dom'

const Header = ({ t }: any) => {
  const saved = localStorage.getItem("loggedIn");
  console.log("the logged in status is ",saved)

  const [visible, setVisibility] = useState(false);
  const history = useHistory();

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: "smooth",
      });
      setVisibility(false);
    };
    return (
      <>
        <CustomNavLinkSmall onClick={() => history.push("/")}>
          <Span>{t("About")}</Span>
        </CustomNavLinkSmall>
        {/* <CustomNavLinkSmall onClick={() => scrollTo("mission")}>
          <Span>{t("Mission")}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo("product")}>
          <Span>{t("Product")}</Span>
        </CustomNavLinkSmall> */}
        <CustomNavLinkSmall onClick={() => history.push("/architecture")}>
          <Span>{t("Architecture")}</Span>
        </CustomNavLinkSmall>
        {saved==="true"?"":<CustomNavLinkSmall onClick={() => history.push("/login")}>
          <Span>{t("Login")}</Span>
        </CustomNavLinkSmall>}
        {saved==="true"?<CustomNavLinkSmall onClick={() => history.push("/dashboard")}>
          <Span>{t("Dashboard")}</Span>
        </CustomNavLinkSmall>:""}
        {saved==="true"?<CustomNavLinkSmall onClick={() => history.push("/historical-analysis")}>
          <Span>{t("Historical Analysis")}</Span>
        </CustomNavLinkSmall>:""}
        {saved==="true"?<CustomNavLinkSmall onClick={()=>{
          localStorage.setItem("loggedIn","false")
          history.push("/")
          history.go(0)
          }}>
          <Span>{t("Logout")}</Span>
        </CustomNavLinkSmall>:""}
        {saved==="true"?<UserSpan>{t("HVAC-Owner")} </UserSpan>:""}

        
        {/* <CustomNavLinkSmall
          style={{ width: "180px" }}
          onClick={() => scrollTo("contact")}
        >
          <Span>
            <Button>{t("Contact")}</Button>
          </Span>
        </CustomNavLinkSmall> */}
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="logo.svg" width="101px" height="64px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
