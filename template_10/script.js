document.addEventListener("DOMContentLoaded", function() {
    var tableBody = document.querySelector("#journalTable tbody");
    var searchInput = document.querySelector("#searchInput");

    // Função para exibir os periódicos na tabela
    function displayJournals(journals) {
        // Limpar tabela
        tableBody.innerHTML = "";

        // Exibir os periódicos
        journals.forEach(function(journal) {
            var row = document.createElement("tr");
            var nameCell = document.createElement("td");
            var issnCell = document.createElement("td");
            var linkCell = document.createElement("td");

            nameCell.textContent = journal.nome;
            issnCell.textContent = journal.issn;
            linkCell.innerHTML = "<a href='" + journal.link + "'>Acessar</a>";

            row.appendChild(nameCell);
            row.appendChild(issnCell);
            row.appendChild(linkCell);

            tableBody.appendChild(row);
        });
    }

    // Função para filtrar a tabela com base no termo de pesquisa
    function searchJournals(searchTerm) {
        var filteredJournals = journals.filter(function(journal) {
            var nomeMatch = journal.nome.toLowerCase().includes(searchTerm.toLowerCase());
            var issnMatch = journal.issn.toLowerCase().includes(searchTerm.toLowerCase());
            return nomeMatch || issnMatch;
        });

        displayJournals(filteredJournals);
    }

    // Manipulador de evento para pesquisar quando o usuário digitar no campo de pesquisa
    searchInput.addEventListener("input", function() {
        var searchTerm = searchInput.value;
        searchJournals(searchTerm);
    });

    // Dados dos periódicos
    var journals = [
        {
            nome: "Periódico 1",
            issn: "1234-5678",
            link: "https://exemplo.com/periodico1"
        },
        {
            nome: "Periódico 2",
            issn: "9876-5432",
            link: "https://exemplo.com/periodico2"
        },
        {
            nome: "Periódico 3",
            issn: "9834-5432",
            link: "https://exemplo.com/periodico2"
        },
        {
            nome: "Periódico 4",
            issn: "9876-4432",
            link: "https://exemplo.com/periodico2"
        },
        {
            nome: "Periódico 5",
            issn: "9856-5432",
            link: "https://exemplo.com/periodico2"
        },
        {
            nome: "Periódico 6",
            issn: "9876-5462",
            link: "https://exemplo.com/periodico2"
        },
        // Adicione mais periódicos conforme necessário
    ];

    // Exibir todos os periódicos inicialmente
    displayJournals(journals);
});
