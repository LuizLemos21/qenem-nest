<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Questão</title>
</head>
<body>
    <?php
        include("conecta.php");

        // Verifica se o parâmetro 'parametro' foi passado na query string
        if(isset($_GET['id'])) {
            // Obtém o valor do parâmetro 'parametro'
            $parametro = $_GET['id'];

            // salvando a consulta
            $sql = "SELECT * FROM `questao` JOIN `enem` ON (questao.enem = enem.idenem) WHERE idquest = $parametro";
            $result = $conn->query($sql);
            $row = $result->fetch_assoc();
            
            //valores para a função verificarResposta(resp,texto)
            $resp = htmlspecialchars($row["respCorreta"]);
            $texto = nl2br(htmlspecialchars($row["textoResposta"]));
            $imgpath = $row["img"];

            //aqui tá a questão 
            echo "<h1> ENEM ".$row["ano"]." - Questão ".$row["numero"]."</h1> <h2> Disciplina: ".$row["disciplina"]."</h2>"; 
            echo "<p>".$row["texto"]."</p>"; 
            if ($imgpath){
                echo "<img src='data:image/png;base64," . base64_encode($imgpath)."' alt='imagem da questao'>";
            }
            echo "<h4>Escolha uma opção de A a E:</h4>";
            echo "<form id='quizForm'>
                    <input type='radio' id='opcaoA' name='opcao' value='a'>A - ".$row["alternativaA"]." <br>
                    <input type='radio' id='opcaoB' name='opcao' value='b'>B - ".$row["alternativaB"]." <br>
                    <input type='radio' id='opcaoC' name='opcao' value='c'>C - ".$row["alternativaC"]."<br>
                    <input type='radio' id='opcaoD' name='opcao' value='d'>D - ".$row["alternativaD"]."<br>
                    <input type='radio' id='opcaoE' name='opcao' value='e'>E - ".$row["alternativaE"]."<br>
                    <br>
                    <button type='button' onclick='verificarResposta()'>Verificar Resposta</button>
                </form>";
    
        } else {
            // Caso o parâmetro 'parametro' não seja passado
            echo "Ocorreu algum problema :(";
        }
    ?>

    <div id="resultado"></div>

    <script>
        function verificarResposta() {
            var formenviado = true;
            var escolhaDoUsuario = document.querySelector('input[name="opcao"]:checked');
            var resultadoDiv = document.getElementById('resultado');

            if (escolhaDoUsuario) {
                if (escolhaDoUsuario.value === '<?php echo $resp; ?>') {
                    resultadoDiv.innerHTML = "<p style='color: green;'>Correto!</p>";
                } else {
                    resultadoDiv.innerHTML = "<p style='color: red;'>Resposta Incorreta.</p>" +
                        "<p style='color: red;'>Correção: <?php echo $texto; ?></p>";
                }
            } else {
                resultadoDiv.innerHTML = "<p style='color: red;'>Por favor, selecione uma resposta.</p>";
            }
        }
    </script>
</body>
</html>
