const loadSports = () =>{
    const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySport(data.sports))
}
loadSports();

const displaySport = sports =>{
    const parent = document.getElementById("parent");
    sports.forEach(sport => {
        console.log(sport);
        const div = document.createElement('div');
        div.classList.add("style");

        div.innerHTML =`
                <img src = "${sport.strSportIconGreen}">
                <h4>Name: ${sport.strSport}</h4>
                <h4>ID: ${sport.idSport}</h4>
                <p>${sport.strSportDescription.slice(0,250)}</p>
        `
        parent.appendChild(div);

    });
}