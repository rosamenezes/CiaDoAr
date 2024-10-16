export interface FormData {
    image: string;
    condicaoVela: string;
    data: string;
    proprietario: string;
    Telefone: string;
    Cidade: string;
    Estado: string;
    Fabrica: string;
    Modelo: string;
    Serial: string;
    DataDeFabricação: string;
    CorBordo: string;
    CorExtra: string;
    CorIntra: string;
    CheckTirantes: string;
    BatoquesArgolas: string;
    Argolas: string;
    Distorcedor: string;
    Roldanas: string;
    CargasNasLinhas: string;
    TrocaDeLinhas: string;
    SimetriaETrimagem: string;
    Corte: string;
    CheckPerfilCosturas: string;
    CheckIntradorso: string;
    CheckBordoAtaque: string;
    CheckExtradorso: string;
    TesteResistenciaTecido: string;
    PorosidadeBordoAtaque: string;
    PorosidadeExtradorso: string;
    PorosidadeIntradorso: string;
    ParecerDoTecidoFabricante: string;
    Observação: string;
}

export const formFields = [
    { name: "data", label: "Data", placeholder: "Data" },
    { name: "proprietario", label: "Proprietário", placeholder: "Proprietário" },
    { name: "Telefone", label: "Telefone", placeholder: "Telefone" },
    { name: "Cidade", label: "Cidade", placeholder: "Cidade" },
    { name: "Estado", label: "Estado", placeholder: "Estado" },
    { name: "Fabrica", label: "Fabrica", placeholder: "Fabrica" },
    { name: "Modelo", label: "Modelo", placeholder: "Modelo" },
    { name: "Serial", label: "Serial", placeholder: "Serial" },
    { name: "Data de fabricação", label: "Data de fabricação", placeholder: "Data de fabricação" },
    { name: "Cor Bordo", label: "Cor Bordo", placeholder: "Cor Bordo" },
    { name: "Cor Extra", label: "Cor Extra", placeholder: "Cor Extra" },
    { name: "Cor Intra", label: "Cor Intra", placeholder: "Cor Intra" },
    { name: "Check Tirantes", label: "Check Tirantes", placeholder: "Check Tirantes" },
    { name: "Batoques e Argolas", label: "Batoques e Argolas", placeholder: "Batoques e Argolas" },
    { name: "Argolas", label: "Argolas", placeholder: "Argolas" },
    { name: "Distorcedor", label: "Distorcedor", placeholder: "Distorcedor" },
    { name: "Roldanas", label: "Roldanas", placeholder: "Roldanas" },
    { name: "Carga nas Linhas", label: "Carga nas Linhas", placeholder: "Carga nas Linhas" },
    { name: "Troca de linhas", label: "Troca de linhas", placeholder: "Troca de linhas" },
    { name: "Simetria e Trimagem", label: "Simetria e Trimagem", placeholder: "Simetria e Trimagem" },
    { name: "Corte", label: "Corte", placeholder: "Corte" },
    { name: "Check Perfil e Costuras", label: "Check Perfil e Costuras", placeholder: "Check Perfil e Costuras" },
    { name: "Check Intradorso", label: "Check Intradorso", placeholder: "Check Intradorso" },
    { name: "Check Bordo Ataque", label: "Check Bordo Ataque", placeholder: "Check Bordo Ataque" },
    { name: "Check Extradorso", label: "Check Extradorso", placeholder: "Check Extradorso" },
    { name: "Teste Resistencia tecido", label: "Teste Resistencia tecido", placeholder: "Teste Resistencia tecido" },
    { name: "Porosidade bordo ataque", label: "Porosidade bordo ataque", placeholder: "Porosidade bordo ataque" },
    { name: "Porosidade Extradorso", label: "Porosidade Extradorso", placeholder: "Porosidade Extradorso" },
    { name: "Porosidade Intradorso", label: "Porosidade Intradorso", placeholder: "Porosidade Intradorso" },
    { name: "Parecer do Tecido (fabricante)", label: "Parecer do Tecido (fabricante)", placeholder: "Parecer do Tecido (fabricante)" },
    { name: "Observação", label: "Observação", placeholder: "Observação" },
];

export const optionsCondicao = [
  { label: 'Ótimo estado - Revisar a cada 100h ou 1 ano', value: 'Ótimo estado - Revisar a cada 100h ou 1 ano' },
  { label: 'Muito bom - Revisar a cada 100h ou 1 ano', value: 'Muito bom - Revisar a cada 100h ou 1 ano' },
  { label: 'Usado, bom estado - Revisar a cada 100h ou 1 ano', value: 'Usado, bom estado - Revisar a cada 100h ou 1 ano' },
  { label: 'Usado, razoável estado - Revisar a cada 50h ou 6 meses', value: 'Usado, razoável estado - Revisar a cada 50h ou 6 meses' },
  { label: 'Muito usado - Revisar a cada 50h ou 6 meses', value: 'Muito usado - Revisar a cada 50h ou 6 meses' },
  { label: 'Não aconselhado voar - Equipamento condenado', value: 'Não aconselhado voar - Equipamento condenado' },
];