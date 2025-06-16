<template>
  <div class="security-questions-form">
    <div
      class="security-questions-container"
      v-for="(item, index) in securityQuestionsData"
      :key="index"
    >
      <div class="security-question-group">
        <label :for="`securityQuestion${index + 1}`">安全问题{{ index + 1 }}:</label>

        <!-- 下拉框 -->
        <select
          :id="`securityQuestion${index + 1}`"
          v-model="item.question"
          @change="item.customQuestion = ''"
        >
          <!-- 默认选项 -->
          <option value="">请选择或输入安全问题</option>

          <!-- 动态生成选项，排除已经被选择的问题 -->
          <option
            v-for="question in securityQuestions"
            :key="question"
            :value="question"
            :disabled="isQuestionSelected(question, index)"
          >
            {{ question }}
          </option>

          <!-- 自定义问题选项 -->
          <option value="custom">自定义问题</option>
        </select>

        <!-- 自定义问题输入框 -->
        <transition name="custom-question-fade">
          <div 
            class="custom-question"
            v-show="item.question === 'custom'">
            <label :for="`customQuestion${index + 1}`">自定义问题:</label>
            <input
              :id="`customQuestion${index + 1}`"
              type="text"
              placeholder="请输入自定义问题"
              v-model="item.customQuestion"
            />
          </div>
        </transition>
      </div>

      <div class="security-answer-group">
        <!-- 安全问题答案输入框 -->
        <label :for="`securityAnswer${index + 1}`">答案{{ index + 1 }}:</label>
        <input
          type="text"
          :id="`securityAnswer${index + 1}`"
          v-model="item.answer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useActivationDataStore } from '@/stores/activationData';

export default {
  setup() {
    // 导入 Pinia store
    const activationDataStore = useActivationDataStore();

    // 使用 storeToRefs 将 store 的属性解构为响应式引用
    const { securityQuestionsData } = storeToRefs(activationDataStore);

    return {
      securityQuestionsData,
    };
  },
  data() {
    return {
      securityQuestions: [
        '您的小学班主任的名字是什么？',
        '您最喜欢的颜色是什么？',
        '您出生的城市是哪里？',
        '您最喜欢的一本书是什么？',
        '您最喜欢的一部电影是什么？'
      ],
    };
  },
  methods: {
    // 检查问题是否已经被选中
    isQuestionSelected(question, currentIndex) {
      // 只要存在回调函数返回 true 则 some 方法会返回 true， 否则返回 false
      return this.securityQuestionsData.some((item, index) => {
        return item.question === question && index !== currentIndex;
      });
    },
  },
};
</script>

<style soped>
/* 定义通用变量 */
:root {
  --primary-color: #28a745;
  --secondary-color: #f9f9f9; 
  ---colorbg: #f5f5f5;
  --label-text-color: #333;
  --select-text-color: #666;
  --input-text-color: #333;
  --border-color: #ccc; 
  --padding-base: 0.5em;
  --margin-base: 0.5em;
}

/* 安全问题表单样式 */
.security-questions-form {
  padding: 2em 2.5em;
  display: flex;
  flex-direction: column;
  gap: 2.5vh;
  background-color: var(--secondary-color);
  border-radius: 0.5em;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
}

/* 安全问题容器样式 */
.security-questions-container {
  width: 100%;
}

/* 标签样式 */
.security-questions-container label {
  display: inline-block;
  width: 6em;
  color: var(--label-text-color);
  font-size: 0.8em;
}

/* 下拉框和输入框的通用样式 */
.security-questions-container select,
.security-questions-container input{
  background-color: var(--bg-color);
  width: 30em;
  padding: var(--padding-base);
  margin: var(--margin-base) 0;
  border: 1px solid var(--border-color );
  border-radius: 4px;
  box-sizing: border-box;
  font-family: var(--font-family);
  font-size: 14px;
}

.security-questions-container input {
  color: var(--input-text-color);
}

/* 下拉框的样式 */
.security-questions-container select{
  color: var(--select-text-color);
  cursor: pointer;
}

/* focus状态的样式 */
.security-questions-container select:focus,
.security-questions-container input:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 4px var(--primary-color);
}

/* 禁用选项的样式 */
.security-questions-container option:disabled {
  color: #aaa;
}

/* 定义过渡动画的样式 */
.custom-question-fade-enter-active, .custom-question-fade-leave-active {
  transition: opacity 0.3s ease;
}

.custom-question-fade-enter-from, .custom-question-fade-leave-to {
  opacity: 0;
}
</style>