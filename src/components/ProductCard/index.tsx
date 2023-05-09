import {
  CardContainer,
  InfoContainer,
  ProductTitle,
  InfoContent,
  UnityMeasurementTitle,
  UnityMeasurement,
  BrandTitle,
  Brand,
  ButtonContent,
} from "./styles";
import { ProductDTO } from "src/dtos/ProductDTO";

import ProductImage from "@assets/produto1.jpeg";
import { Button } from "@components/Button";

interface ProductProps {
  product_prop: ProductDTO;
  onClick: () => void;
}

export function ProductCard({ product_prop, onClick }: ProductProps) {
  return (
    <CardContainer>
      <ButtonContent>
        <div></div>
        <Button title="X" button_type="delete" onClick={onClick} />
      </ButtonContent>
      <img src={ProductImage} alt="" />
      <InfoContainer>
        <ProductTitle>{product_prop.name}</ProductTitle>
        <InfoContent>
          <div>
            <UnityMeasurementTitle>Uni. medida</UnityMeasurementTitle>
            <UnityMeasurement>
              {product_prop.measurement_unit_type}
            </UnityMeasurement>
          </div>
          <div>
            <BrandTitle>Marca</BrandTitle>
            <Brand>{product_prop.brand}</Brand>
          </div>
        </InfoContent>
      </InfoContainer>
    </CardContainer>
  );
}
