import { FullPost, INewPost } from '@shared/types/entities/post.interface';

export const RequestPostAction = 'post/RequestPostAction';

export interface IRequestPostAction {
	type: typeof RequestPostAction;
	payload: {
		post: string;
	};
}

const requestPostFn = (post: string): IRequestPostAction => ({
	type: RequestPostAction,
	payload: { post },
});

export const ReceivePostsAction = 'post/ReceivePostsAction';

export interface IReceivePostsAction {
	type: typeof ReceivePostsAction;
	payload: {
		posts: FullPost[]; receivedAt: number;
	};
}

const receivePostsFn = (posts: FullPost[], receivedAt: number): IReceivePostsAction => ({
	type: ReceivePostsAction,
	payload: { posts, receivedAt },
});

export const RequestProfilePostsAction = 'post/RequestProfilePostsAction';

export interface IRequestProfilePostsAction {
	type: typeof RequestProfilePostsAction;
	payload: {
		profile: string;
	};
}

const requestProfilePostsFn = (
	profile: string,
): IRequestProfilePostsAction => ({
	type: RequestProfilePostsAction,
	payload: { profile },
});

export const ReceiveProfilePostsAction = 'post/ReceiveProfilePostsAction';

export interface IReceiveProfilePostsAction {
	type: typeof ReceiveProfilePostsAction;
	payload: {
		profile: string; posts: FullPost[]; receivedAt: number;
	};
}

const receiveProfilePostsFn = (profile: string, posts: FullPost[], receivedAt: number): IReceiveProfilePostsAction => ({
	type: ReceiveProfilePostsAction,
	payload: { profile, posts, receivedAt },
});

export const SendPostAction = 'post/SendPostAction';

export interface ISendPostAction {
	type: typeof SendPostAction;
	payload: {
		newPost: INewPost;
	};
}

const sendPostFn = (newPost: INewPost): ISendPostAction => ({
	type: SendPostAction,
	payload: { newPost },
});

export const SentPostAction = 'post/SentPostAction';

export interface ISentPostAction {
	type: typeof SentPostAction;
	payload: {
		post: FullPost; receivedAt: number; tmpId: string;
	};
}

const sentPostFn = (post: FullPost, receivedAt: number, tmpId: string): ISentPostAction => ({
	type: SentPostAction,
	payload: { post, receivedAt, tmpId },
});

export const FailedSentPostAction = 'post/FailedSentPostAction';

export interface IFailedSentPostAction {
	type: typeof FailedSentPostAction;
	payload: {
		tmpId: string;
	};
}

const failedSentPostFn = (tmpId: string): IFailedSentPostAction => ({
	type: FailedSentPostAction,
	payload: { tmpId },
});

export const DeletePostAction = 'post/DeletePostAction';

export interface IDeletePostAction {
	type: typeof DeletePostAction;
	payload: {
		post: string;
	};
}

const deletePostFn = (post: string): IDeletePostAction => ({
	type: DeletePostAction,
	payload: { post },
});

export const LikePostAction = 'post/LikePostAction';

export interface ILikePostAction {
	type: typeof LikePostAction;
	payload: {
		post: string;
		fromProfile: string;
	};
}

const likePostFn = (post: string, fromProfile: string): ILikePostAction => ({
	type: LikePostAction,
	payload: { post, fromProfile },
});

export const UnlikePostAction = 'post/UnlikePostAction';

export interface IUnlikePostAction {
	type: typeof UnlikePostAction;
	payload: {
		post: string;
		fromProfile: string;
	};
}

const unlikePostFn = (
	post: string,
	fromProfile: string,
): IUnlikePostAction => ({
	type: UnlikePostAction,
	payload: { post, fromProfile },
});

export type PostActionsDto =
	| ISendPostAction
	| IRequestPostAction
	| IDeletePostAction
	| ILikePostAction
	| IUnlikePostAction
	| IRequestProfilePostsAction
	| IReceivePostsAction
	| IReceiveProfilePostsAction
	| ISentPostAction
	| IFailedSentPostAction;

export const PostActions = {
	send: sendPostFn,
	sent: sentPostFn,
	sendFailed: failedSentPostFn,
	delete: deletePostFn,
	like: likePostFn,
	unlike: unlikePostFn,
	request: requestPostFn,
	requestFromProfile: requestProfilePostsFn,
	receive: receivePostsFn,
	receiveFromProfile: receiveProfilePostsFn,
};
