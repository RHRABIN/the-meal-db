const loadComment = () =>{
    const url = ('https://jsonplaceholder.typicode.com/comments')
    fetch(url)
    .then(res => res.json())
    .then(data => displayComment(data))
}
// loadComment()
const displayComment = comment => {
    const displayContainer = document.getElementById('display-comment');
    comment.forEach(eachComment => {
        // console.log(eachComment);
        const div = document.createElement('div');
        div.classList.add('style');
        div.innerHTML = `
        <div onclick = "showDetail(${eachComment.id})">
            <h4>${eachComment.name}</h4>
            <p>Email: ${eachComment.email}</p>
            <p>${eachComment.body.slice(1,200)}</p>
        </div>
        `     
        displayContainer.appendChild(div)
    });
}
const showDetail  = id=>{
    const url = `https://jsonplaceholder.typicode.com/comments/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetail(data))
}
const displayDetail = data =>{
    const detail = document.getElementById('detail');
        
        const div = document.createElement('div');
       
        div.classList.add('style');
         detail.textContent = ""
        div.innerHTML =`
        <h4> Name: ${data.name}</h4>
        <h5> Id: ${data.id}</h5>
        <p>Email: ${data.email}</p>
        
        `
        detail.appendChild(div);
    
}