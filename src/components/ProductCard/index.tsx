import {
  CardContainer,
  InfoContainer,
  ProductTitle,
  InfoContent,
  UnityMeasurementTitle,
  UnityMeasurement,
  BrandTitle,
  Brand,
} from "./styles";
import { ProductDTO } from "src/dtos/ProductDTO";

import ProductImage from "@assets/produto1.jpeg";

interface ProductProps {
  product_prop: ProductDTO;
}

export function ProductCard({ product_prop }: ProductProps) {
  return (
    <CardContainer>
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
