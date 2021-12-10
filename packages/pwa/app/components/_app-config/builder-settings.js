import {Builder, builder} from '@builder.io/react'

// Be sure to import all of your components where you use <BuilderComponent /> so they are
// bundled and accessible
import '../section-heading/SectionHeading.builder'
import '../promo-grid/promo-grid-tile/PromoGridTile.builder'
import '../promo-grid/PromoGrid.builder'
import '../carousel/Carousel.builder'
// import '../product-grid/ProductGrid.builder'
import '../feature-stack/FeatureStack.builder'

// Product Description Components
import '../product-creator-info/ProductCreatorInfo.builder'
import '../product-features/ProductFeatures.builder'
import '../accordion/DescriptionAccordion.builder'
import '../bg-membership-cta/BgMembershipCta.builder'

// Add your public apiKey here
const YOUR_KEY = 'd62f634c944f478d8867a4026cb3bf89'

builder.init(YOUR_KEY)
