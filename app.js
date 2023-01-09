
function mostrarProf(){
    fetch('http://localhost:3000/profissional')
    .then(req => req.json())
    .then((data) => mostraProfissionais(data));
    
    function mostraProfissionais(profissionais){
        const htmlProf=profissionais.map(
            (profi) => `

            <table>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>CRO</th>
                <th>ServicoId</th>
            </thead>
            <tbody>
                <td>${profi.id}</td>
                <td>${profi.nome}</td> 
                <td>${profi.cro}</td> 
                <td>${profi.servicoId}</td> 
            </tbody>
        </table>

            `
            );
            document.getElementById('app').innerHTML = htmlProf;
    }
}

function mostrarServ(){
    fetch('http://localhost:3000/servico')
    .then(req => req.json())
    .then((data) => mostraProfissionais(data));
    
    function mostraProfissionais(profissionais){
        const htmlProf=profissionais.map(
            (profi) => `

            <table>
            <thead>
                <th>ID</th>
                <th>Nome</th>
                <th>valor</th>
                <th>DELETAR</th>
               
            </thead>
            <tbody>
                <td>${profi.id}</td>
                <td>${profi.nome}</td> 
                <td>${profi.valor}</td> 
                <td><button type="button" onclick="deletar(${profi.id})">excluir</button> </td> 

             
            </tbody>
        </table>    
    
            `      
            );
            document.getElementById('app').innerHTML = htmlProf;
    }
}



function mostrarAgenda(){
    fetch(`http://localhost:3000/agenda?_expand=servico`)
    .then(req => req.json())
    .then((data) => mostrarAgenda(data));
    
    function mostrarAgenda(agenda){
        const htmlAgenda=agenda.map(
            (agnd) => `

            <table>
            <thead>
                <th>ID</th>
                <th>Cliente</th>
                <th>Data</th>
                <th>Horario</th>
                <th>Serviço</th>
               
            </thead>
            <tbody>
                <td>${agnd.id}</td>
                <td>${agnd.cliente}</td> 
                <td>${agnd.data}</td> 
                <td>${agnd.horario}</td> 
                <td>${agnd.servico}</td> 
                <td>${agnd.servicoId}</td> 
             
            </tbody>
        </table>
            
            
    
            `
            
            );
            document.getElementById('app').innerHTML = htmlAgenda;
    }
}





/* 
 function inserir(){

    const newService ={
        nome: 'Remoção de cistos',
        descricao: 'Os',
        valor: 200,
      
      };
     

    fetch('http://localhost:3000/servico',
    {
        method: 'POST',
        headers: {
            'Content-type':'aplication/json'
        },
       body: JSON.stringify(newService),
      

    }
    ).then(resp => resp.json())
    .then((data) => console.log(data));

}
 */

function deletar(id){

     

    fetch('http://localhost:3000/servico/'+id,
    {
        method: 'DELETE',
        headers: {
            'Content-type':'aplication/json'
        },
       
      

    }
    ).then(resp => resp.json())
    .then((data) => console.log(data));

}