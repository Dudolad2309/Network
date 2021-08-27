import ProfileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";

const state = {
	PostData: [{id: 1, message: "Hello how are you?", countLike: 5},]
};
it('length post should be incremented', () => {
	let action = addPostActionCreator("it-dims")
	let newState = ProfileReducer(state, action)
	expect(newState.PostData.length).toBe(2)
});

it('message new post should be correct', () => {
	let action = addPostActionCreator("it-dims")
	let newState = ProfileReducer(state, action)
	expect(newState.PostData[1].message).toBe("it-dims")
});
it("deleting post messages should be decrement", () => {
	let action = deletePost(1)
	let newState = ProfileReducer(state, action)
	expect(newState.PostData.length).toBe(0)
});

