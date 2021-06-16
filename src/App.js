import React from "react";
import ProductList from "./components/ProductList";
import {
  Container,
  Row,
  Layout,
  InnerLeftLayout,
  InnerRightLayout,
} from "./styles";
import Cart from "./components/Cart";

function App() {
  return (
    <Container>
      <Layout>
        <InnerLeftLayout>
          <Row>
            <ProductList />
          </Row>
        </InnerLeftLayout>
        <InnerRightLayout>
          <Cart />
        </InnerRightLayout>
      </Layout>
    </Container>
  );
}

export default App;
