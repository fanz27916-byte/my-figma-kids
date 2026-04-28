<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script setup lang="ts">
// App component
</script>

<style>
/* Import design system and main styles */
@import './styles/design-system.css';
@import './styles/main.css';

#app {
  min-height: 100vh;
  font-family: var(--font-body);
  color: var(--color-text-primary);
  background-color: var(--color-background);
}

/* Global animations */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Selection color */
::selection {
  background-color: var(--color-primary);
  color: var(--color-text-light);
}

/* Focus styles */
:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: var(--color-light);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: var(--radius-full);
}

::-webkit-scrollbar-thumb:hover {
  background: #FF8B6D;
}
</style>