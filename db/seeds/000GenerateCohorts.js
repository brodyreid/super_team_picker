
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        {logo: 'https://cdn.vox-cdn.com/thumbor/CexhcehAySOA0oPg58r3H_3VVYQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16019170/Mike_Sulley_Boo_monsters_inc.jpg', name: 'Top Scarers', members: 'Sulley, Mike, Randall'},
        {logo: 'https://static.wikia.nocookie.net/disney/images/9/9a/Profile_-_CDA.jpg/revision/latest?cb=20190720064830', name: 'Employees', members: 'Waternoose, Celia, Roz'},
        {logo: 'https://static01.nyt.com/images/2013/06/16/arts/16MONSTER_SPAN/16MONSTER_SPAN-superJumbo.jpg', name: 'Assorted', members: 'Boo, Abominable, Hardscrabble'},
      ]);
    });
};
