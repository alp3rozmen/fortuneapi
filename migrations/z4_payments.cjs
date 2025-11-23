exports.up = function(knex) {
  return knex.schema.createTable('payments', function(table) {

    table.engine('InnoDB'); // important

    table.increments('id').primary();

    table.integer('user_id')
      .unsigned()
      .notNullable()
      .comment('istek yapan kullanıcı idsi')
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.integer('amount').comment('istenen miktar');
    table.string('type').comment('tip 1 bakiye yükleme');
    table.string('status')
      .comment('durum 0 beklemede 1 tamamlandı 2 iptal edildi')
      .defaultTo('0');

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('payments');
};
