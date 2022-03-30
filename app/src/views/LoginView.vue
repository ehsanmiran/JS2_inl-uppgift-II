<template>

  <form @submit.prevent="handleSubmit">
    <div class="row d-flex justify-content-center">
      <div class="col-5 text-left login-form-container">
        <div class="d-flex justify-content-center">
          <img src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png" width="150" alt="">
        </div>
        <h2 class="text-center mb-3">Login</h2>
          <div class="form-group mb-3">
            <label><strong>Email address:</strong></label>
            <input type="email" class="form-control shadow" placeholder="Enter your email, please!" v-model="email" />
          </div>
          <div class="form-group mb-5">
            <label><strong>Password:</strong></label>
            <input type="password" class="form-control shadow" placeholder="Enter your password, please!" v-model="password" />
          </div>
          <button @click="login()" type="submit" class="btn btn-warning btn-block btn-rounded">Login</button>
      </div>
    </div>
  </form>
  
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methodes: {
    ...mapActions(['login']),
    handleSubmit() {
      if(this.email.trim() === '' || this.password.trim() === '') {
        return
      }

      let user = {
        email: this.email,
        password: this.password
      }
      this.login(user)
    }
  }

}
</script>

<style>

</style>