<template>
  <div class="home">
    <!-- Header/Navigation -->
    <header class="header">
      <div class="container">
        <nav class="navbar">
          <div class="logo">
            <i :class="figmaDesign.layout.header.logo.icon"></i>
            <span class="logo-text">{{ figmaDesign.layout.header.logo.text }}</span>
          </div>
          
          <div class="nav-links">
            <a 
              v-for="item in figmaDesign.layout.header.navItems" 
              :key="item.label"
              :href="item.href" 
              :class="['nav-link', { active: item.active }]"
            >
              {{ item.label }}
            </a>
          </div>
          
          <div class="nav-actions">
            <button 
              v-for="action in figmaDesign.layout.header.actions" 
              :key="action.label"
              class="icon-btn"
              :class="{ 'cart-btn': action.badge }"
            >
              <i :class="action.icon"></i>
              <span v-if="action.badge" class="cart-count">{{ action.badge }}</span>
            </button>
          </div>
        </nav>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title" v-html="figmaDesign.layout.hero.title"></h1>
            <p class="hero-description">{{ figmaDesign.layout.hero.description }}</p>
            <div class="hero-actions">
              <button :class="['btn', 'btn-lg', `btn-${figmaDesign.layout.hero.primaryButton.variant}`]">
                <i :class="figmaDesign.layout.hero.primaryButton.icon"></i>
                {{ figmaDesign.layout.hero.primaryButton.text }}
              </button>
              <button :class="['btn', 'btn-lg', `btn-${figmaDesign.layout.hero.secondaryButton.variant}`]">
                <i :class="figmaDesign.layout.hero.secondaryButton.icon"></i>
                {{ figmaDesign.layout.hero.secondaryButton.text }}
              </button>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-placeholder">
              <i class="fas fa-child"></i>
              <i class="fas fa-robot"></i>
              <i class="fas fa-car"></i>
              <i class="fas fa-gamepad"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Categories -->
    <section class="categories">
      <div class="container">
        <h2 class="section-title">Shop by Category</h2>
        <p class="section-subtitle">Find the perfect toy for every age and interest</p>
        
        <div class="categories-grid">
          <div 
            v-for="category in figmaDesign.layout.categories" 
            :key="category.id"
            class="category-card"
          >
            <div class="category-icon" :style="{ backgroundColor: category.color }">
              <i :class="category.icon"></i>
            </div>
            <h3 class="category-title">{{ category.title }}</h3>
            <p class="category-description">{{ category.description }}</p>
            <a :href="category.link" class="category-link">
              Shop Now <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="products">
      <div class="container">
        <h2 class="section-title">Featured Products</h2>
        <p class="section-subtitle">Best sellers loved by kids and parents</p>
        
        <div class="products-grid">
          <div 
            v-for="product in figmaDesign.layout.products" 
            :key="product.id"
            class="product-card"
          >
            <div class="product-image">
              <div class="image-placeholder">
                <i :class="product.icon"></i>
              </div>
              <span v-if="product.badge" class="product-badge" :class="{ sale: product.badge === 'sale' }">
                {{ product.badge === 'new' ? 'New' : 'Sale' }}
              </span>
            </div>
            <div class="product-info">
              <h3 class="product-title">{{ product.title }}</h3>
              <p class="product-description">{{ product.description }}</p>
              <div class="product-price">
                <span class="current-price">${{ product.price.toFixed(2) }}</span>
                <span v-if="product.originalPrice" class="original-price">
                  ${{ product.originalPrice.toFixed(2) }}
                </span>
              </div>
              <div class="product-rating">
                <i 
                  v-for="star in 5" 
                  :key="star"
                  :class="[
                    'fas',
                    star <= Math.floor(product.rating) ? 'fa-star' : 
                    star === Math.ceil(product.rating) && !Number.isInteger(product.rating) ? 'fa-star-half-alt' : 'fa-star'
                  ]"
                ></i>
                <span class="rating-count">({{ product.reviewCount }})</span>
              </div>
              <button class="btn btn-primary btn-sm">
                <i class="fas fa-cart-plus"></i>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text">
            <h2 class="section-title">{{ figmaDesign.layout.about.title }}</h2>
            <p class="about-description">{{ figmaDesign.layout.about.description }}</p>
            
            <div class="features">
              <div 
                v-for="(feature, index) in figmaDesign.layout.about.features" 
                :key="feature.title"
                class="feature"
              >
                <div class="feature-icon" :style="{ backgroundColor: `${feature.color}20`, color: feature.color }">
                  <i :class="feature.icon"></i>
                </div>
                <div class="feature-content">
                  <h4 class="feature-title">{{ feature.title }}</h4>
                  <p class="feature-description">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <div class="image-placeholder">
              <i class="fas fa-smile"></i>
              <i class="fas fa-heart"></i>
              <i class="fas fa-star"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <div class="logo">
              <i :class="figmaDesign.layout.footer.logo.icon"></i>
              <span class="logo-text">{{ figmaDesign.layout.footer.logo.text }}</span>
            </div>
            <p class="footer-description">{{ figmaDesign.layout.footer.description }}</p>
            <div class="social-links">
              <a 
                v-for="social in figmaDesign.layout.footer.socialLinks" 
                :key="social.platform"
                :href="social.href" 
                class="social-link"
                :title="social.platform"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">{{ figmaDesign.layout.footer.quickLinks.title }}</h4>
            <ul class="footer-links">
              <li v-for="link in figmaDesign.layout.footer.quickLinks.links" :key="link.label">
                <a :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">{{ figmaDesign.layout.footer.supportLinks.title }}</h4>
            <ul class="footer-links">
              <li v-for="link in figmaDesign.layout.footer.supportLinks.links" :key="link.label">
                <a :href="link.href">{{ link.label }}</a>
              </li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Contact Info</h4>
            <ul class="contact-info">
              <li v-for="contact in figmaDesign.layout.footer.contactInfo" :key="contact.text">
                <i :class="contact.icon"></i>
                {{ contact.text }}
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 {{ figmaDesign.layout.footer.logo.text }}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { figmaDesign } from '../data/figma-mock-data'
</script>

