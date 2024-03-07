import axios from "axios";
import { UpdateProductDto, CreateProductDto } from "../dtos/product.dto";
import { IProduct } from "../models/product.model";
import { ProductServiceDriver } from "../models/productService.model";

export class ProductHttpService implements ProductServiceDriver {
  private url = 'https://api.escuelajs.co/api/v1/products';

  async getAll() {
    const {data} = await axios.get<IProduct[]>(this.url);
    return data
  }

  async update(id: IProduct['id'], changes: UpdateProductDto) {
    const { data } = await axios.put<Promise<IProduct>>(`${this.url}/${id}`, changes)
    return data
  }

  async create(dto: CreateProductDto) {
    const { data } = await axios.post<Promise<IProduct>>(this.url, dto)
    return data
  }

  async findOne(id: IProduct['id']) {
    const { data } = await axios.get<Promise<IProduct>>(`${this.url}/${id}`)
    return data
  }
}
