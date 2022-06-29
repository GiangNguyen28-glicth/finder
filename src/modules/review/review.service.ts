import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductService } from '../product/product.service';
import { User } from '../user/entities/user.entities';
import { UserService } from '../user/user.service';
import { ReviewInput } from './dto/review.input';
import { ProductReview } from './entities/review.entities';
import { ProductReviewDocument } from './schemas/review.schema';

@Injectable()
export class ReviewService {
  constructor(
    @InjectModel(ProductReview.name)
    private productReviewModel: Model<ProductReviewDocument>,
    private productService: ProductService,
  ) {}
  async createReview(input: ReviewInput, user: User): Promise<boolean> {
    if (!(await this.productService.checkProductExists(input.productId))) {
      throw new HttpException(
        'Sản phẩm hiện không khả dụng',
        HttpStatus.BAD_REQUEST,
      );
    }
    await this.productReviewModel.create({
      product: input.productId,
      user: user._id,
      rating: input.rating,
    });
    return true;
  }

  async countReview(productId: string): Promise<number> {
    if (!(await this.productService.checkProductExists(productId))) {
      throw new HttpException(
        'Sản phẩm hiện không khả dụng',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.productReviewModel.find({ product: productId }).count();
  }

  async updateReview(input: ReviewInput, user: User): Promise<boolean> {
    await this.productReviewModel.findOneAndUpdate({
      product: input.productId,
      user: user._id,
    });
    return true;
  }

  async checkExistsReview(productId: string, userId: string): Promise<boolean> {
    const review = await this.productReviewModel.findOne({
      product: productId,
      user: userId,
    });
    if (!review) {
      return false;
    }
    return true;
  }
}
