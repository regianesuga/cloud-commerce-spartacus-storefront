import { NgModule } from '@angular/core';
import { HamburgerMenuModule } from '../layout/index';
import { AnonymousConsentManagementBannerModule } from './anonymous-consent-management/anonymous-consent-management.module';
import { AsmModule } from './asm/asm.module';
import { CartComponentModule } from './cart/cart.module';
import { CheckoutComponentModule } from './checkout/checkout.module';
import { BannerCarouselModule } from './content/banner-carousel/banner-carousel.module';
import {
  BannerModule,
  CmsParagraphModule,
  LinkModule,
  TabParagraphContainerModule,
} from './content/index';
import { QualtricsModule, SiteContextSelectorModule } from './misc/index';
import {
  AddressBookModule,
  CloseAccountModule,
  ConsentManagementModule,
  ForgotPasswordModule,
  NotificationPreferenceModule,
  OrderDetailsModule,
  OrderHistoryModule,
  PaymentMethodsModule,
  ResetPasswordModule,
  UpdateEmailModule,
  UpdatePasswordModule,
  UpdateProfileModule,
  MyInterestsModule,
} from './myaccount/index';
import {
  BreadcrumbModule,
  CategoryNavigationModule,
  FooterNavigationModule,
  NavigationModule,
  SearchBoxModule,
} from './navigation/index';
import { OrderConfirmationModule } from './order-confirmation/index';
import {
  ProductCarouselModule,
  ProductIntroModule,
  ProductListModule,
  ProductReferencesModule,
  ProductTabsModule,
  StockNotificationModule,
} from './product/index';
import { ProductImagesModule } from './product/product-images/product-images.module';
import { ProductSummaryModule } from './product/product-summary/product-summary.module';
import { StoreFinderModule } from './storefinder/store-finder.module';
import { UserComponentModule } from './user/user.module';
import {
  BudgetsListModule,
  BudgetDetailsModule,
  BudgetEditModule, BudgetCreateModule,
} from './organization/index';

@NgModule({
  imports: [
    AnonymousConsentManagementBannerModule,
    AsmModule,
    HamburgerMenuModule,
    CmsParagraphModule,
    LinkModule,
    BannerModule,
    CategoryNavigationModule,
    NavigationModule,
    FooterNavigationModule,
    BreadcrumbModule,
    SearchBoxModule,
    SiteContextSelectorModule,
    QualtricsModule,
    AddressBookModule,
    OrderHistoryModule,
    ProductListModule,
    ProductTabsModule,
    ProductCarouselModule,
    ProductReferencesModule,
    OrderDetailsModule,
    PaymentMethodsModule,
    UpdateEmailModule,
    UpdatePasswordModule,
    UpdateProfileModule,
    ConsentManagementModule,
    CloseAccountModule,
    CartComponentModule,
    TabParagraphContainerModule,
    OrderConfirmationModule,
    StoreFinderModule,
    ProductImagesModule,
    ProductSummaryModule,
    ProductIntroModule,
    CheckoutComponentModule,
    ForgotPasswordModule,
    ResetPasswordModule,
    BannerCarouselModule,
    UserComponentModule,
    NotificationPreferenceModule,
    MyInterestsModule,
    StockNotificationModule,
    BudgetsListModule,
    BudgetCreateModule,
    BudgetDetailsModule,
    BudgetEditModule,
  ],
})
export class CmsLibModule {}
