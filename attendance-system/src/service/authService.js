import ApiService from "./apiService";

const LOGIN_URL = "/auth/login";
const REGISTER_URL = "/auth/register";

class AuthService {
  async login(credentials) {
    try {
      const response = await ApiService.post(LOGIN_URL, {
        email: credentials.username,
        password: credentials.password,
      });

      if (response.data?.token) {
        if (credentials.rememberMe) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }
      }
      
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  }

  async register(userData) {
    const response = await ApiService.post(REGISTER_URL, userData);
    return response.data;
  }

  logout() {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
  }

  getToken() {
    return localStorage.getItem("token") || sessionStorage.getItem("token");
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}

export default new AuthService();