import Food1 from "../../image/Solutions/Food2.png";
import Food2 from "../../image/Solutions/Food3.png";
import Food3 from "../../image/Solutions/Food1.png";

export const FoodAndBeverage = {
    title: "Food & Beverage Services",
    content: [
      {
        title: "Streamline Food Ordering with WhatsApp",
        bg: "bg-light",
        description: [
          "Allow customers to place orders and receive instant confirmations via WhatsApp.",
          "Share digital menus, simplifying the browsing experience for your customers.",
          "Provide real-time updates on order status, ensuring transparency and trust.",
          "Enable seamless communication for support, resolving customer queries instantly."
        ],
        image: Food1 // Replace with the actual path
      },
      {
        title: "Enhance Customer Experience with RCS",
        bg: "bg-white",
        description: [
          "Showcase mouth-watering food images and videos through rich RCS messages.",
          "Create interactive buttons for quick table reservations or online orders.",
          "Send personalized offers and promotions based on customer preferences.",
          "Engage customers with real-time notifications about discounts and events."
        ],
        image: Food2 // Replace with the actual path
      },
      {
        title: "Ensure Security with OTPs and Voice Alerts",
        bg: "bg-light",
        description: [
          "Secure customer payments with OTP-based verification for every transaction.",
          "Provide automated voice call updates for delivery status or bulk orders.",
          "Notify customers about loyalty rewards and special deals via SMS and WhatsApp.",
          "Ensure account safety with two-factor authentication for login and purchases."
        ],
        image: Food3 // Replace with the actual path
      }
    ]
  };
  
  export const WhyChooseFood = {
    title: "Why Choose Our Food & Beverage Services",
    items: [
      {
        id: 1,
        icon: "bi-chat-dots",
        title: "Instant Order Updates",
        anime: "zoom-in-right",
        description:
          "Keep customers informed with real-time notifications about order status, ensuring a seamless experience from confirmation to delivery."
      },
      {
        id: 2,
        icon: "bi-wallet2",
        title: "Simplified Payments",
        anime: "zoom-in-up",
        description:
          "Enable quick and secure transactions with OTPs and payment links, offering convenience and peace of mind to customers."
      },
      {
        id: 3,
        icon: "bi-basket3",
        title: "Interactive Menus",
        anime: "zoom-in-left",
        description:
          "Share visually appealing digital menus through RCS and WhatsApp, making it easier for customers to browse, customize, and place orders."
      },
      {
        id: 4,
        icon: "bi-megaphone",
        title: "Promote Daily Specials",
        anime: "zoom-in-right",
        description:
          "Send personalized messages highlighting today’s specials, combo offers, or seasonal promotions to drive more orders."
      },
      {
        id: 5,
        icon: "bi-bell",
        title: "Automated Reminders",
        anime: "zoom-in-down",
        description:
          "Reduce missed reservations or deliveries by sending timely reminders and follow-ups to customers automatically."
      },
      {
        id: 6,
        icon: "bi-people",
        title: "Customer Retention Strategies",
        anime: "zoom-in-left",
        description:
          "Engage customers post-order with feedback requests, loyalty rewards updates, and personalized thank-you messages."
      }
    ]
  };
  

export const FoodFAQ = {
  title: "Food & Beverage Services - FAQs",
  faqs: [
    {
      id: 1,
      question: "How can WhatsApp improve food ordering?",
      answer:
        "WhatsApp enables instant communication for order confirmations, menu sharing, and real-time support. It simplifies the entire food ordering process for customers and businesses alike."
    },
    {
      id: 2,
      question: "What is RCS, and how does it help in food services?",
      answer:
        "RCS enhances customer engagement with media-rich messages like high-quality images, carousels, and quick action buttons. It's ideal for showcasing menu items, offers, and easy order placements."
    },
    {
      id: 3,
      question: "How secure are OTPs for food orders?",
      answer:
        "OTPs ensure secure transactions by verifying payments and order confirmations. They add an extra layer of security for account creation and large orders."
    },
    {
      id: 4,
      question: "Can SMS and Voice Calls improve delivery services?",
      answer:
        "Yes! SMS and voice calls can be used to notify customers about order tracking, delivery times, and status updates, ensuring a smooth experience."
    },
    {
      id: 5,
      question: "How do messaging services help with loyalty programs?",
      answer:
        "Messaging services can send personalized updates about loyalty rewards, points accumulation, and exclusive offers to keep customers engaged and returning."
    }
  ]
};

export const FoodTimeline = {
  title: "Enhance Food & Beverage Operations with Messaging Solutions",
  items: [
    {
      id: 1,
      stepTitle: "Instant Orders",
      title: "Simplify Food Ordering",
      description:
        "Enable instant order placement and confirmations using WhatsApp. Share digital menus, payment links, and tracking updates for a smooth ordering experience.",
      icon: "bi-basket3",
      anime: "fade-right"
    },
    {
      id: 2,
      stepTitle: "Engage Customers",
      title: "Boost Engagement with RCS",
      description:
        "Use RCS to share attractive food images, combo deals, and interactive menus. Leverage quick action buttons to streamline reservations and order customizations.",
      icon: "bi-chat-left-text",
      anime: "fade-left"
    },
    {
      id: 3,
      stepTitle: "Secure Transactions",
      title: "Ensure Security with OTPs",
      description:
        "Provide secure OTPs for payments and account verification. Ensure customer data safety with encrypted communications and two-factor authentication.",
      icon: "bi-shield-lock",
      anime: "fade-right"
    },
    {
      id: 4,
      stepTitle: "Personalized Offers",
      title: "Deliver Location-Based Promotions",
      description:
        "Send personalized deals and discounts based on customers’ locations. Engage them with loyalty rewards and exclusive offers for frequent orders.",
      icon: "bi-geo-alt",
      anime: "fade-left"
    }
  ]
};
