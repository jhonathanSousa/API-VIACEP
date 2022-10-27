const Variables = {
   cep: document.querySelector('#cep'),
   road: document.querySelector('#road'),
   district: document.querySelector('#district'),
   state: document.querySelector('#state'),
   uf: document.querySelector('#uf'),
   btnConsultCep: document.querySelector('#btn-consult-cep')
}

// CONSULT-CEP
Variables.btnConsultCep.addEventListener('click', (event) => {

    event.preventDefault();

    if(Variables.cep.value === ''){
        alert('Por favor , informe o cep no campo abaixo !')
    }else{

        const endpoint = `https://viacep.com.br/ws/${Variables.cep.value}/json/`;

        // API
        const loadCep = async () => {
            try {
                const response = await fetch(endpoint);
                cep = await response.json();
                displayCep(cep);
            } catch (err) {
                console.error(err);
            }
        };

        // API DISPLAY DATA
        const displayCep = (date) => {
            Variables.road.value = date.logradouro;
            Variables.district.value = date.bairro;
            Variables.state.value = date.localidade;
            Variables.uf.value = date.uf;
        };

        loadCep();
    }
});
    


