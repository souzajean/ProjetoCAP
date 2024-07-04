const cds = require('@sap/cds');
const fs = require('fs');
const path = require('path');

module.exports = cds.service.impl(async function() {
  const { Parceiros, Produtos } = this.entities;

  this.after('READ', Parceiros, (each) => {
    each.nome = each.nome + " (from JSON)";
  });

  this.on('READ', Parceiros, async () => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/data.json')));
    return data.Parceiros;
  });

  this.on('READ', Produtos, async () => {
    const data = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/data.json')));
    return data.Produtos;
  });
});
