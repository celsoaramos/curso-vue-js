export default {
	computed: {
		nomePorVirgulaMixin() {
			return this.nome.split(' ').join(',')
		},

		fraseTamanhoMixin() {
			return this.nome.split(' ').map(p => `${p} (${p.length})`).join(' ')
		},
	}
}