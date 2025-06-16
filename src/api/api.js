const API_BASE_URL = 'https://localhost/api';

export const apiEndpoints = {
    userLogin: `${API_BASE_URL}/login`,
    userRegister: `${API_BASE_URL}/register`,
    accountActivation: `${API_BASE_URL}/activate`,
    loginStatus: `${API_BASE_URL}/login_status`,
    resetPassword: `${API_BASE_URL}/reset_password`,
    logout: `${API_BASE_URL}/logout`,
    newAccessToken: `${API_BASE_URL}/new_access_token`,
    newRefreshToken: `${API_BASE_URL}/new_refresh_token`,
    isRefreshTokenExpiringSoon: `${API_BASE_URL}/refresh_token_expiring_soon`
};