let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, wtf are you doing', likesCount: 12},
                {id: 2, message: 'Oh, Its my first post', likesCount: 11},
                {id: 1, message: 'Zaebal', likesCount: 32},
                {id: 2, message: 'Hueeta', likesCount: 99},
            ]

        },
        messagePage: {
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'Give asf a asfa'},
                {id: 3, message: 'Your disscusting'},
                {id: 4, message: 'afasfafa'},
                {id: 5, message: 'Wisfasfasftch'},
            ],

            dialogs: [
                {id: 1, name: 'Leonea'},
                {id: 2, name: 'Andrew'},
                {id: 3, name: 'Alibabw'},
                {id: 4, name: 'Gannibal'},
                {id: 5, name: 'Witch'},
                {id: 6, name: 'Ghoul'}
            ]
        }
    },

    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },


    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';

        this._callSubscriber(this._state);
    },

    updadeNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}
export default store