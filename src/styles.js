import styled from "styled-components";

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  margin-right: auto;
  margin-left: auto;
  @media only screen and (max-width: 767px) {
    max-width: 100%;
  }
  @media only screen and (min-width: 576px) and (max-width: 767px) {
    max-width: 540px;
  }
  @media only screen and (min-width: 768px) and (max-width: 991px) {
    max-width: 720px;
  }
  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    max-width: 960px;
  }
  @media only screen and (min-width: 1400px) {
    max-width: 1320px;
  }
  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`;

export const Row = styled.div`
  margin: 0 -5px;
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Column = styled.div`
  float: left;
  width: 30%;
  padding: 0 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 600px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

export const Layout = styled.div`
  &:after {
    content: "";
    display: table;
    clear: both;
  }
`;

export const InnerLeftLayout = styled.div`
  float: left;
  width: 70%;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0;
  }
`;

export const InnerRightLayout = styled.div`
  float: left;
  width: 30%;
  background-color: #fff;
  padding-left: 20px;
`;
