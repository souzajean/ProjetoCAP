service CatalogService {
    entity Parceiros {
        key ID : UUID;
        nome  : String;
    }
    entity Produtos {
        key ID : UUID;
        nome      : String;
        valor     : Decimal(10,2);
        parceiro  : Association to Parceiros;
    }
}
