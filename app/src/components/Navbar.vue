<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a>
        <router-link class="navbar-brand" to="/">
          <img 
            src="../assets/my_logo.jpg"
            class="rounded-circle me-3"
            height="55"
            loading="lazy"
            />
          <h2>eCom</h2>
        </router-link>
      </a>

      <!-- Toggle button -->
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>

      <!-- Collapsible wrapper -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <!-- Left link -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/products">Our Prodects</router-link>
          </li>
        </ul>
        <!-- Left link -->
      </div>
      <!-- Collapsible wrapper -->


    <!-- Right elements -->
    <div class="d-flex align-items-center"  v-if="loggedIn">
      <!-- Avatar -->
      <div class="dropdown me-3">
        <a
          class="dropdown-toggle d-flex align-items-center text-reset"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
        <strong class="d-none d-sm-block me-1">Hi...</strong>
        <img src="../assets/avatar.png" class="rounded-circle" height="22" loading="lazy" />
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuAvatar">
          <li><router-link class="dropdown-item" to="/userprofile">My profile</router-link></li>
          <li><router-link class="dropdown-item" @click="logout" to="/">Logout</router-link></li>
        </ul>
      </div>
      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-shopping-cart"></i>
          <span v-if="itemsCounter" class="badge rounded-pill badge-notification bg-danger">{{ itemsCounter }}</span>
        </a>
        <div
          class="dropdown-menu dropdown-menu-end s-cart"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <ShoppingCart />
        </div>
      </div>
    </div>
    <router-link to="/login" v-else class="text-reset"><strong>Login to start</strong></router-link>
    <!-- Right elements -->

    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ShoppingCart from './shoppingCart/ShoppingCart.vue'
  export default {
    components: { ShoppingCart },
    name: 'PrimaryNavigation',
    computed: {
      ...mapGetters(['itemsCounter', 'loggedIn'])
    },
    methods: {
      ...mapActions(['logout'])
    }
  }
</script>

<style scoped>
  .s-cart {
    min-width: 400px;
  }

</style>