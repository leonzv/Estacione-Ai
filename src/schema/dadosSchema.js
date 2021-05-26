export default class dadosSchema {
    static schema = {
      name: 'Dados',
      primaryKey: 'id',
      properties: {
        id: { type: 'int', indexed: true },
        name: 'string',
        email: 'string',
        senha: 'string',
        cidade: 'string',
        estado: 'string',
        pais: 'string',
        endereco: 'string',
        cpfcnpj: 'int',
        numero: 'int',
        cep: 'int',        
      },
    };
  }