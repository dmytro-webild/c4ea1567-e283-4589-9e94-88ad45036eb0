"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FeatureCardTwentySeven from '@/components/sections/feature/FeatureCardTwentySeven';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="shift-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="compact"
        sizing="mediumLargeSizeMediumTitles"
        background="blurBottom"
        cardStyle="layered-gradient"
        primaryButtonStyle="shadow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "#hero"},
        {
          name: "About Us",          id: "#about"},
        {
          name: "Menu",          id: "#menu"},
        {
          name: "Why Choose Us",          id: "#why-us"},
        {
          name: "Gallery",          id: "#gallery"},
        {
          name: "Reviews",          id: "#reviews"},
        {
          name: "Contact",          id: "#contact"},
      ]}
      brandName="Maria's Mexican Fast Food"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardCarousel
      background={{
        variant: "downward-rays-animated-grid"}}
      title="Authentic Mexican Flavors Made Fresh Every Day"
      description="Serving delicious tacos, burritos, quesadillas, and more in Goodland, Kansas. Experience the true taste of Mexico with every bite."
      buttons={[
        {
          text: "Order Now",          href: "#menu"},
        {
          text: "View Menu",          href: "#menu"},
        {
          text: "Call Us",          href: "tel:+17858903100"},
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/taco-with-beef-tomato-cilantro-generative-ai_188544-12135.jpg",          imageAlt: "3D floating taco"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-paper-tacos-blue-background_23-2148764306.jpg",          imageAlt: "3D floating burrito"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/plate-with-tasty-nachos_23-2148181553.jpg",          imageAlt: "3D floating nachos"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/floating-sliced-lime-with-clear-background_23-2149675105.jpg",          imageAlt: "3D floating lime slice"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-chili-peppers-tomatoes_23-2148834171.jpg",          imageAlt: "3D floating red chili pepper"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/fresh-raw-avocado_658428-235.jpg",          imageAlt: "3D floating avocado"},
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <InlineImageSplitTextAbout
      useInvertedBackground={false}
      heading={[
        {
          type: "text",          content: "Welcome to Maria's Mexican Fast Food, a cherished family-friendly restaurant."},
        {
          type: "image",          src: "http://img.b2bpic.net/free-photo/friends-eating-restaurant_23-2147680645.jpg",          alt: "Maria's Mexican Fast Food interior"},
        {
          type: "text",          content: "We pride ourselves on serving authentic Mexican cuisine, crafted daily with the freshest ingredients and traditional flavors that transport you straight to Mexico."},
      ]}
    />
  </div>

  <div id="menu" data-section="menu">
      <ProductCardTwo
      animationType="scale-rotate"
      textboxLayout="default"
      gridVariant="bento-grid"
      useInvertedBackground={true}
      products={[
        {
          id: "tacos",          brand: "Maria's",          name: "Street Tacos",          price: "$2.99",          rating: 5,
          reviewCount: "240",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwRgSUJbU8iv63fw1hokNLBOU6/uploaded-1781087915135-tca5elfh.jpg",          imageAlt: "Delicious street tacos"},
        {
          id: "burritos",          brand: "Maria's",          name: "Giant Burritos",          price: "$8.99",          rating: 4,
          reviewCount: "180",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-hand-holding-tasty-taco_23-2148629337.jpg",          imageAlt: "Flavorful giant burrito"},
        {
          id: "quesadillas",          brand: "Maria's",          name: "Cheesy Quesadillas",          price: "$7.49",          rating: 5,
          reviewCount: "150",          imageSrc: "http://img.b2bpic.net/free-photo/carbonara_1203-3620.jpg",          imageAlt: "Crispy cheesy quesadilla"},
        {
          id: "nachos",          brand: "Maria's",          name: "Loaded Nachos",          price: "$9.99",          rating: 5,
          reviewCount: "200",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwRgSUJbU8iv63fw1hokNLBOU6/uploaded-1781087915135-5ooramg9.jpg",          imageAlt: "Generous loaded nachos"},
        {
          id: "enchiladas",          brand: "Maria's",          name: "Classic Enchiladas",          price: "$9.49",          rating: 4,
          reviewCount: "160",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwRgSUJbU8iv63fw1hokNLBOU6/uploaded-1781087915135-inzz3kez.jpg",          imageAlt: "Traditional enchiladas plate"},
        {
          id: "combo-meals",          brand: "Maria's",          name: "Mexican Combo Plates",          price: "$11.99",          rating: 5,
          reviewCount: "100",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EwRgSUJbU8iv63fw1hokNLBOU6/uploaded-1781087915135-0p22k40g.jpg",          imageAlt: "Mexican combo meal"},
      ]}
      title="Our Delicious Menu"
      description="Explore a world of authentic Mexican flavors with our handcrafted dishes, made fresh just for you."
    />
  </div>

  <div id="why-us" data-section="why-us">
      <FeatureCardTwentySeven
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "fresh-ingredients",          title: "Fresh Ingredients",          descriptions: [
            "We use only the freshest, high-quality ingredients sourced locally whenever possible."],
          imageSrc: "http://img.b2bpic.net/free-photo/vegetable-tray-with-tomatoes-herbs-cucumber_114579-4528.jpg",          imageAlt: "Fresh vegetables and ingredients"},
        {
          id: "authentic-recipes",          title: "Authentic Mexican Recipes",          descriptions: [
            "Our dishes are prepared following traditional family recipes passed down through generations."],
          imageSrc: "http://img.b2bpic.net/free-photo/top-view-vegetables-notebook-pencil-bell-peppers-onion-tomatoes-spices-garlic_140725-72536.jpg",          imageAlt: "Traditional Mexican cooking"},
        {
          id: "fast-service",          title: "Fast & Friendly Service",          descriptions: [
            "Enjoy quick and efficient service without compromising on the quality or taste of your meal."],
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-pasta-machine-near-ingredients_23-2147849786.jpg",          imageAlt: "Fast food counter with friendly staff"},
        {
          id: "family-friendly",          title: "Family-Friendly Atmosphere",          descriptions: [
            "Bring the whole family! Our welcoming environment is perfect for all ages to enjoy."],
          imageSrc: "http://img.b2bpic.net/free-photo/friends-shaking-hands-restaurant_23-2148395405.jpg",          imageAlt: "Happy family eating in a restaurant"},
        {
          id: "quality-food",          title: "Uncompromised Quality",          descriptions: [
            "Every dish is a testament to our commitment to quality, from preparation to presentation."],
          imageSrc: "http://img.b2bpic.net/free-photo/assortment-meat-grilled-barbecue_23-2147841027.jpg",          imageAlt: "High-quality plated Mexican dish"},
        {
          id: "affordable-prices",          title: "Affordable Prices",          descriptions: [
            "Savor delicious Mexican food at prices that won't break the bank, offering great value."],
          imageSrc: "http://img.b2bpic.net/free-photo/dia-de-los-muertos-illustration-with-bread_23-2152020276.jpg",          imageAlt: "Affordable prices concept"},
      ]}
      title="Why Choose Maria's Mexican Fast Food?"
      description="Discover what makes Maria's the favorite spot for authentic Mexican cuisine in Goodland, Kansas. We are committed to excellence in every dish."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <ProductCardTwo
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={true}
      products={[
        {
          id: "gallery-1",          brand: "Maria's",          name: "Carne Asada Plate",          price: "$0.00",          rating: 5,
          reviewCount: "Image",          imageSrc: "http://img.b2bpic.net/free-photo/raw-cooked-steak-served-with-potato-tomato-sauce_140725-2565.jpg",          imageAlt: "Delicious Carne Asada Plate"},
        {
          id: "gallery-2",          brand: "Maria's",          name: "Sizzling Fajitas",          price: "$0.00",          rating: 5,
          reviewCount: "Image",          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-taco-ingredients_23-2148764322.jpg",          imageAlt: "Sizzling chicken fajitas"},
        {
          id: "gallery-3",          brand: "Maria's",          name: "Fresh Guacamole & Chips",          price: "$0.00",          rating: 5,
          reviewCount: "Image",          imageSrc: "http://img.b2bpic.net/free-photo/colourful-set-mexican-food_23-2148181581.jpg",          imageAlt: "Fresh guacamole with tortilla chips"},
        {
          id: "gallery-4",          brand: "Maria's",          name: "Refreshing Horchata",          price: "$0.00",          rating: 5,
          reviewCount: "Image",          imageSrc: "http://img.b2bpic.net/free-photo/delicious-cocktail-table_23-2150251383.jpg",          imageAlt: "Traditional Mexican horchata"},
        {
          id: "gallery-5",          brand: "Maria's",          name: "Cozy Interior",          price: "$0.00",          rating: 5,
          reviewCount: "Image",          imageSrc: "http://img.b2bpic.net/free-photo/table-dinner-set_74190-1535.jpg",          imageAlt: "Interior of Maria's Mexican Fast Food"},
        {
          id: "gallery-6",          brand: "Maria's",          name: "Welcoming Exterior",          price: "$0.00",          rating: 5,
          reviewCount: "Image",          imageSrc: "http://img.b2bpic.net/free-photo/famous-view-burano-island-venice_268835-11978.jpg",          imageAlt: "Exterior of Maria's Mexican Fast Food"},
      ]}
      title="Our Culinary Creations"
      description="Feast your eyes on some of our most popular and visually stunning Mexican dishes. A true treat for your senses!"
      animationType="scale-rotate"
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardTen
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          title: "Absolutely Delicious!",          quote: "Maria's Mexican Fast Food consistently delivers fresh, flavorful, and authentic Mexican dishes. The tacos are a must-try!",          name: "Sophia R.",          role: "Local Foodie",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-blonde-businesswoman-formal-dressed-isolated-dark-textured-background_613910-5399.jpg",          imageAlt: "Sophia R. avatar"},
        {
          id: "2",          title: "Best Mexican in Town",          quote: "I've tried all the Mexican places in Goodland, and Maria's is hands down the best. Great portions and amazing taste every time.",          name: "David M.",          role: "Regular Customer",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-bearded-smiling-black-man-wool-suit_613910-16049.jpg",          imageAlt: "David M. avatar"},
        {
          id: "3",          title: "Family Favorite!",          quote: "Our family loves coming to Maria's. The atmosphere is wonderful, and there's something delicious for everyone, even the picky eaters!",          name: "Emily P.",          role: "Happy Parent",          imageSrc: "http://img.b2bpic.net/free-photo/smiling-african-teenage-girl-looking-camera_23-2147839599.jpg",          imageAlt: "Emily P. avatar"},
        {
          id: "4",          title: "Fast and Fresh!",          quote: "I'm always amazed at how quickly they get my order ready without sacrificing an ounce of freshness or flavor. Perfect for a lunch break.",          name: "Michael S.",          role: "Business Professional",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-young-handsome-modern-man-wearing-glasses-denim-jacket-yellow-background-with-happy-face-standing-smiling-with-confident-smile-showing-teeth_839833-30354.jpg",          imageAlt: "Michael S. avatar"},
        {
          id: "5",          title: "Hidden Gem!",          quote: "So glad I found Maria's! It's a true hidden gem in Goodland. The enchiladas are divine, and the staff is always so welcoming.",          name: "Jessica L.",          role: "New Resident",          imageSrc: "http://img.b2bpic.net/free-photo/picture-cheerful-young-caucasian-female-male-holds-their-child-hands-smiles-rejoices_132075-10480.jpg",          imageAlt: "Jessica L. avatar"},
      ]}
      title="What Our Customers Say"
      description="Don't just take our word for it! Read honest feedback from our cherished customers about their dining experience at Maria's."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={true}
      title="Visit or Contact Us"
      description="We'd love to hear from you! Whether you have a question, feedback, or want to place a large order, reach out to Maria's Mexican Fast Food.\n\n**Address:** 2320 Commerce Rd, Goodland, KS 67735, United States\n**Phone:** +1 785-890-3100\n\n**Business Hours:**\nMonday – Saturday: 9:00 AM – 8:00 PM\nSunday: Closed"
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Your Message",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/young-couple-with-mexican-flags-street_23-2149373041.jpg"
      imageAlt="Exterior view of Maria's Mexican Fast Food"
      mediaAnimation="opacity"
      mediaPosition="right"
      buttonText="Send Message"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseReveal
      logoSrc="http://img.b2bpic.net/free-photo/three-fish-tacos-with-cabbage-lime-dark-plate_84443-94440.jpg"
      logoAlt="Maria's Mexican Fast Food Logo"
      logoText="Maria's Mexican Fast Food"
      columns={[
        {
          title: "Quick Links",          items: [
            {
              label: "Home",              href: "#hero"},
            {
              label: "Menu",              href: "#menu"},
            {
              label: "About Us",              href: "#about"},
            {
              label: "Reviews",              href: "#reviews"},
          ],
        },
        {
          title: "Contact Info",          items: [
            {
              label: "2320 Commerce Rd, Goodland, KS",              href: "https://maps.app.goo.gl/JWdvvoKdvHWcqzBa8"},
            {
              label: "+1 785-890-3100",              href: "tel:+17858903100"},
            {
              label: "Goodland, KS 67735",              href: "https://maps.app.goo.gl/JWdvvoKdvHWcqzBa8"},
          ],
        },
        {
          title: "Hours",          items: [
            {
              label: "Mon - Sat: 9:00 AM - 8:00 PM",              href: "#"},
            {
              label: "Sunday: Closed",              href: "#"},
            {
              label: "Google Maps",              href: "https://maps.app.goo.gl/JWdvvoKdvHWcqzBa8"},
          ],
        },
      ]}
      copyrightText="© 2024 Maria's Mexican Fast Food. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