<style scoped>
/* Header Styles */
.header {
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-lg) 0;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-family: var(--font-secondary);
  font-size: var(--font-size-2xl);
  font-weight: 700;
  color: var(--color-primary);
}

.logo i {
  font-size: var(--font-size-2xl);
}

.nav-links {
  display: flex;
  gap: var(--spacing-xl);
}

.nav-link {
  color: var(--color-text);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
  background-color: rgba(255, 107, 139, 0.1);
}

.nav-actions {
  display: flex;
  gap: var(--spacing-md);
  align-items: center;
}

.icon-btn {
  background: none;
  border: none;
  font-size: var(--font-size-lg);
  color: var(--color-text);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.icon-btn:hover {
  color: var(--color-primary);
  background-color: rgba(255, 107, 139, 0.1);
}

.cart-btn {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: 10px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Hero Section */
.hero {
  background: linear-gradient(135deg, rgba(255, 107, 139, 0.1) 0%, rgba(78, 205, 196, 0.1) 100%);
  padding: var(--spacing-3xl) 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.hero-title {
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-lg);
  line-height: 1.1;
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-2xl);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.btn-lg {
  padding: var(--spacing-lg) var(--spacing-2xl);
  font-size: var(--font-size-lg);
}

.btn i {
  margin-right: var(--spacing-sm);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 400px;
  height: 400px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  border-radius: var(--radius-xl);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.image-placeholder i {
  font-size: 120px;
  color: var(--color-white);
  opacity: 0.8;
  position: absolute;
}

.image-placeholder i:nth-child(1) { top: 20%; left: 20%; }
.image-placeholder i:nth-child(2) { top: 40%; right: 25%; }
.image-placeholder i:nth-child(3) { bottom: 30%; left: 30%; }
.image-placeholder i:nth-child(4) { bottom: 20%; right: 20%; }

/* Categories Section */
.categories {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-white);
}

.section-title {
  text-align: center;
  margin-bottom: var(--spacing-sm);
}

.section-subtitle {
  text-align: center;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-3xl);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.category-card {
  background-color: var(--color-light);
  border-radius: var(--radius-lg);
  padding: var(--spacing-2xl);
  text-align: center;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.category-icon {
  width: 80px;
  height: 80px;
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  font-size: var(--font-size-2xl);
}

.category-card:nth-child(2) .category-icon {
  background-color: var(--color-secondary);
}

.category-card:nth-child(3) .category-icon {
  background-color: var(--color-accent);
}

.category-card:nth-child(4) .category-icon {
  background-color: var(--color-dark);
}

.category-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
}

.category-description {
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-sm);
}

.category-link {
  color: var(--color-primary);
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.category-link:hover {
  color: var(--color-secondary);
}

/* Products Section */
.products {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-light);
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--spacing-xl);
  margin-top: var(--spacing-xl);
}

