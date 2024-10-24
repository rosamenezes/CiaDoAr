export interface FormData {
    image: string;
    condicaoVela: string;
    data: Date;
    proprietario: string;
    telefone: string;
    cidade: string;
    estado: string;
    fabrica: string;
    modelo: string;
    serial: string;
    dataDeFabricacao: string;
    corBordo: string;
    corExtra: string;
    corIntra: string;
    checkTirantes: string;
    batoquesArgolas: string;
    argolas: string;
    distorcedor: string;
    roldanas: string;
    cargasNasLinhas: string;
    trocaDeLinhas: string;
    simetriaTrimagem: string;
    corte: string;
    checkPerfilCosturas: string;
    checkIntradorso: string;
    checkBordoAtaque: string;
    checkExtradorso: string;
    testeResistenciaTecido: string;
    porosidadeBordoAtaque: string;
    porosidadeExtradorso: string;
    porosidadeIntradorso: string;
    parecerDoTecidoFabricante: string;
    observacoes: string;
}

export const formFields = [
  { name: "data", label: "Data", placeholder: "Data" },
  { name: "proprietario", label: "Proprietário", placeholder: "Proprietário" },
  { name: "telefone", label: "Telefone", placeholder: "Telefone" },
  { name: "cidade", label: "Cidade", placeholder: "Cidade" },
  { name: "estado", label: "Estado", placeholder: "Estado" },
  { name: "fabrica", label: "Fábrica", placeholder: "Fábrica" },
  { name: "modelo", label: "Modelo", placeholder: "Modelo" },
  { name: "serial", label: "Serial", placeholder: "Serial" },
  { name: "dataDeFabricacao", label: "Data de Fabricação", placeholder: "Data de Fabricação" },
  { name: "corBordo", label: "Cor Bordo", placeholder: "Cor Bordo" },
  { name: "corExtra", label: "Cor Extra", placeholder: "Cor Extra" },
  { name: "corIntra", label: "Cor Intra", placeholder: "Cor Intra" },
  { name: "checkTirantes", label: "Check Tirantes", placeholder: "Check Tirantes" },
  { name: "batoquesEArgolas", label: "Batoques e Argolas", placeholder: "Batoques e Argolas" },
  { name: "argolas", label: "Argolas", placeholder: "Argolas" },
  { name: "distorcedor", label: "Distorcedor", placeholder: "Distorcedor" },
  { name: "roldanas", label: "Roldanas", placeholder: "Roldanas" },
  { name: "cargaNasLinhas", label: "Carga nas Linhas", placeholder: "Carga nas Linhas" },
  { name: "trocaDeLinhas", label: "Troca de Linhas", placeholder: "Troca de Linhas" },
  { name: "simetriaTrimagem", label: "Simetria e Trimagem", placeholder: "Simetria e Trimagem" },
  { name: "corte", label: "Corte", placeholder: "Corte" },
  { name: "checkPerfilCosturas", label: "Check Perfil e Costuras", placeholder: "Check Perfil e Costuras" },
  { name: "checkIntradorso", label: "Check Intradorso", placeholder: "Check Intradorso" },
  { name: "checkBordoAtaque", label: "Check Bordo Ataque", placeholder: "Check Bordo Ataque" },
  { name: "checkExtradorso", label: "Check Extradorso", placeholder: "Check Extradorso" },
  { name: "testeResistenciaTecido", label: "Teste Resistência Tecido", placeholder: "Teste Resistência Tecido" },
  { name: "porosidadeBordoAtaque", label: "Porosidade Bordo Ataque", placeholder: "Porosidade Bordo Ataque" },
  { name: "porosidadeExtradorso", label: "Porosidade Extradorso", placeholder: "Porosidade Extradorso" },
  { name: "porosidadeIntradorso", label: "Porosidade Intradorso", placeholder: "Porosidade Intradorso" },
  { name: "parecerDoTecidoFabricante", label: "Parecer do Tecido (Fabricante)", placeholder: "Parecer do Tecido (Fabricante)" },
  { name: "observacoes", label: "Observação", placeholder: "Observação" },
];

export const optionsCondicao = [
  { label: 'Ótimo estado - Revisar a cada 100h ou 1 ano', value: 'Ótimo estado - Revisar a cada 100h ou 1 ano' },
  { label: 'Muito bom - Revisar a cada 100h ou 1 ano', value: 'Muito bom - Revisar a cada 100h ou 1 ano' },
  { label: 'Usado, bom estado - Revisar a cada 100h ou 1 ano', value: 'Usado, bom estado - Revisar a cada 100h ou 1 ano' },
  { label: 'Usado, razoável estado - Revisar a cada 50h ou 6 meses', value: 'Usado, razoável estado - Revisar a cada 50h ou 6 meses' },
  { label: 'Muito usado - Revisar a cada 50h ou 6 meses', value: 'Muito usado - Revisar a cada 50h ou 6 meses' },
  { label: 'Não aconselhado voar - Equipamento condenado', value: 'Não aconselhado voar - Equipamento condenado' },
];