const loadUser = () =>{
    const url = `https://randomuser.me/api/?results=20`
    fetch(url)
    .then(res => res.json())
    .then(data => displayUser(data.results))
}
const displayUser = (users) => {
    users.forEach(user  => {
        console.log(user)
        const loacation = user.location;
        // console.log(loacation.country)

        const parent = document.getElementById('display-user');
        const div = document.createElement('div');
        div.classList.add('style');

        div.innerHTML =`
            <img  src = "${user.picture.large}"
            <p>Location: ${loacation.city} </P>
            <p>Country: ${loacation.country} </P>
            <p>Postcode: ${loacation.postcode} </P>
            <p>Street Name:${loacation.street.name} </P>
            <p>Street number ${loacation.state} </P>
            <p>Timezone ${loacation.timezone.description} </P>
            
        `
        parent.appendChild(div)


    });
    
}