.product-card {
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.product-image {
  height: 200px;
  background: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.product-image .image-placeholder {
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%);
  border-radius: var(--radius-lg);
}

.product-image .image-placeholder i {
  font-size: 48px;
  color: var(--color-white);
}

.product-badge {
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: 600;
}

.product-badge.sale {
  background-color: var(--color-accent);
  color: var(--color-dark);
}

.product-info {
  padding: var(--spacing-lg);
}

.product-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-xs);
}

.product-description {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.product-price {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.current-price {
  font-size: var(--font-size-xl);
  font-weight: 700;
  color: var(--color-primary);
}

.original-price {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
  text-decoration: line-through;
}

.product-rating {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-lg);
  color: #ffc107;
}

.rating-count {
  color: var(--color-text-light);
  font-size: var(--font-size-sm);
  margin-left: var(--spacing-xs);
}

.btn-sm {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-sm);
  width: 100%;
}

/* About Section */
.about {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-white);
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.about-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-light);
  margin-bottom: var(--spacing-2xl);
  max-width: 600px;
}

.features {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.feature-icon {
  width: 48px;
  height: 48px;
  background-color: rgba(255, 107, 139, 0.1);
  color: var(--color-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-lg);
  flex-shrink: 0;
}

.feature:nth-child(2) .feature-icon {
  background-color: rgba(78, 205, 196, 0.1);
  color: var(--color-secondary);
}

.feature:nth-child(3) .feature-icon {
  background-color: rgba(255, 209, 102, 0.1);
  color: var(--color-accent);
}

.feature:nth-child(4) .feature-icon {
  background-color: rgba(45, 48, 71, 0.1);
  color: var(--color-dark);
}

.feature-title {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-xs);
}

.feature-description {
  font-size: var(--font-size-sm);
  color: var(--color-text-light);
}

.about-image .image-placeholder {
  width: 400px;
  height: 300px;
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%);
}

.about-image .image-placeholder i {
  font-size: 80px;
}

/* Footer */
.footer {
  background-color: var(--color-dark);
  color: var(--color-white);
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

.footer-section .logo {
  color: var(--color-white);
  margin-bottom: var(--spacing-lg);
}

.footer-description {
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: var(--spacing-lg);
  line-height: 1.6;
}

.social-links {
  display: flex;
  gap: var(--spacing-md);
}

.social-link {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background-color: var(--color-primary);
  transform: translateY(-2px);
}

.footer-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-lg);
  color: var(--color-white);
}

.footer-links {
  list-style: none;
}

.footer-links li {
  margin-bottom: var(--spacing-sm);
}

.footer-links a {
  color: rgba(255, 255, 255, 0.7);
  transition: color var(--transition-fast);
}

.footer-links a:hover {
  color: var(--color-primary);
}

.contact-info {
  list-style: none;
}

.contact-info li {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-sm);
  color: rgba(255, 255, 255, 0.7);
}

.contact-info i {
  width: 20px;
  color: var(--color-primary);
}

.footer-bottom {
  text-align: center;
  padding-top: var(--spacing-lg);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
  font-size: var(--font-size-sm);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content,
  .about-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  .hero-actions {
    justify-content: center;
  }
  
  .hero-image,
  .about-image {
    order: -1;
  }
  
  .image-placeholder {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: var(--spacing-lg);
  }
  
  .nav-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .features {
    grid-template-columns: 1fr;
  }
  
  .hero-actions {
    flex-direction: column;
    align-items: center;
  }
  
  .btn-lg {
    width: 100%;
    max-width: 300px;
  }
}

@media (max-width: 480px) {
  .categories-grid,
  .products-grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
}
</style>