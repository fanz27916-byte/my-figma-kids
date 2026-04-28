<template>
  <div class="home">
    <!-- Header/Navigation -->
    <header class="header">
      <div class="container">
        <nav class="navbar">
          <div class="logo">
            <i class="fas fa-child"></i>
            <span class="logo-text">Kids Toys & Games Store</span>
          </div>
          
          <div class="nav-links">
            <a href="#home" class="nav-link active">Home</a>
            <a href="#toys" class="nav-link">Toys</a>
            <a href="#games" class="nav-link">Games</a>
            <a href="#about" class="nav-link">About Us</a>
            <a href="#services" class="nav-link">Services</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
          
          <div class="nav-actions">
            <button class="icon-btn">
              <i class="fas fa-search"></i>
            </button>
            <button class="icon-btn cart-btn">
              <i class="fas fa-shopping-cart"></i>
              <span class="cart-count">3</span>
            </button>
            <button class="btn btn-primary btn-sm">
              <i class="fas fa-user"></i>
              Sign In
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
            <h1 class="hero-title">
              Welcome to <span class="text-primary">Kids</span> Toys & Games Store
            </h1>
            <p class="hero-description">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <div class="hero-actions">
              <button class="btn btn-primary btn-lg">
                <i class="fas fa-shopping-bag"></i>
                Shop Now
              </button>
              <button class="btn btn-secondary btn-lg">
                <i class="fas fa-play-circle"></i>
                Watch Video
              </button>
            </div>
          </div>
          <div class="hero-image">
            <div class="image-placeholder">
              <!-- Decorative shapes based on Figma vectors -->
              <div class="shape shape-1"></div>
              <div class="shape shape-2"></div>
              <div class="shape shape-3"></div>
              <div class="shape shape-4"></div>
              <div class="shape shape-5"></div>
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
        
        <div class="grid">
          <div class="card category-card">
            <div class="icon icon-primary">
              <i class="fas fa-robot"></i>
            </div>
            <h3>Educational Toys</h3>
            <p>Fun learning toys that help develop cognitive skills and creativity.</p>
            <a href="#" class="btn btn-outline">
              Explore <i class="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div class="card category-card">
            <div class="icon icon-secondary">
              <i class="fas fa-gamepad"></i>
            </div>
            <h3>Board Games</h3>
            <p>Family-friendly games for quality time and entertainment.</p>
            <a href="#" class="btn btn-outline">
              Explore <i class="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div class="card category-card">
            <div class="icon icon-accent">
              <i class="fas fa-car"></i>
            </div>
            <h3>Remote Control</h3>
            <p>Exciting RC cars, drones, and vehicles for all skill levels.</p>
            <a href="#" class="btn btn-outline">
              Explore <i class="fas fa-arrow-right"></i>
            </a>
          </div>
          
          <div class="card category-card">
            <div class="icon icon-primary">
              <i class="fas fa-puzzle-piece"></i>
            </div>
            <h3>Building Sets</h3>
            <p>Creative construction sets to build imagination and motor skills.</p>
            <a href="#" class="btn btn-outline">
              Explore <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="products bg-light">
      <div class="container">
        <h2 class="section-title">Featured Products</h2>
        <p class="section-subtitle">Best sellers loved by kids and parents</p>
        
        <div class="grid">
          <div class="card product-card">
            <div class="product-image">
              <div class="image-placeholder">
                <i class="fas fa-robot"></i>
              </div>
              <span class="product-badge">New</span>
            </div>
            <div class="product-info">
              <h3>AI Learning Robot</h3>
              <p>Interactive robot that teaches coding and STEM concepts through play.</p>
              <div class="product-price">
                <span class="current-price">$89.99</span>
                <span class="original-price">$119.99</span>
              </div>
              <div class="product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <span class="rating-count">(128)</span>
              </div>
              <button class="btn btn-primary btn-sm">
                <i class="fas fa-cart-plus"></i>
                Add to Cart
              </button>
            </div>
          </div>
          
          <div class="card product-card">
            <div class="product-image">
              <div class="image-placeholder">
                <i class="fas fa-gamepad"></i>
              </div>
              <span class="product-badge sale">Sale</span>
            </div>
            <div class="product-info">
              <h3>Family Game Night Set</h3>
              <p>Collection of 10 popular board games for all ages.</p>
              <div class="product-price">
                <span class="current-price">$49.99</span>
                <span class="original-price">$79.99</span>
              </div>
              <div class="product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span class="rating-count">(256)</span>
              </div>
              <button class="btn btn-primary btn-sm">
                <i class="fas fa-cart-plus"></i>
                Add to Cart
              </button>
            </div>
          </div>
          
          <div class="card product-card">
            <div class="product-image">
              <div class="image-placeholder">
                <i class="fas fa-car"></i>
              </div>
            </div>
            <div class="product-info">
              <h3>RC Racing Car</h3>
              <p>High-speed remote control car with 4WD and 2.4GHz remote.</p>
              <div class="product-price">
                <span class="current-price">$64.99</span>
              </div>
              <div class="product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
                <span class="rating-count">(89)</span>
              </div>
              <button class="btn btn-primary btn-sm">
                <i class="fas fa-cart-plus"></i>
                Add to Cart
              </button>
            </div>
          </div>
          
          <div class="card product-card">
            <div class="product-image">
              <div class="image-placeholder">
                <i class="fas fa-puzzle-piece"></i>
              </div>
            </div>
            <div class="product-info">
              <h3>Mega Building Blocks</h3>
              <p>500-piece construction set with storage box and idea book.</p>
              <div class="product-price">
                <span class="current-price">$34.99</span>
              </div>
              <div class="product-rating">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span class="rating-count">(312)</span>
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
            <h2 class="section-title">Why Choose Our Store?</h2>
            <p class="about-description">
              We're committed to providing the best toys and games that inspire creativity, learning, and fun for children of all ages.
            </p>
            
            <div class="features">
              <div class="feature">
                <div class="icon icon-primary">
                  <i class="fas fa-shipping-fast"></i>
                </div>
                <div class="feature-content">
                  <h4>Free Shipping</h4>
                  <p>Free delivery on all orders over $50.</p>
                </div>
              </div>
              
              <div class="feature">
                <div class="icon icon-secondary">
                  <i class="fas fa-shield-alt"></i>
                </div>
                <div class="feature-content">
                  <h4>Quality Guarantee</h4>
                  <p>All products meet safety and quality standards.</p>
                </div>
              </div>
              
              <div class="feature">
                <div class="icon icon-accent">
                  <i class="fas fa-headset"></i>
                </div>
                <div class="feature-content">
                  <h4>24/7 Support</h4>
                  <p>Our team is always here to help you.</p>
                </div>
              </div>
              
              <div class="feature">
                <div class="icon icon-primary">
                  <i class="fas fa-undo-alt"></i>
                </div>
                <div class="feature-content">
                  <h4>Easy Returns</h4>
                  <p>30-day return policy for all products.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="about-image">
            <div class="image-placeholder">
              <div class="shape shape-1"></div>
              <div class="shape shape-2"></div>
              <div class="shape shape-3"></div>
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
              <i class="fas fa-child"></i>
              <span class="logo-text">Kids Toys & Games Store</span>
            </div>
            <p class="footer-description">
              Bringing joy and learning to children through quality toys and games since 2020.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" title="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="#" class="social-link" title="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="#" class="social-link" title="Twitter">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="#" class="social-link" title="YouTube">
                <i class="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Quick Links</h4>
            <ul class="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#toys">Toys</a></li>
              <li><a href="#games">Games</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Categories</h4>
            <ul class="footer-links">
              <li><a href="#">Educational Toys</a></li>
              <li><a href="#">Board Games</a></li>
              <li><a href="#">Remote Control</a></li>
              <li><a href="#">Building Sets</a></li>
              <li><a href="#">Outdoor Toys</a></li>
              <li><a href="#">Arts & Crafts</a></li>
            </ul>
          </div>
          
          <div class="footer-section">
            <h4 class="footer-title">Contact Info</h4>
            <ul class="contact-info">
              <li>
                <i class="fas fa-map-marker-alt"></i>
                123 Toy Street, Playville, PL 12345
              </li>
              <li>
                <i class="fas fa-phone"></i>
                (123) 456-7890
              </li>
              <li>
                <i class="fas fa-envelope"></i>
                hello@kidstoysstore.com
              </li>
              <li>
                <i class="fas fa-clock"></i>
                Mon-Fri: 9AM-6PM, Sat: 10AM-4PM
              </li>
            </ul>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Kids Toys & Games Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Component logic will be added here
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
  font-family: var(--font-heading);
  font-size: var(--font-size-h4);
  font-weight: var(--font-weight-bold);
  color: var(--color-text-primary);
}

