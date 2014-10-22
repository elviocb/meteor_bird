//limpa todas as chaves evitando que haja usuarios duplicados
ServiceConfiguration.configurations.remove({});

//configura e autentica nosso app com o app no facebook
ServiceConfiguration.configurations.insert({
	service: 'facebook',
	appId: '1496795390604516',
	secret: 'eedeca1694367ea2f1d3c5be293a0dfe'
});