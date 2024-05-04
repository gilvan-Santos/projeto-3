$(document).ready(function() {
    $("#taskForm").submit(function(event) {
        event.preventDefault(); // Previne o envio do formulário

        // Obtém o valor da tarefa do input
        var task = $("#taskInput").val().trim();

        // Verifica se o campo não está vazio
        if (task !== "") {
            // Adiciona a tarefa à lista
            $("#taskList").append("<li>" + task + "</li>");

            // Limpa o campo de input
            $("#taskInput").val("");
        }
    });

    // Adiciona evento de clique para as tarefas
    $(document).on("click", "#taskList li", function() {
        $(this).toggleClass("completed"); // Adiciona ou remove a classe "completed"
    });
});
