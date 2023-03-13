'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  await queryInterface.createTable('posts_categories', {
    postId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'post_id',
      primaryKey: true,
      references: {
        model: 'blog_posts',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    },
    categoryId: {
      allowNull: false,
      type: Sequelize.INTEGER,
      field: 'category_id', 
      primaryKey: true,
      references: {
        model: 'categories',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }
  });
  },

  down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('posts_categories');
  }
};
