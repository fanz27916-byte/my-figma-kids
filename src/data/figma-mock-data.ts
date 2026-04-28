// Figma 设计模拟数据
// 基于常见的儿童玩具商店网站设计模式

export interface FigmaDesign {
  name: string;
  lastModified: string;
  version: string;
  pages: number;
  components: number;
  colors: string[];
  fonts: string[];
  layout: LayoutData;
  componentsData: ComponentData[];
}

export interface LayoutData {
  header: HeaderData;
  hero: HeroData;
  categories: CategoryData[];
  products: ProductData[];
  about: AboutData;
  footer: FooterData;
}

export interface HeaderData {
  logo: {
    text: string;
    icon: string;
    color: string;
  };
  navItems: NavItem[];
  actions: ActionItem[];
}

export interface NavItem {
  label: string;
  href: string;
  active: boolean;
}

export interface ActionItem {
  icon: string;
  label: string;
  badge?: number;
}

export interface HeroData {
  title: string;
  description: string;
  primaryButton: ButtonData;
  secondaryButton: ButtonData;
  imagePlaceholder: string;
}

export interface ButtonData {
  text: string;
  icon: string;
  variant: 'primary' | 'secondary' | 'accent';
}

export interface CategoryData {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  link: string;
}

export interface ProductData {
  id: number;
  title: string;
  description: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badge?: 'new' | 'sale' | 'popular';
  icon: string;
}

export interface AboutData {
  title: string;
  description: string;
  features: FeatureData[];
}

