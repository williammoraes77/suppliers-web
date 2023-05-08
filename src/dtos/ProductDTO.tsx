export type ProductDTO = {
  id: number;
  name: string;
  measurement_unit_type: "unidade" | "quilograma" | "metro";
  brand: string;
  picture?: string;
};
