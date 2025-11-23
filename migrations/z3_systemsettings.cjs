exports.up = function(knex) {
  return knex.schema.createTable('payments', function(table) {

    table.engine('InnoDB'); // önemli

    table.increments('id').primary();

    table.integer('user_id')
      .unsigned() // 🔥 EN KRİTİK KISIM
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE');

    table.integer('amount');
    table.string('type');
    table.string('status').defaultTo('0');

    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('payments');
};
