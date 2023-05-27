<template>
  <div class="wholePage">
    <div class="leftSide">
      <div class="insideLeft" :style="{ backgroundColor: 'inherit' }">
        <div class="register">
          {{ registerMode ? "Zarejestruj sie" : "Zaloguj sie" }}
        </div>
        <div class="errorPackage">
          <div class="error" v-if="formData.error">{{ formData.error }}</div>
        </div>
        <div class="emailAndPassword">
          <div class="titleAndInputContainer">
            <div class="emailFont">E-mail</div>
            <div class="mailIcon">
              <div class="mailIconIcon">
                <EmailIcon />
              </div>
              <input
                class="inputEmail"
                type="email"
                v-model="formData.login"
                placeholder="Username/Email"
              />
            </div>
          </div>
          <div class="titleAndInputContainer">
            <div class="emailFont">Password</div>
            <div class="mailIcon">
              <div class="mailIconIcon">
                <LockIcon />
              </div>
              <input
                class="inputEmail"
                type="password"
                v-model="formData.password"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        <div class="repeatPasswordContainer" v-if="registerMode">
          <div class="emailFont">Repeat Password</div>
          <div class="mailIcon">
            <div class="mailIconIcon">
              <LockIcon />
            </div>
            <input
              class="inputEmail"
              type="Password"
              v-model="formData.passwordRepeated"
              placeholder="Repeat Password"
            />
          </div>
        </div>

        <div class="logInAndForgotPassword">
          <div class="logIn" @click="registerMode ? register() : login()">
            {{ registerMode ? "Register" : "Login" }}
          </div>

          <div class="forgotPassword">
            {{
              registerMode
                ? "Czy wiedziałeś że panda ma 6 palców w każdej z łap ?"
                : "Zapomniałeś hasła ?"
            }}
          </div>
        </div>
        <div class="kreska">
          <div class="lub">lub</div>
        </div>
        <div class="companyLogin">
          <div class="icon">
            <GoogleIcon />
          </div>
          <div class="nextToIcon">
            {{
              registerMode ? "Zarejestruj się z Google" : "Zaloguj się z Google"
            }}
          </div>
        </div>
        <div class="noAccount">
          {{ registerMode ? "Masz już konto ?" : "Nie masz jeszcze konta ?" }}
          <div class="join" @click="toggleRegisterMode()">
            {{ registerMode ? "Zaloguj się !" : "Dołącz teraz !" }}
          </div>
        </div>
      </div>
    </div>
    <div class="rightSide">
      <div class="insideRight">
        <img alt="loginImage" src="../../assets/images/welcomeCar.png" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, reactive, onMounted } from "vue";

import GoogleIcon from "../../components/Icons/GoogleIcon.vue";
import EmailIcon from "../../components/Icons/EmailIcon.vue";
import LockIcon from "../../components/Icons/LockIcon.vue";
import registerUser from "../../utils/registerUser";
import loginUser from "../../utils/loginUser";
import { useStore } from "../../store/store";
import { useRouter } from "vue-router";

export default {
  name: "LoginPage",
  components: {
    GoogleIcon,
    EmailIcon,
    LockIcon,
  },

  setup() {
    const formData = reactive({
      login: "",
      password: "",
      passwordRepeated: "",
      error: "",
    });

    const store = useStore();
    const router = useRouter();

    onMounted(() => {
      if (store.state.isLoggedIn) {
        router.push("/");
      }
    });

    const register = async () => {
      const registerError = await registerUser(formData);

      if (registerError) {
        formData.error = registerError;
      } else {
        router.push("/");
      }
    };

    const login = async () => {
      const loginError = await loginUser(formData);
      if (loginError) {
        formData.error = loginError;
      } else {
        router.push("/");
      }
    };

    const registerMode = ref(
      router.currentRoute.value.query.registerModeDefault === "true"
    );

    const toggleRegisterMode = () => {
      registerMode.value = !registerMode.value;
      formData.error = "";
    };

    return {
      formData,
      registerMode,
      register,
      login,
      toggleRegisterMode,
    };
  },
};
</script>

<style scoped>
.wholePage {
  width: 100%;
  height: 100vh;
  min-height: 800px;
  display: flex;
  margin-bottom: 30px;
  max-width: 1400px;
}

.leftSide {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.insideLeft {
  width: 70%;
  padding: 20px 30px;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #d3d3d3;
  border-radius: 10px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
}

.errorPackage {
  height: 3%;
  width: 100%;
}
.error {
  display: flex;
  justify-content: left;
  width: 100%;
  margin-bottom: 5px;
  align-items: center;
  color: red;
  font-family: arial;
  font-weight: bold;
  padding: 3px;
  border-radius: 5px;
}
.register {
  width: 100%;
  height: 11%;
  padding-top: 16%;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-family: arial;
}

.mailIcon {
  display: flex;
  flex-direction: row;
  height: 70%;
  width: 100%;
  border: 2px solid #d3d3d3;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
}

.mailIconIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding-right: 10px;
  padding-left: 5px;
  padding-top: 3px;
}
.emailAndPassword {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  height: 20%;
}

.repeatPasswordContainer {
  width: 100%;
  height: 10%;
  display: block;
}

.emailFont {
  font-family: arial;
  color: #d3d3d3;
}

.inputEmail {
  all: unset;
  width: 95%;
  font-size: 20px;
  outline: none;
  display: flex;
  justify-content: left;
  align-items: center;
}

input {
  box-sizing: border-box;
}

.titleAndInputContainer {
  width: 100%;
  height: 100%;
  display: block;
}

.logInAndForgotPassword {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 16%;
  margin-top: 20px;
}
.logIn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background-color: #5465ff;
  color: white;
  border-radius: 6px;
  font-weight: bolder;
  font-size: 25px;
}

.logIn:hover {
  opacity: 0.9;
}

.forgotPassword {
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: arial;
  color: grey;
  font-size: 15px;
}

.kreska {
  width: 100%;
  height: 0.25%;
  background-color: #d3d3d3;
  margin-top: 20px;
  position: relative;
}
.lub {
  font-family: arial;
  background-color: #f7f7f7;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 50%;
  left: 50%;
  color: grey;
  transform: translateX(-50%) translateY(50%);
  padding: 4px;
  padding-left: 6px;
  padding-right: 6px;
}

.companyLogin {
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 7%;
  height: 8%;
  border: 2px solid #d3d3d3;
  border-radius: 6px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.1);
}

.companyLogin:hover {
  opacity: 0.75;
  display: flex;
  justify-content: center;
  align-items: center;
}

.nextToIcon {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 4px;
  font-weight: bold;
}

.icon {
  display: flex;
  justify-content: center;
  align-items: center;
}

.join {
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5465ff;
}

.join:hover {
  text-decoration: underline;
}

.noAccount {
  padding-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #d3d3d3;
  font-family: arial;
}

.rightSide {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: contain;
  overflow: hidden;
  border-radius: 10%;
}
.insideRight {
  overflow: hidden;
  border-radius: 70% 30% 50% 50% / 50% 30% 70% 50%;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-radius 500ms ease-in-out;
}

.insideRight:hover {
  border-radius: 10%;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  background-color: white;
  -webkit-box-shadow: 0 0 0 30px white inset;
}
</style>
