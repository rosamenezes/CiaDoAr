import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';
import { Alert } from 'react-native';
import { FormData } from '../assets/mocks/mocks';
import logo from '../assets/images/logo.jpeg';
import { format } from 'date-fns';
import { optionsCondicao } from '../assets/mocks/mocks';

export const generatePDF = async (data: FormData) => {
    const formattedDate = data.data ? format(data.data, 'dd/MM/yyyy') : '';

    const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <title>Título do Documento</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                margin: 40px;
            }
            header, footer {
                text-align: center;
                margin: 20px 0;
            }
            main {
                text-align: center;
                min-height: 500px;
            }
            .header-content {
                display: flex;
                justify-content: space-between;
            }
            .title-table {
                background-color: #d9d9d9;
                border-radius: 4px;
                width: 100%;
                height: auto;
                padding: 10px;
            }
            table {
                width: 100%;
                border-spacing: 0;
                border: 0.1px solid #000;
            }
            th, td {
                border: 0.1px solid #000;
                text-align: center;
                padding: 10px;
            }
            th {
                background-color: #f0f0f0;
                font-weight: bold;
            }
            h1 {
                font-size: 24px;
            }
            .image-vela img {
                width: 50%;
                height: auto;
                display: block;
                margin: 0 auto;
            }
        </style>
    </head>
    <body>
        <header>
            <div class="header-content">
                <h4>@ciadoar</h4>
                <img src="${logo}" alt="Logo" style="width: 100px; height: auto;"/>
                <h4>(51)98436209</h4>
            </div>
            <div style="background-color:#000000; height:1px; width:100%;"/>
        </header>
        <main>
            <div>
            <h1>LAUDO DE REVISÃO DE PARAPENTE</h1>
            <div class="proprietario-div">
                <div class="title-table">
                    <h3>PROPRIETÁRIO</h3>
                </div>
                    <h3>${data.proprietario}</h3>
                <div class="table">
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
            </div>
            <div>
                <div class="title-table">
                    <h3>IDENTIFICAÇÃO DA VELA</h3>
                </div>
                <div class="table">
                    <table>
                        <thead>
                            <tr>
                                <th>Fabrica/Modelo</th>
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
                <div class="table" style="padding-top: 10px">
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
                <div class="title-table">
                    <h3>IDENTIFICAÇÃO VISUAL DA VELA</h3>
                </div>
                <div class="image-vela">
                    <img src="${data.image}" alt="Imagem da Vela" style="width: 50%; height: auto; display: block; margin: 0 auto;"/>
                </div>
            </div>
            </div/>
            <div class="title-table">
                <h3>CHECAGEM DE LINHAS</h3>
                <div class="table">
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
                <div class="table">
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
                <div/>
            </div>
            <div class="title-table">
                <h3>CHECAGEM DO TECIDO</h3>
                <div class="table">
                <table border="1">
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
                </table>
                </div>
            </div>
            <div class="title-table">
                <h3>PARECER GERAL DA VELA</h3>
                <h2>${data.condicaoVela || ''}</h2>
            </div>
            <div>
                <h3>${optionsCondicao[0].value || ''}</h3>
                <h3>${optionsCondicao[1].value || ''}</h3>
                <h3>${optionsCondicao[2].value || ''}</h3>
                <h3>${optionsCondicao[3].value || ''}</h3>
                <h3>${optionsCondicao[4].value || ''}</h3>
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