.logo i {
  font-size: var(--font-size-h3);
  color: var(--color-primary);
}

.nav-links {
  display: flex;
  gap: var(--spacing-xl);
}

.nav-link {
  color: var(--color-text-dark);
  font-weight: var(--font-weight-bold);
  text-transform: uppercase;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.nav-link:hover,
.nav-link.active {
  color: var(--color-primary);
  background-color: rgba(255, 123, 77, 0.1);
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
  color: var(--color-text-dark);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);
}

.icon-btn:hover {
  color: var(--color-primary);
  background-color: rgba(255, 123, 77, 0.1);
}

.cart-btn {
  position: relative;
}

.cart-count {
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: var(--color-primary);
  color: var(--color-text-light);
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
  background-color: var(--color-background);
  padding: var(--spacing-3xl) 0;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-3xl);
  align-items: center;
}

.hero-title {
  font-size: var(--font-size-h1);
  margin-bottom: var(--spacing-lg);
  line-height: 1.1;
}

.hero-description {
  font-size: var(--font-size-lg);
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-2xl);
  max-width: 600px;
}

.hero-actions {
  display: flex;
  gap: var(--spacing-lg);
  flex-wrap: wrap;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 400px;
  height: 400px;
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.shape {
  position: absolute;
  border-radius: var(--radius-full);
}

.shape-1 {
  width: 120px;
  height: 120px;
  background-color: var(--color-primary);
  top: 20%;
  left: 20%;
  opacity: 0.8;
}

.shape-2 {
  width: 80px;
  height: 80px;
  background-color: var(--color-secondary);
  top: 40%;
  right: 25%;
  opacity: 0.8;
}

.shape-3 {
  width: 100px;
  height: 100px;
  background-color: var(--color-accent);
  bottom: 30%;
  left: 30%;
  opacity: 0.8;
}

.shape-4 {
  width: 60px;
  height: 60px;
  background-color: var(--color-primary);
  bottom: 20%;
  right: 20%;
  opacity: 0.8;
}

.shape-5 {
  width: 140px;
  height: 140px;
  background-color: var(--color-secondary);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
}

/* Categories Section */
.categories {
  padding: var(--spacing-3xl) 0;
  background-color: var(--color-white);
}

.category-card {
  text-align: center;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.category-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.category-card .icon {
  margin: 0 auto var(--spacing-lg);
}

.category-card h3 {
  font-size: var(--font-size-h4);
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
}

.category-card p {
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-small);
}

/* Products Section */
.products {
  padding: var(--spacing-3xl) 0;
}

.product-card {
  overflow: hidden;
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.product-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.product-image {
  height: 200px;
  background-color: var(--color-light);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.product-image .image-placeholder {
  width: 120px;
  height: 120px;
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.product-image .image-placeholder i {
  font-size: 48px;
  color: var(--color-primary);
}

.product-badge {
  position: absolute;
  top: var(--spacing-md);
  left: var(--spacing-md);
  background-color: var(--color-primary);
  color: var(--color-text-light);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-bold);
}

.product-badge.sale {
  background-color: var(--color-accent);
  color: var(--color-text-dark);
}

.product-info {
  padding: var(--spacing-lg);
}

.product-title {
  font-size: var(--font-size-h4);
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
}

.product-description {
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
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
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
}

.original-price {
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
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
  color: var(--color-text-secondary);
  font-size: var(--font-size-small);
  margin-left: var(--spacing-xs);
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
  color: var(--color-text-secondary);
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

.feature-content {
  flex: 1;
}

.feature-title {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
}

.feature-description {
  font-size: var(--font-size-small);
  color: var(--color-text-secondary);
}

.about-image .image-placeholder {
  width: 400px;
  height: 300px;
  background-color: var(--color-white);
  box-shadow: var(--shadow-lg);
}

.about-image .shape-1 {
  width: 150px;
  height: 150px;
  background-color: var(--color-primary);
  top: 20%;
  left: 20%;
}

.about-image .shape-2 {
  width: 100px;
  height: 100px;
  background-color: var(--color-secondary);
  bottom: 30%;
  right: 25%;
}

.about-image .shape-3 {
  width: 80px;
  height: 80px;
  background-color: var(--color-accent);
  top: 40%;
  right: 40%;
}

/* Footer */
.footer {
  background-color: var(--color-text-dark);
  color: var(--color-text-light);
  padding: var(--spacing-3xl) 0 var(--spacing-lg);
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: var(--spacing-2xl);
  margin-bottom: var(--spacing-3xl);
}

.footer-section .logo {
  color: var(--color-text-light);
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
  color: var(--color-text-light);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background-color: var(--color-primary);
  transform: translateY(-2px);
}

.footer-title {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-lg);
  color: var(--color-text-light);
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
  font-size: var(--font-size-small);
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
  .grid {
    grid-template-columns: 1fr;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
  }
  
  .image-placeholder {
    width: 250px;
    height: 250px;
  }
  
  .hero-title {
    font-size: var(--font-size-h2);
  }
}
</style>