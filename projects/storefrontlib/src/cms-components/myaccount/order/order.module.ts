import { NgModule } from '@angular/core';
import { OrderHistoryModule } from './order-history/order-history.module';
import { OrderReturnRequestListModule } from './return-request-list/order-return-request-list.module';
import { OrderReturnRequestDetailModule } from './return-request-detail/return-request-detail.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { OrderCancelOrReturnModule } from './cancellations-returns/cancel-or-return.module';

@NgModule({
  imports: [
    OrderHistoryModule,
    OrderDetailsModule,
    OrderCancelOrReturnModule,
    OrderReturnRequestListModule,
    OrderReturnRequestDetailModule,
  ],
})
export class OrderModule {}
