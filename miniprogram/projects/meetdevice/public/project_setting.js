module.exports = { //meetdevice
	PROJECT_COLOR: '#1C9DFF',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#1C9DFF',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
	],

	NEWS_NAME: '通知公告',
	NEWS_CATE: [
		{ id: 1, title: '通知公告', style: 'leftpic' },
	],
	NEWS_FIELDS: [

	],

	ENROLL_NAME: '活动室',
	ENROLL_CATE: [
		{ id: 1, title: '文艺类' }, 
		{ id: 2, title: '运动类' },
		{ id: 3, title: '棋牌类' },
		{ id: 4, title: '场地类' }, 
		{ id: 5, title: '书画类' }, 
		{ id: 6, title: '会议类' }, 

	],
	ENROLL_FIELDS: [


	],
	ENROLL_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '联系人', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'text', len: 11, title: '手机号', must: true, edit: false },
		{ mark: 'num', type: 'text', max: 50, title: '人数', must: true, edit: false },
		{ mark: 'dest', type: 'text', max: 50, title: '事项', must: true, edit: false },
	],

	ENROLL_TIME_NODE: {
		mark: 'mark-no',
		start: 6, //开始
		end: 23, // 结束
		price: 0, //价格 
		succ: false //是否已预订 
	},
	ENROLL_DAY_NODE: [
		{
			mark: 'mark-no',
			start: 6, //开始
			end: 23, // 结束
			price: 0,
			succ: false
		},
	],


}