const posts=[
    {title:'post one',body:'This is post one'},
    {title:'post two',body:'This is post two'}
];


function getPost(){
    setTimeout(()=>{
        output='';
        posts.forEach((post,index)=>{
            output+=`<li>${post.title}</li>`
        })
    document.body.innerHTML=output;    
    },1000)
}


function createPost(post,callback){
    setTimeout(()=>{
        posts.push(post)
        callback();
    },2000)
      
}

createPost(
    {title:'post three',body:'This is post three'},getPost
);