export interface FeatureData {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface FooterData {
  logo: {
    text: string;
    icon: string;
  };
  description: string;
  socialLinks: SocialLink[];
  quickLinks: LinkGroup[];
  supportLinks: LinkGroup[];
  contactInfo: ContactInfo[];
}

export interface SocialLink {
  platform: string;
  icon: string;
  href: string;
}

export interface LinkGroup {
  title: string;
  links: NavItem[];
}

export interface ContactInfo {
  icon: string;
  text: string;
}

// 模拟设计数据
export const figmaDesign: FigmaDesign = {
  name: "Kids Toys & Games Store Website",
  lastModified: "2024-01-01T00:00:00Z",
  version: "1.0",
  pages: 1,
  components: 15,
  colors: [
    "#FF6B8B", // 粉色 - 主色
    "#4ECDC4", // 青色 - 辅色
    "#FFD166", // 黄色 - 强调色
    "#2D3047", // 深蓝 - 文字色
    "#F9F9F9", // 浅灰 - 背景色
    "#FFFFFF", // 白色
    "#333333", // 深灰
    "#666666"  // 中灰
  ],
  fonts: [
    "Poppins (400) 16px",    // 正文字体
    "Poppins (600) 24px",    // 小标题
    "Poppins (700) 32px",    // 大标题
    "Comic Neue (700) 48px"  // 主标题
  ],
  layout: {
    header: {
      logo: {
        text: "KidzToys",
        icon: "fas fa-puzzle-piece",
        color: "#FF6B8B"
      },
      navItems: [
        { label: "Home", href: "#", active: true },
        { label: "Toys", href: "#", active: false },
        { label: "Games", href: "#", active: false },
        { label: "Categories", href: "#", active: false },
        { label: "About", href: "#", active: false },
        { label: "Contact", href: "#", active: false }
      ],
      actions: [
        { icon: "fas fa-search", label: "Search" },
        { icon: "fas fa-user", label: "Account" },
        { icon: "fas fa-shopping-cart", label: "Cart", badge: 3 }
      ]
    },
    hero: {
      title: "Discover <span class='text-primary'>Fun & Learning</span> with Our Toys",
      description: "Explore our collection of educational toys, games, and puzzles designed to spark creativity and imagination in children of all ages.",
      primaryButton: {
        text: "Shop Now",
        icon: "fas fa-shopping-bag",
        variant: "primary"
      },
      secondaryButton: {
        text: "Watch Video",
        icon: "fas fa-play-circle",
        variant: "secondary"
      },
      imagePlaceholder: "Hero image with toys"
    },
    categories: [
      {
        id: 1,
        title: "Educational",
        description: "STEM toys, puzzles, and learning games",
        icon: "fas fa-brain",
        color: "#FF6B8B",
        link: "#"
      },
      {
        id: 2,
        title: "Outdoor",
        description: "Bikes, scooters, and sports equipment",
        icon: "fas fa-running",
        color: "#4ECDC4",
        link: "#"
      },
      {
        id: 3,
        title: "Creative",
        description: "Art supplies, crafts, and building sets",
        icon: "fas fa-paint-brush",
        color: "#FFD166",
        link: "#"
      },
      {
        id: 4,
        title: "Electronic",
        description: "Interactive toys and video games",
        icon: "fas fa-gamepad",
        color: "#2D3047",
        link: "#"
      }
    ],
    products: [
      {
        id: 1,
        title: "Smart Robot Buddy",
        description: "Interactive AI robot that teaches coding basics",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.5,
        reviewCount: 128,
        badge: "new",
        icon: "fas fa-robot"
      },
      {
        id: 2,
        title: "3D Puzzle World",
        description: "200-piece 3D puzzle with glow-in-the-dark features",
        price: 34.99,
        rating: 5.0,
        reviewCount: 256,
        icon: "fas fa-puzzle-piece"
      },
      {
        id: 3,
        title: "Kids Mountain Bike",
        description: "Lightweight bike with training wheels, ages 5-8",
        price: 149.99,
        originalPrice: 199.99,
        rating: 5.0,
        reviewCount: 89,
        badge: "sale",
        icon: "fas fa-bicycle"
      },
      {
        id: 4,
        title: "Art Studio Set",
        description: "Complete art kit with 100+ supplies for young artists",
        price: 59.99,
        rating: 4.5,
        reviewCount: 167,
        icon: "fas fa-paint-brush"
      }
    ],
    about: {
      title: "Why Choose KidzToys?",
      description: "We believe in the power of play to educate, inspire, and bring joy to children. Every toy in our collection is carefully selected for quality, safety, and educational value.",
      features: [
        {
          title: "Safety Certified",
          description: "All toys meet international safety standards",
          icon: "fas fa-shield-alt",
          color: "#FF6B8B"
        },
        {
          title: "Free Shipping",
          description: "Free delivery on orders over $50",
          icon: "fas fa-shipping-fast",
          color: "#4ECDC4"
        },
        {
          title: "30-Day Returns",
          description: "Easy returns within 30 days",
          icon: "fas fa-undo-alt",
          color: "#FFD166"
        },
        {
          title: "24/7 Support",
          description: "Always here to help you",
          icon: "fas fa-headset",
          color: "#2D3047"
        }
      ]
    },
    footer: {
      logo: {
        text: "KidzToys",
        icon: "fas fa-puzzle-piece"
      },
      description: "Bringing joy and learning to children through quality toys and games since 2020.",
      socialLinks: [
        { platform: "Facebook", icon: "fab fa-facebook", href: "#" },
        { platform: "Instagram", icon: "fab fa-instagram", href: "#" },
        { platform: "Twitter", icon: "fab fa-twitter", href: "#" },
        { platform: "Pinterest", icon: "fab fa-pinterest", href: "#" }
      ],
      quickLinks: {
        title: "Quick Links",
        links: [
          { label: "Home", href: "#", active: false },
          { label: "Toys", href: "#", active: false },
          { label: "Games", href: "#", active: false },
          { label: "Categories", href: "#", active: false },
          { label: "About Us", href: "#", active: false }
        ]
      },
      supportLinks: {
        title: "Support",
        links: [
          { label: "Contact Us", href: "#", active: false },
          { label: "FAQ", href: "#", active: false },
          { label: "Shipping Info", href: "#", active: false },
          { label: "Returns & Exchanges", href: "#", active: false },
          { label: "Privacy Policy", href: "#", active: false }
        ]
      },
      contactInfo: [
        { icon: "fas fa-map-marker-alt", text: "123 Play Street, Toy City" },
        { icon: "fas fa-phone", text: "(123) 456-7890" },
        { icon: "fas fa-envelope", text: "hello@kidztoys.com" },
        { icon: "fas fa-clock", text: "Mon-Fri: 9AM-6PM" }
      ]
    }
  },
  componentsData: [
    {
      id: "header",
      name: "Header",
      type: "NAVIGATION",
      description: "Main navigation header with logo and cart"
    },
    {
      id: "hero",
      name: "Hero Section",
      type: "HERO",
      description: "Main banner with call-to-action"
    },
    {
      id: "category-card",
      name: "Category Card",
      type: "CARD",
      description: "Category display card with icon"
    },
    {
      id: "product-card",
      name: "Product Card",
      type: "CARD",
      description: "Product display card with price and rating"
    },
    {
      id: "feature",
      name: "Feature Item",
      type: "FEATURE",
      description: "Feature display with icon and text"
    },
    {
      id: "footer",
      name: "Footer",
      type: "FOOTER",
      description: "Site footer with links and contact info"
    }
  ]
};

// 设计规范
export const designTokens = {
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px"
  },
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    xl: "24px",
    full: "9999px"
  },
  shadows: {
    sm: "0 2px 4px rgba(0, 0, 0, 0.1)",
    md: "0 4px 8px rgba(0, 0, 0, 0.15)",
    lg: "0 8px 16px rgba(0, 0, 0, 0.2)",
    xl: "0 12px 24px rgba(0, 0, 0, 0.25)"
  },
  transitions: {
    fast: "150ms ease",
    normal: "300ms ease",
    slow: "500ms ease"
  }
};