module.exports = {
    description: 'add ambienx bower package',

    normalizeEntityName() {
    },

    afterInstall() {
        return this.addBowerPackageToProject('ambienx', '*');
    }

};
