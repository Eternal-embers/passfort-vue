const API_BASE_URL = 'https://localhost/api';
const API_USER_URL = `${API_BASE_URL}/user`;
const API_MAIL_URL = `${API_BASE_URL}/mail`;
const API_CREDENTIAL_URL = `${API_BASE_URL}/credential`;
const API_CREDENTIAL_HISTORY_URL = `${API_BASE_URL}/credential_history`;

export const apiEndpoints = {
    /* from user controller */
    //注册账号
    userRegister: (email, password, code, codeKey) => ({
        url: `${API_USER_URL}/register`,
        method: 'POST',
        data: { email, password, code, codeKey }
    }),
    //登录账号
    userLogin: (email, password, code, codeKey) => ({
        url: `${API_USER_URL}/login`,
        method: 'POST',
        data: { email, password, code, codeKey }
    }),
    //激活账号
    accountActivation: (data) => ({
        url: `${API_USER_URL}/activate`,
        method: 'POST',
        data: {
            activationInformation: {
                userVerification: {
                    verificationId: data.verificationId, // 验证记录唯一标识
                    userId: data.userId, // 关联用户主表的用户ID
                    recoveryEmail: data.recoveryEmail, // 恢复邮箱
                    securityQuestion1: data.securityQuestion1, // 第一组安全问题
                    securityAnswer1: data.securityAnswer1, // 第一组安全问题的答案
                    securityQuestion2: data.securityQuestion2, // 第二组安全问题
                    securityAnswer2: data.securityAnswer2, // 第二组安全问题的答案
                    securityQuestion3: data.securityQuestion3, // 第三组安全问题
                    securityAnswer3: data.securityAnswer3, // 第三组安全问题的答案
                    fullName: data.fullName, // 姓名
                    idCardNumber: data.idCardNumber, // 身份证号
                    phoneNumber: data.phoneNumber, // 手机号
                    highSchoolName: data.highSchoolName, // 高中名称
                    hometown: data.hometown, // 家乡
                    occupation: data.occupation, // 工作
                    motherFullName: data.motherFullName, // 母亲姓名
                    fatherFullName: data.fatherFullName // 父亲姓名
                },
                verificationCode: data.verificationCode, // 验证码
                codeKey: data.codeKey // 验证码
            }
        }
    }),
    // 密码验证，需要携带 access token
    passwordVerification: (password) => ({
        url: `${API_USER_URL}/password_verification`,
        method: 'POST',
        data: { password }
    }),
    // 生成身份验证请求
    generateVerificationRequest: (email) => ({
        url: `${API_USER_URL}/generate_verification_request`,
        method: 'POST',
        data: { email }
    }),
    // 恢复邮箱验证
    recoveryEmailVerification: (verificationCode, codeKey) => ({
        url: `${API_USER_URL}/verify/recovery_email`,
        method: 'POST',
        data: { verificationCode, codeKey }
    }),
    // 安全问题验证
    securityQuestionVerification: (securityAnswer1, securityAnswer2, securityAnswer3) => ({
        url: `${API_USER_URL}/verify/security_questions`,
        method: 'POST',
        data: { securityAnswer1, securityAnswer2, securityAnswer3 }
    }),
    // 个人信息验证
    personalInfoVerification: (fullName, idCardNumber, phoneNumber) => ({
        url: `${API_USER_URL}/verify/personal_info`,
        method: 'POST',
        data: { fullName, idCardNumber, phoneNumber }
    }),
    // 其他可选信息验证
    otherInfoVerification: (highSchoolName, hometown, occupation, motherFullName, fatherFullName) => ({
        url: `${API_USER_URL}/verify/other_info`,
        method: 'POST',
        data: {highSchoolName, hometown, occupation, motherFullName, fatherFullName}
    }),
    // 申诉重置密码，完成MFA后发起此请求，由系统重置密码
    resetPassword: () => ({
        url: `${API_USER_URL}/reset_password`,
        method: 'POST'
    }),
    // 用户登录状态下修改密码
    updatePassword: (newPassword) => ({
        url: `${API_USER_URL}/update_password`,
        method: 'POST',
        data: {newPassword}
    }),
    //查询登录状态
    loginStatus: () => ({
        url: `${API_USER_URL}/login_status`,
        method: 'GET'
    }),
    // 注销登录状态
    logout: () => ({
        url: `${API_USER_URL}/logout`,
        method: 'POST'
    }),
    //获取新的access token, 需要携带refresh token
    newAccessToken: () => ({
        url: `${API_USER_URL}/new_access_token`,
        method: 'POST'
    }),
    //获取新的refresh token
    newRefreshToken: () => ({
        url: `${API_USER_URL}/new_refresh_token`,
        method: 'POST'
    }),
    // 查询 refresh token 是否即将过期
    isRefreshTokenExpiringSoon: () => ({
        url: `${API_USER_URL}/is_refresh_token_expiring_soon`,
        method: 'GET'
    }),
    // 自动登录
    autoLogin: () => ({
        url: `${API_USER_URL}/auto_login`,
        method: 'POST'
    }),

    /* from email controller */
    // 发送注册验证邮件
    sendRegisterEmail: (email) => ({
        url: `${API_MAIL_URL}/register_verify`, 
        method: 'POST',
        data: {email}
    }),
    // 发送身份验证邮件
    sendVerificationEmail: (email, operationType) => ({
        url: `${API_MAIL_URL}/verify`,
        method: 'POST',
        data: {email, operationType}
    }),


    /* from credential controller */
    // 添加凭证
    addCredential: (platform, account, password) => ({
        url: `${API_CREDENTIAL_URL}/add`,
        method: 'POST',
        data: {platform, account, password}
    }), 
    // 获取所有凭证
    getCredentials: () => ({
        url: `${API_CREDENTIAL_URL}/get`,
        method: 'POST',
        data: {}
    }),
    // 查看密码
    viewPassword: (encryptionId) => ({
        url: `${API_CREDENTIAL_URL}/view`,
        method: 'POST',
        data: { encryptionId }
    }),
    // 通过二维码查看密码
    viewPasswordByQR: (encryptionId) => ({
        url: `${API_CREDENTIAL_URL}/view/qr`,
        method: 'POST',
        data: {encryptionId}
    }),
    // 更新凭证账号
    updateCredentialAccount: (credentialId, newAccount) => ({
        url: `${API_CREDENTIAL_URL}/update/account`,
        method: 'POST',
        data: {credentialId, newAccount}
    }),
    // 更新凭证密码
    updateCredentialPassword: (credentialId, newPassword) => ({
        url: `${API_CREDENTIAL_URL}/update`,
        method: 'POST',
        data: {credentialId, newPassword}
    }),
    // 使凭证失效
    updateCredentialValidity: (credentialId, validity) => ({
        url: `${API_CREDENTIAL_URL}/update/validity`,
        method: 'POST',
        data: {credentialId, validity}
    }),

    /* from credentialHistory controller */
    getCredentialHistory: (credentialId) => ({
        url: `${API_CREDENTIAL_HISTORY_URL}/get`,
        method: `POST`,
        data: {credentialId}
    }),
    viewCredentialHistoryPassword: (historyId) => ({
        url: `${API_CREDENTIAL_HISTORY_URL}/view`,
        method: 'POST',
        data: {historyId}
    }),
    viewCredentialHistoryPasswordByQR: (historyId) => ({
        url: `${API_CREDENTIAL_HISTORY_URL}/view/qr`,
        method: 'POST',
        data: {historyId}
    }),
    deleteCredentialHistory: (historyId) => ({
        url: `${API_CREDENTIAL_HISTORY_URL}/delete`,
        method: 'POST',
        data: {historyId}
    }),
    deleteCredentialHistoryBefore: (credentialId, createAt) => ({
        url: `${API_CREDENTIAL_HISTORY_URL}/delete/before`,
        method: 'POST',
        data: {credentialId, createAt}
    })
};

// 添加默认导出
export default apiEndpoints;