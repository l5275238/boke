var mysql= require('mysql');
var connection =mysql.createConnection({
  host :'106.14.153.16',
  user:'root',
  password:'123456',
  database:'blogs'

})
function Request() {
  connection.connect();
  this.findUse=function (callback) {
    connection.query('SELECT * FROM user', function (error,rows,fields) {
      if (error) throw error;
      callback(rows);
    });
  }
  this.updateUse=function (callback,name,text) {
    var sql="update user  set name= '"+name+"',text='"+text+"' where id = '1'"
    console.log(sql);
    connection.query(sql,function (error,rows,fields) {
      if (error) throw error;
      callback(rows);
    })
  }
  //添加文章
  this.addArticle=function (callback,text) {
    var sql="INSERT INTO Article (title,cateId, text ,data) VALUES ("+text+")";
    console.log(sql);
    connection.query(sql,function (error,rows,fields) {
      if (error) throw error;
      callback(rows);
    })
  }
  this.findText=function (callback) {
    connection.query('SELECT * FROM Article where id =2 ', function (error,rows,fields) {
      if (error) throw error;
      console.log(rows);
      callback(rows);
    });
  }
  //添加分类;
  this.addCategory=function (callback,text) {
    var sql="INSERT INTO category (text) VALUES('"+text+"')";
    connection.query(sql,function (error,rows,fields) {
      if (error) throw error;
      callback(rows)
    })
  }
    //获取分类列表
  this.findCategory=function (callback) {
    var sql="SELECT * FROM category"
    connection.query(sql,function (error,rows,fields) {
      console.log(rows);
      if (error) throw error;
      callback(rows)
    })

  }

}

module.exports = new Request();

