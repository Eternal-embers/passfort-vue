<template>
	<div id="activation">
		<div id="progressbar">
			<li 
				v-for="(step, index) in steps"
				:key="index" 
				:class="{'active': index <= currentStep}"> 
				{{step.name}}
			</li>
		</div>

		<div class="form-content">
			<transition name="fade" mode="out-in">
				<keep-alive>
					<component
						:is="currentFormComponent"
						:formData="currentFormData"
						@goBack="handleGoBack"
					/>
				</keep-alive>
			</transition>
		</div>

		<div class="action-buttons">
			<button class="action-button" @click.prevent="previousStep" :disabled="currentStep === 0">上一步</button>
			<button class="action-button" @click.prevent="nextStep" :disabled="currentStep >= steps.length - 1">下一步</button>
		</div>
	</div>
</template>

<script>
import RecoveryEmailForm from '@/components/RecoveryEmailForm.vue'
import SecurityQuestionsForm from '@/components/SecurityQuestionsForm.vue'
import PersonalInfoForm from '@/components/PersonalInfoForm.vue'
import OptionalInfoForm from '@/components/OptionalInfoForm.vue'
import ConfirmationForm from '@/components/ConfirmationForm.vue'
import { storeToRefs } from 'pinia'
import { useActivationDataStore } from '@/stores/activationData'

export default {
	setup() {
		// 导入 Pinia store
		const activationDataStore = useActivationDataStore()

		// 使用 storeToRefs 将 store 的属性解构为响应式引用
		const { firstIncompleteStepIndex } = storeToRefs(activationDataStore)

		return {
			firstIncompleteStepIndex
		}
	},
	components: {
		RecoveryEmailForm,
		SecurityQuestionsForm,
		PersonalInfoForm,
		OptionalInfoForm,
		ConfirmationForm
	},
	data() {
		return {
			steps: [
				{name: '恢复邮箱'}, // 恢复邮箱
				{name: '安全问题'}, // 三个安全问题
				{name: '个人信息' },// 姓名，身份证号，手机号
				{name: '可选信息' },// 高中名称，家乡，工作，父亲名称，母亲名称
				{name: '确认提交' } // 确认信息
			],
			currentStep: 0, // 当前步骤索引
		}
	},
	methods: {
		// 进入下一步骤
		nextStep() {
			if (this.currentStep < this.steps.length - 1) {
				this.currentStep++
			}
		},
		// 进入上一步骤
		previousStep() {
			if (this.currentStep > 0) {
				this.currentStep--
			}
		},
		// 处理返回按钮事件
		handleGoBack() {
			this.currentStep = this.firstIncompleteStepIndex || 0 // 返回到第一个未完成的步骤
		}
	},
	computed: {
		// 根据当前步骤索引返回对应的组件名称
		currentFormComponent() {
			// 根据当前步骤返回对应的组件
			switch (this.currentStep) {
				case 0:
					return 'RecoveryEmailForm'
				case 1:
					return 'SecurityQuestionsForm'
				case 2:
					return 'PersonalInfoForm'
				case 3:
					return 'OptionalInfoForm'
				case 4:
					return 'ConfirmationForm'
				default:
					return null
			}
		},
	},
	beforeMount() {
		// 确保第一个步骤是激活的
		this.steps[0].active = true
	}
}
</script>

