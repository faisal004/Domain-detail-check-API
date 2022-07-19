



const searchDomain = async () => {
    const enterDomainDiv = document.getElementById("enterDomain").value
    console.log(enterDomainDiv)
    const data =await getdomainData(enterDomainDiv)
    showDomainInfo(data)
}

const getdomainData = (Domain) => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'd667ed9392msh50a8be6c2d1c30ap15a739jsn00c9f06f5cd6',
            'X-RapidAPI-Host': 'nameauditor-whois-check.p.rapidapi.com'
        }
    };
    return fetch(`https://nameauditor-whois-check.p.rapidapi.com/whois/${Domain}`, options)
        .then(response => response.json())
        .then(response =>response)
        .catch(err => console.error(err));

}

const showDomainInfo = (Domaindata) => {
    console.log(Domaindata.payload)
    document.getElementById("domain").innerHTML = Domaindata.payload.full
    document.getElementById("status").innerHTML = Domaindata.payload.availability
    document.getElementById("registrant").innerHTML = Domaindata.payload.registrar_name
    document.getElementById("created").innerHTML = new Date(Domaindata.payload.creation_date).toLocaleDateString();
    document.getElementById("expires").innerHTML = Domaindata.payload.time_to_expire 
    document.getElementById("updated").innerHTML = Domaindata.payload.age

}