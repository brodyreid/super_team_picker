
exports.up = function(knex) {
  return knex.schema.createTable('cohorts', t => {
      t.bigIncrements('id')
      t.string('logo')
      t.string('name')
      t.text('members')
      t.timestamp('createdAt')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('cohorts')
};
