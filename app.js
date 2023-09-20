let lastSeen=new Date();
const posts = ["post number 1", "post number 2", "post number 3"];

function updateLastUserActivity() {
    return new Promise((response, reject) => {
        lastSeen = new Date();
        response();
    });
}

function createNewPost() {
    return new Promise((response, reject) => {
        posts.push(`post number ${posts.length + 1}`);
        response();
    });
}

function deletePost() {
    return new Promise((response, reject) => {
        if (posts.length > 0) {
            posts.pop();
            response()
        }
        else {
            reject(`There are no more posts`);
        }
    });
}

function printPosts() {
    posts.forEach(post => {
        console.log(post);
    })
    console.log(`Last seen on ${lastSeen}`);
}


Promise.all([createNewPost(), updateLastUserActivity()]).then(printPosts);

deletePost().then(printPosts).catch(err => { console.log(err) });
