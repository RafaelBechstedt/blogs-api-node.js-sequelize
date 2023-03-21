module.exports = (sequelize, DataTypes) => {
  const CategoryModel = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
  },
  {
    tableName: 'categories',
    timestamps: false,
    underscored: true,
  })
  return CategoryModel
};