const ArticleModel = require('models/article');

const getList = async () => {
  const docs = await ArticleModel.find();
  const list = docs.map((doc) => {
    return doc.toObject({ getters: true, virtuals: true });
  });
  console.log(list);
  return list;
};

const create = async (title, content) => {
  const doc = new ArticleModel({ title, content });
  await doc.save();
  
  return doc.id;
};
/* 
const findById = async (id) => {

};
 */
module.exports.getList = getList;
module.exports.create = create;
