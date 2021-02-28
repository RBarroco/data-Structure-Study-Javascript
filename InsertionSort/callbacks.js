const posts = [
  { title: 'Post One', body: 'This is post One' },
  { title: 'Post Two', body: 'This is post two' }
];

function getPosts() {
  //simulating the fetch call;
  setTimeout(() => {
    let output = '';
    posts.forEach(post => {
      output += `<li>${post.title}</li>`;
    });

    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  });
}

createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);
