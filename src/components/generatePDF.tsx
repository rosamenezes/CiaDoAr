import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Alert } from 'react-native';
import { FormData } from '../assets/mocks/mocks';
import { format } from 'date-fns';
import { optionsCondicao } from '../assets/mocks/mocks';
import { logo64 } from '../assets/mocks/mocks';
import convertFileUriToBase64 from '../utils/convertImageBase64';
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';

export const generatePDF = async (data: FormData) => {
    const formattedDate = data.data ? format(data.data, 'dd/MM/yyyy') : '';
    const image64 = await convertFileUriToBase64(data.image);
    console.log(data);
    const htmlContent = `
    <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Título do Documento</title>
    <style>
        /* Define o tamanho da página A4 */
        @page {
            size: A4;
            margin: 20mm;
        }

        /* Remove margens e espaçamentos padrão */
        body, html {
            margin: 0;
            padding: 0;
        }

        /* Estilos gerais */
        body {
            font-family: Arial, sans-serif;
            font-size: 12pt;
            line-height: 1.5; /* Aumenta o espaçamento entre linhas */
        }

        main {
            width: 210mm;
            margin: 0 auto;
        }

        /* Estilo para cada página */
        .pagina {
            position: relative;
            width: 100%;
            height: 257mm; /* Altura da página A4 menos as margens (297mm - 2*20mm) */
            overflow: hidden;
            page-break-after: always;
            padding: 15mm; /* Aumenta o padding interno das páginas */
            box-sizing: border-box;
        }

        /* Evita quebras dentro dos elementos */
        .pagina, .pagina * {
            page-break-inside: avoid;
        }
        
        * {
            font-weight: bold;
        }

        /* Estilos para títulos e seções */
        h1, h2, h3, h4 {
            margin: 15px 0; /* Aumenta o espaçamento acima e abaixo dos títulos */
        }

        h1 {
            font-size: 24pt;
            color: #EC008B;
            text-align: center;
        }

        h2 {
            font-size: 18pt;
            text-align: center;
        }

        h3 {
            font-size: 18pt;
            text-align: center;
            color: #181368;
        }

        h4 {
            font-size: 12pt;
        }

        section {
            margin-bottom: 20px; /* Aumenta o espaçamento entre as seções */
        }

        /* Estilos para tabelas */
        table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px; /* Aumenta o espaço após cada tabela */
            border: 1px solid black; /* Borda externa leve */
        }

        th {
            background-color: #a9a9a9; /* Fundo leve para o cabeçalho */
            color: black; /* Cor do texto do cabeçalho */
            font-weight: bold;
            padding: 10px; /* Espaçamento interno no cabeçalho */
            border: 1px solid black; /* Borda leve */
            text-align: center;
        }

        td {
            padding: 10px; /* Aumenta o espaçamento interno das células */
            border: 1px solid black; /* Borda sutil para células */
            font-size: 12pt;
            text-align: left;
        }

        /* Alterna cor de fundo das linhas para melhor legibilidade */
        tr:nth-child(even) td {
            background-color: #f9f9f9;
        }

        /* Estilos para imagens */
        img {
            max-width: 100%;
            height: auto;
        }

        /* Ajusta a imagem para caber na página */
        .pagina-1 img {
            max-height: 70mm; /* Ajustado para caber com o espaçamento aumentado */
            display: block;
            margin: 0 auto;
        }

        /* Centraliza o nome do proprietário */
        .proprietario {
            text-align: center;
            color : #EC008B;
        }

        /* Estilos para o cabeçalho */
        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 20px; /* Aumenta o espaçamento abaixo do cabeçalho */
        }

        .left-contact, .right-contact {
            width: 25%; /* Ajuste conforme necessário */
            text-align: center;
            font-size: 12pt;
        }

        .logo-container {
            width: 50%; /* Ajuste conforme necessário */
            text-align: center;
        }

        .logo {
            max-height: 60px; /* Aumenta o tamanho do logo se necessário */
        }

        /* Estilos específicos para a página 3 */
        .pagina-3 {
            background-color: #f9f9f9; /* Fundo leve */
            padding: 20px; /* Padding extra para espaço ao redor do conteúdo */
            border-radius: 8px; /* Bordas arredondadas para a página */
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Sombra leve */
            font-size: 14pt; /* Aumenta o tamanho do texto para a página 3 */
        }

        /* Título de seção principal da página 3 */
        .pagina-3 h2 {
            color: #008000; /* Altera a cor do texto para verde */
            font-size: 22pt; /* Aumenta o tamanho do título */
            text-align: center;
            margin-bottom: 25px; /* Espaçamento inferior maior */
            padding: 10px; /* Adiciona espaçamento interno ao redor do texto */
            width: fit-content; /* Ajusta a largura ao tamanho do conteúdo */
            margin: 0 auto; /* Centraliza o título */
        }

        /* Estilos para o título "Parecer Geral da Vela" */
        .pagina-3 h3 {
            color: #010101; /* Cor de texto neutra */
            font-size: 18pt; /* Aumenta o tamanho do título */
            text-align: center;
            margin: 20px 0; /* Maior espaçamento */
        }

        /* Estilos para seções de avaliação */
        .pagina-3 section {
            background-color: #ffffff; /* Fundo branco para contraste */
            padding: 15px; /* Espaçamento interno */
            margin-bottom: 15px; /* Espaçamento inferior entre seções */
            border-radius: 8px; /* Bordas arredondadas */
            border: 2px solid black; /* Borda sutil */
        }

        /* Estilo para subitens de parecer */
        .pagina-3 h3 + h3 {
            margin-top: 20px; /* Espaçamento entre o texto verde e os itens abaixo */
        }

        /* Ajustes para impressão */
        @media print {
            body {
                margin: 0;
            }
            .pagina {
                margin: 0;
                box-shadow: none;
            }
            .pagina-3 {
                background-color: #fff;
                box-shadow: none;
                border: none;
            }
        }
    </style>
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            // Seleciona o elemento do título na página 3
            const titulo = document.querySelector(".pagina-3 h2");
            if (titulo) {
                // Obtém o texto antes do "-"
                const textoAntesDoHifen = titulo.textContent.split(" - ")[0];
                titulo.textContent = textoAntesDoHifen;
                
                // Define a cor com base no conteúdo
                if (textoAntesDoHifen.toLowerCase() === "usado, razoável estado" || textoAntesDoHifen.toLowerCase() === "muito usado" || textoAntesDoHifen.toLowerCase() === "não aconselhado voar") {
                    titulo.style.color = "red"; // Define como vermelho se "usado" ou "muito usado"
                } else {
                    titulo.style.color = "green"; // Define como verde para outros valores
                }
            }
        });
    </script>
</head>
<body>
    <main> 

        <!-- PAGINA 1 -->
        <div class="pagina pagina-1">

            <!-- Informações de contato e cabeçalho -->
            <div class="header">
                <div class="left-contact">
                    <h4>@ciadoar</h4>
                </div>
                <div class="logo-container">
                    <img src="${logo64}" alt="Logo" class="logo" />
                </div>
                <div class="right-contact">
                    <h4>(51) 98436-209</h4>
                </div>
            </div>

            <!-- Título principal -->
            <h1>LAUDO DE REVISÃO DE PARAPENTE</h1>

            <!-- Informações do proprietário -->
            <section>
                <div><h3>PROPRIETÁRIO</h3></div>
                <h3 class="proprietario">
                    ${data.proprietario}
                </h3>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Data</th>
                                <th>Endereço</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${formattedDate}</td>
                                <td>${data.cidade} - ${data.estado}</td>
                                <td>${data.telefone || ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Identificação da vela -->
            <section>
                <div><h3>IDENTIFICAÇÃO DA VELA</h3></div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Fábrica/Modelo</th>
                                <th>Nº de Série</th>
                                <th>Data de Fabricação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${data.fabrica || ''}</td>
                                <td>${data.serial || ''}</td>
                                <td>${data.dataDeFabricacao || ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Cor Bordo Ataque</th>
                                <th>Cor Intradorso</th>
                                <th>Cor Extradorso</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${data.corBordo || ''}</td>
                                <td>${data.corIntra || ''}</td>
                                <td>${data.corExtra || ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Identificação visual da vela -->
            <section>
                <div><h3>IDENTIFICAÇÃO VISUAL DA VELA</h3></div>
                <div>
                    <img src="${image64}" alt="Imagem da Vela" />
                </div>
            </section>
        </div>

        <!-- PAGINA 2 -->
        <div class="pagina pagina-2">

            <!-- Checagem de linhas -->
            <section>
                <div><h3>CHECAGEM DE LINHAS</h3></div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tirantes</th>
                                <th>Batoques e Argolas</th>
                                <th>Roldanas</th>
                                <th>Distorcedor</th>
                                <th>Carga nas Linhas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${data.checkTirantes || ''}</td>
                                <td>${data.batoquesArgolas || ''}</td>
                                <td>${data.roldanas || ''}</td>
                                <td>${data.distorcedor || ''}</td>
                                <td>${data.cargasNasLinhas || ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Troca de Linhas</th>
                                <th>Simetria e Trimagem</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>${data.trocaDeLinhas || ''}</td>
                                <td>${data.simetriaTrimagem || ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <!-- Checagem do tecido -->
            <section>
                <div><h3>CHECAGEM DO TECIDO</h3></div>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>Check do Perfil</td>
                                <td>${data.checkPerfilCosturas || ''}</td>
                            </tr>
                            <tr>
                                <td>Check do Intradorso</td>
                                <td>${data.checkIntradorso || ''}</td>
                            </tr>
                            <tr>
                                <td>Check do Bordo Ataque</td>
                                <td>${data.checkBordoAtaque || ''}</td>
                            </tr>
                            <tr>
                                <td>Check do Extradorso</td>
                                <td>${data.checkExtradorso || ''}</td>
                            </tr>
                            <tr>
                                <td>Teste de Resistência</td>
                                <td>${data.testeResistenciaTecido || ''}</td>
                            </tr>
                            <tr>
                                <td>Porosidade Bordo Ataque</td>
                                <td>${data.porosidadeBordoAtaque || ''}</td>
                            </tr>
                            <tr>
                                <td>Porosidade Intradorso</td>
                                <td>${data.porosidadeIntradorso || ''}</td>
                            </tr>
                            <tr>
                                <td>Porosidade Extradorso</td>
                                <td>${data.porosidadeExtradorso || ''}</td>
                            </tr>
                            <tr>
                                <td>Parecer Conforme Fabricante</td>
                                <td>${data.parecerDoTecidoFabricante || ''}</td>
                            </tr>
                            <tr>
                                <td>Observações</td>
                                <td>${data.observacoes || ''}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>

        <!-- PAGINA 3 -->
        <div class="pagina pagina-3">

            <!-- Parecer geral da vela -->
            <section>
                <div><h1>PARECER GERAL DA VELA</h1></div>
                <h2>${data.condicaoVela || ''}</h2>
                <div>
                    <h3>${optionsCondicao[0].value || ''}</h3>
                    <h3>${optionsCondicao[1].value || ''}</h3>
                    <h3>${optionsCondicao[2].value || ''}</h3>
                    <h3>${optionsCondicao[3].value || ''}</h3>
                    <h3>${optionsCondicao[4].value || ''}</h3>
                    <h3>${optionsCondicao[5].value || ''}</h3>
                </div>
            </section>
        </div>
    </main>
</body>
</html>
    `;

    try {
        const { uri } = await Print.printToFileAsync({
            html: htmlContent,
        });
        if (await Sharing.isAvailableAsync()) {
            await Sharing.shareAsync(uri);
        } else {
            Alert.alert('PDF Gerado', `PDF salvo em: ${uri}`);
        }
    } catch (error) {
        Alert.alert('Erro', 'Não foi possível gerar o PDF');
    }
};

