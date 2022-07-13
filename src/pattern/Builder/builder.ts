import { SortProductEnum } from '../../constants/enum';

export interface Builder {
  addRangePrice(minPrice: number, maxPrice): Builder;
  addName(name: string): Builder;
  addDiscount(isDiscount: boolean): Builder;
  addProductId(productId: string): Builder;
  addSortOption(az: SortProductEnum): Builder;
  buildQuery(): any;
}