<style scoped>
	*{
		font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	}

	/* 激活帐号模块 */
	#activation {
		height: 100vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		background: linear-gradient(rgba(196, 102, 0, 0.6), rgba(155, 89, 182, 0.6));
		position: relative;
	}

    /* 进度条 */
    #progressbar {
		width: 80%;
		margin: 2.5vh 0 4vh 0;;
		/* CSS 计数器来编号步骤 */
		counter-reset: step;
		display: flex;
		justify-content: center;
		--node-width: 2.5em; /* 进度节点宽度 */
		--node-border-radius: 0.5em; /* 进度节点边框半径 */
		--node-margin-vertical: 0.5vh; /* 进度节点与步骤名称的垂直间距 */
		--count-font-size: 1.2em; /* 步骤序号字体大小 */
		--step-font-size: 0.8em; /* 步骤名称字体大小 */
		--animation-duration: 0.5s; /* 过渡动画持续时间 */
		--progressbar-height: 1.5px; /* 进度条高度 */
		--step-font-color: white; /* 步骤名称字体颜色 */
		--count-number-color: #333; /* 步骤序号字体颜色 */
		--node-background-color: white; /* 进度节点背景颜色 */
		--active-color: #27AE60; /* 激活颜色 */
    }

    #progressbar li {
		flex: 1;
		list-style-type: none;
		color: var(--step-font-color);
		text-transform: uppercase;
		font-size: var(--step-font-size);
		font-weight: lighter;
		text-align: center;
		position: relative;
		z-index: 1; /* 确保步骤在#progressbar 之上 */
		transition: all var(--animation-duration) linear;
    }

	/* 进度节点 */
    #progressbar li:before {
      content: counter(step);
      counter-increment: step;
      width: var(--node-width);
	  display: block;
      line-height: var(--node-width);
      font-size: var(--count-font-size);
      color: var(--count-number-color);
      background: var(--node-background-color);
      border-radius: var(--node-border-radius);
	  margin: var(--node-margin-vertical) auto; /* 居中对齐数字 */
	  transition: all var(--animation-duration) linear;
    }

    /* 进度条连接器 */
    #progressbar li:after {
      content: '';
      width: calc(100% - var(--node-width) - var(--node-border-radius)); /* 减去进度(节点的宽度+节点边框弧度) */
      height: var(--progressbar-height);
      background: var(--node-background-color);
	  margin: var(--node-margin-vertical) 0;
	  position: absolute;
      left: calc(-50% + var(--node-width) - var(--node-border-radius) * 2); /* 居中对齐连接器，-50% 加上(节点的宽度-节点边框弧度*2) */
      top: calc(var(--node-width) / 2); /* 设置为进度节点的高度的一半 */
	  transition: all var(--animation-duration) linear;
    }

	/* 第一个步骤不需要前面的连接器 */
    #progressbar li:first-child:after {
      content: none; 
    }

	/*
	#progressbar li.active {
		color: #27AE60;
		animation: activate 0.5s linear forwards;
	}

	@keyframes activate {
		0% {
			color: white;
		}
		100% {
			color: #27AE60;
		}
	}
	*/

    /* 将活动/已完成步骤标记为绿色, 步骤的数字和之前的连接器变为绿色 */
    #progressbar li.active:before,  #progressbar li.active:after {
      background: var(--active-color);
      color: var(--step-font-color);
    }

	/* 为激活步骤添加动画 */
	#progressbar li.active:before {
		animation: activateStep var(--animation-duration) linear forwards;
	}

	/* 为回退步骤添加动画 */
	#progressbar li.deactive:before {
		animation: deactiveStep var(--animation-duration) * 2 linear forwards;
	}

	/* 激活步骤的动画 */
	@keyframes activateStep {
		0% {
			transform: scale(1);
			background: var(--node-background-color);
			color: var(--step-font-color);
		}
		50% {
			transform: scale(1.25);
			background: var(--active-color);
			color: var(--step-font-color);
		}
		100% {
			transform: scale(1);
			background: var(--active-color);
			color: var(--step-font-color);
		}
	}

	/* 回退步骤的动画 */
	@keyframes deactiveStep {
		0% {
			transform: scale(1);
			background: var(--active-color);
			color: var(--step-font-color);
		}
		50% {
			transform: scale(1.25);
			background: var(--node-background-color);
			color: var(--step-font-color);
		}
		100% {
			transform: scale(1);
			background: var(--node-background-color);
			color: var(--step-font-color);
		}
	}

	.action-buttons{
		position: absolute;
		bottom: 5vh;
	}

	.action-button {
      width: 12vw;
	  background: #27AE60;
      color: white;
      border: 0 none;
      border-radius: 1px;
      cursor: pointer;
      padding: 10px;
      margin: 10px 25px;
      text-decoration: none;
      font-size: 14px;
	  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	  transition: all ease 0.3s;
    }

	.action-button:hover {
		transform: scale(1.05); 
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
	}

	.action-button:active {
		transform: scale(0.95);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
	}

    .action-button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
	  box-shadow: none;
    }

	/* 定义进入和离开的过渡效果 */
	.fade-enter-active, .fade-leave-active {
		transition: opacity 0.3s ease, transform 0.3s ease;
	}

	/* 定义进入和离开的初始状态 */
	.fade-enter-from, .fade-leave-to {
		opacity: 0;
		transform: scale(0.9);
	}
</style>