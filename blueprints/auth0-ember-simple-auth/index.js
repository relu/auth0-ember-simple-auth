module.exports = {
  normalizeEntityName: function() {
  },

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'auth0-lock',             target: '^10.12.3'  },
      { name: 'jsrsasign',              target: '^5.0.1'  }
    ]);
  }
};
