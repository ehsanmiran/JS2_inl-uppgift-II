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
    <div class="d-flex align-items-center">
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
        <strong class="d-none d-sm-block me-1">Hi Ehsan</strong>
        <img
        src="../assets/avatar.png"
        class="rounded-circle"
        height="22"
        loading="lazy"
        />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
      <div>
        <a>
          <router-link class="nav-link text-reset" to="/cartcontents">
            <i class="fas fa-shopping-cart"></i>
            <span class="badge rounded-pill badge-notification bg-danger">1</span>
          </router-link>
        </a>

      </div>
      
    </div>
    <!-- Right elements -->

    </div>
  </nav>
</template>

<script>
  export default {
    name: 'PrimaryNavigation'
  }
</script>

<style>


</style>