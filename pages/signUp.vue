<template>
  <div>

    <Head>
      <Title>Sign Up</Title>
      <Meta name="decription" content="SignUp Page">
      </Meta>
    </Head>
    <div class="signUp">
      <v-container>
        <v-row>
          <v-col cols="12" class="col-md-12">
            <div class="logins-box m-inline-auto">
              <form @submit.prevent action="" class="form mt-5">
                <div class="form-input-box position-relative">
                  <input v-model="email" type="username" class="form-control w-100  logins-input" placeholder="Email">
                </div>
                <div class="form-input-box position-relative">
                  <input v-model="password" type="password" class="form-control w-100 logins-input"
                    placeholder="password">
                </div>
                <div class="text-center text-error">
                  {{ error }}
                </div>
                <button @click="signup()" class="logins-btn text-center">signUp</button>
              </form>
              <div class="logins-box-row d-flex align-items-center justify-center">Already have an accout
                ?
                <NuxtLink to="/login">Login</NuxtLink>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>

export default {
  setup() {
    let email = ref('')
    let password = ref('')
    const user = useSupabaseUser()
    const client = useSupabaseClient()
    //sign up with new account
    let signup = async () => {

      try {
        let { data, error } = await client.auth.signUp({
          email: email.value,
          password: password.value
        })
        if (error) {
          alert(error.message)
        }
      } catch (error) {
        throw error
      }
    }
    watchEffect(() => {
      if (user.value) {
        navigateTo('/')
      }
    })
    return {
      client, user, email, password, signup,
    }
  },
  data() {
    return {
    }
  },
}


</script>

<style scoped>
.r-50 {
  border-radius: 50%;
}

.form-input-box input:focus {
  border: 1px solid #0D9EFF;
}

.dark .dark-show {
  display: flex !important;
}

.dark .dark-none {
  display: none !important;
}

.dark .logo-box {
  background-color: #15212D;
}

.dark .logins-box-h {
  color: #fff;
}

.dark .logins-input {
  background-color: #2D343F;
  border-color: transparent;
  color: #fff;
}

.dark .logins-input::placeholder {
  color: #fff;
}

.dark .logins-box-row-b1 {
  color: #fff;
}

.dark .logins-btn:hover {
  background-color: #2D343F;
  color: #fff;
}

.signUp {
  padding: 50px 0 60px 0;
}

.logins-input {
  height: 55px;
  border: 1px solid #d4d4d4;
  color: #C3C3C3;
  padding: 5px 15px;
  font-size: 16px;
  margin-bottom: 30px;
}

.logins-input::placeholder {
  color: #C3C3C3;
  font-size: 16px;
}

.logins-box {
  max-width: 490px;
}

.logins-box-h {
  font-size: 16px;
  font-weight: bold;
  color: #2F2E2E;
  text-align: center;
  margin-bottom: 25px;
}

.logins-btn {
  width: 100%;
  height: 55px;
  background-color: #B52429;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
  margin-bottom: 25px;
}

.logins-btn:hover {
  background-color: #fff;
  color: #B52429;
}

.logins-box-row-b1 {
  font-size: 15px;
  color: #2F2E2E;
  font-weight: 500;
}

.logins-box-row-b1 a {
  color: #3AB4F2;
  font-weight: 700;
}

.logins-box-row-link {
  color: #3AB4F2;
  font-weight: 700;
  font-size: 16px;
}

.logins-box-row-link:hover {
  color: #3AB4F2;
}

.logins-box2-img {
  width: 100%;
  height: 485px;
  border-radius: 35px;
  object-fit: cover;
}

.logins .row {
  align-items: center;
}

.logins-box-p {
  font-size: 16px;
  color: #3AB4F2;
  font-weight: 500;
  text-align: center;
  margin-bottom: 20px;
}

.password-hit {
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #B52429;
  background-color: #FFF6F7;
  border-radius: 10px;
  padding: 10px 20px;
}

.logo-box-outer {
  text-align: center;
  width: fit-content;
}

.m-inline-auto {
  margin-inline: auto;
}

.logo-box {
  width: 85px;
  height: 85px;
  background-color: #fff;
  box-shadow: 0 3px 15px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 4px;
}

.logo-boxlogo {
  width: 63px;
  height: auto;
  max-height: 63px;
  object-fit: contain;
}

.form-input-box input {
  box-shadow: none;

}

.sign-github-btn,
.sign-google-btn {
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 4px;
  background: linear-gradient(90deg, #07063f -19.86%, #3978fe 100%);
  cursor: pointer;
}

@media (max-width: 1599px) {
  .logins-box2-img {
    height: 360px;
  }
}

@media (max-width: 1799px) {
  .logins-box2-img {
    height: 400px;
  }
}

@media (max-width: 1399px) {
  .logo-box {
    width: 70px;
    height: 70px;
  }

  .logo-boxlogo {
    width: 55px;
  }

  .logins-box2-img {
    height: 310px;
  }
}

@media (max-width: 1023px) {
  .logins-box2-img {
    height: 270px;
  }
}

@media (max-width: 1023px) {
  .logins-box2-img {
    border-radius: 15px;
  }
}

@media (max-width: 767px) {
  .logins-box {
    margin-bottom: 20px;
  }
}
</style>