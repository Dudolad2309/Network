import ProfileReducer, {addPostActionCreator, deletePost} from "./ProfileReducer";

let state = {
    PostData: [ {id: 1, message: "Hello how are you?", countLike: 5}, ]

};



it('length post should be incremented', () => {
// 1. test data
    let action = addPostActionCreator("it-dims")


// 2. action
    let newState = ProfileReducer(state,action)
// 3. expected
    expect(newState.PostData.length).toBe(2)

});

it('message new post should be correct', () => {
// 1. test data
    let action = addPostActionCreator("it-dims")


// 2. action
    let newState = ProfileReducer(state,action)
// 3. expected

    expect(newState.PostData[1].message).toBe("it-dims")
});


it ("deleting post messages should be decrement", () => {
// 1. test data
    let action = deletePost(1)

// 2. action
    let newState = ProfileReducer(state,action)

// 3. expected
    expect(newState.PostData.length).toBe(0)
});

