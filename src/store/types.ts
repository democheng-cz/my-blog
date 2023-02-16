export interface CategoryItemType {
	categoryId: number
	cover: string
	categoryName: string
	categoryDesc: string
	userId: null | number
	nickname: string
	blogCount: number
}

export interface BlogItemType {
	blogId: string
	title: string
	categoryId: number
	categoryName: string
	summary: string
	content: string
	markdownContent: string
	editorType: 1 | 0
	tag: string
	userId: number
	nickname: string
	lastUpdateTime: Date
}

export interface TopicItemType {
	categoryId: number
	cover: string
	categoryName: string
	categoryDesc: string
	userId: null | number
	nickname: string
	blogCount: number
}
