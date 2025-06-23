import { defineStore } from 'pinia';

export const useActivationDataStore = defineStore('formData', {
  state: () => ({
        recoveryEmail: '', // 恢复邮箱
        verificationCode: '', // 验证码
        securityQuestionsData: [
            { question: '', customQuestion: '', answer: '' },
            { question: '', customQuestion: '', answer: '' },
            { question: '', customQuestion: '', answer: '' }
        ],
        fullName: '', // 姓名
        idCardNumber: '', // 身份证号
        phoneNumber: '', // 手机号
        highSchoolName: '', // 高中名称
        hometown: '', // 家乡
        occupation: '', // 工作
        fatherFullName: '', // 父亲名称
        motherFullName: '' // 母亲名称
    }),
    getters: {
        // 检查数据是否有效
        isActivationDataValid: (state) => {
            // 检查必填字段是否为空
            const requiredFields = [
                'recoveryEmail',
                'verificationCode',
                'fullName',
                'idCardNumber',
                'phoneNumber'
            ];
    
            // 检查安全问题是否至少有一个 question 或 customQuestion 不为空
            const securityQuestionsValid = state.securityQuestionsData.some((question) => {
                return question.question || question.customQuestion;
            });
    
            // 检查必填字段是否为真值
            const requiredFieldsValid = requiredFields.every((field) => {
                return !!state[field];
            });
    
            // 返回最终的验证结果
            return securityQuestionsValid && requiredFieldsValid;
        },
        // 返回第一个未完成的步骤的索引
        firstIncompleteStepIndex: (state) => {
            // 检查步骤 1 是否完成
            const step1Complete = !!state.recoveryEmail && !!state.verificationCode;
    
            // 检查步骤 2 是否完成
            const step2Complete = state.securityQuestionsData.some((question) => {
                return question.question || question.customQuestion;
            });
    
            // 检查步骤 3 是否完成
            const step3Complete = !!state.fullName && !!state.idCardNumber && !!state.phoneNumber && !!state.highSchoolName;
    
            // 返回第一个未完成的步骤索引
            if (!step1Complete) return 0; // 步骤 1 未完成
            if (!step2Complete) return 1; // 步骤 2 未完成
            if (!step3Complete) return 2; // 步骤 3 未完成
    
            return 3; // 如果有效数据都完成，则返回到步骤4
        }
    },
    actions: {
        // 更新单个字段
        updateField(fieldName, value) {
          this[fieldName] = value;
        }
    }
});